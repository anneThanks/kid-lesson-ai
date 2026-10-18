@echo off
chcp 65001 >nul
title KID-LESSON AI - Truong Mam Non Phuc Son B
echo ================================================================
echo   ĐANG KHỞI ĐỘNG ỨNG DỤNG KID-LESSON AI...
echo   Trợ Lý Soạn Giáo Án Điện Tử & Kho Học Liệu Số Mầm Non
echo   Giải Thưởng Tiên Phong AI Trong Giáo Dục Việt Nam 2026
echo ================================================================
echo.
echo Đang mở máy chủ và ứng dụng trên trình duyệt web...
python server.py
if %ERRORLEVEL% NEQ 0 (
    echo Không tìm thấy Python, đang mở trực tiếp file HTML trên trình duyệt...
    start index.html
)
pause
