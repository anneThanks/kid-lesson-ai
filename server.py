import http.server
import webbrowser
import os
import sys
import socket
import urllib.request
import urllib.parse

# Đảm bảo mã hóa UTF-8 trên Windows console
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

PORT = 8082
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

def get_local_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return "127.0.0.1"

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def generate_qr(url):
    try:
        qr_api = f"https://api.qrserver.com/v1/create-qr-code/?size=600x600&data={urllib.parse.quote(url)}"
        out_file = os.path.join(DIRECTORY, "QR_Code_KID_LESSON_AI.png")
        urllib.request.urlretrieve(qr_api, out_file)
        print(f"  [OK] Đã tạo mã QR Code tại: {out_file}")
    except Exception as e:
        print(f"  [!] Lưu ý khi tạo QR: {e}")

def run():
    os.chdir(DIRECTORY)
    local_ip = get_local_ip()
    local_url = f"http://localhost:{PORT}/index.html"
    lan_url = f"http://{local_ip}:{PORT}/index.html"

    print("=" * 68)
    print("  📚 KID-LESSON AI: TRỢ LÝ SOẠN GIÁO ÁN & KHO HỌC LIỆU SỐ MẦM NON")
    print("  Trường Mầm Non Phúc Sơn B - Bảng A (Bộ GD&ĐT & ĐH RMIT 2026)")
    print("=" * 68)
    print(f"  💻 Trên Máy Tính:    {local_url}")
    print(f"  📱 Trên Điện Thoại:  {lan_url} (Chung Wi-Fi trường học)")
    print("-" * 68)
    print("  Đang khởi tạo mã QR Code kết nối...")
    generate_qr(lan_url)
    print("=" * 68)
    print("  Đang mở ứng dụng trên trình duyệt web...")
    
    webbrowser.open(local_url)

    # Thử mở cổng đa luồng (ThreadingHTTPServer)
    selected_port = PORT
    httpd = None
    for p in [PORT, 8083, 8084, 8085]:
        try:
            httpd = http.server.ThreadingHTTPServer(("0.0.0.0", p), Handler)
            selected_port = p
            break
        except OSError:
            continue

    if not httpd:
        print("  [!] Không thể mở cổng mạng.")
        return

    print(f"  [OK] Máy chủ đa luồng KID-LESSON AI đang phục vụ trên cổng {selected_port}...")
    print("  Nhấn Ctrl+C để dừng máy chủ.")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n  Đã dừng máy chủ.")

if __name__ == "__main__":
    run()
