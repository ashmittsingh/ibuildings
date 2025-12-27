import os
from pathlib import Path
from typing import Dict

try:
    import boto3
    from botocore.exceptions import BotoCoreError, ClientError
except Exception:
    boto3 = None


class S3Adapter:
    def __init__(self):
        if boto3 is None:
            raise RuntimeError('boto3 is required for S3Adapter but is not installed')
        self.bucket = os.environ.get('IBUILDINGS_S3_BUCKET')
        self.prefix = os.environ.get('IBUILDINGS_S3_PREFIX', '')
        self.s3 = boto3.client(
            's3',
            aws_access_key_id=os.environ.get('AWS_ACCESS_KEY_ID'),
            aws_secret_access_key=os.environ.get('AWS_SECRET_ACCESS_KEY'),
            region_name=os.environ.get('AWS_REGION')
        )
        if not self.bucket:
            raise RuntimeError('IBUILDINGS_S3_BUCKET is not configured')

    def upload_bytes(self, key: str, data: bytes, content_type: str = 'application/octet-stream') -> Dict:
        s3_key = f"{self.prefix.rstrip('/')}/{key}".lstrip('/')
        try:
            self.s3.put_object(Bucket=self.bucket, Key=s3_key, Body=data, ContentType=content_type)
            return { 'bucket': self.bucket, 'key': s3_key, 'url': f's3://{self.bucket}/{s3_key}' }
        except (BotoCoreError, ClientError) as e:
            raise

    def upload_file(self, local_path: str, key: str) -> Dict:
        s3_key = f"{self.prefix.rstrip('/')}/{key}".lstrip('/')
        try:
            self.s3.upload_file(local_path, self.bucket, s3_key)
            return { 'bucket': self.bucket, 'key': s3_key, 'url': f's3://{self.bucket}/{s3_key}' }
        except (BotoCoreError, ClientError) as e:
            raise

    def generate_presigned_url(self, key: str, expires_in: int = 3600) -> str:
        s3_key = f"{self.prefix.rstrip('/')}/{key}".lstrip('/')
        try:
            url = self.s3.generate_presigned_url(
                'get_object',
                Params={'Bucket': self.bucket, 'Key': s3_key},
                ExpiresIn=expires_in
            )
            return url
        except (BotoCoreError, ClientError) as e:
            raise

    @classmethod
    def from_env(cls):
        return cls()
