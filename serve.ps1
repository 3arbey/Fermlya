# Simple PowerShell HTTP Server for local static preview
param([int]$Port = 8080)

$Httplistener = New-Object System.Net.HttpListener
$Prefix = "http://localhost:$Port/"
$Httplistener.Prefixes.Add($Prefix)

try {
    $Httplistener.Start()
    Write-Host "==========================================================" -ForegroundColor Green
    Write-Host " 🚀 Fermlya Preview Server Running At: $Prefix" -ForegroundColor Cyan
    Write-Host " Press Ctrl+C in terminal to stop." -ForegroundColor Yellow
    Write-Host "==========================================================" -ForegroundColor Green

    # Open default browser
    Start-Process $Prefix

    while ($Httplistener.IsListening) {
        $Context = $Httplistener.GetContext()
        $Request = $Context.Request
        $Response = $Context.Response

        $UrlPath = $Request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrWhiteSpace($UrlPath)) { $UrlPath = "index.html" }

        $FilePath = Join-Path (Get-Location) $UrlPath

        if (Test-Path $FilePath -PathType Leaf) {
            $Bytes = [System.IO.File]::ReadAllBytes($FilePath)
            
            # Set content types
            if ($FilePath.EndsWith(".html")) { $Response.ContentType = "text/html; charset=utf-8" }
            elseif ($FilePath.EndsWith(".css")) { $Response.ContentType = "text/css" }
            elseif ($FilePath.EndsWith(".js")) { $Response.ContentType = "application/javascript" }
            elseif ($FilePath.EndsWith(".json")) { $Response.ContentType = "application/json" }
            elseif ($FilePath.EndsWith(".png")) { $Response.ContentType = "image/png" }
            elseif ($FilePath.EndsWith(".jpg")) { $Response.ContentType = "image/jpeg" }

            $Response.ContentLength64 = $Bytes.Length
            $Response.OutputStream.Write($Bytes, 0, $Bytes.Length)
        } else {
            $Response.StatusCode = 404
            $Buffer = [System.Text.Encoding]::UTF8.GetBytes("404 - Not Found")
            $Response.ContentLength64 = $Buffer.Length
            $Response.OutputStream.Write($Buffer, 0, $Buffer.Length)
        }

        $Response.Close()
    }
} catch {
    Write-Host "Server stopped: $_" -ForegroundColor Red
} finally {
    if ($Httplistener.IsListening) { $Httplistener.Stop() }
}
