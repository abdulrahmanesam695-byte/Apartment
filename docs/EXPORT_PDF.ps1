$chromeCandidates = @(
  "C:\Program Files\Google\Chrome\Application\chrome.exe",
  "C:\Users\TM012\AppData\Local\Google\Chrome\Application\chrome.exe"
)

$chromePath = $chromeCandidates | Where-Object { Test-Path $_ } | Select-Object -First 1

if (-not $chromePath) {
  Write-Error "Google Chrome was not found. Please install Chrome first."
  exit 1
}

$htmlPath = Join-Path $PSScriptRoot "PROJECT_PRESENTATION_AR.html"
$pdfPath = Join-Path $PSScriptRoot "PROJECT_PRESENTATION_AR.pdf"
$htmlUri = "file:///" + ($htmlPath -replace "\\", "/")

& $chromePath --headless=new --disable-gpu --allow-file-access-from-files --print-to-pdf="$pdfPath" "$htmlUri"

if (Test-Path $pdfPath) {
  Write-Host "PDF exported successfully:"
  Write-Host $pdfPath
} else {
  Write-Error "PDF export failed."
  exit 1
}
