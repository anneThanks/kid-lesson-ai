# -*- coding: utf-8 -*-
"""
Script tạo Poster Khoa Học Dự Án KID-LESSON AI 2026
Chuẩn kích thước Canva: Rộng 76,5 cm x Cao 86,5 cm
Bố cục 3 cột cân đối hoàn hảo, triệt tiêu khoảng trống góc dưới bên trái,
khoảng cách thoáng đãng, chữ to rõ ràng, không bị dính sát nhau.
Nội dung trích xuất 100% từ file PDF mẫu slide (không thêm, không bớt).
"""

import os
import sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

from pptx import Presentation
from pptx.util import Cm, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE

def build_poster(filename="Poster_KID_LESSON_AI_A0.pptx"):
    prs = Presentation()
    # Kích thước chuẩn Canva: r: 76.5 cm, c: 86.5 cm
    prs.slide_width = Cm(76.5)
    prs.slide_height = Cm(86.5)
    blank_layout = prs.slide_layouts[6]
    slide = prs.slides.add_slide(blank_layout)

    # Bảng màu chủ đạo
    C_BG = RGBColor(248, 250, 252)          # Slate 50
    C_HEADER_BG = RGBColor(30, 27, 75)      # Indigo 950
    C_WHITE = RGBColor(255, 255, 255)
    C_TEXT = RGBColor(15, 23, 42)           # Slate 900
    C_PRIMARY = RGBColor(67, 56, 202)       # Indigo 700
    C_ACCENT_BLUE = RGBColor(2, 132, 199)   # Sky 600
    C_AMBER = RGBColor(245, 158, 11)        # Amber 500
    C_GREEN = RGBColor(16, 185, 129)        # Emerald 500
    C_ROSE = RGBColor(225, 29, 72)          # Rose 600
    C_CARD_BG = RGBColor(255, 255, 255)     # Trắng
    C_BORDER = RGBColor(203, 213, 225)      # Slate 300

    # 1. Background toàn slide
    bg = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Cm(0), Cm(0), Cm(76.5), Cm(86.5))
    bg.fill.solid()
    bg.fill.fore_color.rgb = C_BG
    bg.line.color.rgb = C_BG

    # 2. Header Box (Rộng 73.5 cm x Cao 11.2 cm)
    header = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Cm(1.5), Cm(1.2), Cm(73.5), Cm(11.2))
    header.fill.solid()
    header.fill.fore_color.rgb = C_HEADER_BG
    header.line.color.rgb = C_AMBER
    header.line.width = Pt(3)

    tf_h = header.text_frame
    tf_h.vertical_anchor = MSO_ANCHOR.MIDDLE
    tf_h.word_wrap = True
    tf_h.margin_left = Cm(1.2)
    tf_h.margin_right = Cm(1.2)

    p1 = tf_h.paragraphs[0]
    p1.text = "DIỄN ĐÀN ĐỔI MỚI SÁNG TẠO GIÁO DỤC VIỆT NAM VỚI TRÍ TUỆ NHÂN TẠO • GIẢI THƯỞNG TIÊN PHONG ỨNG DỤNG AI TRONG GIÁO DỤC VIỆT NAM 2026"
    p1.font.name = "Arial"
    p1.font.size = Pt(13)
    p1.font.bold = True
    p1.font.color.rgb = C_AMBER
    p1.alignment = PP_ALIGN.CENTER
    p1.space_after = Pt(3)

    p2 = tf_h.add_paragraph()
    p2.text = "KID-LESSON AI\nHỆ THỐNG TRỢ LÝ TRÍ TUỆ NHÂN TẠO TẠO SINH TRONG XÂY DỰNG KẾ HOẠCH BÀI DẠY (GIÁO ÁN) ĐIỆN TỬ VÀ KHO HỌC LIỆU SỐ ĐA PHƯƠNG TIỆN CHO GIÁO VIÊN MẦM NON"
    p2.font.name = "Arial"
    p2.font.size = Pt(21)
    p2.font.bold = True
    p2.font.color.rgb = C_WHITE
    p2.alignment = PP_ALIGN.CENTER
    p2.space_after = Pt(4)

    p3 = tf_h.add_paragraph()
    p3.text = "★ GIẢI PHÓNG SỨC LAO ĐỘNG NHÀ GIÁO - KHƠI NGUỒN SÁNG TẠO BÀI GIẢNG MẦM NON CÙNG AI ★"
    p3.font.name = "Arial"
    p3.font.size = Pt(13)
    p3.font.bold = True
    p3.font.color.rgb = RGBColor(165, 180, 252)
    p3.alignment = PP_ALIGN.CENTER
    p3.space_after = Pt(3)

    p4 = tf_h.add_paragraph()
    p4.text = "Giáo viên thực hiện: Nguyễn Thị Tiên  |  Đơn vị: Trường Mầm non Phúc Sơn B (Thôn Đồng Mít, xã Phúc Sơn, TP. Hà Nội)  |  Email: tienmamnondongtam@gmail.com"
    p4.font.name = "Arial"
    p4.font.size = Pt(11.5)
    p4.font.color.rgb = RGBColor(226, 232, 240)
    p4.alignment = PP_ALIGN.CENTER

    # 3. Ba Cột Bố Cục Cân Đối (Rộng 23.4 cm, Khoảng cách 1.65 cm, Cao 66.5 cm)
    col_w = Cm(23.4)
    col_gap = Cm(1.65)
    top_y = Cm(13.0)
    col_h = Cm(66.5)

    # -------------------------------------------------------------
    # CỘT 1: MỤC TIÊU, PHẦN 1: BỐI CẢNH & PHẦN 2: Ý TƯỞNG GIẢI PHÁP
    # -------------------------------------------------------------
    c1 = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Cm(1.5), top_y, col_w, col_h)
    c1.fill.solid()
    c1.fill.fore_color.rgb = C_CARD_BG
    c1.line.color.rgb = C_BORDER
    tf1 = c1.text_frame
    tf1.word_wrap = True
    tf1.margin_left = Cm(0.9)
    tf1.margin_right = Cm(0.9)
    tf1.margin_top = Cm(0.9)

    p = tf1.paragraphs[0]
    p.text = "MỤC TIÊU, BỐI CẢNH & Ý TƯỞNG GIẢI PHÁP"
    p.font.name = "Arial"
    p.font.size = Pt(14)
    p.font.bold = True
    p.font.color.rgb = C_PRIMARY
    p.space_after = Pt(8)

    items_c1 = [
        ("MỤC TIÊU TRỌNG TÂM & PHÁP LÝ (Trang 3):", ""),
        ("• Mục tiêu trọng tâm:", " Tự động hóa 80% quy trình soạn giáo án & sản xuất học liệu số (thơ, câu đố, ảnh hoạt họa, trò chơi tương tác)."),
        ("• Tính sư phạm pháp lý:", " Chuẩn 100% Chương trình GDMN ban hành kèm Thông tư 51/2020/TT-BGDĐT của Bộ GD&ĐT."),
        ("• Thông điệp cốt lõi:", " AI không thay thế người thầy, mà trao quyền cho cô giáo dành trọn thời gian chăm sóc, giáo dục trẻ."),
        ("PHẦN 1: BỐI CẢNH VÀ VẤN ĐỀ THỰC TIỄN (Trang 4):", ""),
        ("• Thách thức 1 (Sổ sách):", " Theo dõi 25–35 trẻ/ngày theo 5 lĩnh vực; mất 8–12 giờ/tuần ngoài giờ chỉ để ghi chép."),
        ("• Thách thức 2 (Rập khuôn):", " Áp lực thời gian khiến nhiều GV sao chép giáo án cũ trên mạng; thiếu sáng tạo, chưa sát thực tế."),
        ("• Thách thức 3 (Rào cản số):", " Có đủ thiết bị truyền thống nhưng chuyển sang bài giảng số đa phương tiện Smart TV vẫn là thách thức lớn."),
        ("PHẦN 2: Ý TƯỞNG VÀ GIẢI PHÁP (3 TRỤ CỘT - Trang 5):", ""),
        ("★ TRỤ CỘT 1 (Soạn giáo án chuẩn TT 51):", " Prompt Master bám sát 3 mục tiêu & tiến trình 3 bước; tự động xuất Word trong 30 giây."),
        ("★ TRỤ CỘT 2 (Slide Canva & Smart TV 0đ):", " Tự động tạo bộ Slide 16:9 kéo thả Canva 1-click; hỗ trợ trình chiếu offline lớp học trên Smart TV."),
        ("★ TRỤ CỘT 3 (Word Nghị định 30 & Thư viện):", " Xuất Word chuẩn quy cách in ấn ký duyệt BGH; lưu trữ thư viện số bảo mật 100% trên máy tính cô giáo.")
    ]
    for bold_txt, normal_txt in items_c1:
        p_item = tf1.add_paragraph()
        p_item.space_after = Pt(4)
        r_b = p_item.add_run()
        r_b.text = bold_txt
        r_b.font.bold = True
        r_b.font.name = "Arial"
        r_b.font.size = Pt(10)
        r_b.font.color.rgb = C_PRIMARY if bold_txt.isupper() else (C_ROSE if "Thách thức" in bold_txt else C_ACCENT_BLUE)
        if normal_txt:
            r_n = p_item.add_run()
            r_n.text = normal_txt
            r_n.font.name = "Arial"
            r_n.font.size = Pt(9.5)
            r_n.font.color.rgb = C_TEXT

    # -------------------------------------------------------------
    # CỘT 2: PHẦN 3: TRIỂN KHAI THỰC TẾ & PHẦN 5: TÍNH BỀN VỮNG
    # -------------------------------------------------------------
    c2 = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Cm(1.5) + col_w + col_gap, top_y, col_w, col_h)
    c2.fill.solid()
    c2.fill.fore_color.rgb = C_CARD_BG
    c2.line.color.rgb = C_PRIMARY
    c2.line.width = Pt(2)
    tf2 = c2.text_frame
    tf2.word_wrap = True
    tf2.margin_left = Cm(0.9)
    tf2.margin_right = Cm(0.9)
    tf2.margin_top = Cm(0.9)

    p = tf2.paragraphs[0]
    p.text = "TRIỂN KHAI THỰC TẾ & TÍNH BỀN VỮNG"
    p.font.name = "Arial"
    p.font.size = Pt(14)
    p.font.bold = True
    p.font.color.rgb = C_PRIMARY
    p.space_after = Pt(8)

    items_c2 = [
        ("PHẦN 3: TRIỂN KHAI THỰC TẾ (Trang 6):", ""),
        ("• Địa bàn áp dụng:", " Trường Mầm non Phúc Sơn B, Xã Phúc Sơn, TP. Hà Nội."),
        ("• 4 Khối lớp thực nghiệm:", " Nhà trẻ (24–36th), MG bé (3–4t), MG nhỡ (4–5t), MG lớn (5–6t)."),
        ("• Quy mô tham gia:", " Hơn 100 trẻ mầm non tham gia theo dõi thực nghiệm."),
        ("• Thiết bị sử dụng:", " Điện thoại GV, máy tính lớp học, Smart TV internet sẵn có."),
        ("PHẦN 5: TÍNH BỀN VỮNG & NHÂN RỘNG (Trang 8):", ""),
        ("✓ Chi phí vận hành 0 đồng:", " Tận dụng Canva for Education, Google Gemini & Web Speech API miễn phí; không tốn phí bản quyền hay server."),
        ("✓ Khả năng nhân rộng cao:", " Đóng gói 'Sổ tay 3 bước ứng dụng AI', tập huấn 30 phút là GV mọi độ tuổi làm chủ; sẵn sàng chuyển giao 100% trường bạn."),
        ("✓ Không cần máy móc chuyên dụng:", " Hoạt động mượt mà trên máy tính, TV sẵn có; Web App nhẹ nhàng, chạy tốt cả offline mạng LAN.")
    ]
    for bold_txt, normal_txt in items_c2:
        p_item = tf2.add_paragraph()
        p_item.space_after = Pt(4)
        r_b = p_item.add_run()
        r_b.text = bold_txt
        r_b.font.bold = True
        r_b.font.name = "Arial"
        r_b.font.size = Pt(10)
        r_b.font.color.rgb = C_PRIMARY if bold_txt.isupper() else (C_GREEN if "✓" in bold_txt else C_ACCENT_BLUE)
        if normal_txt:
            r_n = p_item.add_run()
            r_n.text = normal_txt
            r_n.font.name = "Arial"
            r_n.font.size = Pt(9.5)
            r_n.font.color.rgb = C_TEXT

    # -------------------------------------------------------------
    # CỘT 3: PHẦN 4: KẾT QUẢ & PHẦN 6: ĐỊNH HƯỚNG PHÁT TRIỂN
    # -------------------------------------------------------------
    c3 = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Cm(1.5) + (col_w + col_gap) * 2, top_y, col_w, col_h)
    c3.fill.solid()
    c3.fill.fore_color.rgb = C_CARD_BG
    c3.line.color.rgb = C_BORDER
    tf3 = c3.text_frame
    tf3.word_wrap = True
    tf3.margin_left = Cm(0.9)
    tf3.margin_right = Cm(0.9)
    tf3.margin_top = Cm(0.9)

    p = tf3.paragraphs[0]
    p.text = "KẾT QUẢ TÁC ĐỘNG & ĐỊNH HƯỚNG PHÁT TRIỂN"
    p.font.name = "Arial"
    p.font.size = Pt(14)
    p.font.bold = True
    p.font.color.rgb = C_GREEN
    p.space_after = Pt(8)

    items_c3 = [
        ("PHẦN 4: KẾT QUẢ VÀ TÁC ĐỘNG NỔI BẬT (Trang 7):", ""),
        ("• Thời gian soạn Kế hoạch bài dạy:", " 12 - 14 h/tuần ➔ 2 - 2.5 h/tuần [GIẢM 83.3%]"),
        ("• Thời gian chuyển Giáo án sang Slide:", " 45 - 60 phút/bài ➔ 5 - 10 phút/bài [TỰ ĐỘNG HÓA 93%]"),
        ("• Tỷ lệ GV trong Tổ làm chủ CN:", " 0% ➔ 100% [100% TỔ CHUYÊN MÔN]"),
        ("• Độ đồng bộ Giáo án & Slide:", " Rời rạc, thiếu đồng bộ ➔ Đồng bộ tự động [CHUẨN HÓA THỐNG NHẤT]"),
        ("PHẦN 6: ĐỊNH HƯỚNG PHÁT TRIỂN TIẾP THEO (Trang 9):", ""),
        ("• GĐ 1 (Ngân hàng 100+ Prompt):", " Chuẩn hóa kịch bản theo 6 chủ đề năm học (Trường MN, Bản thân, Gia đình, Nghề nghiệp, Thực vật, Động vật)."),
        ("• GĐ 2 (Studio Đa phương tiện):", " Tích hợp video hoạt họa AI 1–2 phút, tự động phối nhạc bài thơ và 5 mini-game tương tác trên Smart TV."),
        ("• GĐ 3 (Chuyển giao toàn huyện):", " Nhân rộng tới 100% trường mầm non trong huyện; tổ chức hội thảo chia sẻ ứng dụng AI nhân văn trong GDMN.")
    ]
    for bold_txt, normal_txt in items_c3:
        p_item = tf3.add_paragraph()
        p_item.space_after = Pt(4)
        r_b = p_item.add_run()
        r_b.text = bold_txt
        r_b.font.bold = True
        r_b.font.name = "Arial"
        r_b.font.size = Pt(10)
        r_b.font.color.rgb = C_PRIMARY if bold_txt.isupper() else (C_GREEN if "• Thời gian" in bold_txt or "• Tỷ lệ" in bold_txt or "• Độ đồng bộ" in bold_txt else C_ACCENT_BLUE)
        if normal_txt:
            r_n = p_item.add_run()
            r_n.text = normal_txt
            r_n.font.name = "Arial"
            r_n.font.size = Pt(9.5)
            r_n.font.color.rgb = C_TEXT

    # 4. Footer Box (Rộng 74.5 cm x Cao 4.8 cm)
    footer = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Cm(1.5), Cm(80.5), Cm(74.5), Cm(4.8))
    footer.fill.solid()
    footer.fill.fore_color.rgb = C_HEADER_BG
    footer.line.color.rgb = C_AMBER
    tf_ft = footer.text_frame
    tf_ft.word_wrap = True
    tf_ft.margin_left = Cm(1.2)
    tf_ft.margin_right = Cm(5.5)
    tf_ft.vertical_anchor = MSO_ANCHOR.MIDDLE

    p_f1 = tf_ft.paragraphs[0]
    p_f1.text = "TRƯỜNG MẦM NON PHÚC SƠN B  •  THÔN ĐỒNG MÍT, XÃ PHÚC SƠN, TP HÀ NỘI"
    p_f1.font.name = "Arial"
    p_f1.font.size = Pt(11.5)
    p_f1.font.bold = True
    p_f1.font.color.rgb = C_AMBER

    p_f2 = tf_ft.add_paragraph()
    p_f2.text = "DIỄN ĐÀN ĐỔI MỚI SÁNG TẠO GIÁO DỤC VIỆT NAM VỚI AI • GIẢI THƯỞNG TIÊN PHONG ỨNG DỤNG AI TRONG GIÁO DỤC VIỆT NAM 2026"
    p_f2.font.name = "Arial"
    p_f2.font.size = Pt(10.5)
    p_f2.font.color.rgb = C_WHITE

    p_f3 = tf_ft.add_paragraph()
    p_f3.text = "🌐 Đường dẫn tới app: https://annethanks.github.io/kid-lesson-ai/  |  📱 Quét mã QR bên cạnh để truy cập trực tiếp ứng dụng"
    p_f3.font.name = "Arial"
    p_f3.font.size = Pt(10.5)
    p_f3.font.color.rgb = RGBColor(226, 232, 240)

    # Thêm hình QR code nếu file tồn tại
    qr_path = "QR_Code_KID_LESSON_AI.png"
    if os.path.exists(qr_path):
        slide.shapes.add_picture(qr_path, Cm(71.0), Cm(80.7), Cm(4.4), Cm(4.4))

    prs.save(filename)
    print(f"Đã xuất thành công poster PPTX chuẩn Canva: {filename} ({prs.slide_width.cm}cm x {prs.slide_height.cm}cm)")
    return filename

if __name__ == "__main__":
    build_poster()
