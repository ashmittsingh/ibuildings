import os
import json
from pathlib import Path
from backend.storage.s3_adapter import S3Adapter

"""
Simple migration helper: uploads files under `backend_storage` into configured S3 bucket
and updates `projects_index.json` replacing local file paths with S3 keys (adds `s3_url`).

Usage:
    python -m backend.tools.migrate_to_s3 --dry-run
    python -m backend.tools.migrate_to_s3

Environment variables required for S3Adapter (as used in adapter factory):
  IBUILDINGS_S3_BUCKET, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, IBUILDINGS_S3_PREFIX

This script is opinionated for the project's local layout; review before running in production.
"""

import argparse
import logging

logger = logging.getLogger('migrate_to_s3')
logging.basicConfig(level=logging.INFO)


def load_index(index_path: Path):
    if not index_path.exists():
        logger.error('projects_index.json not found at %s', index_path)
        return None
    return json.loads(index_path.read_text())


def save_index(index_path: Path, data):
    index_path.write_text(json.dumps(data, indent=2))


def collect_files_for_project(base: Path, project_entry: dict):
    # project_entry expected to contain references to input/output/pdf under 'files' or legacy paths
    candidates = []
    # check common keys
    for k in ('input_path', 'output_path', 'pdf_path'):
        if k in project_entry:
            candidates.append((k, Path(project_entry[k])))
    # also check nested 'files'
    for k, v in project_entry.get('files', {}).items():
        candidates.append((f'files.{k}', Path(v)))
    # filter to existing under base
    return [(k, p) for k, p in candidates if p.exists()]


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--storage-dir', default='backend_storage', help='Local storage dir')
    parser.add_argument('--dry-run', action='store_true')
    args = parser.parse_args()

    storage_dir = Path(args.storage_dir)
    index_path = storage_dir / 'projects_index.json'
    index = load_index(index_path)
    if index is None:
        return

    # create S3 adapter from env
    adapter = S3Adapter.from_env()

    updated = False
    for project_code, entry in index.items():
        files = collect_files_for_project(storage_dir, entry)
        if not files:
            logger.info('No files for project %s', project_code)
            continue
        for key_name, path in files:
            rel = path.relative_to(storage_dir).as_posix()
            s3_key = f"{project_code}/{rel}"
            logger.info('Uploading %s -> s3://%s/%s', path, adapter.bucket, s3_key)
            if not args.dry_run:
                adapter.upload_file(str(path), s3_key)
                # add s3 metadata to index
                meta_key = key_name + '_s3'
                entry[meta_key] = {
                    'bucket': adapter.bucket,
                    'key': s3_key,
                    's3_url': f's3://{adapter.bucket}/{s3_key}'
                }
                updated = True

    if updated and not args.dry_run:
        save_index(index_path, index)
        logger.info('Updated index saved to %s', index_path)
    elif args.dry_run:
        logger.info('Dry run finished. No changes written.')


if __name__ == '__main__':
    main()
