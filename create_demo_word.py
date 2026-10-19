# -*- coding: utf-8 -*-
"""
Tạo file Word (.docx) Kịch bản Quay Màn hình 5 phút Demo Sản phẩm KID-LESSON AI
Thiết kế trang trọng, đẹp mắt, bảng biểu chuẩn thể thức, dễ đọc cho cô giáo vừa quay vừa thuyết minh.
"""

import sys
import os
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

import docx
from docx import Document
from docx.shared import Inches, Pt, RGBColor, Mm
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import nsdecls, qn

def set_cell_background(cell, fill_hex):
    tcPr = cell._element.get_or_add_tcPr()
    shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{fill_hex}"/>')
    tcPr.append(shd)

def set_cell_margins(cell, top=120, bottom=120, left=140, right=140):
    tcPr = cell._element.get_or_add_tcPr()
    tcMar = parse_xml(
        f'<w:tcMar {nsdecls("w")}>'
        f'<w:top w:w="{top}" w:type="dxa"/>'
        f'<w:bottom w:w="{bottom}" w:type="dxa"/>'
        f'<w:left w:w="{left}" w:type="dxa"/>'
        f'<w:right w:w="{right}" w:type="dxa"/>'
        f'</w:tcMar>'
    )
    tcPr.append(tcMar)

def set_table_borders(table, color="CBD5E1", sz="4"):
    tblPr = table._element.xpath('w:tblPr')
    if tblPr:
        borders = parse_xml(
            f'<w:tblBorders {nsdecls("w")}>'
            f'<w:top w:val="single" w:sz="{sz}" w:space="0" w:color="{color}"/>'
            f'<w:left w:val="none"/>'
            f'<w:bottom w:val="single" w:sz="{sz}" w:space="0" w:color="{color}"/>'
            f'<w:right w:val="none"/>'
            f'<w:insideH w:val="single" w:sz="{sz}" w:space="0" w:color="{color}"/>'
            f'<w:insideV w:val="single" w:sz="{sz}" w:space="0" w:color="{color}"/>'
            f'</w:tblBorders>'
        )
        tblPr[0].append(borders)

def build_docx():
    doc = Document()

    # Thiết lập lề A4
    for section in doc.sections:
        section.top_margin = Mm(20)
        section.bottom_margin = Mm(20)
        section.left_margin = Mm(18)
        section.right_margin = Mm(18)
        section.header_distance = Mm(12)
        section.footer_distance = Mm(12)

    # 1. TIÊU ĐỀ ĐẦU TRANG & DẢI THÔNG TIN DỰ THI
    p_comp = doc.add_paragraph()
    p_comp.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run_comp = p_comp.add_run("DIỄN ĐÀN ĐỔI MỚI SÁNG TẠO GIÁO DỤC VIỆT NAM VỚI TRÍ TUỆ NHÂN TẠO 2026\nGIẢI THƯỞNG TIÊN PHONG ỨNG DỤNG AI TRONG GIÁO DỤC VIỆT NAM (BẢNG A: MẦM NON & TIỂU HỌC)")
    run_comp.font.name = "Times New Roman"
    run_comp.font.size = Pt(10)
    run_comp.font.bold = True
    run_comp.font.color.rgb = RGBColor(0x43, 0x38, 0xCA) # Indigo

    # Tiêu đề chính
    p_title = doc.add_paragraph()
    p_title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_title.paragraph_format.space_before = Pt(6)
    p_title.paragraph_format.space_after = Pt(2)
    run_title = p_title.add_run("KỊCH BẢN QUAY MÀN HÌNH DEMO SẢN PHẨM (5 PHÚT)\nKID-LESSON AI")
    run_title.font.name = "Times New Roman"
    run_title.font.size = Pt(16)
    run_title.font.bold = True
    run_title.font.color.rgb = RGBColor(0x1E, 0x1B, 0x4B)

    # Tiêu đề phụ
    p_sub = doc.add_paragraph()
    p_sub.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_sub.paragraph_format.space_after = Pt(12)
    run_sub = p_sub.add_run("Hệ Thống Trợ Lý AI Tạo Sinh Kế Hoạch Bài Dạy Điện Tử & Kho Học Liệu Số 0 Đồng")
    run_sub.font.name = "Times New Roman"
    run_sub.font.size = Pt(11.5)
    run_sub.font.italic = True
    run_sub.font.color.rgb = RGBColor(0x47, 0x55, 0x69)

    # Hộp thông tin tóm tắt
    tbl_meta = doc.add_table(rows=1, cols=1)
    tbl_meta.alignment = WD_TABLE_ALIGNMENT.CENTER
    cell_meta = tbl_meta.cell(0, 0)
    cell_meta.width = Inches(7.0)
    set_cell_background(cell_meta, "F8FAFC")
    set_cell_margins(cell_meta, top=140, bottom=140, left=180, right=180)
    
    # Border trái
    tcPr = cell_meta._element.get_or_add_tcPr()
    tcBorders = parse_xml(
        f'<w:tcBorders {nsdecls("w")}>'
        f'<w:top w:val="single" w:sz="4" w:space="0" w:color="CBD5E1"/>'
        f'<w:left w:val="single" w:sz="24" w:space="0" w:color="4F46E5"/>'
        f'<w:bottom w:val="single" w:sz="4" w:space="0" w:color="CBD5E1"/>'
        f'<w:right w:val="single" w:sz="4" w:space="0" w:color="CBD5E1"/>'
        f'</w:tcBorders>'
    )
    tcPr.append(tcBorders)

    p_m = cell_meta.paragraphs[0]
    p_m.paragraph_format.line_spacing = 1.25
    p_m.paragraph_format.space_after = Pt(0)
    
    runs_meta = [
        ("• Hình thức thực hiện: ", True), ("Quay màn hình máy tính trực tiếp (Screencast Walkthrough 100%), không cảnh quay ngoại cảnh.\n", False),
        ("• Tác giả - Giáo viên thực hiện: ", True), ("Nguyễn Thị Tiên – Trường Mầm non Phúc Sơn B (Hà Nội).\n", False),
        ("• Thời lượng chuẩn quy định: ", True), ("Tối đa 05 phút (Thời lượng kịch bản: Đúng 04 phút 35 giây, có nhịp dừng thao tác chuột).\n", False),
        ("• Đường dẫn ứng dụng trực tuyến: ", True), ("https://annethanks.github.io/kid-lesson-ai/\n", False),
        ("• Căn cứ pháp lý sư phạm: ", True), ("Thông tư số 51/2020/TT-BGDĐT của Bộ GD&ĐT & Thể thức Nghị định 30/2020/NĐ-CP.", False)
    ]
    for text, bold in runs_meta:
        r = p_m.add_run(text)
        r.font.name = "Times New Roman"
        r.font.size = Pt(10.5)
        r.font.bold = bold
        r.font.color.rgb = RGBColor(0x1E, 0x29, 0x3B)

    doc.add_paragraph().paragraph_format.space_after = Pt(8)

    # 2. BẢNG PHÂN CẢNH VÀ THAO TÁC CHI TIẾT
    p_sec = doc.add_paragraph()
    p_sec.paragraph_format.space_before = Pt(8)
    p_sec.paragraph_format.space_after = Pt(6)
    r_sec = p_sec.add_run("BẢNG THAO TÁC MÀN HÌNH VÀ LỜI THUYẾT MINH CHI TIẾT TỪNG GIÂY")
    r_sec.font.name = "Times New Roman"
    r_sec.font.size = Pt(12)
    r_sec.font.bold = True
    r_sec.font.color.rgb = RGBColor(0x0F, 0x17, 0x2A)

    table = doc.add_table(rows=7, cols=3)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.autofit = False
    set_table_borders(table, color="94A3B8", sz="6")

    col_widths = [Inches(1.1), Inches(2.5), Inches(3.4)]

    headers = [
        "Thời gian\n(Timeline)",
        "Vị trí màn hình & Thao tác chuột\n(Screencast Action)",
        "Lời thuyết minh của Cô giáo\n(Voice-over Script)"
    ]

    hdr_cells = table.rows[0].cells
    for i, h in enumerate(headers):
        hdr_cells[i].width = col_widths[i]
        set_cell_background(hdr_cells[i], "1E1B4B") # Dark Indigo
        set_cell_margins(hdr_cells[i], top=140, bottom=140, left=140, right=140)
        p = hdr_cells[i].paragraphs[0]
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        p.paragraph_format.space_after = Pt(0)
        r = p.add_run(h)
        r.font.name = "Times New Roman"
        r.font.size = Pt(10.5)
        r.font.bold = True
        r.font.color.rgb = RGBColor(0xFF, 0xFF, 0xFF)

    # Dữ liệu 6 phân đoạn
    data_rows = [
        (
            "0:00 - 0:35\n(35 giây)",
            "Màn hình trang chủ ứng dụng:\n"
            "• Mở sẵn app trên Chrome ở chế độ toàn màn hình (F11).\n"
            "• Rê chuột lướt nhẹ qua dòng chữ: Bảng A - Giải thưởng Tiên phong AI 2026 và logo KID-LESSON AI - MN Phúc Sơn B.\n"
            "• Trỏ chuột vào nút trạng thái màu xanh: '⚡ Offline 0đ (Siêu tốc)'.",
            "\"Kính thưa Ban Giám khảo! Tôi là Nguyễn Thị Tiên, giáo viên Trường Mầm non Phúc Sơn B, Hà Nội. Hôm nay tôi xin phép được demo trực tiếp cách sử dụng KID-LESSON AI – Trợ lý Trí tuệ nhân tạo tạo sinh do tôi xây dựng nhằm giúp cô giáo mầm non soạn Kế hoạch bài dạy chuẩn Bộ GD&ĐT và tạo học liệu số trình chiếu với chi phí 0 đồng.\n\n"
            "Như thầy cô thấy trên màn hình, ứng dụng chạy trực tiếp trên trình duyệt web, hoạt động cực kỳ mượt mà ngay cả ở chế độ Offline không cần mạng Internet và hoàn toàn miễn phí.\""
        ),
        (
            "0:35 - 1:15\n(40 giây)",
            "Khu vực Cột Trái: Thiết lập tiết dạy:\n"
            "• Chuột chọn ô Lứa tuổi: Chọn 'Mẫu giáo bé (3 - 4 tuổi)'.\n"
            "• Giữ mặc định 'Tuần 20'.\n"
            "• Bấm chọn lần lượt các nút ngày: T2 (Âm nhạc), T3 (Nhận biết), T4 (Tạo hình)... để thấy hệ thống tự động đổi thể loại bài học.\n"
            "• Bấm chọn lại Thứ Hai: Ô Đề tài tự gợi ý 'Nghe hát: Hoa thơm bướm lượn'.",
            "\"Để chuẩn bị cho một tuần dạy học, cô giáo chỉ mất chưa đầy 1 phút thiết lập ở cột bên trái:\n\n"
            "Đầu tiên, tôi chọn lứa tuổi lớp mình phụ trách, ví dụ: Lớp Mẫu giáo bé 3-4 tuổi; chọn khoảng thời gian tuần học.\n\n"
            "Tiếp theo, tôi bấm chọn các ngày từ Thứ Hai đến Thứ Sáu. Hệ thống đã cài sẵn phân phối chương trình: Thứ Hai là Âm nhạc, Thứ Ba là Nhận biết, Thứ Tư Tạo hình, Thứ Năm Văn học và Thứ Sáu Vận động. Cô giáo có thể tự do gõ đề tài mới hoặc bấm chọn nhanh từ ngân hàng bài mẫu gợi ý sẵn có.\""
        ),
        (
            "1:15 - 2:20\n(65 giây)",
            "Cột Phải: Tạo Giáo án 4 cột & Chỉnh sửa trực tiếp:\n"
            "• Chuột bấm nút màu tím nổi bật: '✨ Bấm Tạo Kế Hoạch Bài Dạy Bằng AI'.\n"
            "• Đợi 2 giây: Bảng giáo án 4 cột hiện ra ngay ngắn, hiệu ứng pháo hoa chúc mừng.\n"
            "• Cuộn nhẹ trang giáo án xuống dưới, trỏ chuột vào từng cột: Mục tiêu 3 phần, Chuẩn bị Cô & Trẻ, Tiến trình 3 bước.\n"
            "• Nhấp đúp chuột vào một dòng chữ bất kỳ và gõ thêm vài từ để minh họa tính năng sửa trực tiếp (Human-in-the-loop).\n"
            "• Bấm nút '📋 Xem Toàn Tuần (5 Ngày)' ở trên đầu để thấy trọn vẹn cả tuần.",
            "\"Bây giờ, tôi chỉ cần bấm một nút duy nhất: 'Bấm Tạo Kế Hoạch Bài Dạy Bằng AI'.\n\n"
            "Chỉ sau 2 giây, toàn bộ Kế hoạch bài dạy đã được khởi tạo hoàn chỉnh theo đúng quy cách bảng 4 cột bám sát Thông tư 51/2020 của Bộ Giáo dục và Đào tạo:\n"
            "• Cột Mục tiêu có đủ 3 phần: Kiến thức, Kỹ năng và Thái độ.\n"
            "• Cột Chuẩn bị phân định rõ đồ dùng của cô và đồ dùng của trẻ.\n"
            "• Cột Cách tiến hành thiết kế chuẩn 3 bước sư phạm: Gây hứng thú, Hoạt động trọng tâm và Kết thúc.\n\n"
            "Đặc biệt, cô giáo giữ vai trò làm chủ chuyên môn – tôi có thể bấm trực tiếp vào bất kỳ ô chữ nào trên màn hình để chỉnh sửa nhanh theo điều kiện thực tế lớp mình. Tôi cũng có thể bấm 'Xem Toàn Tuần' để kiểm tra liền mạch giáo án của cả 5 ngày.\""
        ),
        (
            "2:20 - 3:20\n(60 giây)",
            "Studio Slide Canva & Trình chiếu Smart TV:\n"
            "• Trên thanh công cụ đỉnh, bấm nút '🎨 Tạo Slide'.\n"
            "• Modal hiện lên hiển thị 6 slide xem trước.\n"
            "• Rê chuột chỉ vào nút '⚡ Tải File .pptx (Chuẩn Canva)'.\n"
            "• Bấm tiếp nút xanh lá: '▶️ Bắt Đầu Chiếu Toàn Màn Hình'.\n"
            "• Màn hình vào giao diện Smart TV Mode.\n"
            "• Bấm nút '🔊 Đọc Cho Bé Nghe' (để âm thanh AI đọc khoảng 3 giây câu mở đầu).\n"
            "• Bấm phím mũi tên qua lại để chuyển slide, sau đó bấm nút '✖ Thoát' (hoặc ấn ESC).",
            "\"Tiếp theo là khâu chuẩn bị bài giảng điện tử. Tôi bấm nút 'Tạo Slide' trên thanh công cụ.\n\n"
            "Hộp thoại Studio mở ra với 2 tiện ích nổi bật:\n"
            "Thứ nhất, tôi có thể tải ngay file PowerPoint chuẩn tỷ lệ 16:9 để kéo thả vào Canva for Education biên tập tranh ảnh mầm non.\n\n"
            "Thứ hai, nếu lớp học có tivi hoặc máy chiếu, tôi chỉ cần bấm 'Bắt đầu chiếu toàn màn hình'. Ứng dụng ngay lập tức chuyển sang chế độ Smart TV lớp học. Tôi bấm nút 'Đọc Cho Bé Nghe'...\n\n"
            "(Dừng 2-3 giây cho tiếng AI đọc trên Smart TV)\n\n"
            "...Hệ thống có sẵn giọng đọc AI tiếng Việt tự động đọc thơ, kể chuyện và hiệu ứng âm thanh chúc mừng khi trẻ trả lời đúng, giúp tiết học sinh động mà cô không cần mất công tìm kiếm phần mềm ngoài.\""
        ),
        (
            "3:20 - 4:05\n(45 giây)",
            "Xuất File Word (.doc) & Quản lý Thư viện số:\n"
            "• Trên thanh công cụ, bấm nút '📄 Xuất Word (.doc)'.\n"
            "• Tệp Word tải xuống khay trình duyệt ➔ Bấm mở file Word lên màn hình (khoảng 3 giây) để thấy bảng biểu kẻ ô chuẩn in ấn.\n"
            "• Quay lại app, bấm nút '💾 Lưu Thư Viện'.\n"
            "• Bấm chuyển sang Tab '📂 Thư Viện Giáo Án Của Cô': Rê chuột qua các thẻ bài dạy đã lưu trong máy.",
            "\"Sau khi hoàn thiện tiết dạy, tôi bấm 'Xuất Word'. Ngay lập tức, một file Word được tải về máy với định dạng bảng kẻ ô chuẩn chỉnh theo thể thức văn bản hành chính, cô giáo chỉ việc in ấn để trình Ban Giám hiệu ký duyệt.\n\n"
            "Đồng thời, khi bấm 'Lưu Thư Viện', bài dạy sẽ được lưu trữ an toàn trong kho dữ liệu cá nhân của cô ngay trên trình duyệt. Cô có thể xem lại bất cứ lúc nào hoặc xuất file sao lưu chia sẻ cho đồng nghiệp mà không sợ bị lộ thông tin cá nhân lên mạng.\""
        ),
        (
            "4:05 - 4:35\n(30 giây)",
            "Quay lại Tab Soạn bài & Lời kết:\n"
            "• Chuyển lại Tab Soạn bài.\n"
            "• Rê chuột vào góc trên bên phải hoặc cuộn nhẹ màn hình tổng thể.\n"
            "• Hiển thị thông tin tác giả và link app.",
            "\"Qua triển khai thực tế tại Trường Mầm non Phúc Sơn B, KID-LESSON AI đã giúp giáo viên chúng tôi giảm từ 14 giờ xuống chỉ còn 2,5 giờ soạn bài mỗi tuần, tiết kiệm 83% thời gian mà chất lượng bài giảng lại phong phú, hấp dẫn hơn rất nhiều.\n\n"
            "Công cụ này hoàn toàn miễn phí, dễ dùng và sẵn sàng nhân rộng cho mọi giáo viên mầm non trên cả nước.\n\n"
            "Xin trân trọng cảm ơn Ban Giám khảo đã lắng nghe!\""
        )
    ]

    for row_idx, (col_time, col_screen, col_voice) in enumerate(data_rows):
        cells = table.rows[row_idx + 1].cells
        for c_i, w in enumerate(col_widths):
            cells[c_i].width = w
            set_cell_margins(cells[c_i], top=120, bottom=120, left=120, right=120)

        # Màu nền xen kẽ nhẹ
        bg_color = "FFFFFF" if row_idx % 2 == 0 else "F8FAFC"
        set_cell_background(cells[0], "EEF2FF" if row_idx % 2 == 0 else "E0E7FF") # Cột thời gian tím nhạt
        set_cell_background(cells[1], bg_color)
        set_cell_background(cells[2], bg_color)

        # Cột 1: Thời gian
        p0 = cells[0].paragraphs[0]
        p0.alignment = WD_ALIGN_PARAGRAPH.CENTER
        p0.paragraph_format.line_spacing = 1.15
        p0.paragraph_format.space_after = Pt(0)
        r0 = p0.add_run(col_time)
        r0.font.name = "Times New Roman"
        r0.font.size = Pt(10)
        r0.font.bold = True
        r0.font.color.rgb = RGBColor(0x31, 0x2E, 0x81)

        # Cột 2: Thao tác màn hình
        p1 = cells[1].paragraphs[0]
        p1.alignment = WD_ALIGN_PARAGRAPH.LEFT
        p1.paragraph_format.line_spacing = 1.15
        p1.paragraph_format.space_after = Pt(0)
        lines1 = col_screen.split("\n")
        for idx_l, line in enumerate(lines1):
            if idx_l > 0:
                p1.add_run("\n")
            r1 = p1.add_run(line)
            r1.font.name = "Times New Roman"
            r1.font.size = Pt(10)
            if idx_l == 0:
                r1.font.bold = True
                r1.font.color.rgb = RGBColor(0x0F, 0x17, 0x2A)
            else:
                r1.font.color.rgb = RGBColor(0x33, 0x41, 0x55)

        # Cột 3: Lời thuyết minh
        p2 = cells[2].paragraphs[0]
        p2.alignment = WD_ALIGN_PARAGRAPH.LEFT
        p2.paragraph_format.line_spacing = 1.2
        p2.paragraph_format.space_after = Pt(0)
        lines2 = col_voice.split("\n\n")
        for idx_l, para in enumerate(lines2):
            if idx_l > 0:
                p2.add_run("\n\n")
            r2 = p2.add_run(para)
            r2.font.name = "Times New Roman"
            r2.font.size = Pt(10.5)
            if "(Dừng 2-3 giây" in para:
                r2.font.italic = True
                r2.font.bold = True
                r2.font.color.rgb = RGBColor(0xDC, 0x26, 0x26) # Đỏ cảnh báo nhịp dừng
            else:
                r2.font.color.rgb = RGBColor(0x1E, 0x29, 0x3B)

    # 3. MỤC LƯU Ý KỸ THUẬT KHI QUAY
    doc.add_paragraph().paragraph_format.space_after = Pt(8)
    p_tips_title = doc.add_paragraph()
    p_tips_title.paragraph_format.space_before = Pt(8)
    p_tips_title.paragraph_format.space_after = Pt(4)
    r_tips_title = p_tips_title.add_run("HƯỚNG DẪN KỸ THUẬT QUAY MÀN HÌNH NHANH (MỘT ĐỢT QUAY - ONE TAKE)")
    r_tips_title.font.name = "Times New Roman"
    r_tips_title.font.size = Pt(11.5)
    r_tips_title.font.bold = True
    r_tips_title.font.color.rgb = RGBColor(0x1E, 0x1B, 0x4B)

    tips = [
        ("1. Chuẩn bị trình duyệt: ", True), ("Mở sẵn trang web https://annethanks.github.io/kid-lesson-ai/ trên trình duyệt Chrome. Nhấn phím F11 để đưa về chế độ toàn màn hình giúp video gọn gàng, không bị lộ các tab cá nhân.\n", False),
        ("2. Phần mềm quay màn hình: ", True), ("Có thể dùng tính năng có sẵn trên Windows bằng cách bấm tổ hợp phím Windows + Alt + R (Xbox Game Bar), hoặc dùng OBS Studio / Camtasia. Nhớ bật tùy chọn ghi âm thanh micro (giọng cô nói) và âm thanh hệ thống (Desktop Audio để thu được giọng đọc AI trên Smart TV).\n", False),
        ("3. Tốc độ di chuột: ", True), ("Rê chuột chậm rãi, dứt khoát. Sau mỗi lần click nút (ví dụ bấm nút 'Tạo Kế hoạch bài dạy' hoặc 'Tạo Slide'), hãy dừng chuột cố định 1 đến 2 giây cho người xem nhìn rõ kết quả rồi mới tiếp tục nói câu tiếp theo.\n", False),
        ("4. Căn chỉnh thời gian: ", True), ("Tổng thời lượng video đạt khoảng từ 04 phút 30 giây đến 04 phút 45 giây là đạt chuẩn đẹp nhất, hoàn toàn nằm trong khung quy định 5 phút của Ban Giám khảo.", False)
    ]

    p_tips = doc.add_paragraph()
    p_tips.paragraph_format.line_spacing = 1.25
    for text, bold in tips:
        r = p_tips.add_run(text)
        r.font.name = "Times New Roman"
        r.font.size = Pt(10.5)
        r.font.bold = bold
        r.font.color.rgb = RGBColor(0x33, 0x41, 0x55)

    # 4. CHỮ KÝ VÀ NGÀY THÁNG
    doc.add_paragraph().paragraph_format.space_after = Pt(10)
    tbl_sign = doc.add_table(rows=1, cols=2)
    tbl_sign.alignment = WD_TABLE_ALIGNMENT.CENTER
    tbl_sign.autofit = False
    set_table_borders(tbl_sign, color="FFFFFF", sz="0")
    
    c_left = tbl_sign.cell(0, 0)
    c_left.width = Inches(3.5)
    p_l = c_left.paragraphs[0]
    p_l.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r_l = p_l.add_run("XÁC NHẬN CỦA ĐƠN VỊ\nTRƯỜNG MẦM NON PHÚC SƠN B\n\n\n\n...................................................")
    r_l.font.name = "Times New Roman"
    r_l.font.size = Pt(10.5)
    r_l.font.italic = True
    r_l.font.color.rgb = RGBColor(0x64, 0x74, 0x8B)

    c_right = tbl_sign.cell(0, 1)
    c_right.width = Inches(3.5)
    p_r = c_right.paragraphs[0]
    p_r.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r_r = p_r.add_run("Hà Nội, ngày 19 tháng 10 năm 2026\nGIÁO VIÊN THỰC HIỆN\n\n\n\nNguyễn Thị Tiên")
    r_r.font.name = "Times New Roman"
    r_r.font.size = Pt(10.5)
    r_r.font.bold = True
    r_r.font.color.rgb = RGBColor(0x1E, 0x1B, 0x4B)

    output_path = os.path.abspath("Kich_Ban_Demo_Quay_Man_Hinh_5_Phut_KID_LESSON_AI.docx")
    doc.save(output_path)
    print(f"File Word created successfully at: {output_path}")

if __name__ == "__main__":
    build_docx()
