# Save this as download-images.ps1 and run it

# Create all required directories
$directories = @(
    "public\images\hero",
    "public\images\services", 
    "public\images\projects",
    "public\images\team",
    "public\images\certifications",
    "public\images\partners"
)

foreach ($dir in $directories) {
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
    }
}

# URLs for free engineering images (from Unsplash)
$imageUrls = @{
    # Hero Images (1920x1080)
    "public\images\hero\engineering.jpg" = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop&auto=format"
    "public\images\hero\construction.jpg" = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop&auto=format"
    "public\images\hero\heritage.jpg" = "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?w=1920&h=1080&fit=crop&auto=format"
    "public\images\hero\projects.jpg" = "https://images.unsplash.com/photo-1487956382158-bb926046304a?w=1920&h=1080&fit=crop&auto=format"
    
    # Service Images (800x600)
    "public\images\services\structural.jpg" = "https://images.unsplash.com/photo-1503387769-00a112127ca0?w=800&h=600&fit=crop&auto=format"
    "public\images\services\audit.jpg" = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&auto=format"
    "public\images\services\heritage.jpg" = "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800&h=600&fit=crop&auto=format"
    "public\images\services\management.jpg" = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&auto=format"
    "public\images\services\supervision.jpg" = "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=800&h=600&fit=crop&auto=format"
    "public\images\services\retrofitting.jpg" = "https://images.unsplash.com/photo-1507208773393-40d9fc670acf?w=800&h=600&fit=crop&auto=format"
    
    # Team Images (400x400)
    "public\images\team\ceo.jpg" = "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&auto=format"
    "public\images\team\director.jpg" = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format"
    "public\images\team\engineer1.jpg" = "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&h=400&fit=crop&auto=format"
    "public\images\team\engineer2.jpg" = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&auto=format"
    
    # Certification Images
    "public\images\certifications\iso.jpg" = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format"
}

Write-Host "Downloading images..." -ForegroundColor Yellow

# Download each image (requires internet)
foreach ($path in $imageUrls.Keys) {
    $url = $imageUrls[$path]
    Write-Host "Downloading: $(Split-Path $path -Leaf)" -ForegroundColor Cyan
    
    try {
        # Using Invoke-WebRequest to download images
        Invoke-WebRequest -Uri $url -OutFile $path -ErrorAction Stop
        Write-Host "  ✓ Downloaded" -ForegroundColor Green
    } catch {
        Write-Host "  ✗ Failed to download: $_" -ForegroundColor Red
        # Create a colored placeholder instead
        $color = "gray"
        if ($path -match "structural") { $color = "blue" }
        elseif ($path -match "audit") { $color = "green" }
        elseif ($path -match "heritage") { $color = "amber" }
        
        # Create a simple HTML file that shows colored placeholder
        @"
<!DOCTYPE html>
<html>
<head>
    <style>
        body { margin: 0; padding: 0; background: $color; }
        .placeholder { 
            width: 100vw; height: 100vh; 
            display: flex; align-items: center; justify-content: center;
            color: white; font-family: Arial; font-size: 24px;
        }
    </style>
</head>
<body>
    <div class="placeholder">
        $(Split-Path $path -Leaf) - Placeholder
    </div>
</body>
</html>
"@ | Out-File "$path.html" -Encoding UTF8
        Write-Host "  Created HTML placeholder instead" -ForegroundColor Yellow
    }
}

Write-Host "`n=== IMPORTANT ===" -ForegroundColor Green
Write-Host "1. Some images may fail to download due to Unsplash restrictions" -ForegroundColor Yellow
Write-Host "2. For actual project images, use your own photos in:" -ForegroundColor White
Write-Host "   - public\images\projects\" -ForegroundColor Cyan
Write-Host "3. Replace placeholder team photos with actual team members" -ForegroundColor Cyan
Write-Host "4. Make sure logo.jpg is your actual company logo" -ForegroundColor Red
