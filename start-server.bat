@echo off
cd /d "%~dp0"
echo QazTU server starting...
echo Open: http://localhost:8080/login.html
echo Press Ctrl+C to stop.
python -m http.server 8080
pause
