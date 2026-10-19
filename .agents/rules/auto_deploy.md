# Auto Deploy to GitHub Pages

Mỗi khi hoàn thành một task chỉnh sửa hoặc bổ sung tính năng cho dự án:
1. Kiểm tra cú pháp/chất lượng code.
2. Commit các thay đổi với message mô tả rõ ràng.
3. Đẩy lên nhánh `main` và nhánh `gh-pages` của GitHub:
   ```bash
   git push origin main
   git push origin main:gh-pages
   ```
