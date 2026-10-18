# -*- coding: utf-8 -*-
"""
Script sinh file PowerPoint (16:9) chuẩn 11 slide theo đúng mẫu Canva của BTC:
GIẢI THƯỞNG TIÊN PHONG ỨNG DỤNG AI TRONG GIÁO DỤC VIỆT NAM 2026 (Bộ GD&ĐT & ĐH RMIT)
Dự án: KID-LESSON AI
"""

import sys
import os
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE

def create_deck(filename="Slide_Canva_KID_LESSON_AI_11_Trang.pptx"):
    prs = Presentation()
    # 16:9 Widescreen: 13.333 x 7.5 inches
    prs.slide_width = Inches(13.333)
    prs.slide_height = Inches(7.5)
    blank_layout = prs.slide_layouts[6]

    # Bảng màu chuẩn Canva BTC
    C_NAVY = RGBColor(10, 25, 77)       # Xanh đậm navy banner
    C_BLUE = RGBColor(24, 76, 120)      # Xanh biển
    C_CYAN = RGBColor(2, 132, 199)      # Cyan nhấn
    C_WHITE = RGBColor(255, 255, 255)
    C_DARK = RGBColor(30, 41, 59)       # Chữ chính Slate 800
    C_GRAY = RGBColor(71, 85, 105)      # Chữ phụ Slate 600
    C_LIGHT_BG = RGBColor(248, 250, 252) # Nền xám rất nhạt
    C_CARD_BG = RGBColor(241, 245, 249) # Nền card
    C_AMBER = RGBColor(217, 119, 6)

    def add_footer(slide, current_page=None):
        """Thêm footer chuẩn mẫu BTC"""
        # Blue gradient bar at bottom
        bar = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0), Inches(7.0), Inches(13.333), Inches(0.5))
        bar.fill.solid()
        bar.fill.fore_color.rgb = C_NAVY
        bar.line.color.rgb = C_NAVY
        tf = bar.text_frame
        tf.vertical_anchor = MSO_ANCHOR.MIDDLE
        p = tf.paragraphs[0]
        p.text = "Giải Thưởng Tiên Phong Ứng Dụng AI Trong Giáo Dục Việt Nam 2026"
        p.font.name = "Arial"
        p.font.size = Pt(11)
        p.font.bold = True
        p.font.color.rgb = C_WHITE
        p.alignment = PP_ALIGN.RIGHT
        tf.margin_right = Inches(0.8)

    # ==========================================================
    # SLIDE 1: TRANG BÌA
    # ==========================================================
    s1 = prs.slides.add_slide(blank_layout)
    # Header banner navy
    h_bar = s1.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0), Inches(0), Inches(13.333), Inches(2.2))
    h_bar.fill.solid()
    h_bar.fill.fore_color.rgb = C_NAVY
    h_bar.line.color.rgb = C_NAVY
    tf_h = h_bar.text_frame
    tf_h.vertical_anchor = MSO_ANCHOR.MIDDLE
    p = tf_h.paragraphs[0]
    p.text = "BỘ GIÁO DỤC VÀ ĐÀO TẠO  •  RMIT UNIVERSITY  •  Diễn đàn Đổi mới sáng tạo Giáo dục Việt Nam với AI"
    p.font.name = "Arial"
    p.font.size = Pt(11)
    p.font.bold = True
    p.font.color.rgb = C_WHITE
    p.alignment = PP_ALIGN.CENTER

    p2 = tf_h.add_paragraph()
    p2.text = "GIẢI THƯỞNG TIÊN PHONG ỨNG DỤNG AI TRONG GIÁO DỤC VIỆT NAM 2026"
    p2.font.name = "Arial"
    p2.font.size = Pt(17)
    p2.font.bold = True
    p2.font.color.rgb = C_WHITE
    p2.alignment = PP_ALIGN.CENTER

    p3 = tf_h.add_paragraph()
    p3.text = "HỒ SƠ SẢN PHẨM THAM GIA"
    p3.font.name = "Arial"
    p3.font.size = Pt(12)
    p3.font.color.rgb = RGBColor(147, 197, 253)
    p3.alignment = PP_ALIGN.CENTER

    # Middle Title
    tb1 = s1.shapes.add_textbox(Inches(0.8), Inches(2.4), Inches(11.733), Inches(2.1))
    tf1 = tb1.text_frame
    tf1.word_wrap = True
    p_title = tf1.paragraphs[0]
    p_title.text = "KID-LESSON AI"
    p_title.font.name = "Arial"
    p_title.font.size = Pt(40)
    p_title.font.bold = True
    p_title.font.color.rgb = C_NAVY
    p_title.alignment = PP_ALIGN.CENTER

    p_sub = tf1.add_paragraph()
    p_sub.text = "HỆ THỐNG TRỢ LÝ TRÍ TUỆ NHÂN TẠO TẠO SINH TRONG XÂY DỰNG KẾ HOẠCH BÀI DẠY (GIÁO ÁN) ĐIỆN TỬ\nVÀ KHO HỌC LIỆU SỐ ĐA PHƯƠNG TIỆN CHO GIÁO VIÊN MẦM NON"
    p_sub.font.name = "Arial"
    p_sub.font.size = Pt(13)
    p_sub.font.bold = True
    p_sub.font.color.rgb = C_DARK
    p_sub.alignment = PP_ALIGN.CENTER

    # Bottom Dark Blue Box
    b_box = s1.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(4.7), Inches(11.733), Inches(2.3))
    b_box.fill.solid()
    b_box.fill.fore_color.rgb = C_NAVY
    b_box.line.color.rgb = C_NAVY

    # Author Left
    tb_auth = s1.shapes.add_textbox(Inches(1.2), Inches(4.9), Inches(5.0), Inches(1.9))
    tf_a = tb_auth.text_frame
    tf_a.word_wrap = True
    pa1 = tf_a.paragraphs[0]
    pa1.text = "Giáo viên thực hiện:"
    pa1.font.name = "Arial"
    pa1.font.size = Pt(13)
    pa1.font.color.rgb = RGBColor(147, 197, 253)
    pa2 = tf_a.add_paragraph()
    pa2.text = "Cô Nguyễn Thị Mai & Tổ Chuyên môn"
    pa2.font.name = "Arial"
    pa2.font.size = Pt(17)
    pa2.font.bold = True
    pa2.font.color.rgb = C_WHITE
    pa3 = tf_a.add_paragraph()
    pa3.text = "Bảng A: Khối Mầm non & Tiểu học"
    pa3.font.name = "Arial"
    pa3.font.size = Pt(12)
    pa3.font.color.rgb = RGBColor(226, 232, 240)

    # Unit Right
    tb_unit = s1.shapes.add_textbox(Inches(6.8), Inches(4.9), Inches(5.5), Inches(1.9))
    tf_u = tb_unit.text_frame
    tf_u.word_wrap = True
    pu1 = tf_u.paragraphs[0]
    pu1.text = "Đơn vị công tác:"
    pu1.font.name = "Arial"
    pu1.font.size = Pt(13)
    pu1.font.bold = True
    pu1.font.color.rgb = C_WHITE
    pu2 = tf_u.add_paragraph()
    pu2.text = "Trường Mầm non Phúc Sơn B\nUBND xã Phúc Sơn, huyện Tân Yên, tỉnh Bắc Giang"
    pu2.font.name = "Arial"
    pu2.font.size = Pt(12)
    pu2.font.color.rgb = RGBColor(226, 232, 240)
    pu3 = tf_u.add_paragraph()
    pu3.text = "Email: c0phucsonbtn@bacgiang.edu.vn"
    pu3.font.name = "Arial"
    pu3.font.size = Pt(12)
    pu3.font.color.rgb = RGBColor(147, 197, 253)

    # ==========================================================
    # SLIDE 2: DÀN Ý SLIDE
    # ==========================================================
    s2 = prs.slides.add_slide(blank_layout)
    add_footer(s2, 2)
    # Left graphic shape placeholder
    left_rect = s2.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0), Inches(0), Inches(5.2), Inches(7.0))
    left_rect.fill.solid()
    left_rect.fill.fore_color.rgb = C_NAVY
    left_rect.line.color.rgb = C_NAVY

    # Left Image Placeholder Card
    left_card = s2.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(0.8), Inches(3.6), Inches(5.4))
    left_card.fill.solid()
    left_card.fill.fore_color.rgb = C_WHITE
    left_card.line.color.rgb = RGBColor(203, 213, 225)
    tf_lc = left_card.text_frame
    tf_lc.vertical_anchor = MSO_ANCHOR.MIDDLE
    plc = tf_lc.paragraphs[0]
    plc.text = "[Hình ảnh minh họa\ngiao diện ứng dụng\nKID-LESSON AI]"
    plc.font.name = "Arial"
    plc.font.size = Pt(15)
    plc.font.color.rgb = C_GRAY
    plc.alignment = PP_ALIGN.CENTER

    # Right Content
    tb2 = s2.shapes.add_textbox(Inches(5.8), Inches(0.8), Inches(6.8), Inches(5.8))
    tf2 = tb2.text_frame
    tf2.word_wrap = True
    p_title2 = tf2.paragraphs[0]
    p_title2.text = "DÀN Ý SLIDE"
    p_title2.font.name = "Arial"
    p_title2.font.size = Pt(32)
    p_title2.font.bold = True
    p_title2.font.color.rgb = C_NAVY

    sections = [
        ("Phần 1: Bối cảnh và Vấn đề", "Nghịch lý sổ sách hành chính và khó khăn học liệu mầm non"),
        ("Phần 2: Ý tưởng và Giải pháp AI", "Trợ lý ảo đồng sáng tạo KHBD 5 bước & Học liệu số"),
        ("Phần 3: Cách thực hiện giải pháp", "Thực nghiệm 4 độ tuổi tại Trường Mầm non Phúc Sơn B"),
        ("Phần 4: Kết quả và Tác động", "Giảm 80% thời gian, 100% tiết dạy có học liệu số trực quan"),
        ("Phần 5: Tính bền vững & Khả năng nhân rộng", "Vận hành 0 đồng kinh phí, tài liệu đóng gói 3 bước"),
        ("Phần 6: Định hướng tương lai & Tài liệu đính kèm", "Mở rộng 9 chủ đề năm học & Link trải nghiệm công khai")
    ]
    for sec_title, sec_desc in sections:
        p_sec = tf2.add_paragraph()
        p_sec.text = f"• {sec_title}"
        p_sec.font.name = "Arial"
        p_sec.font.size = Pt(15)
        p_sec.font.bold = True
        p_sec.font.color.rgb = C_DARK
        p_sub2 = tf2.add_paragraph()
        p_sub2.text = f"    {sec_desc}"
        p_sub2.font.name = "Arial"
        p_sub2.font.size = Pt(11)
        p_sub2.font.color.rgb = C_GRAY

    # ==========================================================
    # SLIDE 3: NỘI DUNG BÀI TRÌNH BÀY
    # ==========================================================
    s3 = prs.slides.add_slide(blank_layout)
    add_footer(s3, 3)
    tb3 = s3.shapes.add_textbox(Inches(0.8), Inches(0.8), Inches(11.733), Inches(5.8))
    tf3 = tb3.text_frame
    tf3.word_wrap = True
    p3 = tf3.paragraphs[0]
    p3.text = "NỘI DUNG BÀI TRÌNH BÀY"
    p3.font.name = "Arial"
    p3.font.size = Pt(30)
    p3.font.bold = True
    p3.font.color.rgb = C_NAVY

    p_lead = tf3.add_paragraph()
    p_lead.text = "• Giải phóng sức lao động nhà giáo - Khơi nguồn sáng tạo bài giảng mầm non cùng AI"
    p_lead.font.name = "Arial"
    p_lead.font.size = Pt(16)
    p_lead.font.bold = True
    p_lead.font.color.rgb = C_CYAN

    # Callout card
    box3 = s3.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(2.2), Inches(11.733), Inches(4.3))
    box3.fill.solid()
    box3.fill.fore_color.rgb = C_CARD_BG
    box3.line.color.rgb = RGBColor(203, 213, 225)
    tf_b3 = box3.text_frame
    tf_b3.word_wrap = True
    tf_b3.margin_left = Inches(0.5)
    tf_b3.margin_right = Inches(0.5)
    tf_b3.margin_top = Inches(0.3)

    items3 = [
        ("Mục tiêu trọng tâm:", "Ứng dụng Trí tuệ nhân tạo tạo sinh (Generative AI) để tự động hóa 80% quy trình xây dựng Kế hoạch bài dạy (giáo án) và sản xuất kho học liệu số đa phương tiện (thơ mới, câu đố vui, hình ảnh hoạt họa, trò chơi tương tác)."),
        ("Tính sư phạm pháp lý:", "Toàn bộ cấu trúc đầu ra được thiết kế bám sát 100% Chương trình Giáo dục Mầm non ban hành kèm Thông tư 51/2020/TT-BGDĐT của Bộ GD&ĐT."),
        ("Địa bàn thực nghiệm:", "Triển khai thực tế tại Trường Mầm non Phúc Sơn B (huyện Tân Yên, tỉnh Bắc Giang) cho hơn 100 trẻ ở cả 4 độ tuổi (Nhà trẻ, Mẫu giáo Bé, Nhỡ, Lớn)."),
        ("Hiệu quả nổi bật:", "Được chứng minh bằng số liệu thực nghiệm: Giảm từ 14h xuống 2.5h chuẩn bị/tuần, tỷ lệ trẻ hào hứng tập trung đạt 95.8%, chi phí vận hành 0 đồng."),
        ("Thông điệp cốt lõi:", "AI không thay thế người thầy, mà trao quyền cho cô giáo dành trọn vẹn thời gian và tình yêu thương để chăm sóc, giáo dục từng mầm non tương lai.")
    ]
    for i, (title_i, desc_i) in enumerate(items3):
        p_item = tf_b3.paragraphs[0] if i == 0 else tf_b3.add_paragraph()
        p_item.text = f"{title_i} {desc_i}"
        p_item.font.name = "Arial"
        p_item.font.size = Pt(12)
        p_item.font.color.rgb = C_DARK

    # ==========================================================
    # SLIDE 4: BỐI CẢNH VÀ VẤN ĐỀ
    # ==========================================================
    s4 = prs.slides.add_slide(blank_layout)
    add_footer(s4, 4)
    tb4 = s4.shapes.add_textbox(Inches(0.8), Inches(0.8), Inches(11.733), Inches(1.0))
    tf4 = tb4.text_frame
    p4 = tf4.paragraphs[0]
    p4.text = "BỐI CẢNH VÀ VẤN ĐỀ"
    p4.font.name = "Arial"
    p4.font.size = Pt(30)
    p4.font.bold = True
    p4.font.color.rgb = C_NAVY

    challenges = [
        ("Thách thức 1: Gánh nặng hồ sơ sổ sách",
         "Theo quy định Bộ GD&ĐT, mỗi tuần giáo viên phải soạn 10 - 15 kế hoạch bài dạy chi tiết cho từng ngày. Thống kê giáo viên mất từ 12 - 15 giờ/tuần ngoài giờ lên lớp chỉ để tìm kiếm tài liệu và gõ máy tính, gây quá tải và áp lực nghề nghiệp kéo dài."),
        ("Thách thức 2: Nhận xét rập khuôn, thiếu cá nhân hóa",
         "Do áp lực thời gian quá lớn, nhiều giáo viên phải sao chép thụ động các giáo án cũ tải trên mạng. Nội dung thường mang tính rập khuôn, chiếu lệ, chưa bám sát tâm lý lứa tuổi và chưa kích hoạt được tính sáng tạo thực tế của trẻ tại địa phương."),
        ("Thách thức 3: Kênh kết nối & học liệu trực quan bị nghẽn",
         "Trường mầm non vùng nông thôn thiếu thốn đồ dùng trực quan, tranh ảnh nghèo nàn; việc sáng tác thơ hay câu đố mới mất nhiều thời gian. Kênh kết nối hoạt động học với phụ huynh còn lỏng lẻo, trẻ nhanh chán và giảm tập trung trong tiết học.")
    ]
    for i, (ch_title, ch_desc) in enumerate(challenges):
        card_ch = s4.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(1.9 + i * 1.6), Inches(11.733), Inches(1.4))
        card_ch.fill.solid()
        card_ch.fill.fore_color.rgb = C_CARD_BG
        card_ch.line.color.rgb = RGBColor(226, 232, 240)
        tf_ch = card_ch.text_frame
        tf_ch.word_wrap = True
        tf_ch.margin_left = Inches(0.4)
        tf_ch.margin_right = Inches(0.4)
        tf_ch.margin_top = Inches(0.15)
        p_cht = tf_ch.paragraphs[0]
        p_cht.text = ch_title
        p_cht.font.name = "Arial"
        p_cht.font.size = Pt(14)
        p_cht.font.bold = True
        p_cht.font.color.rgb = RGBColor(185, 28, 28) if i==0 else (RGBColor(180, 83, 9) if i==1 else C_NAVY)
        p_chd = tf_ch.add_paragraph()
        p_chd.text = ch_desc
        p_chd.font.name = "Arial"
        p_chd.font.size = Pt(11)
        p_chd.font.color.rgb = C_DARK

    # ==========================================================
    # SLIDE 5: Ý TƯỞNG VÀ GIẢI PHÁP
    # ==========================================================
    s5 = prs.slides.add_slide(blank_layout)
    add_footer(s5, 5)
    tb5 = s5.shapes.add_textbox(Inches(0.8), Inches(0.6), Inches(11.733), Inches(1.0))
    tf5 = tb5.text_frame
    p5 = tf5.paragraphs[0]
    p5.text = "Ý TƯỞNG VÀ GIẢI PHÁP"
    p5.font.name = "Arial"
    p5.font.size = Pt(30)
    p5.font.bold = True
    p5.font.color.rgb = C_NAVY

    pillars = [
        ("TRỤ CỘT 1", "Soạn Kế hoạch bài dạy chuẩn Thông tư 51",
         "Ứng dụng Prompt Master bám sát mục tiêu 3 phần: Kiến thức - Kỹ năng - Thái độ và tiến trình 3 bước (Gây hứng thú - Khám phá - Kết thúc). Xuất file Word giáo án hoàn chỉnh trong 30 giây."),
        ("TRỤ CỘT 2", "Sáng tác Thơ, Câu đố & Học liệu số tức thì",
         "AI đóng vai trò trợ lý thơ ca mầm non: Tự động sáng tác thơ 4-5 chữ gieo vần tươi vui, tạo 3 câu đố vui dí dỏm và cung cấp prompt vẽ tranh minh họa sinh động theo từng chủ đề bài dạy."),
        ("TRỤ CỘT 3", "Thiết kế Trò chơi tương tác chạm màn hình",
         "Tự động xây dựng kịch bản trò chơi củng cố đa điểm chạm: 'Tìm bóng con vật', 'Về đúng chuồng', 'Phân loại rác'; chạy mượt mà trên smart tivi hoặc máy chiếu lớp học.")
    ]
    for i, (col_tag, col_title, col_desc) in enumerate(pillars):
        left_x = Inches(0.8 + i * 4.0)
        # Header Box
        hb = s5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left_x, Inches(1.6), Inches(3.733), Inches(0.9))
        hb.fill.solid()
        hb.fill.fore_color.rgb = C_NAVY
        hb.line.color.rgb = C_NAVY
        tf_hb = hb.text_frame
        tf_hb.word_wrap = True
        p_tag = tf_hb.paragraphs[0]
        p_tag.text = col_tag
        p_tag.font.name = "Arial"
        p_tag.font.size = Pt(11)
        p_tag.font.bold = True
        p_tag.font.color.rgb = RGBColor(147, 197, 253)
        p_ht = tf_hb.add_paragraph()
        p_ht.text = col_title
        p_ht.font.name = "Arial"
        p_ht.font.size = Pt(11)
        p_ht.font.bold = True
        p_ht.font.color.rgb = C_WHITE

        # Image Frame Box
        ib = s5.shapes.add_shape(MSO_SHAPE.RECTANGLE, left_x, Inches(2.6), Inches(3.733), Inches(2.1))
        ib.fill.solid()
        ib.fill.fore_color.rgb = RGBColor(226, 232, 240)
        ib.line.color.rgb = RGBColor(203, 213, 225)
        tf_ib = ib.text_frame
        tf_ib.vertical_anchor = MSO_ANCHOR.MIDDLE
        p_ib = tf_ib.paragraphs[0]
        p_ib.text = f"[Ảnh minh họa Trụ cột {i+1}]"
        p_ib.font.name = "Arial"
        p_ib.font.size = Pt(12)
        p_ib.font.color.rgb = C_GRAY
        p_ib.alignment = PP_ALIGN.CENTER

        # Content Box
        cb = s5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left_x, Inches(4.8), Inches(3.733), Inches(2.0))
        cb.fill.solid()
        cb.fill.fore_color.rgb = C_CARD_BG
        cb.line.color.rgb = RGBColor(226, 232, 240)
        tf_cb = cb.text_frame
        tf_cb.word_wrap = True
        tf_cb.margin_left = Inches(0.25)
        tf_cb.margin_right = Inches(0.25)
        p_cd = tf_cb.paragraphs[0]
        p_cd.text = col_desc
        p_cd.font.name = "Arial"
        p_cd.font.size = Pt(10)
        p_cd.font.color.rgb = C_DARK

    # ==========================================================
    # SLIDE 6: TRIỂN KHAI THỰC TẾ
    # ==========================================================
    s6 = prs.slides.add_slide(blank_layout)
    add_footer(s6, 6)
    tb6 = s6.shapes.add_textbox(Inches(0.8), Inches(0.6), Inches(11.733), Inches(1.2))
    tf6 = tb6.text_frame
    p6 = tf6.paragraphs[0]
    p6.text = "TRIỂN KHAI THỰC TẾ"
    p6.font.name = "Arial"
    p6.font.size = Pt(30)
    p6.font.bold = True
    p6.font.color.rgb = C_NAVY

    p6_sub = tf6.add_paragraph()
    p6_sub.text = "QUY MÔ TRIỂN KHAI THỰC NGHIỆM"
    p6_sub.font.name = "Arial"
    p6_sub.font.size = Pt(15)
    p6_sub.font.bold = True
    p6_sub.font.color.rgb = C_CYAN

    # Left Box with details
    lb6 = s6.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(1.9), Inches(7.0), Inches(4.8))
    lb6.fill.solid()
    lb6.fill.fore_color.rgb = C_CARD_BG
    lb6.line.color.rgb = RGBColor(203, 213, 225)
    tf_lb6 = lb6.text_frame
    tf_lb6.word_wrap = True
    tf_lb6.margin_left = Inches(0.4)
    tf_lb6.margin_right = Inches(0.4)
    tf_lb6.margin_top = Inches(0.3)

    bullets6 = [
        "• Địa bàn áp dụng: Trường Mầm non Phúc Sơn B, Xã Phúc Sơn, huyện Tân Yên, tỉnh Bắc Giang.",
        "• 4 Khối lớp tham gia thực nghiệm đầy đủ:",
        "    - Nhóm Nhà trẻ (24 - 36 tháng tuổi): Tiết nhận biết tập nói, phát triển cảm giác.",
        "    - Lớp Mẫu giáo bé (3 - 4 tuổi): Khám phá môi trường xung quanh, vận động.",
        "    - Lớp Mẫu giáo nhỡ (4 - 5 tuổi): Làm quen chữ cái, toán học sơ đẳng, tạo hình.",
        "    - Lớp Mẫu giáo lớn (5 - 6 tuổi): Chuẩn bị tâm thế vào lớp 1, tư duy logic phản biện.",
        "• Tổng số học sinh: Hơn 100 trẻ tham gia các tiết học ứng dụng học liệu AI trực tiếp.",
        "• Đội ngũ tham gia: 12 giáo viên trong Tổ chuyên môn mầm non phối hợp thực nghiệm.",
        "• Thiết bị sử dụng: Điện thoại thông minh cá nhân của giáo viên, máy tính để bàn lớp học, tivi kết nối internet sẵn có của nhà trường."
    ]
    for i, b_text in enumerate(bullets6):
        pb = tf_lb6.paragraphs[0] if i == 0 else tf_lb6.add_paragraph()
        pb.text = b_text
        pb.font.name = "Arial"
        pb.font.size = Pt(11)
        pb.font.color.rgb = C_DARK
        if "•" in b_text:
            pb.font.bold = True

    # Right Image Frame
    rf6_1 = s6.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(8.1), Inches(1.9), Inches(4.4), Inches(2.3))
    rf6_1.fill.solid()
    rf6_1.fill.fore_color.rgb = RGBColor(226, 232, 240)
    rf6_1.line.color.rgb = RGBColor(203, 213, 225)
    tf_rf1 = rf6_1.text_frame
    tf_rf1.vertical_anchor = MSO_ANCHOR.MIDDLE
    p_rf1 = tf_rf1.paragraphs[0]
    p_rf1.text = "[Hình ảnh: Cô giáo thao tác\ntrên Web App KID-LESSON AI]"
    p_rf1.font.name = "Arial"
    p_rf1.font.size = Pt(12)
    p_rf1.font.color.rgb = C_GRAY
    p_rf1.alignment = PP_ALIGN.CENTER

    rf6_2 = s6.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(8.1), Inches(4.4), Inches(4.4), Inches(2.3))
    rf6_2.fill.solid()
    rf6_2.fill.fore_color.rgb = RGBColor(226, 232, 240)
    rf6_2.line.color.rgb = RGBColor(203, 213, 225)
    tf_rf2 = rf6_2.text_frame
    tf_rf2.vertical_anchor = MSO_ANCHOR.MIDDLE
    p_rf2 = tf_rf2.paragraphs[0]
    p_rf2.text = "[Hình ảnh: Trẻ tương tác học liệu\ntrên Tivi thông minh lớp học]"
    p_rf2.font.name = "Arial"
    p_rf2.font.size = Pt(12)
    p_rf2.font.color.rgb = C_GRAY
    p_rf2.alignment = PP_ALIGN.CENTER

    # ==========================================================
    # SLIDE 7: KẾT QUẢ VÀ TÁC ĐỘNG
    # ==========================================================
    s7 = prs.slides.add_slide(blank_layout)
    add_footer(s7, 7)
    tb7 = s7.shapes.add_textbox(Inches(0.8), Inches(0.6), Inches(11.733), Inches(1.0))
    tf7 = tb7.text_frame
    p7 = tf7.paragraphs[0]
    p7.text = "KẾT QUẢ VÀ TÁC ĐỘNG"
    p7.font.name = "Arial"
    p7.font.size = Pt(30)
    p7.font.bold = True
    p7.font.color.rgb = C_NAVY

    # Table with 4 columns, 5 rows
    table_shape = s7.shapes.add_table(5, 4, Inches(0.8), Inches(1.8), Inches(11.733), Inches(4.8))
    table = table_shape.table
    table.columns[0].width = Inches(4.333)
    table.columns[1].width = Inches(2.4)
    table.columns[2].width = Inches(2.4)
    table.columns[3].width = Inches(2.6)

    headers7 = ["Chỉ số đo lường thực nghiệm", "Trước áp dụng", "Sau áp dụng", "Kết quả"]
    for col_idx, h_text in enumerate(headers7):
        cell = table.cell(0, col_idx)
        cell.fill.solid()
        cell.fill.fore_color.rgb = C_NAVY
        tf_c = cell.text_frame
        tf_c.vertical_anchor = MSO_ANCHOR.MIDDLE
        p = tf_c.paragraphs[0]
        p.text = h_text
        p.font.name = "Arial"
        p.font.size = Pt(12)
        p.font.bold = True
        p.font.color.rgb = C_WHITE
        p.alignment = PP_ALIGN.CENTER

    data7 = [
        ("Thời gian soạn Kế hoạch bài dạy:", "12 - 14 giờ/tuần", "2 - 2.5 giờ/tuần", "GIẢM 80% THỜI GIAN"),
        ("Tỷ lệ tiết dạy có học liệu số trực quan:", "22.5%", "100%", "ĐẠT 100% TIẾT DẠY"),
        ("Mức độ hào hứng & tập trung của trẻ:", "61.8%", "95.8%", "TĂNG 34.0% (VƯỢT TRỘI)"),
        ("Mức độ hài lòng của giáo viên:", "42.0%", "98.2%", "TĂNG GẤP 2.3 LẦN")
    ]
    for row_idx, row_data in enumerate(data7, start=1):
        bg_color = C_WHITE if row_idx % 2 == 1 else RGBColor(241, 245, 249)
        for col_idx, val in enumerate(row_data):
            cell = table.cell(row_idx, col_idx)
            cell.fill.solid()
            cell.fill.fore_color.rgb = bg_color
            tf_c = cell.text_frame
            tf_c.vertical_anchor = MSO_ANCHOR.MIDDLE
            p = tf_c.paragraphs[0]
            p.text = val
            p.font.name = "Arial"
            p.font.size = Pt(12)
            if col_idx == 0:
                p.font.bold = True
                p.font.color.rgb = C_DARK
                p.alignment = PP_ALIGN.LEFT
            elif col_idx == 3:
                p.font.bold = True
                p.font.color.rgb = RGBColor(16, 185, 129)
                p.alignment = PP_ALIGN.CENTER
            else:
                p.font.color.rgb = C_DARK
                p.alignment = PP_ALIGN.CENTER

    # ==========================================================
    # SLIDE 8: TÍNH BỀN VỮNG & KHẢ NĂNG NHÂN RỘNG
    # ==========================================================
    s8 = prs.slides.add_slide(blank_layout)
    add_footer(s8, 8)
    tb8 = s8.shapes.add_textbox(Inches(0.8), Inches(0.6), Inches(11.733), Inches(1.0))
    tf8 = tb8.text_frame
    p8 = tf8.paragraphs[0]
    p8.text = "TÍNH BỀN VỮNG & KHẢ NĂNG NHÂN RỘNG"
    p8.font.name = "Arial"
    p8.font.size = Pt(30)
    p8.font.bold = True
    p8.font.color.rgb = C_NAVY

    blocks8 = [
        ("Chi phí vận hành 0 đồng",
         "Tận dụng tài khoản Canva for Education miễn phí cho giáo viên, phiên bản Google Gemini / Web Speech API miễn phí. Không phát sinh chi phí duy trì máy chủ hay phí bản quyền phần mềm."),
        ("Không cần máy móc chuyên dụng",
         "Hoạt động trơn tru trên smartphone cá nhân của cô giáo, máy tính bảng hoặc máy tính để bàn sẵn có của trường mầm non. Giao diện Web App nhẹ nhàng, chạy cả offline trong mạng LAN."),
        ("Khả năng nhân rộng cao",
         "Đã đóng gói thành 'Sổ tay 3 bước ứng dụng AI', tập huấn 30 phút là giáo viên mọi độ tuổi đều làm chủ được; dễ dàng chuyển giao cho 100% các trường mầm non bạn.")
    ]
    for i, (b_title, b_desc) in enumerate(blocks8):
        top_y = Inches(1.8 + i * 1.6)
        # Content Box
        c_box = s8.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), top_y, Inches(8.5), Inches(1.4))
        c_box.fill.solid()
        c_box.fill.fore_color.rgb = C_CARD_BG
        c_box.line.color.rgb = RGBColor(203, 213, 225)
        tf_cb8 = c_box.text_frame
        tf_cb8.word_wrap = True
        tf_cb8.margin_left = Inches(0.4)
        tf_cb8.margin_right = Inches(0.4)
        tf_cb8.margin_top = Inches(0.15)
        pt = tf_cb8.paragraphs[0]
        pt.text = b_title
        pt.font.name = "Arial"
        pt.font.size = Pt(14)
        pt.font.bold = True
        pt.font.color.rgb = C_NAVY
        pd = tf_cb8.add_paragraph()
        pd.text = b_desc
        pd.font.name = "Arial"
        pd.font.size = Pt(11)
        pd.font.color.rgb = C_DARK

        # Right Image Frame
        img_box = s8.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(9.6), top_y, Inches(2.933), Inches(1.4))
        img_box.fill.solid()
        img_box.fill.fore_color.rgb = RGBColor(226, 232, 240)
        img_box.line.color.rgb = RGBColor(203, 213, 225)
        tf_ib = img_box.text_frame
        tf_ib.vertical_anchor = MSO_ANCHOR.MIDDLE
        p_ib = tf_ib.paragraphs[0]
        p_ib.text = f"[Ảnh minh họa: {b_title}]"
        p_ib.font.name = "Arial"
        p_ib.font.size = Pt(10)
        p_ib.font.color.rgb = C_GRAY
        p_ib.alignment = PP_ALIGN.CENTER

    # ==========================================================
    # SLIDE 9: ĐỊNH HƯỚNG PHÁT TRIỂN
    # ==========================================================
    s9 = prs.slides.add_slide(blank_layout)
    add_footer(s9, 9)
    tb9 = s9.shapes.add_textbox(Inches(0.8), Inches(0.6), Inches(11.733), Inches(1.0))
    tf9 = tb9.text_frame
    p9 = tf9.paragraphs[0]
    p9.text = "ĐỊNH HƯỚNG PHÁT TRIỂN"
    p9.font.name = "Arial"
    p9.font.size = Pt(30)
    p9.font.bold = True
    p9.font.color.rgb = C_NAVY

    phases = [
        ("Giai đoạn 1: Chuẩn hóa bộ dữ liệu mẫu theo chủ đề năm học",
         "Xây dựng ngân hàng 100+ kịch bản bài dạy mẫu và câu lệnh Prompt chuyên biệt cho trọn vẹn 9 chủ đề năm học mầm non (Trường mầm non, Bản thân, Gia đình, Nghề nghiệp, Động vật, Thực vật, Giao thông, Hiện tượng tự nhiên, Quê hương đất nước)."),
        ("Giai đoạn 2: Tích hợp Trợ lý tư vấn dinh dưỡng và chăm sóc sức khỏe",
         "Phát triển thêm mô hình AI tính toán khẩu phần ăn, cân đối calo theo chuẩn Viện Dinh dưỡng; kết nối biểu đồ tăng trưởng (chiều cao, cân nặng, chỉ số BMI), tự động cảnh báo và tư vấn thực đơn cho cha mẹ."),
        ("Giai đoạn 3: Chuyển giao và xây dựng nền tảng dùng chung",
         "Nhân rộng giải pháp đến 100% trường mầm non trên địa bàn huyện Tân Yên và tỉnh Bắc Giang; tổ chức các buổi hội thảo tập huấn chuyên đề chia sẻ kinh nghiệm ứng dụng AI nhân văn trong GDMN trên toàn quốc.")
    ]
    for i, (ph_title, ph_desc) in enumerate(phases):
        top_y = Inches(1.8 + i * 1.6)
        card_p = s9.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), top_y, Inches(11.733), Inches(1.4))
        card_p.fill.solid()
        card_p.fill.fore_color.rgb = C_CARD_BG
        card_p.line.color.rgb = RGBColor(203, 213, 225)
        tf_cp = card_p.text_frame
        tf_cp.word_wrap = True
        tf_cp.margin_left = Inches(0.4)
        tf_cp.margin_right = Inches(0.4)
        tf_cp.margin_top = Inches(0.15)
        ppt = tf_cp.paragraphs[0]
        ppt.text = ph_title
        ppt.font.name = "Arial"
        ppt.font.size = Pt(14)
        ppt.font.bold = True
        ppt.font.color.rgb = C_NAVY
        ppd = tf_cp.add_paragraph()
        ppd.text = ph_desc
        ppd.font.name = "Arial"
        ppd.font.size = Pt(11)
        ppd.font.color.rgb = C_DARK

    # ==========================================================
    # SLIDE 10: TÀI LIỆU/THÔNG TIN ĐÍNH KÈM (NẾU CÓ)
    # ==========================================================
    s10 = prs.slides.add_slide(blank_layout)
    add_footer(s10, 10)
    tb10 = s10.shapes.add_textbox(Inches(0.8), Inches(0.6), Inches(11.733), Inches(1.0))
    tf10 = tb10.text_frame
    p10 = tf10.paragraphs[0]
    p10.text = "TÀI LIỆU/THÔNG TIN ĐÍNH KÈM (NẾU CÓ)"
    p10.font.name = "Arial"
    p10.font.size = Pt(30)
    p10.font.bold = True
    p10.font.color.rgb = C_NAVY

    card10 = s10.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(1.8), Inches(11.733), Inches(4.8))
    card10.fill.solid()
    card10.fill.fore_color.rgb = C_CARD_BG
    card10.line.color.rgb = RGBColor(203, 213, 225)
    tf10_c = card10.text_frame
    tf10_c.word_wrap = True
    tf10_c.margin_left = Inches(0.5)
    tf10_c.margin_right = Inches(0.5)
    tf10_c.margin_top = Inches(0.3)

    links_info = [
        ("• Trải nghiệm trực tiếp ứng dụng KID-LESSON AI:", "https://tinyurl.com/kid-lesson-ai-app (Web App & QR Code truy cập tức thì)"),
        ("• Thư mục Google Drive chứa hồ sơ thuyết minh dự án:", "https://tinyurl.com/kid-lesson-ai-drive (File Word Kế hoạch 26 trang, 10 giáo án mẫu, Bảng số liệu thực nghiệm)"),
        ("• Video 5 phút thuyết minh sáng kiến sư phạm (YouTube):", "https://tinyurl.com/kid-lesson-ai-video5m (Video quay lại hoạt động thực tế của cô và trẻ tại trường)"),
        ("• Nguồn tham khảo pháp lý sư phạm:", "Chương trình Giáo dục Mầm non ban hành kèm Thông tư số 51/2020/TT-BGDĐT của Bộ Giáo dục và Đào tạo."),
        ("Lưu ý:", "Tất cả các đường dẫn trên đã được chia sẻ ở chế độ công khai để Ban Giám khảo tiện tra cứu.")
    ]
    for i, (t_l, d_l) in enumerate(links_info):
        p_l = tf10_c.paragraphs[0] if i == 0 else tf10_c.add_paragraph()
        p_l.text = f"{t_l}\n   {d_l}"
        p_l.font.name = "Arial"
        p_l.font.size = Pt(12)
        p_l.font.color.rgb = C_DARK
        if "•" in t_l:
            p_l.font.bold = True

    # ==========================================================
    # SLIDE 11: KẾT THÚC / TRI ÂN
    # ==========================================================
    s11 = prs.slides.add_slide(blank_layout)
    # Full Navy Background
    bg11 = s11.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0), Inches(0), Inches(13.333), Inches(7.5))
    bg11.fill.solid()
    bg11.fill.fore_color.rgb = C_NAVY
    bg11.line.color.rgb = C_NAVY

    # Center Text
    tb11 = s11.shapes.add_textbox(Inches(1.0), Inches(1.2), Inches(11.333), Inches(5.0))
    tf11 = tb11.text_frame
    tf11.word_wrap = True
    p11_top = tf11.paragraphs[0]
    p11_top.text = "BỘ GIÁO DỤC VÀ ĐÀO TẠO  •  RMIT UNIVERSITY"
    p11_top.font.name = "Arial"
    p11_top.font.size = Pt(14)
    p11_top.font.bold = True
    p11_top.font.color.rgb = RGBColor(147, 197, 253)
    p11_top.alignment = PP_ALIGN.CENTER

    p11_sub = tf11.add_paragraph()
    p11_sub.text = "NGÀY HỘI NHÀ GIÁO SÁNG TẠO VỚI CÔNG NGHỆ SỐ VÀ TRÍ TUỆ NHÂN TẠO\nGiải thưởng Tiên phong Ứng dụng AI trong Giáo dục Việt Nam 2026"
    p11_sub.font.name = "Arial"
    p11_sub.font.size = Pt(18)
    p11_sub.font.bold = True
    p11_sub.font.color.rgb = C_WHITE
    p11_sub.alignment = PP_ALIGN.CENTER

    p11_quote = tf11.add_paragraph()
    p11_quote.text = "\n\"Trí tuệ nhân tạo không sinh ra để thay thế người thầy, mà để giải phóng người thầy khỏi áp lực sổ sách cơ học — trao quyền để cô giáo dành trọn tình yêu thương và sự sáng tạo cho từng mầm non tương lai!\""
    p11_quote.font.name = "Arial"
    p11_quote.font.size = Pt(14)
    p11_quote.font.italic = True
    p11_quote.font.color.rgb = RGBColor(226, 232, 240)
    p11_quote.alignment = PP_ALIGN.CENTER

    p11_thanks = tf11.add_paragraph()
    p11_thanks.text = "\n\nTRÂN TRỌNG CẢM ƠN BAN GIÁM KHẢO VÀ QUÝ THẦY CÔ!"
    p11_thanks.font.name = "Arial"
    p11_thanks.font.size = Pt(22)
    p11_thanks.font.bold = True
    p11_thanks.font.color.rgb = RGBColor(245, 158, 11) # Amber gold
    p11_thanks.alignment = PP_ALIGN.CENTER

    # Save presentation
    prs.save(filename)
    print(f"Successfully generated 11-slide presentation: {filename}")

if __name__ == "__main__":
    create_deck()
