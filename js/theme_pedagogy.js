/**
 * KID-LESSON AI - THEME PEDAGOGY REGISTRY & DYNAMIC SYNTHESIZER
 * Ma trận Sư phạm Chuyên sâu theo 10 Chủ đề GDMN & Bộ tổng hợp chủ đề tùy chỉnh
 * Bám sát Chương trình GDMN - Thông tư 51/2020/TT-BGDĐT
 */

(function () {
  "use strict";

  const themePedagogyRegistry = {
    // ==========================================
    // 1. PHƯƠNG TIỆN GIAO THÔNG
    // ==========================================
    giao_thong: {
      id: "giao_thong",
      name: "Phương tiện Giao thông",
      icon: "🚗",
      keywords: ["giao thông", "ô tô", "xe máy", "xe buýt", "xe đạp", "tàu hỏa", "máy bay", "thuyền", "đèn đỏ", "đèn xanh", "đèn tín hiệu", "đường bộ", "đường sắt", "đường thủy", "hàng không", "an toàn giao thông"],
      activities: {
        am_nhac: {
          flagship: { title: "Dạy hát: 'Em tập lái ô tô' (Đoàn Phi Lực) - NDKH: TCÂN: 'Đèn đỏ, đèn xanh'", ndtt: "DH: Em tập lái ô tô", ndkh: "TCÂN: Đèn đỏ, đèn xanh", badge: "Âm nhạc" },
          presets: [
            { title: "Dạy hát: 'Em tập lái ô tô' - NDKH: TCÂN: 'Đèn đỏ, đèn xanh'", ndtt: "DH: Em tập lái ô tô", ndkh: "TCÂN: Đèn đỏ, đèn xanh", tag: "Dạy hát" },
            { title: "Nghe hát: 'Đoàn tàu nhỏ xíu' - NDKH: VĐTN: 'Lái tàu hỏa'", ndtt: "NH: Đoàn tàu nhỏ xíu", ndkh: "VĐTN: Lái tàu hỏa", tag: "Nghe hát" },
            { title: "Vận động múa: 'Bạn ơi có biết' (Phương tiện giao thông)", ndtt: "VĐM: Bạn ơi có biết", ndkh: "TCÂN: Tai ai tinh", tag: "Vận động múa" },
            { title: "Nghe hát: 'Anh phi công ơi' - NDKH: TC: Máy bay cất cánh", ndtt: "NH: Anh phi công ơi", ndkh: "TC: Máy bay cất cánh", tag: "Nghe hát" }
          ],
          objectives: {
            knowledge: [
              "Trẻ biết tên bài hát 'Em tập lái ô tô' (Đoàn Phi Lực), cảm nhận giai điệu vui tươi rộn rã.",
              "Trẻ hiểu ô tô là phương tiện giao thông đường bộ, chạy bon bon trên đường chở người và hàng hóa.",
              "Hiểu luật chơi và cách chơi của trò chơi âm nhạc 'Đèn đỏ, đèn xanh'."
            ],
            skills: [
              "Hát đúng giai điệu, lời ca, phát âm to rõ ràng từng từ.",
              "Rèn kỹ năng vận động phụ họa hai tay xoay vô lăng lái xe nhịp nhàng theo giai điệu bài hát.",
              "Phát triển phản xạ nghe nhạc: Nhạc nhanh lái nhanh, nhạc dừng kết hợp hiệu lệnh đèn đỏ thì dừng bánh."
            ],
            attitudes: [
              "Trẻ hào hứng, tự tin tham gia biểu diễn ca hát cùng cô và bạn.",
              "Giáo dục ý thức an toàn giao thông: Ngồi ngay ngắn trên xe, chấp hành tín hiệu đèn giao thông."
            ]
          },
          preparation: {
            teacher: [
              "Đàn organ, loa kéo, nhạc beat bài hát 'Em tập lái ô tô'.",
              "Mô hình ngã tư đường phố, biển báo đèn giao thông (đỏ, vàng, xanh), vô lăng mẫu.",
              "Giáo án điện tử slide hình ảnh các phương tiện giao thông chạy trên đường phố."
            ],
            students: [
              "Mỗi trẻ một vô lăng mini bằng bìa cứng hoặc vòng nhựa thể dục.",
              "Mũ múa ô tô, xe máy; ghế ngồi xếp hình hàng ghế ô tô."
            ]
          },
          procedure: {
            intro: `1. Ổn định tổ chức: (1 - 2 phút)
- Cô mở hiệu ứng âm thanh tiếng còi xe: "Bíp bíp bíp!".
- Cô hỏi: Các con vừa nghe thấy tiếng còi của phương tiện gì thế nhỉ? (Xe ô tô).
- Đố các con xe ô tô chạy ở đâu? (Trên đường bộ).
- Cô dẫn dắt: Hôm nay cô sẽ dạy các con bài hát rất hay về một bạn nhỏ tập làm bác tài xế lái ô tô, đó là bài hát "Em tập lái ô tô" của nhạc sĩ Đoàn Phi Lực nhé!`,
            instruction: `2. Phương pháp, hình thức tổ chức: (18 - 22 phút)
2.1. Dạy hát: "Em tập lái ô tô" (Đoàn Phi Lực)
- Cô hát lần 1: Thể hiện giai điệu tươi vui, nụ cười rạng rỡ, ánh mắt lấp lánh.
- Cô giới thiệu nội dung: Bài hát kể về ước mơ của bạn nhỏ tập lái ô tô đưa cô giáo và các bạn đi thăm cảnh đẹp quê hương.
- Cô hát lần 2: Kết hợp làm điệu bộ hai tay xoay vô lăng lái xe nhịp nhàng.
- Dạy trẻ hát:
  + Cả lớp hát cùng cô 2 - 3 lần (cô chú ý sửa sai cao độ và phát âm).
  + Từng tổ thi đua nhau hát (Tổ Ô tô con, Tổ Xe buýt, Tổ Tàu hỏa).
  + Nhóm bạn trai, nhóm bạn gái hát luân phiên; cá nhân trẻ xung phong biểu diễn.

2.2. Trò chơi âm nhạc: "Đèn đỏ, đèn xanh"
- Cách chơi: Cô phát cho mỗi trẻ 1 chiếc vô lăng. Cả lớp làm các bác tài xế vừa lái xe vừa hát theo điệu nhạc. Cô đóng vai cảnh sát giao thông giơ biển hiệu:
  + Biển ĐÈN XANH: Trẻ lái xe bon bon theo nhịp nhạc.
  + Biển ĐÈN VÀNG: Trẻ giảm tốc độ đi chậm lại.
  + Biển ĐÈN ĐỎ: Nhạc dừng, trẻ phanh xe dừng lại ngay tại chỗ.
- Luật chơi: Xe nào vượt đèn đỏ sẽ phải nhảy lò cò 1 vòng quanh lớp.`,
            conclusion: `3. Kết thúc: (1 - 2 phút)
- Cô nhận xét, tuyên dương các bác tài xế nhí hát hay và tuân thủ luật giao thông rất giỏi.
- Cả lớp vừa hát bài "Em tập lái ô tô" vừa làm đoàn xe nối đuôi nhau ra sân dạo chơi.`
          }
        },
        nhan_biet: {
          flagship: { title: "Khám phá khoa học: Xe ô tô con và Xe buýt chở khách", ndtt: "Nhận biết: Xe ô tô con & Xe buýt", ndkh: "TC: Bến xe vui vẻ", badge: "Nhận biết" },
          presets: [
            { title: "Khám phá khoa học: Xe ô tô con và Xe buýt chở khách", ndtt: "Nhận biết: Xe ô tô con & Xe buýt", ndkh: "TC: Bến xe vui vẻ", tag: "Mẫu Chuẩn" },
            { title: "Nhận biết và phân biệt: Xe máy và Xe đạp", ndtt: "Phân biệt xe máy & xe đạp", ndkh: "TC: Ai nhanh mắt", tag: "So sánh" },
            { title: "Khám phá: Ý nghĩa 3 màu đèn tín hiệu giao thông", ndtt: "Đèn tín hiệu giao thông", ndkh: "TC: Ngã tư đường phố", tag: "Luật GT" },
            { title: "Toán sơ đẳng: Đếm số bánh xe ô tô trong phạm vi 4", ndtt: "Đếm đến 4 - Nhận biết số 4", ndkh: "TC: Ghép bánh xe", tag: "Toán" }
          ],
          objectives: {
            knowledge: [
              "Trẻ nhận biết, gọi đúng tên và chỉ rõ các bộ phận đặc trưng của Xe ô tô con và Xe buýt (đầu xe, thân xe, bánh xe tròn xoe, gương chiếu hậu, đèn pha, cửa lên xuống).",
              "Trẻ hiểu công dụng: Ô tô con chở gia đình ít người (4 - 7 chỗ), xe buýt to lớn chở được nhiều hành khách; cả hai đều là phương tiện giao thông đường bộ chạy bằng nhiên liệu.",
              "Biết nơi đón xe buýt là bến xe / trạm dừng xe buýt quy định."
            ],
            skills: [
              "Rèn kỹ năng quan sát, so sánh và phát hiện điểm giống - khác nhau giữa hai loại xe.",
              "Phát triển ngôn ngữ mạch lạc, phát âm chuẩn các thuật ngữ giao thông đường bộ."
            ],
            attitudes: [
              "Trẻ hào hứng tham gia các trò chơi phân loại phương tiện giao thông.",
              "Giáo dục văn minh khi đi xe buýt: Xếp hàng lên xe, nhường ghế cho người già và em nhỏ, không thò đầu thò tay qua cửa sổ."
            ]
          },
          preparation: {
            teacher: [
              "Mô hình xe ô tô con và xe buýt sắc nét; video AI cảnh xe buýt tấp vào trạm đón hành khách.",
              "Mô hình 2 bến đỗ: Bến xe ô tô gia đình và Trạm dừng xe buýt công cộng.",
              "Biển báo trạm xe buýt, vé xe buýt trải nghiệm."
            ],
            students: [
              "Mỗi trẻ 1 rổ đựng lô tô ô tô con và xe buýt.",
              "Mũ đội đầu biểu tượng ô tô con và xe buýt."
            ]
          },
          procedure: {
            intro: `1. Ổn định tổ chức: (1 - 2 phút)
- Cô đọc câu đố vui:
  "Xe gì bốn bánh bon bon,
   Chở người đi lại đường gần đường xa,
   Có còi bíp bíp vang reo,
   Đố bé đoán đúng là xe gì nào?"
- Bé đoán xem là xe gì? (Xe ô tô). Hôm nay cô mời các bé cùng đến 'Thế giới xe cộ' để khám phá chiếc ô tô con và chiếc xe buýt khổng lồ nhé!`,
            instruction: `2. Phương pháp, hình thức tổ chức: (18 - 22 phút)
2.1. Khám phá Xe ô tô con:
- Cho trẻ quan sát mô hình ô tô con:
  + Xe ô tô con có những bộ phận nào? (Đầu xe, thân xe, đuôi xe, 4 bánh xe).
  + Bánh xe có hình dạng gì để xe lăn được? (Hình tròn).
  + Ô tô con chở được khoảng mấy người? (4 đến 7 người).
  + Xe chạy ở đâu và phát ra tiếng còi như thế nào? (Chạy trên đường bộ, còi bíp bíp).

2.2. Khám phá Xe buýt công cộng:
- Cho trẻ quan sát video xe buýt đang chạy:
  + Chiếc xe này trông như thế nào? (Rất dài và to lớn, có nhiều ô cửa kính).
  + Xe buýt chở được bao nhiêu người? (Rất nhiều hành khách cùng đi một lúc).
  + Muốn đi xe buýt chúng ta phải đứng đợi ở đâu? (Tại trạm dừng xe buýt).

2.3. So sánh: Xe ô tô con & Xe buýt:
- Giống nhau: Đều có 4 bánh xe tròn trở lên, chạy trên đường bộ, chở người và có còi bíp bíp.
- Khác nhau: Ô tô con nhỏ hơn, chở ít người (gia đình); Xe buýt dài và to hơn, chở được đông đảo hành khách công cộng.

2.4. Trò chơi trải nghiệm:
- Trò chơi 1: "Ai nhanh mắt" - Cô nói đặc điểm, trẻ giơ nhanh lô tô xe tương ứng.
- Trò chơi 2: "Bến xe vui vẻ" - Cô bật nhạc, trẻ làm xe chạy bon bon trên đường. Khi có hiệu lệnh "Về bến!", ô tô con chạy về bãi đỗ gia đình, xe buýt chạy về trạm dừng xe buýt.`,
            conclusion: `3. Kết thúc: (1 - 2 phút)
- Nhận xét buổi học, dặn dò các bé thắt dây an toàn khi ngồi ô tô và không nghịch phá trên xe.
- Cả lớp cùng hát bài "Đường em đi" và chuyển góc chơi.`
          }
        },
        tao_hinh: {
          flagship: { title: "Xé dán và trang trí chiếc ô tô tải rực rỡ", ndtt: "Xé dán ô tô tải", ndkh: "Trưng bày bãi đỗ xe", badge: "Tạo hình" },
          presets: [
            { title: "Xé dán và trang trí chiếc ô tô tải rực rỡ", ndtt: "Xé dán ô tô tải", ndkh: "Trưng bày bãi đỗ xe", tag: "Mẫu Chuẩn" },
            { title: "Nặn bánh xe ô tô tròn xoe từ đất nặn nhiều màu", ndtt: "Nặn bánh xe ô tô", ndkh: "Bé khéo tay", tag: "Nặn" },
            { title: "Vẽ và tô màu chiếc thuyền buồm lướt sóng", ndtt: "Vẽ thuyền buồm", ndkh: "Triển lãm biển xanh", tag: "Vẽ" },
            { title: "In màu trang trí đoàn tàu hỏa nhiều toa", ndtt: "In màu đoàn tàu hỏa", ndkh: "Đoàn tàu sắc màu", tag: "In màu" }
          ],
          objectives: {
            knowledge: [
              "Trẻ nhận biết các hình học cấu tạo nên chiếc ô tô tải: Đầu xe hình chữ nhật đứng, thùng xe hình chữ nhật nằm ngang to dài, bánh xe hình tròn.",
              "Hiểu quy trình xé dải, xé bấm lượn tròn và các bước dán phẳng phiu cân đối."
            ],
            skills: [
              "Rèn sự khéo léo của các ngón tay qua kỹ năng xé dải, xé vụn và dán giấy màu.",
              "Biết phối màu sắc hài hòa (đầu xe đỏ, thùng xe vàng, bánh xe đen) và sắp xếp bố cục bức tranh ở chính giữa tờ giấy."
            ],
            attitudes: [
              "Trẻ say mê, hào hứng sáng tạo ra sản phẩm phương tiện giao thông của riêng mình.",
              "Biết giữ gìn vệ sinh, lau tay sạch sẽ sau khi chấm hồ dán."
            ]
          },
          preparation: {
            teacher: [
              "2 - 3 tranh mẫu xé dán ô tô tải với nhiều màu sắc và chất liệu khác nhau; giá trưng bày tranh.",
              "Giấy A4 có vẽ sẵn đường nhựa và hàng cây; giấy màu thủ công, hồ dán, khăn lau ẩm."
            ],
            students: [
              "Khay đựng giấy màu các loại, lọ hồ dán, đĩa đựng giấy vụn cho từng bàn.",
              "Khăn ẩm lau tay, tâm thế tự tin sáng tạo."
            ]
          },
          procedure: {
            intro: `1. Ổn định tổ chức: (1 - 2 phút)
- Cô cùng trẻ hát vang bài hát "Bác đưa thư vui tính".
- Trò chuyện: Hàng ngày các con thấy những chiếc ô tô tải chở những gì trên đường? (Chở gạch cát xây nhà, chở rau củ quả).
- Giới thiệu bài: Hôm nay đôi bàn tay xinh của các bé sẽ cùng trổ tài xé dán chiếc ô tô tải thật đẹp nhé!`,
            instruction: `2. Phương pháp, hình thức tổ chức: (18 - 22 phút)
* Quan sát và đàm thoại tranh mẫu:
- Cô giới thiệu tranh mẫu xé dán ô tô tải:
  + Đầu xe có hình gì? Màu gì?
  + Thùng xe có hình dạng gì đặc biệt?
  + Những chiếc bánh xe tròn xoe được dán ở đâu?
  + Bức tranh được bố trí cân đối ở giữa trang giấy ra sao?

* Cô làm mẫu và phân tích kỹ năng:
- Chọn giấy màu đỏ xé hình chữ nhật đứng làm đầu xe.
- Chọn giấy màu vàng xé hình chữ nhật nằm ngang to hơn làm thùng xe.
- Chọn giấy màu đen xé bấm cong lượn tròn tạo thành 2 bánh xe.
- Ướm thử các hình lên giấy cho cân đối, sau đó lật mặt sau dùng ngón trỏ chấm lượng hồ vừa đủ, miết phẳng từ giữa ra mép.

* Trẻ thực hiện:
- Trẻ ngồi đúng tư thế, cô mở nhạc không lời nhẹ nhàng.
- Cô đến từng bàn quan sát, hướng dẫn những trẻ còn lúng túng trong kỹ năng xé cong bánh xe; khích lệ trẻ giỏi xé thêm đèn xe và khói xe.

* Trưng bày và nhận xét sản phẩm:
- Trẻ mang tranh lên giá trưng bày "Bãi đỗ xe thông minh".
- Mời trẻ lên giới thiệu bức tranh của mình và nhận xét bài của bạn.
- Cô tổng kết, khen ngợi sự sáng tạo độc đáo của cả lớp.`,
            conclusion: `3. Kết thúc: (1 - 2 phút)
- Cô cùng trẻ thu dọn giấy thừa, lau sạch bàn tay bằng khăn ẩm.
- Cả lớp làm các bác tài xế chở hàng dạo chơi nhẹ nhàng.`
          }
        },
        van_hoc: {
          flagship: { title: "Thơ: 'Đèn đỏ, đèn xanh' (Tác giả: Định Hải)", ndtt: "Thơ: Đèn đỏ, đèn xanh (Định Hải)", ndkh: "Mô hình kịch rối ngã tư", badge: "Văn học" },
          presets: [
            { title: "Thơ: 'Đèn đỏ, đèn xanh' (Tác giả: Định Hải)", ndtt: "Thơ: Đèn đỏ, đèn xanh (Định Hải)", ndkh: "Mô hình kịch rối ngã tư", tag: "Mẫu Chuẩn" },
            { title: "Truyện cổ tích hiện đại: 'Xe lu và Xe ca'", ndtt: "Truyện: Xe lu và Xe ca", ndkh: "Đóng kịch nhân vật", tag: "Truyện kể" },
            { title: "Thơ: 'Cô dạy con' (Bùi Thị Tình)", ndtt: "Thơ: Cô dạy con", ndkh: "Đàm thoại & ngâm thơ", tag: "Thơ" },
            { title: "Đồng dao: 'Đi đường đi lối' - Trò chơi dân gian", ndtt: "Đồng dao: Đi đường đi lối", ndkh: "TC: Qua đường an toàn", tag: "Đồng dao" }
          ],
          objectives: {
            knowledge: [
              "Trẻ nhớ tên bài thơ 'Đèn đỏ, đèn xanh' của nhà thơ Định Hải.",
              "Hiểu nội dung bài thơ: Dạy các bé luật giao thông khi qua ngã tư: Đèn đỏ báo hiệu dừng lại, đèn vàng báo đi chậm chuẩn bị, đèn xanh cho phép tiếp tục đi an toàn."
            ],
            skills: [
              "Trẻ đọc thơ to, rõ lời, diễn cảm, ngắt nhịp đúng 2/2 của thể thơ 4 chữ.",
              "Phát triển ngôn ngữ mạch lạc, trả lời rõ ràng, trọn câu hỏi đàm thoại của cô."
            ],
            attitudes: [
              "Trẻ hứng thú nghe cô đọc thơ và tích cực tham gia đọc thơ cùng các bạn.",
              "Giáo dục ý thức nghiêm chỉnh chấp hành luật giao thông: Đi bộ trên vỉa hè, nắm chặt tay người lớn khi qua đường."
            ]
          },
          preparation: {
            teacher: [
              "Giáo án điện tử, màn hình Smart TV chiếu video hoạt hình nội dung bài thơ 'Đèn đỏ, đèn xanh'.",
              "Mô hình cột đèn tín hiệu giao thông 3 màu phát sáng nhấp nháy; rối que ngã tư đường phố."
            ],
            students: [
              "Ghế ngồi chữ U; mũ múa đèn đỏ, đèn vàng, đèn xanh cho từng trẻ.",
              "Tâm thế chăm chú, hào hứng đón nghe tác phẩm văn học."
            ]
          },
          procedure: {
            intro: `1. Ổn định tổ chức: (1 - 2 phút)
- Cô bật mô hình cột đèn giao thông nhấp nháy 3 màu sắc: Đỏ, Vàng, Xanh.
- Trò chuyện: Khi đi đường cùng bố mẹ ở ngã tư, các con thấy cột đèn này nhắc nhở điều gì?
- Giới thiệu bài thơ: Nhà thơ Định Hải đã sáng tác một bài thơ rất hay về những tín hiệu đèn này, đó là bài thơ "Đèn đỏ, đèn xanh", các con cùng lắng nghe nhé!`,
            instruction: `2. Phương pháp, hình thức tổ chức: (18 - 22 phút)
* Cô đọc thơ cho trẻ nghe:
- Lần 1: Cô đọc diễn cảm thể hiện giọng điệu vui tươi, rộn ràng, dứt khoát. Giới thiệu tên bài thơ, tác giả.
- Lần 2: Cô đọc thơ kết hợp sa bàn rối que sinh động trên nền nhạc nhẹ.

* Đàm thoại và trích dẫn nội dung bài thơ:
- Cô vừa đọc cho các con nghe bài thơ gì? Do ai sáng tác?
- Đèn đỏ báo hiệu điều gì các con? (Đèn đỏ báo dừng lại ngay).
  Trích: 'Đèn đỏ báo hiệu / Mau mau dừng lại'.
- Đèn vàng nhắc nhở chúng ta thế nào? (Đi chậm lại chuẩn bị).
  Trích: 'Đèn vàng đi chậm / Chờ đợi một chút'.
- Khi đèn xanh bật lên thì xe cộ được làm gì? (Được đi qua đường).
  Trích: 'Đèn xanh bật sáng / Nhanh chân bước qua'.
- Bài thơ muốn nhắc nhở các con điều gì khi tham gia giao thông? (Chấp hành đèn tín hiệu để an toàn cho mình và mọi người).

* Dạy trẻ đọc thơ:
- Cả lớp đọc thơ cùng cô 2 - 3 lần.
- Thi đua giữa các tổ: Tổ Đèn Đỏ, Tổ Đèn Vàng, Tổ Đèn Xanh.
- Nhóm bạn trai, bạn gái đọc thơ đối đáp; cá nhân trẻ lên đọc diễn cảm.
- Cho cả lớp đọc lại 1 lần kết hợp làm cử chỉ điệu bộ theo lời thơ.`,
            conclusion: `3. Kết thúc: (1 - 2 phút)
- Cô khen ngợi cả lớp đọc thơ diễn cảm và thuộc lời.
- Cho trẻ làm đoàn xe tuân thủ đèn tín hiệu di chuyển nhẹ nhàng chuyển hoạt động.`
          }
        },
        van_dong: {
          flagship: { title: "VĐCB: Lái xe trong đường hẹp vào bến - TCVĐ: Tín hiệu giao thông", ndtt: "VĐCB: Lái xe trong đường hẹp", ndkh: "TCVĐ: Tín hiệu giao thông", badge: "Vận động" },
          presets: [
            { title: "VĐCB: Lái xe trong đường hẹp vào bến - TCVĐ: Tín hiệu giao thông", ndtt: "VĐCB: Lái xe trong đường hẹp", ndkh: "TCVĐ: Tín hiệu giao thông", tag: "Mẫu Chuẩn" },
            { title: "VĐCB: Đi thăng bằng trên ghế thể dục chở hàng", ndtt: "VĐCB: Đi thăng bằng trên ghế thể dục", ndkh: "TCVĐ: Đoàn tàu tí xíu", tag: "Thăng bằng" },
            { title: "VĐCB: Bò chui qua cổng hầm xe lửa - TCVĐ: Máy bay", ndtt: "VĐCB: Bò chui qua cổng", ndkh: "TCVĐ: Máy bay cất cánh", tag: "Bò chui" },
            { title: "VĐCB: Bật liên tục qua các ô vạch kẻ đường", ndtt: "VĐCB: Bật qua các ô vạch kẻ", ndkh: "TCVĐ: Cảnh sát giao thông", tag: "Bật nhảy" }
          ],
          objectives: {
            knowledge: [
              "Trẻ biết tên vận động cơ bản 'Lái xe trong đường hẹp' và luật chơi trò chơi 'Tín hiệu giao thông'.",
              "Hiểu kỹ thuật: Hai tay cầm vô lăng lái xe, bước đi khéo léo trong con đường hẹp rộng 35 - 40cm, mắt nhìn thẳng hướng đi, không giẫm chân lên vạch hai bên."
            ],
            skills: [
              "Rèn kỹ năng định hướng không gian, giữ thăng bằng cơ thể tốt khi di chuyển trong phạm vi giới hạn.",
              "Phát triển tố chất nhanh nhẹn, khéo léo và phản xạ dừng - chạy chuẩn xác theo hiệu lệnh cờ/đèn."
            ],
            attitudes: [
              "Trẻ tự tin, hào hứng luyện tập thể dục thể thao rèn luyện sức khỏe.",
              "Có ý thức kỷ luật, xếp hàng tuần tự chờ đến lượt, không xô đẩy bạn."
            ]
          },
          preparation: {
            teacher: [
              "Sân tập rộng rãi, bằng phẳng, an toàn; vạch chuẩn bị và 2 con đường hẹp dài 3 - 4m, rộng 35cm.",
              "Biển báo bến xe đỗ; cờ hiệu giao thông (đỏ và xanh); loa kéo âm nhạc khởi động sôi động."
            ],
            students: [
              "Mỗi trẻ 1 vô lăng đồ chơi bằng nhựa hoặc bìa cứng.",
              "Trang phục thể thao thoải mái, giày vải bata mềm."
            ]
          },
          procedure: {
            intro: `1. Ổn định tổ chức: (1 - 2 phút)
- Cô tập trung trẻ, kiểm tra sức khỏe và trang phục thể thao.
- Trò chuyện: Hôm nay các bác tài xế nhí trường MN Phúc Sơn B sẽ cùng nhau tham gia hội thi "Tay lái cừ khôi" nhé!`,
            instruction: `2. Phương pháp, hình thức tổ chức: (18 - 22 phút)
a. Khởi động: (2 - 3 phút)
- Trẻ làm đoàn tàu hỏa đi theo vòng tròn kết hợp đi bằng mũi chân, đi bằng gót chân, chạy chậm, chạy nhanh, đi thường rồi chuyển về 3 hàng ngang.

b. Trọng động: (14 - 16 phút)
* Bài tập phát triển chung (BTPTC): Tập theo bài hát "Em tập lái ô tô":
- Tay: 2 tay cầm vô lăng đưa lên cao, đưa ngang (4 lần 2 nhịp).
- Chân: Đứng nhón gót, khuỵu gối giả vờ đạp phanh xe (4 lần 2 nhịp).
- Bụng lườn: Nghiêng người sang trái, sang phải như xe vào khúc cua (4 lần 2 nhịp).
- Bật nhảy: Bật tách chân khép chân tại chỗ (4 lần 2 nhịp).

* Vận động cơ bản: "Lái xe trong đường hẹp vào bến":
- Cô làm mẫu lần 1: Chuẩn xác, nhịp nhàng không giải thích.
- Cô làm mẫu lần 2 + Phân tích: Đứng trước vạch xuất phát, hai tay cầm vô lăng ngang ngực. Khi có hiệu lệnh "Xuất phát", bước đi nhịp nhàng trong con đường hẹp, mắt nhìn thẳng phía trước, khéo léo giữ thăng bằng không giẫm chân ra ngoài đường viền. Đến cuối đường đưa xe an toàn vào bến đỗ.
- Trẻ thực hành:
  + Cho 2 trẻ lên đi thử, cô và lớp nhận xét.
  + Lần lượt từng đôi trẻ của 2 đội thực hiện (cô bao quát, nhắc nhở trẻ không cúi gằm mặt).
  + Lần 2: Nâng cao tốc độ lái xe an toàn thi đua giữa 2 đội.

* Trò chơi vận động: "Tín hiệu giao thông":
- Trẻ lái xe tự do trong sân. Cô giơ cờ XANH trẻ chạy bon bon, cô giơ cờ ĐỎ trẻ phanh dừng lại. Chơi 2 - 3 lượt vui nhộn.

c. Hồi tĩnh: (2 phút)
- Cho trẻ vừa đi vừa làm động tác lắc cổ tay, thả lỏng nhẹ nhàng 1 - 2 vòng sân.`,
            conclusion: `3. Kết thúc: (1 - 2 phút)
- Cô nhận xét buổi tập, khen ngợi tinh thần rèn luyện dẻo dai của các bác tài xế nhí.
- Cho trẻ cùng cô thu dọn vô lăng, rửa tay sạch sẽ.`
          }
        }
      }
    },

    // ==========================================
    // 2. GIA ĐÌNH THÂN YÊU
    // ==========================================
    gia_dinh: {
      id: "gia_dinh",
      name: "Gia đình Thân yêu",
      icon: "🏡",
      keywords: ["gia đình", "bố", "mẹ", "ông bà", "ngôi nhà", "bát", "đĩa", "thìa", "cốc", "nhà của tôi", "người thân", "bữa cơm", "anh chị em"],
      activities: {
        am_nhac: {
          flagship: { title: "Dạy hát: 'Cả nhà thương nhau' (Phan Văn Minh) - NDKH: TCÂN: 'Tai ai tinh'", ndtt: "DH: Cả nhà thương nhau", ndkh: "TCÂN: Tai ai tinh", badge: "Âm nhạc" },
          presets: [
            { title: "Dạy hát: 'Cả nhà thương nhau' (Phan Văn Minh) - NDKH: TCÂN: 'Tai ai tinh'", ndtt: "DH: Cả nhà thương nhau", ndkh: "TCÂN: Tai ai tinh", tag: "Dạy hát" },
            { title: "Nghe hát: 'Cháu yêu bà' - NDKH: VĐTN: Đưa nôi ru em", ndtt: "NH: Cháu yêu bà", ndkh: "VĐTN: Ru em", tag: "Nghe hát" },
            { title: "Vận động múa: 'Nhà của tôi' (Thu Hiền)", ndtt: "VĐM: Nhà của tôi", ndkh: "TCÂN: Vòng tròn gắn kết", tag: "Vận động múa" },
            { title: "Dạy hát: 'Ba ngọn nến lung linh' (Ngọc Lễ)", ndtt: "DH: Ba ngọn nến lung linh", ndkh: "TCÂN: Nghe nhạc đoán tên", tag: "Dạy hát" }
          ],
          objectives: {
            knowledge: [
              "Trẻ nhớ tên bài hát 'Cả nhà thương nhau' (Phan Văn Minh), thuộc lời ca ngọt ngào.",
              "Hiểu ý nghĩa bài hát: Tình cảm gắn bó yêu thương ruột thịt giữa ba, mẹ và con cái trong gia đình ấm áp.",
              "Biết chơi trò chơi âm nhạc 'Tai ai tinh'."
            ],
            skills: [
              "Hát đúng giai điệu êm dịu, tình cảm; phát âm rõ ràng, tròn vành rõ chữ.",
              "Biết vỗ tay đệm nhịp hoặc múa phụ họa ôm ngực thể hiện tình yêu thương.",
              "Phát triển tai nghe âm nhạc nhận biết giọng hát của bạn."
            ],
            attitudes: [
              "Trẻ thêm yêu mến, kính trọng và biết ơn ông bà, cha mẹ.",
              "Biết vâng lời người lớn và quan tâm giúp đỡ người thân trong gia đình."
            ]
          },
          preparation: {
            teacher: [
              "Đàn organ, loa kéo, tranh ảnh gia đình hạnh phúc sum vầy bên bữa cơm.",
              "Video hoạt hình bài hát 'Cả nhà thương nhau'; hoa cài tay cho trẻ."
            ],
            students: [
              "Trang phục gọn gàng, xắc xô mini hoặc thanh phách gõ nhịp.",
              "Tâm thế vui tươi, sẵn sàng ca hát."
            ]
          },
          procedure: {
            intro: `1. Ổn định tổ chức: (1 - 2 phút)
- Cho trẻ quan sát bức ảnh gia đình quây quần ấm cúng.
- Trò chuyện: Nhà các con gồm có những ai? Ai là người nấu cơm ngon cho con ăn? Ai chở con đi học?
- Giới thiệu bài hát: Nhạc sĩ Phan Văn Minh đã viết một bài hát rất xúc động ca ngợi tình cảm gia đình, đó là bài hát "Cả nhà thương nhau".`,
            instruction: `2. Phương pháp, hình thức tổ chức: (18 - 22 phút)
2.1. Dạy hát: "Cả nhà thương nhau" (Phan Văn Minh)
- Cô hát lần 1: Thể hiện tình cảm ấm áp, dịu dàng.
- Giới thiệu nội dung: Ba thương con vì con giống mẹ, mẹ thương con vì con giống ba, cả nhà ta cùng thương yêu nhau, xa là nhớ, gần nhau là cười!
- Cô hát lần 2: Kết hợp động tác vỗ tay theo nhịp.
- Dạy trẻ hát:
  + Cả lớp hát cùng cô 2 - 3 lần.
  + Tổ Bạn Trai hát (thể hiện tình yêu với mẹ), Tổ Bạn Gái hát (thể hiện tình yêu với ba).
  + Nhóm trẻ lên biểu diễn, cá nhân trẻ hát tự tin.

2.2. Trò chơi âm nhạc: "Tai ai tinh"
- Cách chơi: Một trẻ đội mũ chóp che mắt. Mời 1 bạn đứng lên hát 1 câu trong bài "Cả nhà thương nhau". Trẻ đoán xem đó là giọng bạn trai hay bạn gái và nói đúng tên bạn.
- Luật chơi: Đoán đúng cả lớp vỗ tay khen thưởng; đoán sai phải nhảy lò cò.`,
            conclusion: `3. Kết thúc: (1 - 2 phút)
- Cô khen ngợi cả lớp hát hay và giàu tình cảm.
- Dặn dò các con khi về nhà hãy ôm hôn ba mẹ và hát bài hát này tặng cả nhà nhé!`
          }
        },
        nhan_biet: {
          flagship: { title: "Nhận biết phân biệt: Đồ dùng để ăn (bát, đĩa) và Đồ dùng để uống (cốc, ca)", ndtt: "Nhận biết: Đồ dùng để ăn & Đồ dùng để uống", ndkh: "TC: Bé giúp mẹ dọn bàn", badge: "Nhận biết" },
          presets: [
            { title: "Nhận biết phân biệt: Đồ dùng để ăn (bát, đĩa) và Đồ dùng để uống (cốc, ca)", ndtt: "Nhận biết: Đồ dùng để ăn & để uống", ndkh: "TC: Bé giúp mẹ dọn bàn", tag: "Mẫu Chuẩn" },
            { title: "Khám phá: Ngôi nhà thân yêu và các phòng trong nhà", ndtt: "Khám phá các phòng trong nhà", ndkh: "TC: Về đúng phòng", tag: "Khám phá" },
            { title: "Trò chuyện về những người thân yêu trong gia đình của bé", ndtt: "Những người thân trong gia đình", ndkh: "TC: Album gia đình", tag: "Xã hội" },
            { title: "Toán sơ đẳng: Nhận biết to hơn - nhỏ hơn của bát ăn cơm và đĩa", ndtt: "So sánh to hơn - nhỏ hơn", ndkh: "TC: Xếp bát theo cỡ", tag: "Toán" }
          ],
          objectives: {
            knowledge: [
              "Trẻ nhận biết, gọi đúng tên và công dụng của các đồ dùng quen thuộc trong gia đình: Bát, đĩa (để ăn); Cốc, ca (để uống).",
              "Biết chất liệu cơ bản (nhựa an toàn, sứ, inox) và đặc điểm (miệng tròn, có quai cầm)."
            ],
            skills: [
              "Rèn kỹ năng quan sát, so sánh và phân loại đúng đồ dùng theo công năng sử dụng.",
              "Phát triển ngôn ngữ mạch lạc, trả lời rõ ràng câu hỏi gợi mở của cô."
            ],
            attitudes: [
              "Trẻ có ý thức giữ gìn đồ dùng cẩn thận, không làm rơi vỡ.",
              "Biết giúp đỡ bố mẹ xếp bát thìa, lau bàn sau bữa ăn."
            ]
          },
          preparation: {
            teacher: [
              "Bộ đồ dùng thật: Bát sứ, đĩa nhựa, thìa inox, cốc thủy tinh dày có quai.",
              "Mô hình bàn ăn gia đình; hộp quà bí mật."
            ],
            students: [
              "Mỗi trẻ 1 rổ đựng lô tô đồ dùng để ăn và đồ dùng để uống.",
              "2 chiếc khay to để chơi trò chơi phân loại."
            ]
          },
          procedure: {
            intro: `1. Ổn định tổ chức: (1 - 2 phút)
- Cô đọc câu đố:
  "Miệng tròn lòng trắng phau phau,
   Đựng cơm đựng thịt ngày ngày bé ăn?"
  (Cái bát ăn cơm).
- Hôm nay cô con mình sẽ cùng khám phá những đồ dùng quen thuộc trên bàn ăn của gia đình nhé!`,
            instruction: `2. Phương pháp, hình thức tổ chức: (18 - 22 phút)
2.1. Nhận biết Đồ dùng để ăn (Cái bát, cái đĩa):
- Cô lấy cái bát ra cho trẻ quan sát:
  + Đây là cái gì? (Cái bát).
  + Miệng bát có hình gì? (Hình tròn). Bát dùng để làm gì? (Đựng cơm, đựng canh).
  + Bát làm bằng chất liệu gì? (Sứ/nhựa, rơi sẽ vỡ nên phải cầm bằng 2 tay).
- Khám phá tiếp cái đĩa: Đĩa nông hơn, dùng để bày hoa quả, đựng thức ăn xào.

2.2. Nhận biết Đồ dùng để uống (Cái cốc, cái ca):
- Cho trẻ quan sát cái cốc: Cốc dùng để làm gì? (Uống nước, uống sữa).
- Cốc có cái gì để cầm không bị trơn? (Có quai cầm tiện lợi).

2.3. So sánh và Phân loại:
- Nhóm để ăn: Bát, đĩa, thìa, đũa.
- Nhóm để uống: Cốc, ca, ấm, bình nước.

2.4. Trò chơi ôn luyện:
- Trò chơi 1: "Ai nhanh mắt" - Cô nói công dụng (Đựng cơm / Uống nước), trẻ tìm nhanh lô tô giơ lên và phát âm.
- Trò chơi 2: "Bé ngoan giúp mẹ dọn bàn" - Trẻ chuyển nhanh đồ dùng để ăn về bàn ăn, đồ dùng để uống về khay nước.`,
            conclusion: `3. Kết thúc: (1 - 2 phút)
- Khen ngợi trẻ hăng hái, nhắc nhở trước khi ăn phải mời người lớn và rửa sạch tay.`
          }
        },
        tao_hinh: {
          flagship: { title: "Vẽ và tô màu ngôi nhà của bé ấm áp", ndtt: "Vẽ ngôi nhà của bé", ndkh: "Trưng bày phố nhỏ yêu thương", badge: "Tạo hình" },
          presets: [
            { title: "Vẽ và tô màu ngôi nhà của bé ấm áp", ndtt: "Vẽ ngôi nhà của bé", ndkh: "Trưng bày phố nhỏ", tag: "Mẫu Chuẩn" },
            { title: "Nặn cái bát ăn cơm xinh xắn từ đất nặn", ndtt: "Nặn cái bát ăn cơm", ndkh: "Bàn tiệc gia đình", tag: "Nặn" },
            { title: "Xé dán khung ảnh gia đình hạnh phúc", ndtt: "Xé dán khung ảnh", ndkh: "Góc ảnh bé yêu", tag: "Xé dán" },
            { title: "Xếp dán ngôi nhà từ các hình học (tam giác, vuông, chữ nhật)", ndtt: "Xếp dán ngôi nhà hình học", ndkh: "Ngôi làng thân thiện", tag: "Dán hình" }
          ],
          objectives: {
            knowledge: [
              "Trẻ biết ngôi nhà gồm các phần chính: Mái nhà hình tam giác, thân nhà hình chữ nhật hoặc hình vuông, cửa ra vào và cửa sổ.",
              "Hiểu cách dùng các nét thẳng, nét xiên, nét ngang để phác họa ngôi nhà."
            ],
            skills: [
              "Rèn kỹ năng cầm bút sáp bằng 3 đầu ngón tay, tư thế ngồi ngay ngắn.",
              "Tô màu mịn, đều tay, không lem chờm ra ngoài viền vẽ; phối màu sắc tươi sáng."
            ],
            attitudes: [
              "Trẻ yêu quý ngôi nhà của mình và tự hào về nơi ở của gia đình.",
              "Biết giữ gìn nhà cửa sạch sẽ, không vẽ bậy lên tường."
            ]
          },
          preparation: {
            teacher: [
              "3 tranh mẫu vẽ ngôi nhà: Nhà ngói đỏ 1 tầng, nhà cao tầng, nhà có vườn cây hoa.",
              "Bút sáp màu, giấy A4, nhạc nhẹ không lời, giá trưng bày sản phẩm."
            ],
            students: [
              "Giấy A4 có khung viền hoa, hộp sáp màu 12 màu cho mỗi trẻ, khăn lau ẩm."
            ]
          },
          procedure: {
            intro: `1. Ổn định tổ chức: (1 - 2 phút)
- Cô cùng trẻ hát bài "Nhà của tôi".
- Đàm thoại: Ngôi nhà là nơi che mưa che nắng, nơi cả gia đình yêu thương nhau. Các con có muốn tự tay vẽ ngôi nhà xinh đẹp của mình không nào?`,
            instruction: `2. Phương pháp, hình thức tổ chức: (18 - 22 phút)
* Quan sát tranh mẫu:
- Tranh 1: Nhà mái ngói tam giác màu đỏ, tường màu vàng.
- Đàm thoại: Mái nhà vẽ bằng nét gì? Thân nhà vẽ nét gì? Cửa sổ hình gì?

* Cô vẽ mẫu:
- Vẽ nét ngang và nét thẳng tạo thân nhà hình chữ nhật.
- Vẽ 2 nét xiên nối lại tạo mái nhà hình tam giác.
- Vẽ cửa ra vào hình chữ nhật đứng và cửa sổ hình vuông nhỏ xinh.
- Tô màu mái ngói đỏ tươi, tường nhà vàng ươm, vẽ thêm ông mặt trời và đám mây.

* Trẻ thực hiện:
- Trẻ vẽ và tô màu theo ý thích của mình.
- Cô bao quát, gợi ý trẻ vẽ thêm hàng rào, bông hoa bên cạnh ngôi nhà.

* Trưng bày sản phẩm:
- Trẻ mang tranh lên góc trưng bày "Khu phố hạnh phúc".
- Trẻ tự giới thiệu về ngôi nhà của mình và khen bức tranh mình thích.`,
            conclusion: `3. Kết thúc: (1 - 2 phút)
- Cô nhận xét khen ngợi sự sáng tạo của cả lớp.
- Cả lớp khoanh tay chào cô và nhẹ nhàng chuyển hoạt động.`
          }
        },
        van_hoc: {
          flagship: { title: "Thơ: 'Lấy tăm cho bà' (Tác giả: Định Hải)", ndtt: "Thơ: Lấy tăm cho bà (Định Hải)", ndkh: "Kịch ngắn: Bé hiếu thảo", badge: "Văn học" },
          presets: [
            { title: "Thơ: 'Lấy tăm cho bà' (Tác giả: Định Hải)", ndtt: "Thơ: Lấy tăm cho bà (Định Hải)", ndkh: "Kịch ngắn: Bé hiếu thảo", tag: "Mẫu Chuẩn" },
            { title: "Truyện cổ tích: 'Tích Chu' - Bài học về lòng hiếu thảo", ndtt: "Truyện: Cậu bé Tích Chu", ndkh: "Kịch rối que", tag: "Truyện kể" },
            { title: "Thơ: 'Thương ông' (Tác giả: Tú Mỡ)", ndtt: "Thơ: Thương ông (Tú Mỡ)", ndkh: "Đàm thoại & ngâm thơ", tag: "Thơ" },
            { title: "Đồng dao: 'Gánh gánh gồng gồng' - Tình cảm gia đình", ndtt: "Đồng dao: Gánh gánh gồng gồng", ndkh: "Trò chơi dân gian", tag: "Đồng dao" }
          ],
          objectives: {
            knowledge: [
              "Trẻ nhớ tên bài thơ 'Lấy tăm cho bà' của nhà thơ Định Hải.",
              "Hiểu nội dung bài thơ: Kể về em bé đi học về biết quan sát bà rụng hết răng, em không lấy tăm mà đã khéo léo bưng một cốc nước mát bằng hai tay mời bà uống."
            ],
            skills: [
              "Đọc thơ diễn cảm, ngắt nhịp đúng 2/2 thể thơ 4 chữ, phát âm tròn vành rõ chữ.",
              "Phát triển kỹ năng giao tiếp lễ phép, biết dùng từ ngữ thưa gửi: 'Dạ, vâng, thưa bà'."
            ],
            attitudes: [
              "Trẻ kính trọng, hiếu thảo và yêu quý ông bà, cha mẹ.",
              "Biết thể hiện tình cảm qua những hành động nhỏ hàng ngày trong gia đình."
            ]
          },
          preparation: {
            teacher: [
              "Slide điện tử hoạt họa bài thơ 'Lấy tăm cho bà'.",
              "Mô hình ấm trà, chén nước nhỏ xinh, sa bàn bối cảnh ngôi nhà của bà."
            ],
            students: [
              "Ghế ngồi chữ U; trang phục gọn gàng; mũ múa nhân vật em bé ngoan."
            ]
          },
          procedure: {
            intro: `1. Ổn định tổ chức: (1 - 2 phút)
- Cô cho trẻ xem hình ảnh em bé hai tay bưng cốc nước mời bà uống.
- Hỏi trẻ: Các con thấy bạn nhỏ trong tranh đang làm gì? Hành động đó thể hiện điều gì?
- Giới thiệu bài thơ "Lấy tăm cho bà" của nhà thơ Định Hải.`,
            instruction: `2. Phương pháp, hình thức tổ chức: (18 - 22 phút)
* Cô đọc thơ cho trẻ nghe:
- Lần 1: Đọc diễn cảm, giọng đọc dịu dàng ấm áp.
- Lần 2: Đọc thơ kết hợp sa bàn rối que sinh động.

* Đàm thoại và trích dẫn nội dung bài thơ:
- Bạn nhỏ trong bài thơ đi đâu về? (Cô giáo dạy cháu về nhà).
- Khi về đến nhà bạn nhỏ nhớ đến ai? (Nhớ đến bà, tìm tăm cho bà).
  Trích: 'Cô giáo dạy cháu về / Nhà ăn xong nhớ bà / Nhớ tăm cho bà nhé'.
- Nhưng hàm răng của bà thế nào? (Bà rụng hết răng không ăn trầu nữa).
  Trích: 'Răng của bà rụng hết / Không ăn trầu được đâu'.
- Bạn nhỏ đã làm gì để bày tỏ lòng hiếu thảo? (Rót chén nước bưng bằng hai tay dâng bà).
  Trích: 'Cháu rót nước bưng vào / Mời bà xơi nước mát'.
- Bà đã làm gì khi đón nhận chén nước? (Bà cười vui, ôm cháu vào lòng và khen cháu ngoan).

* Dạy trẻ đọc thơ:
- Cả lớp đọc thơ cùng cô 2 - 3 lần.
- Các tổ thi đua đọc diễn cảm.
- Mời cá nhân trẻ đọc thơ thể hiện cảm xúc tình cảm.`,
            conclusion: `3. Kết thúc: (1 - 2 phút)
- Giáo dục các con khi về nhà biết rót nước mời ông bà, bố mẹ sau những giờ làm việc mệt mỏi.
- Cả lớp cùng hát bài "Cháu yêu bà" chuyển hoạt động.`
          }
        },
        van_dong: {
          flagship: { title: "VĐCB: Bò theo đường dích dắc mang quà về tặng mẹ - TCVĐ: Về đúng nhà", ndtt: "VĐCB: Bò dích dắc qua 5 điểm", ndkh: "TCVĐ: Về đúng nhà của bé", badge: "Vận động" },
          presets: [
            { title: "VĐCB: Bò theo đường dích dắc mang quà về tặng mẹ - TCVĐ: Về đúng nhà", ndtt: "VĐCB: Bò dích dắc qua 5 điểm", ndkh: "TCVĐ: Về đúng nhà", tag: "Mẫu Chuẩn" },
            { title: "VĐCB: Đi trong đường hẹp đầu đội túi cát giúp mẹ", ndtt: "VĐCB: Đi thăng bằng đường hẹp", ndkh: "TCVĐ: Gia đình vui nhộn", tag: "Thăng bằng" },
            { title: "VĐCB: Bật qua các ô vạch kẻ về nhà - TCVĐ: Mèo đuổi chuột", ndtt: "VĐCB: Bật qua ô vạch kẻ", ndkh: "TCVĐ: Mèo đuổi chuột", tag: "Bật nhảy" },
            { title: "VĐCB: Tung và bắt bóng bằng 2 tay - TCVĐ: Kéo co gia đình", ndtt: "VĐCB: Tung và bắt bóng", ndkh: "TCVĐ: Kéo co gia đình", tag: "Bóng" }
          ],
          objectives: {
            knowledge: [
              "Trẻ biết tên bài tập 'Bò dích dắc qua các điểm chuẩn' và luật chơi 'Về đúng nhà'.",
              "Hiểu kỹ thuật: Bò bằng bàn tay và cẳng chân, khéo léo lượn qua các chướng ngại vật không làm đổ vật chuẩn."
            ],
            skills: [
              "Rèn sự phối hợp tay - chân nhịp nhàng, khéo léo; phát triển cơ bắp toàn thân.",
              "Phản xạ nhanh nhẹn khi tham gia trò chơi chạy về đúng ngôi nhà thân yêu."
            ],
            attitudes: [
              "Trẻ tự tin, hào hứng luyện tập thể dục rèn luyện sức khỏe.",
              "Đoàn kết và cổ vũ nhiệt tình cho bạn."
            ]
          },
          preparation: {
            teacher: [
              "5 - 6 chướng ngại vật (chậu hoa nhỏ hoặc hộp quà xinh xắn); 2 mô hình ngôi nhà màu đỏ và màu xanh.",
              "Sân tập rộng rãi, an toàn; loa kéo âm nhạc sôi động."
            ],
            students: [
              "Trang phục thể thao thoải mái, giỏ hoa mini đựng quà tặng mẹ."
            ]
          },
          procedure: {
            intro: `1. Ổn định tổ chức: (1 - 2 phút)
- Cô tập trung trẻ, kiểm tra sĩ số và trang phục.
- Trò chuyện: Hôm nay các bé lớp chúng mình sẽ cùng thi đua rèn luyện sức khỏe dẻo dai để giúp đỡ bố mẹ việc nhà nhé!`,
            instruction: `2. Phương pháp, hình thức tổ chức: (18 - 22 phút)
a. Khởi động: Đi vòng tròn theo các kiểu đi (mũi chân, gót chân, chạy chậm, chạy nhanh) trên nền nhạc bài "Gia đình nhỏ hạnh phúc to".

b. Trọng động:
* BTPTC: Tập các động tác tay, chân, bụng lườn, bật nhảy nhịp nhàng.
* VĐCB: "Bò theo đường dích dắc mang quà về tặng mẹ":
- Cô làm mẫu lần 1 không giải thích.
- Cô làm mẫu lần 2 + Phân tích: Quỳ trước vạch xuất phát bằng bàn tay và cẳng chân. Khi có hiệu lệnh, bò tiến về phía trước phối hợp tay nọ chân kia, mắt nhìn thẳng hướng bò, khéo léo lượn qua từng chướng ngại vật không chạm vào vật chuẩn. Đến đích đứng lên đặt hoa vào giỏ tặng mẹ.
- Trẻ thực hành: Lần lượt từng đôi trẻ của 2 đội thực hiện. Cô quan sát sửa sai kịp thời.
* TCVĐ: "Về đúng nhà":
- Trẻ vừa đi vừa hát quanh sân. Khi cô hô "Trời mưa rồi!", trẻ chạy thật nhanh về đúng ngôi nhà có màu sắc của đội mình.

c. Hồi tĩnh: Trẻ đi lại nhẹ nhàng hít thở sâu, thả lỏng toàn thân.`,
            conclusion: `3. Kết thúc: (1 - 2 phút)
- Khen ngợi tinh thần thi đua của các bé; thu dọn dụng cụ gọn gàng.`
          }
        }
      }
    },

    // ==========================================
    // 3. THẾ GIỚI THỰC VẬT
    // ==========================================
    thuc_vat: {
      id: "thuc_vat",
      name: "Thế giới Thực vật",
      icon: "🌸",
      keywords: ["thực vật", "cây", "hoa", "lá", "quả", "trái cây", "rau", "bắp cải", "cam", "chuối", "bưởi", "hoa cúc", "mùa xuân", "hoa hồng", "hoa đào"],
      activities: {
        am_nhac: {
          flagship: { title: "Vận động múa: 'Em yêu cây xanh' (Hoàng Văn Yến) - NDKH: TCÂN: 'Tai ai tinh'", ndtt: "VĐM: Em yêu cây xanh", ndkh: "TCÂN: Tai ai tinh", badge: "Âm nhạc" },
          presets: [
            { title: "Vận động múa: 'Em yêu cây xanh' (Hoàng Văn Yến) - NDKH: TCÂN: 'Tai ai tinh'", ndtt: "VĐM: Em yêu cây xanh", ndkh: "TCÂN: Tai ai tinh", tag: "Vận động múa" },
            { title: "Dạy hát: 'Màu hoa' (Hồng Đăng) - NDKH: TCÂN: 'Hoa nào quả nấy'", ndtt: "DH: Màu hoa", ndkh: "TCÂN: Hoa nào quả nấy", tag: "Dạy hát" },
            { title: "Nghe hát: 'Hoa thơm bướm lượn' (Dân ca quan họ Bắc Ninh)", ndtt: "NH: Hoa thơm bướm lượn", ndkh: "VĐTN: Hái hoa", tag: "Nghe hát" },
            { title: "Dạy hát: 'Quả' (Xanh xanh quả khế) - NDKH: VĐTN", ndtt: "DH: Bài hát Quả", ndkh: "VĐTN: Quả ngon", tag: "Dạy hát" }
          ],
          objectives: {
            knowledge: [
              "Trẻ nhớ tên bài hát 'Em yêu cây xanh' (Hoàng Văn Yến), thuộc lời và hiểu ý nghĩa: Trồng nhiều cây xanh để có bóng mát, tiếng chim hót và cho môi trường trong lành.",
              "Biết kết hợp động tác múa xòe tay, nghiêng người mô phỏng cành cây vươn đón nắng."
            ],
            skills: [
              "Hát đúng giai điệu tươi vui, phát âm tròn tiếng.",
              "Múa mềm mại nhịp nhàng theo nhịp bài hát; tai nghe âm nhạc nhận biết âm thanh các loại nhạc cụ gõ đệm."
            ],
            attitudes: [
              "Giáo dục trẻ yêu thiên nhiên, biết chăm sóc tưới nước cho cây hoa trong vườn trường, không ngắt hoa bẻ cành."
            ]
          },
          preparation: {
            teacher: ["Đàn organ, loa kéo, chậu cây xanh nhỏ xinh, đạo cụ lá cây xinh xắn, xắc xô, phách tre."],
            students: ["Vòng nguyệt quế lá cây nhỏ xinh trên đầu, tâm thế vui tươi."]
          },
          procedure: {
            intro: `1. Ổn định tổ chức: (1 - 2 phút)
- Cho trẻ ngắm chậu cây xanh trong lớp và đàm thoại về lợi ích của cây tỏa bóng mát và cho hoa thơm trái ngọt.
- Giới thiệu bài hát: "Em yêu cây xanh" của nhạc sĩ Hoàng Văn Yến.`,
            instruction: `2. Phương pháp, hình thức tổ chức: (18 - 22 phút)
2.1. Vận động múa: "Em yêu cây xanh"
- Cả lớp cùng hát lại bài hát 1 lần.
- Cô làm mẫu lần 1 trọn vẹn, duyên dáng.
- Cô làm mẫu lần 2 + phân tích động tác: 'Em rất thích trồng nhiều cây xanh' hai tay đưa lên cao như cành cây vươn đón nắng.
- Cho trẻ thực hành: Cả lớp múa, các tổ thi đua, cặp bạn múa đôi.

2.2. Trò chơi âm nhạc: "Tai ai tinh"
- Một trẻ bịt mắt lắng nghe tiếng phách tre hoặc xắc xô gõ ở góc nào và nói đúng tên nhạc cụ.`,
            conclusion: `3. Kết thúc: (1 - 2 phút)
- Tuyên dương các nghệ sĩ nhí. Cả lớp cùng múa hát dạo quanh vườn cây sân trường.`
          }
        },
        nhan_biet: {
          flagship: { title: "Nhận biết to - nhỏ: Quả bưởi to và Quả cam nhỏ", ndtt: "Nhận biết to - nhỏ: Quả bưởi & Quả cam", ndkh: "TC: Về đúng vườn quả", badge: "Nhận biết" },
          presets: [
            { title: "Nhận biết to - nhỏ: Quả bưởi to và Quả cam nhỏ", ndtt: "Nhận biết to - nhỏ: Quả bưởi & cam", ndkh: "TC: Về đúng vườn quả", tag: "Mẫu Chuẩn" },
            { title: "Nhận biết phân biệt: Màu đỏ - Màu vàng của hoa mùa xuân", ndtt: "Nhận biết màu đỏ - màu vàng", ndkh: "TC: Cắm hoa đúng màu", tag: "Màu sắc" },
            { title: "Khám phá: Quả chuối chín vàng & Quả cam mọng nước", ndtt: "Khám phá quả chuối & quả cam", ndkh: "TC: Vị giác ngọt ngào", tag: "Trải nghiệm" },
            { title: "Nhận biết: Cây bắp cải bẹ xanh tươi ngon bổ dưỡng", ndtt: "Nhận biết rau bắp cải", ndkh: "TC: Đi chợ giúp mẹ", tag: "Rau củ" }
          ],
          objectives: {
            knowledge: [
              "Trẻ nhận biết và phân biệt rõ kích thước to - nhỏ: Quả bưởi to hơn, quả cam nhỏ hơn.",
              "Biết quả bưởi và quả cam đều là hoa quả sạch thơm ngon, chứa nhiều vitamin C tốt cho sức khỏe."
            ],
            skills: [
              "Rèn kỹ năng so sánh kích thước bằng phương pháp trực quan đặt cạnh/đặt chồng đối tượng.",
              "Phát âm rõ ràng cụm từ: 'Quả bưởi to hơn', 'Quả cam nhỏ hơn'."
            ],
            attitudes: [
              "Trẻ yêu thích ăn hoa quả tươi, nhớ rửa sạch tay và bóc vỏ trước khi ăn."
            ]
          },
          preparation: {
            teacher: ["1 quả bưởi thật to, 1 quả cam nhỏ; rổ to, rổ nhỏ; đĩa múi cam bưởi cắt sẵn trải nghiệm."],
            students: ["Lô tô quả bưởi và quả cam, rổ con."]
          },
          procedure: {
            intro: `1. Ổn định tổ chức: (1 - 2 phút)
- Cô cho trẻ sờ 'Chiếc túi bí mật' đoán xem có loại quả gì tròn tròn trơn mịn bên trong!`,
            instruction: `2. Phương pháp, hình thức tổ chức: (18 - 22 phút)
2.1. Khám phá và so sánh to - nhỏ:
- Đặt quả bưởi và quả cam cạnh nhau.
- Hỏi trẻ: Quả nào to hơn? Quả nào nhỏ hơn?
- Thử nghiệm trực quan: Đặt quả cam đằng trước quả bưởi (vẫn thấy quả bưởi vì bưởi to hơn); Đặt quả bưởi đằng trước quả cam (không thấy quả cam vì cam nhỏ hơn bị che khuất).
- Cho trẻ đồng thanh phát âm: 'Quả bưởi to hơn - Quả cam nhỏ hơn'.

2.2. Trò chơi trải nghiệm:
- Trò chơi 1: 'Ai tinh mắt' - Giơ nhanh quả to/quả nhỏ theo hiệu lệnh.
- Trò chơi 2: 'Bé đi siêu thị' - Chọn bưởi to để vào xe đẩy to, cam nhỏ để vào giỏ nhỏ.`,
            conclusion: `3. Kết thúc: (1 - 2 phút)
- Cùng cô nếm thử hương vị thơm ngọt của múi cam múi bưởi và lau sạch tay.`
          }
        },
        tao_hinh: {
          flagship: { title: "Vẽ và tô màu những bông hoa tươi thắm tặng cô", ndtt: "Vẽ hoa tươi thắm", ndkh: "Triển lãm vườn hoa", badge: "Tạo hình" },
          presets: [
            { title: "Vẽ và tô màu những bông hoa tươi thắm tặng cô", ndtt: "Vẽ hoa tươi thắm", ndkh: "Triển lãm vườn hoa", tag: "Mẫu Chuẩn" },
            { title: "Xé dán cánh hoa mùa xuân rực rỡ sắc màu", ndtt: "Xé dán cánh hoa", ndkh: "Vườn hoa rực rỡ", tag: "Xé dán" },
            { title: "Nặn chùm nho chín mọng từ đất nặn", ndtt: "Nặn chùm nho chín", ndkh: "Đĩa quả ngon", tag: "Nặn" },
            { title: "In màu từ cuống rau củ tạo vườn hoa nghệ thuật", ndtt: "In màu rau củ tạo hoa", ndkh: "Trưng bày tranh", tag: "In màu" }
          ],
          objectives: {
            knowledge: [
              "Trẻ biết dùng nét tròn làm nhị hoa, các nét cong tròn bao quanh làm cánh hoa, nét thẳng làm cành và nét xiên làm lá.",
              "Biết phối màu sắc hài hòa để bức tranh hoa thêm rực rỡ."
            ],
            skills: [
              "Cầm bút sáp đúng cách, ngồi ngay ngắn, tô màu mịn không chờm viền.",
              "Sắp xếp bố cục bức tranh cân đối, đẹp mắt."
            ],
            attitudes: [
              "Say mê sáng tạo cái đẹp, biết trân trọng và bảo vệ hoa tươi."
            ]
          },
          preparation: {
            teacher: ["2 - 3 tranh mẫu vẽ hoa sáp màu, màu nước; giá trưng bày; nhạc du dương."],
            students: ["Giấy A4 có viền hoa, hộp sáp màu 12 màu, khăn lau tay."]
          },
          procedure: {
            intro: `1. Ổn định tổ chức: (1 - 2 phút)
- Hát bài "Hoa trường em". Trò chuyện về vẻ đẹp của vườn hoa mùa xuân khoe sắc.`,
            instruction: `2. Phương pháp, hình thức tổ chức: (18 - 22 phút)
* Quan sát tranh mẫu: Hoa cúc vàng, hoa hồng đỏ, hoa đồng tiền rực rỡ.
* Cô vẽ mẫu: Dùng nét tròn làm nhị, các nét cong lượn quanh làm cánh hoa, nét thẳng làm cành lá xanh tươi. Tô màu kín mịn.
* Trẻ thực hiện: Trẻ say sưa vẽ và tô màu bức tranh hoa của riêng mình.
* Trưng bày sản phẩm: Triển lãm "Vườn hoa mùa xuân của bé", nhận xét tranh đẹp.`,
            conclusion: `3. Kết thúc: (1 - 2 phút)
- Dâng tặng những bức tranh hoa tuyệt đẹp cho cô giáo và cùng hát bài 'Bông hoa mừng cô'.`
          }
        },
        van_hoc: {
          flagship: { title: "Thơ: 'Hoa cúc vàng' (Tác giả: Nguyễn Viết Bình)", ndtt: "Thơ: Hoa cúc vàng (Nguyễn Viết Bình)", ndkh: "Đàm thoại & ngâm thơ", badge: "Văn học" },
          presets: [
            { title: "Thơ: 'Hoa cúc vàng' (Tác giả: Nguyễn Viết Bình)", ndtt: "Thơ: Hoa cúc vàng", ndkh: "Đàm thoại & ngâm thơ", tag: "Mẫu Chuẩn" },
            { title: "Truyện: 'Quả táo của ai?' - Bài học sẻ chia", ndtt: "Truyện: Quả táo của ai", ndkh: "Kịch rối que", tag: "Truyện kể" },
            { title: "Thơ: 'Cây bắp cải' (Phạm Hổ)", ndtt: "Thơ: Cây bắp cải", ndkh: "Đàm thoại thơ", tag: "Thơ" },
            { title: "Đồng dao: 'Rải ranh / Kéo cưa lừa xẻ' - Vườn cây trái", ndtt: "Đồng dao dân gian", ndkh: "TC: Trồng nụ trồng hoa", tag: "Đồng dao" }
          ],
          objectives: {
            knowledge: [
              "Trẻ biết tên bài thơ 'Hoa cúc vàng' của tác giả Nguyễn Viết Bình.",
              "Hiểu nội dung: Mùa đông lạnh giá hoa cúc ấp ủ mầm cây, để sang xuân bung nở sắc vàng rực rỡ sưởi ấm khắp đất trời."
            ],
            skills: [
              "Đọc thơ diễn cảm, ngắt nghỉ đúng nhịp điệu của bài thơ.",
              "Phát triển ngôn ngữ mạch lạc, trả lời rõ ràng câu hỏi đàm thoại."
            ],
            attitudes: [
              "Yêu quý vẻ đẹp của thiên nhiên hoa cỏ mùa xuân, chăm sóc tưới nước cho cây."
            ]
          },
          preparation: {
            teacher: ["Smart TV chiếu tranh hoạt họa thơ 'Hoa cúc vàng'; chậu hoa cúc vàng thật."],
            students: ["Ghế ngồi chữ U, mũ múa hoa cúc vàng xinh xắn."]
          },
          procedure: {
            intro: `1. Ổn định tổ chức: (1 - 2 phút)
- Cho trẻ ngắm chậu hoa cúc vàng rực rỡ đón xuân sang. Giới thiệu bài thơ của tác giả Nguyễn Viết Bình.`,
            instruction: `2. Phương pháp, hình thức tổ chức: (18 - 22 phút)
* Cô đọc thơ: Lần 1 diễn cảm, ấm áp; Lần 2 kèm video tranh vẽ sinh động.
* Đàm thoại trích dẫn: Mùa đông trời lạnh ra sao? ('Suốt cả mùa đông / Gió rét căm căm'). Hoa cúc đã gom những tia nắng ấm để làm gì? ('Áo vàng như nắng / Rực rỡ mùa xuân').
* Dạy trẻ đọc thơ: Cả lớp, các tổ, nhóm bạn trai gái và cá nhân thi đua đọc diễn cảm.`,
            conclusion: `3. Kết thúc: (1 - 2 phút)
- Hóa thân thành những đóa hoa cúc vàng tỏa hương khoe sắc đón chào xuân mới.`
          }
        },
        van_dong: {
          flagship: { title: "VĐCB: Chuyền bóng qua đầu qua chân - TCVĐ: Gieo hạt nảy mầm", ndtt: "VĐCB: Chuyền bóng qua đầu qua chân", ndkh: "TCVĐ: Gieo hạt nảy mầm", badge: "Vận động" },
          presets: [
            { title: "VĐCB: Chuyền bóng qua đầu qua chân - TCVĐ: Gieo hạt nảy mầm", ndtt: "VĐCB: Chuyền bóng qua đầu", ndkh: "TCVĐ: Gieo hạt nảy mầm", tag: "Mẫu Chuẩn" },
            { title: "VĐCB: Bật liên tục qua các vòng hoa - TCVĐ: Hái quả", ndtt: "VĐCB: Bật qua các vòng", ndkh: "TCVĐ: Hái quả mùa xuân", tag: "Bật nhảy" },
            { title: "VĐCB: Đi thăng bằng trên ghế mang rổ quả về kho", ndtt: "VĐCB: Đi thăng bằng ghế", ndkh: "TCVĐ: Vườn quả sum suê", tag: "Thăng bằng" },
            { title: "VĐCB: Ném trúng đích quả chín - TCVĐ: Cây cao cỏ thấp", ndtt: "VĐCB: Ném bóng trúng đích", ndkh: "TCVĐ: Cây cao cỏ thấp", tag: "Ném trúng đích" }
          ],
          objectives: {
            knowledge: [
              "Trẻ biết tên vận động 'Chuyền bóng qua đầu qua chân' và luật chơi 'Gieo hạt nảy mầm'.",
              "Hiểu kỹ thuật cầm bóng bằng hai tay chuyền nhịp nhàng cho bạn phía sau không làm rơi bóng."
            ],
            skills: [
              "Rèn sự khéo léo của cơ tay và thân mình, phối hợp nhịp nhàng giữa các bạn trong đội.",
              "Phản xạ nhanh nhẹn khi tham gia trò chơi vận động."
            ],
            attitudes: [
              "Tích cực tham gia hoạt động thể thao ngoài trời, tinh thần đồng đội đoàn kết."
            ]
          },
          preparation: {
            teacher: ["Sân tập rộng rãi, an toàn; 4 - 6 quả bóng thể thao; nhạc nền sôi động."],
            students: ["Trang phục thể thao thoải mái, giày vải."]
          },
          procedure: {
            intro: `1. Ổn định tổ chức: (1 - 2 phút)
- Kiểm tra sức khỏe, sĩ số. Trò chuyện về việc tập thể dục giúp cơ thể lớn nhanh như cây xanh đón nắng.`,
            instruction: `2. Phương pháp, hình thức tổ chức: (18 - 22 phút)
a. Khởi động: Đi các kiểu chân theo vòng tròn trên nền nhạc.
b. Trọng động:
* BTPTC: Tập các động tác phát triển thể lực.
* VĐCB: Chuyền bóng qua đầu qua chân thi đua giữa các đội.
* TCVĐ: "Gieo hạt nảy mầm" - Vừa làm động tác vừa đọc vè mô phỏng hạt nảy mầm, đơm hoa kết trái.
c. Hồi tĩnh: Thả lỏng nhẹ nhàng theo vòng tròn.`,
            conclusion: `3. Kết thúc: (1 - 2 phút)
- Tuyên dương các bạn nhỏ hăng hái, thu dọn bóng gọn gàng.`
          }
        }
      }
    },

    // ==========================================
    // 4. BẢN THÂN BÉ
    // ==========================================
    ban_than: {
      id: "ban_than",
      name: "Bản thân Bé",
      icon: "🧒",
      keywords: ["bản thân", "cơ thể", "giác quan", "mắt", "mũi", "tai", "tay", "chân", "rửa tay", "vệ sinh", "sức khỏe", "tôi là ai", "bé lớn lên"],
      activities: {
        am_nhac: {
          flagship: { title: "Dạy hát: 'Cái mũi' (Lê Đức) - NDKH: VĐTN: 'Tay thơm tay ngoan'", ndtt: "DH: Cái mũi (Lê Đức)", ndkh: "VĐTN: Tay thơm tay ngoan", badge: "Âm nhạc" },
          presets: [
            { title: "Dạy hát: 'Cái mũi' (Lê Đức) - NDKH: VĐTN: 'Tay thơm tay ngoan'", ndtt: "DH: Cái mũi", ndkh: "VĐTN: Tay thơm tay ngoan", tag: "Dạy hát" },
            { title: "Vận động múa: 'Nào chúng ta cùng tập thể dục'", ndtt: "VĐM: Tập thể dục buổi sáng", ndkh: "TCÂN: Vũ điệu cơ thể", tag: "Vận động múa" },
            { title: "Dạy hát: 'Đôi bàn tay nhỏ xinh' - NDKH: TCÂN: Đoán tiếng gõ", ndtt: "DH: Đôi bàn tay nhỏ xinh", ndkh: "TCÂN: Tai ai tinh", tag: "Dạy hát" },
            { title: "Nghe hát: 'Bé ngoan của mẹ' - NDKH: Biểu diễn tự do", ndtt: "NH: Bé ngoan của mẹ", ndkh: "Biểu diễn tự do", tag: "Nghe hát" }
          ],
          objectives: {
            knowledge: [
              "Trẻ biết tên bài hát 'Cái mũi' của nhạc sĩ Lê Đức, thuộc lời bài hát vui nhộn.",
              "Hiểu công dụng của cái mũi là để thở, để ngửi các mùi hương thơm ngát."
            ],
            skills: [
              "Hát đúng nhịp, giọng vui vẻ, chỉ đúng vào cái mũi nhỏ xinh khi hát đến câu hát tương ứng.",
              "Vận động minh họa đôi bàn tay khéo léo."
            ],
            attitudes: [
              "Có ý thức giữ gìn vệ sinh cơ thể, không cho dị vật nhọn vào mũi miệng."
            ]
          },
          preparation: {
            teacher: ["Đàn organ, tranh khuôn mặt bé với các giác quan rạng rỡ, loa kéo."],
            students: ["Gương con mini soi khuôn mặt, mũ múa xinh xắn."]
          },
          procedure: {
            intro: `1. Ổn định tổ chức: (1 - 2 phút)
- Cô cho trẻ soi gương và chỉ xem cái mũi nhỏ xinh của bé ở đâu nào!`,
            instruction: `2. Phương pháp, hình thức tổ chức: (18 - 22 phút)
2.1. Dạy hát: "Cái mũi" (Lê Đức)
- Cô hát mẫu kết hợp chỉ tay vào mũi làm điệu bộ dí dỏm.
- Dạy trẻ hát: Cả lớp hát, các tổ thi đua, nhóm bạn trai bạn gái hát đối đáp.
2.2. Vận động theo nhạc: "Tay thơm tay ngoan"
- Trẻ múa vẫy đôi bàn tay búp măng sạch sẽ sau khi được rửa thơm tho.`,
            conclusion: `3. Kết thúc: (1 - 2 phút)
- Khen ngợi cả lớp hát hay, dặn dò luôn giữ sạch sẽ cơ thể.`
          }
        },
        nhan_biet: {
          flagship: { title: "Khám phá khoa học: 5 giác quan kỳ diệu trên cơ thể bé", ndtt: "Khám phá 5 giác quan", ndkh: "TC: Thử tài các giác quan", badge: "Nhận biết" },
          presets: [
            { title: "Khám phá khoa học: 5 giác quan kỳ diệu trên cơ thể bé", ndtt: "Khám phá 5 giác quan", ndkh: "TC: Thử tài giác quan", tag: "Mẫu Chuẩn" },
            { title: "Kỹ năng sống: Bé thực hành rửa tay 6 bước sạch khuẩn", ndtt: "Kỹ năng rửa tay 6 bước", ndkh: "TC: Diệt vi khuẩn", tag: "Kỹ năng sống" },
            { title: "Khám phá: Đôi mắt sáng ngời và Đôi tai tinh anh", ndtt: "Khám phá mắt và tai", ndkh: "TC: Nhắm mắt đoán vật", tag: "Giác quan" },
            { title: "Bé phân biệt: Tay phải và Tay trái của mình", ndtt: "Phân biệt tay phải - tay trái", ndkh: "TC: Tay nào cầm thìa", tag: "Định hướng" }
          ],
          objectives: {
            knowledge: [
              "Trẻ nhận biết, gọi đúng tên 5 giác quan: Thị giác (mắt), Thính giác (tai), Khứu giác (mũi), Vị giác (lưỡi), Xúc giác (da/tay).",
              "Hiểu tác dụng kỳ diệu của từng giác quan trong việc cảm nhận thế giới xung quanh."
            ],
            skills: [
              "Biết trải nghiệm thực tế: Nhìn màu sắc, ngửi mùi thơm quả chín, nếm vị ngọt, nghe tiếng chuông, sờ đồ vật êm ái.",
              "Phát triển ngôn ngữ miêu tả cảm giác của bản thân."
            ],
            attitudes: [
              "Biết chăm sóc, bảo vệ các giác quan: Đọc sách đủ ánh sáng, không dụi mắt bẩn, vệ sinh tai mũi họng hàng ngày."
            ]
          },
          preparation: {
            teacher: ["Mô hình 5 giác quan; hộp đựng hoa quả thơm, chuông lắc, đĩa đường/muối, gấu bông mềm."],
            students: ["Lô tô các bộ phận trên cơ thể bé."]
          },
          procedure: {
            intro: `1. Ổn định tổ chức: (1 - 2 phút)
- Cô đọc câu đố về đôi mắt sáng ngời: "Hai cửa sổ nhỏ / Đóng lại khi ngủ / Mở ra ban ngày?".`,
            instruction: `2. Phương pháp, hình thức tổ chức: (18 - 22 phút)
2.1. Khám phá 5 giác quan qua các trạm trải nghiệm:
- Trạm Mắt: Nhìn thấy vườn hoa rực rỡ sắc màu.
- Trạm Mũi: Ngửi mùi tinh dầu cam thơm nức.
- Trạm Tai: Lắng nghe tiếng chim hót líu lo.
- Trạm Lưỡi: Nếm vị ngọt lịm của giọt mật ong.
- Trạm Tay: Sờ chú gấu bông mềm mại êm ái.
2.2. Trò chơi củng cố: "Giác quan nào giúp bé?"
- Cô nêu tình huống, trẻ nhanh tay giơ lô tô bộ phận tương ứng.`,
            conclusion: `3. Kết thúc: (1 - 2 phút)
- Giáo dục trẻ bảo vệ đôi mắt ngọc ngà và vệ sinh cơ thể sạch sẽ.`
          }
        },
        tao_hinh: {
          flagship: { title: "In dấu bàn tay xinh và trang trí khuôn mặt cười", ndtt: "In dấu bàn tay xinh", ndkh: "Góc nụ cười rạng rỡ", badge: "Tạo hình" },
          presets: [
            { title: "In dấu bàn tay xinh và trang trí khuôn mặt cười", ndtt: "In dấu bàn tay xinh", ndkh: "Góc nụ cười", tag: "Mẫu Chuẩn" },
            { title: "Vẽ chân dung bản thân bé với đôi mắt to tròn", ndtt: "Vẽ chân dung bản thân", ndkh: "Triển lãm nụ cười bé", tag: "Vẽ" },
            { title: "Nặn đôi bàn tay búp măng nhỏ xinh", ndtt: "Nặn bàn tay khéo", ndkh: "Bàn tay dũng sĩ", tag: "Nặn" },
            { title: "Xé dán trang phục bé trai, bé gái rực rỡ", ndtt: "Xé dán trang phục", ndkh: "Trình diễn thời trang", tag: "Xé dán" }
          ],
          objectives: {
            knowledge: [
              "Trẻ biết dùng lòng bàn tay chấm màu nước và in lên giấy tạo hình chú công, đóa hoa hoặc khuôn mặt cười ngộ nghĩnh.",
              "Nhận biết các chi tiết trên khuôn mặt: Mắt cười cong cong, miệng cười tươi tắn."
            ],
            skills: [
              "Rèn kỹ năng chấm màu nước vừa đủ, áp đều tay lên trang giấy.",
              "Vẽ thêm mắt mũi miệng bằng bút sáp màu."
            ],
            attitudes: [
              "Hào hứng khám phá bàn tay búp măng của mình, giữ gìn trang phục sạch đẹp."
            ]
          },
          preparation: {
            teacher: ["Màu nước an toàn thực phẩm, khay đựng màu, tranh mẫu in bàn tay sinh động."],
            students: ["Giấy A4, bút sáp, khăn ẩm lau tay."]
          },
          procedure: {
            intro: `1. Ổn định: Múa bài "Hai bàn tay của em". Trò chuyện về đôi bàn tay khéo léo làm được bao việc tốt.`,
            instruction: `2. Phương pháp thực hiện: Cô hướng dẫn chấm màu vào lòng bàn tay, ấn nhẹ lên giấy, dùng bút sáp vẽ thêm mắt cười và miệng xinh. Trẻ thực hành sáng tạo.`,
            conclusion: `3. Kết thúc: Rửa sạch tay bằng xà phòng và cùng chiêm ngưỡng góc tranh nụ cười.`
          }
        },
        van_hoc: {
          flagship: { title: "Thơ: 'Đôi mắt của em' (Tác giả: Lê Thị Mỹ Phương)", ndtt: "Thơ: Đôi mắt của em (Lê Thị Mỹ Phương)", ndkh: "Đàm thoại & ngâm thơ", badge: "Văn học" },
          presets: [
            { title: "Thơ: 'Đôi mắt của em' (Tác giả: Lê Thị Mỹ Phương)", ndtt: "Thơ: Đôi mắt của em", ndkh: "Đàm thoại thơ", tag: "Mẫu Chuẩn" },
            { title: "Thơ: 'Bé ngoan' (Tác giả: Phong Thu)", ndtt: "Thơ: Bé ngoan", ndkh: "Đàm thoại", tag: "Thơ" },
            { title: "Truyện: 'Gấu con bị đau răng' - Vệ sinh răng miệng", ndtt: "Truyện: Gấu con đau răng", ndkh: "Kịch rối que", tag: "Truyện kể" },
            { title: "Đồng dao: 'Nu na nu nống' - Đôi chân khỏe mạnh", ndtt: "Đồng dao: Nu na nu nống", ndkh: "Trò chơi dân gian", tag: "Đồng dao" }
          ],
          objectives: {
            knowledge: [
              "Trẻ biết tên bài thơ 'Đôi mắt của em' của nhà thơ Lê Thị Mỹ Phương.",
              "Hiểu nội dung: Đôi mắt xinh xinh tròn xoe giúp bé nhìn thấy muôn màu vạn vật, nhìn thấy cô giáo và các bạn."
            ],
            skills: [
              "Đọc thơ diễn cảm, ngắt nghỉ đúng nhịp điệu tươi vui, phát âm chuẩn tiếng Việt."
            ],
            attitudes: [
              "Biết giữ gìn đôi mắt sáng trong, rửa mặt sạch sẽ mỗi sáng thức dậy."
            ]
          },
          preparation: {
            teacher: ["Smart TV chiếu tranh hoạt hình minh họa thơ; kính lúp đồ chơi."],
            students: ["Ghế ngồi chữ U, mũ múa ngôi sao lấp lánh."]
          },
          procedure: {
            intro: `1. Ổn định: Cho trẻ nhắm mắt lại 5 giây rồi mở ra cảm nhận ánh sáng rực rỡ của đôi mắt.`,
            instruction: `2. Đọc thơ và đàm thoại: Cô đọc diễn cảm; đàm thoại về vẻ đẹp và sự quý giá của đôi mắt; dạy trẻ đọc thơ theo cá nhân, tổ và cả lớp.`,
            conclusion: `3. Kết thúc: Dặn dò không xem điện thoại quá gần để bảo vệ mắt sáng ngời.`
          }
        },
        van_dong: {
          flagship: { title: "VĐCB: Đi trên vạch kẻ thẳng đầu đội túi cát - TCVĐ: Nặn tượng", ndtt: "VĐCB: Đi thăng bằng trên vạch kẻ", ndkh: "TCVĐ: Nặn tượng", badge: "Vận động" },
          presets: [
            { title: "VĐCB: Đi trên vạch kẻ thẳng đầu đội túi cát - TCVĐ: Nặn tượng", ndtt: "VĐCB: Đi trên vạch kẻ thẳng", ndkh: "TCVĐ: Nặn tượng", tag: "Mẫu Chuẩn" },
            { title: "VĐCB: Bật xa 40 - 50cm - TCVĐ: Chạy tiếp cờ", ndtt: "VĐCB: Bật xa bằng 2 chân", ndkh: "TCVĐ: Chạy tiếp cờ", tag: "Bật xa" },
            { title: "VĐCB: Ném bóng trúng đích nằm ngang - TCVĐ: Nhảy lò cò", ndtt: "VĐCB: Ném trúng đích", ndkh: "TCVĐ: Nhảy lò cò", tag: "Ném" },
            { title: "VĐCB: Bò chui qua cổng thể dục rèn dẻo dai", ndtt: "VĐCB: Bò chui qua cổng", ndkh: "TCVĐ: Bắt chước tạo dáng", tag: "Bò chui" }
          ],
          objectives: {
            knowledge: [
              "Trẻ biết tên bài tập 'Đi trên vạch kẻ thẳng đầu đội túi cát' và luật chơi 'Nặn tượng'.",
              "Hiểu tư thế: Lưng thẳng, mắt nhìn thẳng phía trước, giữ thăng bằng không làm rơi túi cát."
            ],
            skills: [
              "Rèn sự thăng bằng, dáng đi thẳng, tự tin, không nghiêng ngả."
            ],
            attitudes: [
              "Hào hứng tập thể thao, có ý thức giữ tư thế đi đứng ngay ngắn chuẩn đẹp."
            ]
          },
          preparation: {
            teacher: ["Vạch kẻ thẳng dài 3m trên sàn tập; túi cát thể dục nhỏ xinh (nặng 150 - 200g); loa kéo."],
            students: ["Trang phục thể thao năng động, giày bata."]
          },
          procedure: {
            intro: `1. Khởi động: Trẻ đi vòng tròn khởi động các khớp cổ, vai, hông, đầu gối.`,
            instruction: `2. Trọng động: BTPTC theo nhạc; Cô làm mẫu và hướng dẫn trẻ đi thăng bằng trên vạch thẳng đầu đội túi cát; TCVĐ: "Nặn tượng" dừng hình nghệ thuật.`,
            conclusion: `3. Hồi tĩnh và kết thúc: Thả lỏng cơ thể, khen ngợi các bạn nhỏ có tư thế chuẩn đẹp.`
          }
        }
      }
    },

    // ==========================================
    // 5. THẾ GIỚI ĐỘNG VẬT
    // ==========================================
    dong_vat: {
      id: "dong_vat",
      name: "Thế giới Động vật",
      icon: "🐾",
      keywords: ["động vật", "con vật", "gà", "vịt", "chó", "mèo", "bướm", "ong", "sâu", "voi", "cá", "rùa", "chim", "côn trùng", "thú rừng"],
      activities: {
        am_nhac: {
          flagship: { title: "Dạy hát: 'Con bướm vàng' - NDKH: Nghe hát: 'Bướm hoa'", ndtt: "DH: Con bướm vàng", ndkh: "NH: Bướm hoa", badge: "Âm nhạc" },
          presets: [
            { title: "Dạy hát: 'Con bướm vàng' - NDKH: Nghe hát: 'Bướm hoa'", ndtt: "DH: Con bướm vàng", ndkh: "NH: Bướm hoa", tag: "Dạy hát" },
            { title: "Nghe hát: 'Hoa thơm bướm lượn' (Quan họ Bắc Ninh) - NDKH: TCÂN: 'Ai nhanh nhất'", ndtt: "NH: Hoa thơm bướm lượn", ndkh: "TCÂN: Ai nhanh nhất", tag: "Mẫu Chuẩn" },
            { title: "Vận động múa: 'Đố bạn' (Động vật trong rừng)", ndtt: "VĐM: Đố bạn", ndkh: "TCÂN: Tiếng kêu con vật", tag: "Vận động múa" },
            { title: "Dạy hát: 'Đàn gà con' (Phi Diệp) - NDKH: VĐTN", ndtt: "DH: Đàn gà con", ndkh: "VĐTN: Gà bới giun", tag: "Dạy hát" }
          ],
          objectives: {
            knowledge: [
              "Trẻ biết tên bài hát 'Con bướm vàng', cảm nhận giai điệu vui tươi, nhí nhảnh.",
              "Hiểu nội dung bài hát: Chú bướm vàng xinh xắn rập rờn bay lượn bên cánh hoa hồng thơm ngát."
            ],
            skills: [
              "Hát đúng giai điệu, lời ca, phát âm rõ ràng từng tiếng.",
              "Vận động vỗ tay hoặc dang tay làm cánh bướm chao lượn nhịp nhàng theo nhạc."
            ],
            attitudes: [
              "Yêu quý và bảo vệ các loài hoa và côn trùng có ích trong thiên nhiên."
            ]
          },
          preparation: {
            teacher: ["Đàn organ, mũ múa cánh bướm xinh xắn, hoa cài tay, loa kéo."],
            students: ["Ghế ngồi chữ U, mũ múa con bướm cho từng trẻ."]
          },
          procedure: {
            intro: `1. Ổn định tổ chức: Cô cùng trẻ chơi trò chơi 'Bướm bay tìm hoa' trong vườn lớp học. Trò chuyện về các loài côn trùng xinh xắn.`,
            instruction: `2. Phương pháp thực hiện: Cô hát mẫu lần 1 và lần 2; Giới thiệu bài hát; Dạy cả lớp, các tổ thi đua, cá nhân hát; Trò chơi âm nhạc 'Ai nhanh nhất' nhảy vào vòng hoa.`,
            conclusion: `3. Kết thúc: Làm đàn bướm vẫy cánh nhẹ nhàng bay ra sân trường dạo chơi.`
          }
        },
        nhan_biet: {
          flagship: { title: "Khám phá khoa học: Bạn Gà trống và Bạn Vịt bầu", ndtt: "Phân biệt Gà trống & Vịt bầu", ndkh: "TC: Về đúng ngôi nhà", badge: "Nhận biết" },
          presets: [
            { title: "Khám phá khoa học: Bạn Gà trống và Bạn Vịt bầu", ndtt: "Phân biệt Gà trống & Vịt bầu", ndkh: "TC: Về đúng ngôi nhà", tag: "Mẫu Chuẩn" },
            { title: "Khám phá: Chú Cún con trung thành và Bạn Mèo mướp bắt chuột", ndtt: "Phân biệt Chó & Mèo", ndkh: "TC: Bắt chước tiếng kêu", tag: "Vật nuôi" },
            { title: "Tìm hiểu: Thế giới các loài động vật sống dưới nước (Tôm, Cua, Cá)", ndtt: "Động vật dưới nước", ndkh: "TC: Thả cá vào ao", tag: "Dưới nước" },
            { title: "Khám phá: Chú Voi con ở Bản Đôn và Các con vật sống trong rừng", ndtt: "Động vật hoang dã", ndkh: "TC: Về đúng cánh rừng", tag: "Trong rừng" }
          ],
          objectives: {
            knowledge: [
              "Trẻ nhận biết, gọi đúng tên và phân biệt đặc điểm nổi bật của Gà trống (mào đỏ, mỏ nhọn, chân có cựa, gáy ó o) và Vịt bầu (mỏ dẹt, chân có màng, bơi giỏi, kêu cạp cạp).",
              "Biết gà và vịt đều là gia cầm có ích, cung cấp trứng và thịt bổ dưỡng."
            ],
            skills: [
              "Rèn kỹ năng quan sát, so sánh điểm giống và khác nhau rõ rệt giữa hai đối tượng.",
              "Phát triển ngôn ngữ mạch lạc, nói tròn câu."
            ],
            attitudes: [
              "Yêu thương, chăm sóc con vật nuôi, không trêu chọc hay ném đồ vào con vật."
            ]
          },
          preparation: {
            teacher: ["Mô hình chuồng gà và ao nước mini; video AI gà gáy ó o và đàn vịt tung tăng bơi lội."],
            students: ["Rổ đựng lô tô gà trống và vịt bầu, mũ múa con vật."]
          },
          procedure: {
            intro: `1. Ổn định: Đọc câu đố về chú gà trống mào đỏ và bạn vịt bầu chân có màng bơi.`,
            instruction: `2. Khám phá & Đàm thoại: Quan sát gà trống oai vệ; Quan sát vịt bầu bơi lội; So sánh điểm giống - khác nhau; Trò chơi 1: 'Ai chọn đúng', Trò chơi 2: 'Về đúng ngôi nhà'.`,
            conclusion: `3. Kết thúc: Giáo dục trẻ cho đàn gà vịt ăn uống sạch sẽ, cùng hát 'Đàn gà trong sân'.`
          }
        },
        tao_hinh: {
          flagship: { title: "In màu trang trí cánh bướm", ndtt: "In màu trang trí cánh bướm", ndkh: "Trưng bày tranh hoa bướm", badge: "Tạo hình" },
          presets: [
            { title: "In màu trang trí cánh bướm", ndtt: "In màu cánh bướm", ndkh: "Vườn hoa bướm", tag: "Mẫu Chuẩn" },
            { title: "Nặn chú sâu con ngộ nghĩnh từ đất nặn", ndtt: "Nặn chú sâu con", ndkh: "Vườn sâu vui nhộn", tag: "Nặn" },
            { title: "Xé dán đàn cá bơi tung tăng dưới nước", ndtt: "Xé dán đàn cá", ndkh: "Bể cá mini", tag: "Xé dán" },
            { title: "Vẽ và tô màu chú rùa con chậm chạp đáng yêu", ndtt: "Vẽ chú rùa con", ndkh: "Triển lãm sinh vật", tag: "Vẽ" }
          ],
          objectives: {
            knowledge: [
              "Trẻ nhận biết hình dáng chú bướm có 2 cánh to cân đối, râu dài và màu sắc rực rỡ.",
              "Hiểu kỹ năng chấm màu, in vân ngón tay hoặc khuy áo lên cánh bướm."
            ],
            skills: [
              "Rèn kỹ năng chấm màu đều tay, phối hợp màu sắc xanh đỏ vàng hài hòa."
            ],
            attitudes: [
              "Hào hứng tạo ra sản phẩm nghệ thuật về loài vật có ích thụ phấn cho hoa."
            ]
          },
          preparation: {
            teacher: ["Tranh mẫu in cánh bướm bằng khuy áo, xốp dạ, màu nước; giá trưng bày."],
            students: ["Khay đựng màu nước, giấy vẽ A4 hình bướm, khăn ẩm."]
          },
          procedure: {
            intro: `1. Ổn định: Hát bài 'Con bướm vàng'. Trò chuyện về loài bướm xinh đẹp.`,
            instruction: `2. Hướng dẫn mẫu & Trẻ thực hiện: Cô hướng dẫn chấm màu trang trí cánh bướm; Trẻ thực hành; Trưng bày triển lãm vườn bướm.`,
            conclusion: `3. Kết thúc: Khen ngợi bức tranh đẹp, cùng hát bài 'Gọi bướm'.`
          }
        },
        van_hoc: {
          flagship: { title: "Thơ: 'Ong và bướm' (Tác giả: Nhược Thủy)", ndtt: "Thơ: Ong và bướm (Nhược Thủy)", ndkh: "Mô hình kịch rối que", badge: "Văn học" },
          presets: [
            { title: "Thơ: 'Ong và bướm' (Tác giả: Nhược Thủy)", ndtt: "Thơ: Ong và bướm", ndkh: "Mô hình rối que", tag: "Mẫu Chuẩn" },
            { title: "Thơ: 'Đàn gà con' (Tác giả: Phạm Hổ)", ndtt: "Thơ: Đàn gà con", ndkh: "Đàm thoại thơ", tag: "Thơ" },
            { title: "Truyện: 'Cáo, Thỏ và Gà trống' - Sự dũng cảm", ndtt: "Truyện: Cáo, Thỏ và Gà trống", ndkh: "Đóng kịch nhân vật", tag: "Truyện kể" },
            { title: "Đồng dao: 'Con gà cục tác lá chanh'", ndtt: "Đồng dao dân gian", ndkh: "TC: Bắt chước tiếng gà", tag: "Đồng dao" }
          ],
          objectives: {
            knowledge: [
              "Trẻ biết tên bài thơ 'Ong và bướm' của nhà thơ Nhược Thủy.",
              "Hiểu nội dung: Bạn Ong rất chăm chỉ, nghe lời mẹ dặn 'Việc chưa xong / Đi chơi rong / Mẹ không thích'."
            ],
            skills: [
              "Đọc thơ diễn cảm, trả lời rõ ràng câu hỏi đàm thoại của cô."
            ],
            attitudes: [
              "Học tập đức tính chăm chỉ, vâng lời ông bà cha mẹ như bạn Ong nâu."
            ]
          },
          preparation: {
            teacher: ["Smart TV chiếu phim hoạt hình bài thơ; sa bàn mô hình khung rối que."],
            students: ["Mũ múa ong vàng và bươm bướm cho cả lớp."]
          },
          procedure: {
            intro: `1. Ổn định: Trẻ khởi động theo bài hát 'Chị ong nâu và em bé'.`,
            instruction: `2. Đọc thơ & Đàm thoại: Cô đọc diễn cảm; đàm thoại trích dẫn lời dặn của mẹ bạn Ong; dạy trẻ đọc thơ từng tổ, nhóm, cá nhân; Trò chơi 'Ai nhanh nhất' cắm hoa.`,
            conclusion: `3. Kết thúc: Nhắc nhở trẻ chăm ngoan, vâng lời cha mẹ.`
          }
        },
        van_dong: {
          flagship: { title: "VĐCB: Bò chui qua cổng - TCVĐ: Cáo và thỏ", ndtt: "VĐCB: Bò chui qua cổng", ndkh: "TCVĐ: Cáo và thỏ", badge: "Vận động" },
          presets: [
            { title: "VĐCB: Bò chui qua cổng - TCVĐ: Cáo và thỏ", ndtt: "VĐCB: Bò chui qua cổng", ndkh: "TCVĐ: Cáo và thỏ", tag: "Mẫu Chuẩn" },
            { title: "VĐCB: Ném và bắt bóng bằng 2 tay - TCVĐ: Kéo co", ndtt: "VĐCB: Ném và bắt bóng 2 tay", ndkh: "TCVĐ: Kéo co", tag: "Ném bóng" },
            { title: "VĐCB: Bật liên tục qua các vòng - TCVĐ: Mèo bắt chuột", ndtt: "VĐCB: Bật qua các vòng", ndkh: "TCVĐ: Mèo bắt chuột", tag: "Bật nhảy" },
            { title: "VĐCB: Bắt chước dáng đi của các con vật trong rừng", ndtt: "VĐCB: Dáng đi con vật", ndkh: "TCVĐ: Trời nắng trời mưa", tag: "Tạo dáng" }
          ],
          objectives: {
            knowledge: [
              "Trẻ biết tên vận động 'Bò chui qua cổng' và luật chơi 'Cáo và thỏ'.",
              "Hiểu kỹ thuật: Bò bằng bàn tay và cẳng chân, cúi thấp đầu khéo léo chui qua cổng không chạm lưng vào cổng."
            ],
            skills: [
              "Rèn sự phối hợp tay chân nhịp nhàng, khéo léo; phát triển cơ bắp.",
              "Phản xạ chạy nhanh về chuồng khi cáo xuất hiện."
            ],
            attitudes: [
              "Tự tin, hào hứng luyện tập thể thao, có ý thức kỷ luật xếp hàng."
            ]
          },
          preparation: {
            teacher: ["4 cổng chui chắc chắn (cao 45cm); mũ cáo cho cô, mũ thỏ cho trẻ; nhạc sôi nổi."],
            students: ["Trang phục thể thao gọn gàng."]
          },
          procedure: {
            intro: `1. Khởi động: Trẻ làm đàn thỏ con dạo chơi đi theo vòng tròn.`,
            instruction: `2. Trọng động: BTPTC theo nhạc; Cô làm mẫu và phân tích kỹ thuật bò chui qua cổng; Trẻ thực hành; TCVĐ: 'Cáo và thỏ' hào hứng.`,
            conclusion: `3. Hồi tĩnh và kết thúc: Thả lỏng nhẹ nhàng, thu dọn đồ dùng.`
          }
        }
      }
    },

    // ==========================================
    // 6. NGHỀ NGHIỆP QUANH BÉ
    // ==========================================
    nghe_nghiep: {
      id: "nghe_nghiep",
      name: "Nghề nghiệp Quanh Bé",
      icon: "👨‍⚕️",
      keywords: ["nghề nghiệp", "bác sĩ", "y tá", "công an", "bộ đội", "nông dân", "thợ xây", "công nhân", "cứu hỏa", "giáo viên", "nghề"],
      activities: {
        am_nhac: {
          flagship: { title: "Dạy hát: 'Cháu yêu cô chú công nhân' (Hoàng Văn Yến) - NDKH: TCÂN: 'Nghe giai điệu đoán nghề'", ndtt: "DH: Cháu yêu cô chú công nhân", ndkh: "TCÂN: Nghe giai điệu đoán nghề", badge: "Âm nhạc" },
          presets: [
            { title: "Dạy hát: 'Cháu yêu cô chú công nhân' (Hoàng Văn Yến) - NDKH: TCÂN: 'Nghe giai điệu đoán nghề'", ndtt: "DH: Cháu yêu cô chú công nhân", ndkh: "TCÂN: Đoán nghề", tag: "Dạy hát" },
            { title: "Dạy hát: 'Chú bộ đội' (Hoàng Hà) - NDKH: VĐTN: 'Duyệt binh tý hon'", ndtt: "DH: Chú bộ đội", ndkh: "VĐTN: Duyệt binh", tag: "Dạy hát" },
            { title: "Nghe hát: 'Bác đưa thư vui tính' - NDKH: TC: Chuyển thư nhanh", ndtt: "NH: Bác đưa thư vui tính", ndkh: "TC: Chuyển thư", tag: "Nghe hát" },
            { title: "Vận động múa: 'Lớn lên em lái máy cày' (Kim Dung)", ndtt: "VĐM: Em lái máy cày", ndkh: "TCÂN: Tai ai tinh", tag: "Vận động múa" }
          ],
          objectives: {
            knowledge: [
              "Trẻ biết tên bài hát 'Cháu yêu cô chú công nhân' (Hoàng Văn Yến), hiểu nội dung: Chú công nhân xây nhà cao tầng, cô công nhân dệt may áo mới cho bé mặc.",
              "Biết chơi trò chơi nghe giai điệu đoán nghề nghiệp."
            ],
            skills: [
              "Hát đúng nhịp, giọng vui tươi khỏe khoắn, phát âm rõ từng lời ca.",
              "Vận động phụ họa nhịp nhàng theo giai điệu."
            ],
            attitudes: [
              "Kính trọng, biết ơn các cô chú công nhân và người lao động.",
              "Biết giữ gìn quần áo sạch sẽ, yêu quý ngôi nhà và các công trình xã hội."
            ]
          },
          preparation: {
            teacher: ["Đàn organ, trang phục mũ thợ xây, vải áo mẫu, tranh ảnh các ngành nghề."],
            students: ["Dụng cụ âm nhạc mini, mũ múa công nhân."]
          },
          procedure: {
            intro: `1. Ổn định: Đố bé xem ai xây nên những ngôi nhà cao tầng và dệt nên quần áo đẹp? Giới thiệu bài hát của nhạc sĩ Hoàng Văn Yến.`,
            instruction: `2. Dạy hát: Cô hát mẫu; phân tích ý nghĩa; dạy cả lớp, các tổ, nhóm hát đối đáp; Trò chơi 'Nghe giai điệu đoán nghề nghiệp'.`,
            conclusion: `3. Kết thúc: Giáo dục lòng biết ơn người lao động; cả lớp cùng hát vang bài hát.`
          }
        },
        nhan_biet: {
          flagship: { title: "Khám phá khoa học: Bé tìm hiểu công việc của Bác sĩ và Y tá", ndtt: "Tìm hiểu nghề Bác sĩ & Y tá", ndkh: "TC: Bác sĩ nhí khám bệnh", badge: "Nhận biết" },
          presets: [
            { title: "Khám phá khoa học: Bé tìm hiểu công việc của Bác sĩ và Y tá", ndtt: "Bác sĩ và Y tá", ndkh: "TC: Bác sĩ nhí", tag: "Mẫu Chuẩn" },
            { title: "Khám phá: Công việc và dụng cụ của Bác Nông dân một nắng hai sương", ndtt: "Nghề Nông dân", ndkh: "TC: Bé tập cấy lúa", tag: "Nông nghiệp" },
            { title: "Bé tìm hiểu về Chú Bộ đội và Chú Công an giữ gìn bình yên", ndtt: "Chú Bộ đội & Công an", ndkh: "TC: Diễu hành tý hon", tag: "Lực lượng vũ trang" },
            { title: "Bé tìm hiểu về Chú Cứu hỏa dũng cảm và Kỹ năng thoát hiểm", ndtt: "Chú Cứu hỏa dũng cảm", ndkh: "Thực hành thoát hiểm 114", tag: "Kỹ năng sống" }
          ],
          objectives: {
            knowledge: [
              "Trẻ biết trang phục áo blouse trắng đặc trưng của Bác sĩ và Y tá.",
              "Biết tên và công dụng một số dụng cụ y tế: Ống nghe khám tim phổi, nhiệt kế đo nhiệt độ, kim tiêm, bông băng cứu thương.",
              "Hiểu công việc cao quý chữa bệnh cứu người, chăm sóc sức khỏe cho nhân dân."
            ],
            skills: [
              "Rèn kỹ năng quan sát, gọi đúng tên dụng cụ và mô phỏng động tác khám bệnh nhẹ nhàng.",
              "Phát triển ngôn ngữ giao tiếp khi vào vai bác sĩ - bệnh nhân."
            ],
            attitudes: [
              "Kính trọng, biết ơn bác sĩ; không sợ hãi khi phải đi tiêm phòng hay khám bệnh."
            ]
          },
          preparation: {
            teacher: ["Mô hình phòng khám y tế mini; áo blouse trắng, mũ y tế, ống nghe, nhiệt kế đồ chơi."],
            students: ["Lô tô các dụng cụ y tế; gấu bông làm bệnh nhân."]
          },
          procedure: {
            intro: `1. Ổn định: Đọc câu đố: "Ai mặc áo trắng / Có chữ thập xinh / Khám bệnh tận tình / Cho em khỏe mạnh?".`,
            instruction: `2. Khám phá: Tìm hiểu trang phục bác sĩ; Khám phá công dụng ống nghe, nhiệt kế; Trải nghiệm thực hành 'Bác sĩ nhí khám bệnh cho gấu bông'; Phân biệt dụng cụ của bác sĩ với các nghề khác.`,
            conclusion: `3. Kết thúc: Dặn dò bé ăn uống đủ chất, vệ sinh sạch sẽ để luôn có sức khỏe tốt.`
          }
        },
        tao_hinh: {
          flagship: { title: "Nặn dụng cụ lao động của cô bác nông dân (củ khoai, củ cà rốt, hạt lúa)", ndtt: "Nặn nông sản & dụng cụ nông dân", ndkh: "Bày mâm nông sản", badge: "Tạo hình" },
          presets: [
            { title: "Nặn dụng cụ lao động của cô bác nông dân (củ khoai, củ cà rốt, hạt lúa)", ndtt: "Nặn nông sản quê em", ndkh: "Bày mâm nông sản", tag: "Mẫu Chuẩn" },
            { title: "Vẽ và tô màu ngôi nhà cao tầng của chú thợ xây", ndtt: "Vẽ ngôi nhà cao tầng", ndkh: "Công trình tương lai", tag: "Vẽ" },
            { title: "Xé dán lá cờ đỏ sao vàng dâng chú bộ đội", ndtt: "Xé dán cờ Tổ quốc", ndkh: "Món quà tặng chú", tag: "Xé dán" },
            { title: "In màu trang trí chiếc mũ y tá xinh xắn", ndtt: "Trang trí mũ y tá", ndkh: "Chiếc mũ blouse", tag: "In màu" }
          ],
          objectives: {
            knowledge: [
              "Trẻ biết hình dáng các loại nông sản của bác nông dân: Củ cà rốt dài thon đầu nhọn, củ khoai tròn dài, hạt lúa nhỏ xinh.",
              "Hiểu các kỹ năng nặn: Xoay tròn, lăn dài, vuốt nhọn, ấn dẹt."
            ],
            skills: [
              "Rèn sự khéo léo của các ngón tay khi thao tác với đất nặn, gắn đính lá xanh vào củ cà rốt."
            ],
            attitudes: [
              "Biết quý trọng hạt gạo, củ khoai củ sắn do mồ hôi của bác nông dân làm ra, ăn hết suất cơm không bỏ thừa."
            ]
          },
          preparation: {
            teacher: ["Mẫu nặn củ cà rốt, củ khoai tây, bắp ngô từ đất sét màu; rổ tre đựng nông sản."],
            students: ["Đất nặn các màu cam, vàng, xanh; bảng nặn con, khăn lau ẩm."]
          },
          procedure: {
            intro: `1. Ổn định: Hát bài 'Hạt gạo làng ta', trò chuyện về công lao một nắng hai sương của bác nông dân.`,
            instruction: `2. Hướng dẫn & Thực hiện: Cô nặn mẫu phân tích kỹ năng lăn dài vuốt nhọn củ cà rốt; Trẻ say sưa nặn; Trưng bày mâm nông sản bội thu.`,
            conclusion: `3. Kết thúc: Giáo dục trân trọng hạt ngọc trời, thu dọn đồ dùng sạch sẽ.`
          }
        },
        van_hoc: {
          flagship: { title: "Thơ: 'Chú bộ đội hành quân trong mưa' (Tác giả: Vũ Thùy Hương)", ndtt: "Thơ: Chú bộ đội hành quân trong mưa", ndkh: "Đàm thoại & ngâm thơ", badge: "Văn học" },
          presets: [
            { title: "Thơ: 'Chú bộ đội hành quân trong mưa' (Tác giả: Vũ Thùy Hương)", ndtt: "Thơ: Chú bộ đội hành quân", ndkh: "Đàm thoại thơ", tag: "Mẫu Chuẩn" },
            { title: "Truyện: 'Ba cô gái' - Bài học về lòng hiếu thảo và chăm chỉ lao động", ndtt: "Truyện: Ba cô gái", ndkh: "Kịch rối que", tag: "Truyện kể" },
            { title: "Thơ: 'Bác nông dân' (Tác giả: Nguyễn Lãm Thắng)", ndtt: "Thơ: Bác nông dân", ndkh: "Đàm thoại", tag: "Thơ" },
            { title: "Đồng dao: 'Rềnh rềnh ràng ràng' - Nghề dệt vải", ndtt: "Đồng dao: Rềnh rềnh ràng ràng", ndkh: "Trò chơi dệt vải", tag: "Đồng dao" }
          ],
          objectives: {
            knowledge: [
              "Trẻ biết tên bài thơ 'Chú bộ đội hành quân trong mưa' của tác giả Vũ Thùy Hương.",
              "Hiểu nội dung: Dù trời mưa gió bão bùng, chú bộ đội vẫn chắc tay súng bước đều hành quân canh giữ sự bình yên cho đất nước."
            ],
            skills: [
              "Đọc thơ to, rõ lời, hào hùng, dứt khoát, ngắt nhịp đúng thể thơ."
            ],
            attitudes: [
              "Kính yêu, khâm phục lòng dũng cảm của các chú bộ đội cụ Hồ."
            ]
          },
          preparation: {
            teacher: ["Smart TV chiếu video chú bộ đội diễu binh trong mưa; mũ cối có ngôi sao vàng."],
            students: ["Ghế ngồi chữ U, mũ sao vàng cho trẻ."]
          },
          procedure: {
            intro: `1. Ổn định: Cho trẻ xem hình ảnh chú bộ đội canh giữ ngoài biên cương hải đảo.`,
            instruction: `2. Đọc thơ & Đàm thoại: Cô đọc diễn cảm; đàm thoại về ý chí vượt mưa gió của chú bộ đội; dạy trẻ đọc thơ hào hùng từng tổ, nhóm, cá nhân.`,
            conclusion: `3. Kết thúc: Cả lớp làm các chú bộ đội tý hon diễu hành oai vệ bước ra ngoài sân.`
          }
        },
        van_dong: {
          flagship: { title: "VĐCB: Chú bộ đội tý hon bò chui qua đường hầm - TCVĐ: Chuyển hàng về kho", ndtt: "VĐCB: Bò chui qua hầm", ndkh: "TCVĐ: Chuyển hàng về kho", badge: "Vận động" },
          presets: [
            { title: "VĐCB: Chú bộ đội tý hon bò chui qua đường hầm - TCVĐ: Chuyển hàng về kho", ndtt: "VĐCB: Bò chui qua đường hầm", ndkh: "TCVĐ: Chuyển hàng về kho", tag: "Mẫu Chuẩn" },
            { title: "VĐCB: Đi thăng bằng trên cầu khỉ chuyển lúa giúp bác nông dân", ndtt: "VĐCB: Đi thăng bằng trên cầu", ndkh: "TCVĐ: Gánh lúa về làng", tag: "Thăng bằng" },
            { title: "VĐCB: Ném bao cát trúng đích - TCVĐ: Kéo co", ndtt: "VĐCB: Ném bao cát trúng đích", ndkh: "TCVĐ: Kéo co", tag: "Ném đích" },
            { title: "VĐCB: Bật qua các chiến hào - TCVĐ: Cảnh sát bắt cướp", ndtt: "VĐCB: Bật qua hào rãnh", ndkh: "TCVĐ: Cảnh sát giao thông", tag: "Bật nhảy" }
          ],
          objectives: {
            knowledge: [
              "Trẻ biết tên bài tập 'Bò chui qua đường hầm' và luật chơi 'Chuyển hàng về kho'.",
              "Nắm vững kỹ thuật bò khéo léo phối hợp tay nọ chân kia trong đường hầm dài 2 - 3m."
            ],
            skills: [
              "Rèn thể lực bền bỉ, sự dũng cảm và linh hoạt của cơ thể."
            ],
            attitudes: [
              "Hào hứng tập làm chú bộ đội, có tinh thần đồng đội phối hợp ăn ý."
            ]
          },
          preparation: {
            teacher: ["Ống hầm thể dục chui dài 2.5m; bao cát mini làm bao hàng; cờ chuẩn xuất phát; nhạc hành quân sôi nổi."],
            students: ["Trang phục thể thao thoải mái, mũ cối tý hon."]
          },
          procedure: {
            intro: `1. Khởi động: Trẻ làm các chiến sĩ nhí đi đều bước theo hiệu lệnh còi.`,
            instruction: `2. Trọng động: BTPTC 'Hành quân xa'; VĐCB bò chui qua đường hầm khéo léo; TCVĐ: 'Chuyển hàng về kho' thi đua 2 đội tiếp sức.`,
            conclusion: `3. Hồi tĩnh: Thả lỏng đi lại nhẹ nhàng, tuyên dương các chiến sĩ nhí xuất sắc.`
          }
        }
      }
    },

    // ==========================================
    // 7. TRƯỜNG MẦM NON CỦA BÉ
    // ==========================================
    truong_mam_non: {
      id: "truong_mam_non",
      name: "Trường Mầm non Của Bé",
      icon: "🏫",
      keywords: ["trường mầm non", "lớp học", "cô giáo", "bạn bè", "đồ chơi", "sân trường", "ngày đầu tiên", "bác cấp dưỡng", "bé đến trường"],
      activities: {
        am_nhac: {
          flagship: { title: "Dạy hát: 'Trường chúng cháu là trường mầm non' (Phạm Tuyên) - NDKH: TCÂN: 'Vòng tròn âm nhạc'", ndtt: "DH: Trường chúng cháu là trường mầm non", ndkh: "TCÂN: Vòng tròn âm nhạc", badge: "Âm nhạc" },
          presets: [
            { title: "Dạy hát: 'Trường chúng cháu là trường mầm non' (Phạm Tuyên) - NDKH: TCÂN: 'Vòng tròn âm nhạc'", ndtt: "DH: Trường chúng cháu là trường mầm non", ndkh: "TCÂN: Vòng tròn âm nhạc", tag: "Dạy hát" },
            { title: "Dạy hát: 'Vui đến trường' (Hồ Bắc) - NDKH: VĐTN: Vỗ tay theo nhịp", ndtt: "DH: Vui đến trường", ndkh: "VĐTN: Vỗ tay theo nhịp", tag: "Dạy hát" },
            { title: "Nghe hát: 'Ngày đầu tiên đi học' (Nguyễn Ngọc Thiện)", ndtt: "NH: Ngày đầu tiên đi học", ndkh: "Trò chuyện cảm xúc", tag: "Nghe hát" },
            { title: "Vận động múa: 'Cô và Mẹ' (Phạm Tuyên)", ndtt: "VĐM: Cô và Mẹ", ndkh: "TCÂN: Tai ai tinh", tag: "Vận động múa" }
          ],
          objectives: {
            knowledge: [
              "Trẻ nhớ tên bài hát 'Trường chúng cháu là trường mầm non' của nhạc sĩ Phạm Tuyên.",
              "Hiểu lời ca: Ca ngợi trường mầm non thân yêu có cô giáo hiền như mẹ, có bạn bè cùng chơi vui múa hát."
            ],
            skills: [
              "Hát đúng giai điệu rộn ràng, nhịp nhàng; phát âm to rõ từng tiếng.",
              "Vận động vỗ tay theo phách hoặc múa xòe tay chào cô duyên dáng."
            ],
            attitudes: [
              "Yêu quý trường lớp, yêu cô giáo, đoàn kết thân ái với các bạn."
            ]
          },
          preparation: {
            teacher: ["Đàn organ, loa kéo, tranh ảnh trường mầm non Phúc Sơn B rực rỡ cờ hoa."],
            students: ["Xắc xô, mũ múa hoa xinh xắn."]
          },
          procedure: {
            intro: `1. Ổn định: Đàm thoại về niềm vui mỗi ngày đến trường mầm non được cô dạy múa hát và chơi cùng bạn.`,
            instruction: `2. Dạy hát: Cô hát mẫu lần 1 và 2; Dạy trẻ hát nhịp nhàng theo tổ, nhóm, cá nhân; Trò chơi 'Vòng tròn âm nhạc' kết bạn thân.`,
            conclusion: `3. Kết thúc: Khen ngợi cả lớp hát hay, cùng hát vang bài hát khi ra sân.`
          }
        },
        nhan_biet: {
          flagship: { title: "Khám phá: Các đồ chơi thân thuộc trong lớp học của bé", ndtt: "Khám phá đồ chơi trong lớp", ndkh: "TC: Cất đồ chơi đúng góc", badge: "Nhận biết" },
          presets: [
            { title: "Khám phá: Các đồ chơi thân thuộc trong lớp học của bé", ndtt: "Đồ chơi trong lớp học", ndkh: "TC: Cất đồ chơi đúng nơi", tag: "Mẫu Chuẩn" },
            { title: "Trò chuyện về các cô giáo và bác cấp dưỡng trong trường mầm non", ndtt: "Cô giáo và bác cấp dưỡng", ndkh: "TC: Bé ngoan lễ phép", tag: "Tình cảm" },
            { title: "Khám phá các khu vực trong trường: Sân chơi, vườn cổ tích, lớp học", ndtt: "Khám phá khuôn viên trường", ndkh: "TC: Du lịch quanh trường", tag: "Môi trường" },
            { title: "Nhận biết phân biệt: Đồ chơi bằng nhựa và Đồ chơi bằng gỗ", ndtt: "Phân biệt chất liệu đồ chơi", ndkh: "TC: Chọn đúng rổ", tag: "Chất liệu" }
          ],
          objectives: {
            knowledge: [
              "Trẻ nhận biết, gọi đúng tên các đồ chơi quen thuộc: Khối xếp hình, búp bê, bộ nấu ăn, quả bóng, ô tô đồ chơi.",
              "Biết vị trí các góc chơi (góc xây dựng, góc phân vai, góc học tập) và quy tắc cất đồ chơi gọn gàng sau khi chơi."
            ],
            skills: [
              "Rèn kỹ năng quan sát, phân loại đồ chơi theo màu sắc và kích cỡ.",
              "Phát triển kỹ năng giao tiếp, biết chia sẻ đồ chơi cùng bạn không tranh giành."
            ],
            attitudes: [
              "Có ý thức giữ gìn đồ chơi bền đẹp, cất dọn ngăn nắp đúng nơi quy định."
            ]
          },
          preparation: {
            teacher: ["Các bộ đồ chơi thật trong lớp; các ngăn giá kệ dán ký hiệu rõ ràng."],
            students: ["Lô tô các loại đồ chơi."]
          },
          procedure: {
            intro: `1. Ổn định: Hát bài 'Giờ chơi đến rồi'. Mở hộp quà bí mật khám phá các bạn đồ chơi xinh xắn.`,
            instruction: `2. Khám phá & Đàm thoại: Trò chuyện về tên gọi, cách chơi và sự an toàn khi chơi khối gỗ, búp bê; Thực hành kỹ năng cất đồ chơi vào đúng ngăn kệ; Trò chơi 'Thi xem ai cất nhanh đúng chỗ'.`,
            conclusion: `3. Kết thúc: Giáo dục tính ngăn nắp, cùng cô dọn đồ chơi sạch sẽ.`
          }
        },
        tao_hinh: {
          flagship: { title: "Nặn đồ chơi tặng bạn thân (quả bóng tròn xoe, chiếc bánh ngọt)", ndtt: "Nặn đồ chơi tặng bạn", ndkh: "Món quà tình bạn", badge: "Tạo hình" },
          presets: [
            { title: "Nặn đồ chơi tặng bạn thân (quả bóng tròn xoe, chiếc bánh ngọt)", ndtt: "Nặn đồ chơi tặng bạn", ndkh: "Món quà tình bạn", tag: "Mẫu Chuẩn" },
            { title: "Vẽ và tô màu chùm bóng bay rực rỡ ngày khai giảng", ndtt: "Vẽ chùm bóng bay", ndkh: "Bóng bay ước mơ", tag: "Vẽ" },
            { title: "Xé dán lá cờ đuôi nheo trang trí lớp học", ndtt: "Xé dán cờ trang trí", ndkh: "Lớp học đáng yêu", tag: "Xé dán" },
            { title: "In màu vân tay trang trí cây tình bạn của lớp", ndtt: "In vân tay cây tình bạn", ndkh: "Cây tình bạn thân thiết", tag: "In màu" }
          ],
          objectives: {
            knowledge: [
              "Trẻ biết dùng đất nặn xoay tròn tạo quả bóng, lăn dài ấn dẹt tạo chiếc bánh xinh xắn.",
              "Hiểu ý nghĩa món quà tự tay mình làm để tặng cho bạn thân trong lớp."
            ],
            skills: [
              "Rèn sự khéo léo của đôi bàn tay qua các thao tác nhào đất, xoay tròn, miết phẳng."
            ],
            attitudes: [
              "Biết chia sẻ, yêu thương và gắn kết tình bạn thân thiết dưới mái trường mầm non."
            ]
          },
          preparation: {
            teacher: ["Mẫu nặn quả bóng nhiều màu, đĩa bánh nhỏ; khay trưng bày quà tặng."],
            students: ["Đất nặn, bảng con, đĩa con đựng sản phẩm, khăn lau."]
          },
          procedure: {
            intro: `1. Ổn định: Hát bài 'Tìm bạn thân'. Trò chuyện về người bạn thân nhất của con trong lớp.`,
            instruction: `2. Hướng dẫn & Thực hiện: Cô làm mẫu thao tác xoay tròn tạo viên bi, ấn dẹt làm bánh; Trẻ nặn sáng tạo; Trẻ trao tặng món quà cho người bạn mình yêu quý.`,
            conclusion: `3. Kết thúc: Khen ngợi sự khéo tay và tình bạn ấm áp của cả lớp.`
          }
        },
        van_hoc: {
          flagship: { title: "Thơ: 'Bạn mới' (Tác giả: Nguyệt Mai)", ndtt: "Thơ: Bạn mới (Nguyệt Mai)", ndkh: "Đàm thoại & ngâm thơ", badge: "Văn học" },
          presets: [
            { title: "Thơ: 'Bạn mới' (Tác giả: Nguyệt Mai)", ndtt: "Thơ: Bạn mới", ndkh: "Đàm thoại thơ", tag: "Mẫu Chuẩn" },
            { title: "Truyện: 'Đôi bạn tốt' - Sự giúp đỡ bạn lúc khó khăn", ndtt: "Truyện: Đôi bạn tốt", ndkh: "Kịch rối que", tag: "Truyện kể" },
            { title: "Thơ: 'Bàn tay cô giáo' (Tác giả: Định Hải)", ndtt: "Thơ: Bàn tay cô giáo", ndkh: "Đàm thoại", tag: "Thơ" },
            { title: "Đồng dao: 'Tập tầm vông' - Trò chơi kết nối bạn bè", ndtt: "Đồng dao: Tập tầm vông", ndkh: "Trò chơi dân gian", tag: "Đồng dao" }
          ],
          objectives: {
            knowledge: [
              "Trẻ nhớ tên bài thơ 'Bạn mới' của tác giả Nguyệt Mai.",
              "Hiểu nội dung bài thơ: Khi có bạn mới đến lớp còn nhút nhát, các bạn cũ hãy niềm nở chào đón, rủ bạn cùng chơi để bạn vui vẻ hòa nhập."
            ],
            skills: [
              "Đọc thơ diễn cảm, phát âm rõ ràng, biết ngắt nhịp nhẹ nhàng."
            ],
            attitudes: [
              "Thân thiện, hòa đồng, biết quan tâm và giúp đỡ bạn bè trong lớp."
            ]
          },
          preparation: {
            teacher: ["Slide tranh hoạt họa thơ 'Bạn mới'; sa bàn rối que."],
            students: ["Ghế ngồi chữ U, mũ múa nụ cười xinh."]
          },
          procedure: {
            intro: `1. Ổn định: Đàm thoại về cảm xúc ngày đầu tiên đi học còn bỡ ngỡ của các bé.`,
            instruction: `2. Đọc thơ & Đàm thoại: Cô đọc diễn cảm; đàm thoại trích dẫn 'Bạn mới đến trường / Hãy còn nhút nhát / Em dạy bạn hát / Rủ bạn cùng chơi'; Dạy trẻ đọc thơ; Thực hành bắt tay chào bạn mới.`,
            conclusion: `3. Kết thúc: Cả lớp nắm tay nhau thành vòng tròn hát vang bài ca tình bạn.`
          }
        },
        van_dong: {
          flagship: { title: "VĐCB: Đi trong đường hẹp đến trường mang hoa tặng cô - TCVĐ: Kéo co", ndtt: "VĐCB: Đi trong đường hẹp", ndkh: "TCVĐ: Kéo co", badge: "Vận động" },
          presets: [
            { title: "VĐCB: Đi trong đường hẹp đến trường mang hoa tặng cô - TCVĐ: Kéo co", ndtt: "VĐCB: Đi trong đường hẹp", ndkh: "TCVĐ: Kéo co", tag: "Mẫu Chuẩn" },
            { title: "VĐCB: Chạy đổi hướng theo hiệu lệnh còi - TCVĐ: Mèo đuổi chuột", ndtt: "VĐCB: Chạy đổi hướng", ndkh: "TCVĐ: Mèo đuổi chuột", tag: "Chạy nhanh" },
            { title: "VĐCB: Bật liên tục qua 4 - 5 vòng thể dục rèn nhanh nhẹn", ndtt: "VĐCB: Bật qua các vòng", ndkh: "TCVĐ: Cáo và thỏ", tag: "Bật nhảy" },
            { title: "VĐCB: Ném bóng vào rổ - TCVĐ: Rồng rắn lên mây", ndtt: "VĐCB: Ném bóng vào rổ", ndkh: "TCVĐ: Rồng rắn lên mây", tag: "Ném bóng" }
          ],
          objectives: {
            knowledge: [
              "Trẻ biết tên bài tập 'Đi trong đường hẹp' và luật chơi 'Kéo co'.",
              "Biết bước đi nhịp nhàng trong con đường hẹp rộng 35cm không giẫm vạch."
            ],
            skills: [
              "Giữ thăng bằng cơ thể tốt, rèn sự khéo léo và sức mạnh đôi chân."
            ],
            attitudes: [
              "Tự tin, hào hứng luyện tập thể dục, đoàn kết cùng đồng đội."
            ]
          },
          preparation: {
            teacher: ["Con đường hẹp kẻ vạch dài 3m; lẵng hoa tặng cô; dây kéo co; loa kéo."],
            students: ["Trang phục thể thao thoải mái."]
          },
          procedure: {
            intro: `1. Khởi động: Trẻ đi vòng tròn theo nhạc khởi động các khớp chân tay.`,
            instruction: `2. Trọng động: BTPTC; VĐCB Đi trong đường hẹp mang hoa dâng tặng cô giáo; TCVĐ 'Kéo co' thi đua sôi nổi giữa 2 đội.`,
            conclusion: `3. Hồi tĩnh: Thả lỏng nhẹ nhàng, tuyên dương sự nỗ lực của trẻ.`
          }
        }
      }
    },

    // ==========================================
    // 8. NƯỚC & HIỆN TƯỢNG TỰ NHIÊN
    // ==========================================
    nuoc_hien_tuong: {
      id: "nuoc_hien_tuong",
      name: "Nước & Hiện tượng Tự nhiên",
      icon: "💧",
      keywords: ["nước", "mưa", "nắng", "gió", "mặt trời", "mặt trăng", "thời tiết", "mùa hè", "suối", "sông", "biển", "chìm nổi", "nước sạch", "tự nhiên", "môi trường", "bảo vệ môi trường", "rác"],
      activities: {
        am_nhac: {
          flagship: { title: "Dạy hát: 'Cho tôi đi làm mưa với' (Hoàng Hà) - NDKH: TCÂN: 'Mưa to, mưa nhỏ'", ndtt: "DH: Cho tôi đi làm mưa với", ndkh: "TCÂN: Mưa to mưa nhỏ", badge: "Âm nhạc" },
          presets: [
            { title: "Dạy hát: 'Cho tôi đi làm mưa với' (Hoàng Hà) - NDKH: TCÂN: 'Mưa to, mưa nhỏ'", ndtt: "DH: Cho tôi đi làm mưa với", ndkh: "TCÂN: Mưa to mưa nhỏ", tag: "Dạy hát" },
            { title: "Nghe hát: 'Mưa rơi' (Dân ca Xá) - NDKH: VĐTN: Tiếng mưa rơi", ndtt: "NH: Mưa rơi", ndkh: "VĐTN: Tiếng mưa rơi", tag: "Nghe hát" },
            { title: "Vận động múa: 'Nắng sớm' (Hàn Ngọc Bích)", ndtt: "VĐM: Nắng sớm", ndkh: "TCÂN: Tai ai tinh", tag: "Vận động múa" },
            { title: "Dạy hát: 'Cháu vẽ ông mặt trời' (Tân Huyền)", ndtt: "DH: Cháu vẽ ông mặt trời", ndkh: "TCÂN: Nghe nhạc đoán tranh", tag: "Dạy hát" }
          ],
          objectives: {
            knowledge: [
              "Trẻ nhớ tên bài hát 'Cho tôi đi làm mưa với' của nhạc sĩ Hoàng Hà, hiểu nội dung: Hạt mưa giúp cây lúa trổ bông, cây hoa tươi tốt, cho đời thêm xanh mát.",
              "Biết cách chơi trò chơi âm nhạc 'Mưa to, mưa nhỏ'."
            ],
            skills: [
              "Hát đúng giai điệu tươi vui, phát âm to rõ ràng.",
              "Rèn phản xạ nhanh: Nhạc nhanh vỗ tay mưa to, nhạc chậm gõ ngón tay mưa nhỏ tí tách."
            ],
            attitudes: [
              "Biết tiết kiệm nước sạch, không lãng phí nước khi rửa tay, đánh răng."
            ]
          },
          preparation: {
            teacher: ["Đàn organ, loa kéo, tranh ảnh mưa rơi tưới mát cánh đồng, xắc xô."],
            students: ["Ghế ngồi chữ U, mũ múa hạt mưa và đám mây."]
          },
          procedure: {
            intro: `1. Ổn định: Cho trẻ nghe tiếng sấm chớp và tiếng mưa rơi rào rào. Trò chuyện về lợi ích của nước mưa.`,
            instruction: `2. Dạy hát: Cô hát mẫu lần 1 và 2; Dạy trẻ hát theo tổ, nhóm, cá nhân; Trò chơi âm nhạc 'Mưa to, mưa nhỏ' sôi nổi.`,
            conclusion: `3. Kết thúc: Nhắc nhở trẻ che ô, mặc áo mưa khi đi dưới trời mưa để không bị ốm.`
          }
        },
        nhan_biet: {
          flagship: { title: "Thí nghiệm khoa học: Khám phá vật chìm - vật nổi trong nước", ndtt: "Vật chìm & vật nổi trong nước", ndkh: "TC: Thả thuyền giấy", badge: "Nhận biết" },
          presets: [
            { title: "Thí nghiệm khoa học: Khám phá vật chìm - vật nổi trong nước", ndtt: "Vật chìm - vật nổi trong nước", ndkh: "TC: Thả thuyền giấy", tag: "Mẫu Chuẩn" },
            { title: "Khám phá: Nước ngọt quý giá và ích lợi của nước với đời sống", ndtt: "Ích lợi của nước sạch", ndkh: "TC: Tiết kiệm nước", tag: "Môi trường" },
            { title: "Bé tìm hiểu về Mặt trời ban ngày và Mặt trăng ban đêm", ndtt: "Mặt trời & Mặt trăng", ndkh: "TC: Ngày và đêm", tag: "Vũ trụ" },
            { title: "Khám phá các hiện tượng thời tiết: Nắng, mưa, gió bão, cầu vồng", ndtt: "Các hiện tượng thời tiết", ndkh: "TC: Dự báo thời tiết", tag: "Thời tiết" }
          ],
          objectives: {
            knowledge: [
              "Trẻ nhận biết tính chất của nước: Không màu, không mùi, không vị, trong suốt.",
              "Hiểu hiện tượng vật chìm (vật nặng bằng sắt, sỏi đá) và vật nổi (thuyền xốp, nắp chai nhựa, lá cây khô)."
            ],
            skills: [
              "Rèn kỹ năng quan sát, phán đoán và làm thí nghiệm khoa học đơn giản.",
              "Phát triển tư duy logic và ngôn ngữ giải thích hiện tượng."
            ],
            attitudes: [
              "Tò mò, say mê khám phá khoa học; có ý thức bảo vệ nguồn nước sạch không xả rác xuống ao hồ."
            ]
          },
          preparation: {
            teacher: ["Chậu nước trong suốt; các vật liệu thí nghiệm: Viên sỏi, chìa khóa, thìa inox, thuyền xốp, quả bóng nhựa, lá khô."],
            students: ["Khay thí nghiệm mini cho từng bàn."]
          },
          procedure: {
            intro: `1. Ổn định: Đọc câu đố về nước: "Tôi không có hình / Đựng bình thành bình / Đựng chai thành chai / Bé đoán là ai?".`,
            instruction: `2. Khám phá & Làm thí nghiệm: Quan sát tính chất nước; Cô và trẻ thả sỏi xuống nước (sỏi chìm xuống đáy vì nặng); Thả thuyền xốp (nổi bồng bềnh vì nhẹ); Trẻ tự tay trải nghiệm thả các đồ vật khác nhau; Đúc kết phân loại vật chìm - vật nổi.`,
            conclusion: `3. Kết thúc: Giáo dục bảo vệ nguồn nước ngọt quý giá cho muôn loài.`
          }
        },
        tao_hinh: {
          flagship: { title: "Vẽ những đám mây và những hạt mưa rơi tí tách", ndtt: "Vẽ mưa rơi tí tách", ndkh: "Triển lãm ngày mưa", badge: "Tạo hình" },
          presets: [
            { title: "Vẽ những đám mây và những hạt mưa rơi tí tách", ndtt: "Vẽ mưa rơi tí tách", ndkh: "Triển lãm ngày mưa", tag: "Mẫu Chuẩn" },
            { title: "Xé dán cầu vồng 7 sắc rực rỡ sau cơn mưa", ndtt: "Xé dán cầu vồng", ndkh: "Cầu vồng sắc màu", tag: "Xé dán" },
            { title: "Gấp và dán chiếc thuyền giấy bồng bềnh trên sóng", ndtt: "Gấp dán thuyền giấy", ndkh: "Dòng suối ước mơ", tag: "Gấp giấy" },
            { title: "In màu ông mặt trời tỏa những tia nắng ấm áp", ndtt: "In màu ông mặt trời", ndkh: "Nắng mai ấm áp", tag: "In màu" }
          ],
          objectives: {
            knowledge: [
              "Trẻ biết dùng các nét cong liền nhau để vẽ đám mây, các nét xiên ngắn nối tiếp để vẽ những hạt mưa rơi tí tách.",
              "Nhận biết màu sắc: Mây xám/xanh, hạt mưa màu xanh lam mát lành."
            ],
            skills: [
              "Rèn kỹ năng vẽ nét xiên đều tay, phân bố hạt mưa đều khắp mặt tranh."
            ],
            attitudes: [
              "Yêu quý hiện tượng tự nhiên, thích thú ngắm nhìn mưa tưới mát cho cây cỏ."
            ]
          },
          preparation: {
            teacher: ["Tranh mẫu vẽ mưa rơi tưới mát vườn cây; nhạc tiếng mưa rơi êm đềm."],
            students: ["Giấy vẽ A4, bút sáp màu 12 màu."]
          },
          procedure: {
            intro: `1. Ổn định: Hát bài 'Mưa rơi tí tách'. Cảm nhận sự tươi mát của cơn mưa rào.`,
            instruction: `2. Hướng dẫn & Thực hiện: Cô vẽ mẫu đám mây bồng bềnh bằng nét cong, vẽ mưa rơi bằng các nét xiên từ trên xuống; Trẻ thực hành vẽ và tô màu; Trưng bày góc tranh 'Cơn mưa tưới mát'.`,
            conclusion: `3. Kết thúc: Khen ngợi bức tranh sinh động, thu dọn đồ dùng.`
          }
        },
        van_hoc: {
          flagship: { title: "Thơ: 'Mưa' (Tác giả: Trần Tâm)", ndtt: "Thơ: Mưa (Trần Tâm)", ndkh: "Đàm thoại & ngâm thơ", badge: "Văn học" },
          presets: [
            { title: "Thơ: 'Mưa' (Tác giả: Trần Tâm)", ndtt: "Thơ: Mưa (Trần Tâm)", ndkh: "Đàm thoại thơ", tag: "Mẫu Chuẩn" },
            { title: "Truyện: 'Giọt nước Tí Xíu' - Vòng tuần hoàn của nước", ndtt: "Truyện: Giọt nước Tí Xíu", ndkh: "Kịch rối que", tag: "Truyện kể" },
            { title: "Thơ: 'Nắng bốn mùa' (Tác giả: Mai Khôi)", ndtt: "Thơ: Nắng bốn mùa", ndkh: "Đàm thoại", tag: "Thơ" },
            { title: "Đồng dao: 'Lạy trời mưa xuống' - Lời cầu mùa của đồng quê", ndtt: "Đồng dao: Lạy trời mưa xuống", ndkh: "Trò chơi dân gian", tag: "Đồng dao" }
          ],
          objectives: {
            knowledge: [
              "Trẻ nhớ tên bài thơ 'Mưa' của tác giả Trần Tâm.",
              "Hiểu nội dung: Cơn mưa rơi xuống tưới mát cho đồng ruộng, cây cối tốt tươi, mang lại nguồn nước ngọt quý báu."
            ],
            skills: [
              "Đọc thơ diễn cảm, ngắt nhịp đúng âm hưởng vui tươi, nhộn nhịp."
            ],
            attitudes: [
              "Hiểu được giá trị của nước mưa và biết giữ gìn nguồn nước sạch."
            ]
          },
          preparation: {
            teacher: ["Smart TV chiếu video hoạt hình bài thơ 'Mưa'; chậu cây hoa."],
            students: ["Ghế ngồi chữ U, mũ múa giọt nước nhỏ xinh."]
          },
          procedure: {
            intro: `1. Ổn định: Xem hình ảnh cây cối vươn vai reo mừng khi đón những hạt mưa đầu mùa.`,
            instruction: `2. Đọc thơ & Đàm thoại: Cô đọc diễn cảm; đàm thoại trích dẫn nội dung bài thơ; Dạy trẻ đọc thơ thi đua sôi nổi theo tổ và cá nhân.`,
            conclusion: `3. Kết thúc: Dặn dò các bé biết rửa tay bằng lượng nước vừa đủ để tiết kiệm tài nguyên.`
          }
        },
        van_dong: {
          flagship: { title: "VĐCB: Bật liên tục qua các vũng nước mưa - TCVĐ: Trời nắng, trời mưa", ndtt: "VĐCB: Bật qua các vũng nước", ndkh: "TCVĐ: Trời nắng trời mưa", badge: "Vận động" },
          presets: [
            { title: "VĐCB: Bật liên tục qua các vũng nước mưa - TCVĐ: Trời nắng, trời mưa", ndtt: "VĐCB: Bật qua vũng nước", ndkh: "TCVĐ: Trời nắng trời mưa", tag: "Mẫu Chuẩn" },
            { title: "VĐCB: Chạy nhanh 15m tránh mưa - TCVĐ: Che ô", ndtt: "VĐCB: Chạy nhanh 15m", ndkh: "TCVĐ: Che ô tránh mưa", tag: "Chạy nhanh" },
            { title: "VĐCB: Bò chui qua hang động đá - TCVĐ: Gió thổi mây bay", ndtt: "VĐCB: Bò chui qua hang", ndkh: "TCVĐ: Gió thổi mây bay", tag: "Bò chui" },
            { title: "VĐCB: Ném bóng trúng đích hồ nước - TCVĐ: Thuyền về bến", ndtt: "VĐCB: Ném bóng trúng đích", ndkh: "TCVĐ: Thuyền về bến", tag: "Ném đích" }
          ],
          objectives: {
            knowledge: [
              "Trẻ biết tên bài tập 'Bật liên tục qua các vũng nước' và luật chơi 'Trời nắng, trời mưa'.",
              "Biết chụm 2 chân, nhún gối tạo đà bật nhảy qua các vòng tròn liên tiếp, tiếp đất nhẹ nhàng bằng mũi bàn chân."
            ],
            skills: [
              "Phát triển sức bật của đôi chân, giữ thăng bằng cơ thể tốt."
            ],
            attitudes: [
              "Hào hứng tập thể thao, mạnh dạn, tự tin."
            ]
          },
          preparation: {
            teacher: ["5 - 6 vòng tròn thể dục mô phỏng vũng nước mưa; chiếc ô to chơi trò chơi; loa kéo."],
            students: ["Trang phục thể thao năng động."]
          },
          procedure: {
            intro: `1. Khởi động: Trẻ làm các đám mây bay lượn nhẹ nhàng theo vòng tròn.`,
            instruction: `2. Trọng động: BTPTC; Cô làm mẫu và phân tích kỹ thuật bật chụm 2 chân qua các vòng; Trẻ thực hành lần lượt; TCVĐ 'Trời nắng, trời mưa' chạy nhanh che ô.`,
            conclusion: `3. Hồi tĩnh: Thả lỏng cơ thể, nhận xét khen ngợi buổi tập.`
          }
        }
      }
    },

    // ==========================================
    // 9. QUÊ HƯƠNG - ĐẤT NƯỚC - BÁC HỒ
    // ==========================================
    que_huong_bac_ho: {
      id: "que_huong_bac_ho",
      name: "Quê hương - Đất nước - Bác Hồ",
      icon: "🇻🇳",
      keywords: ["quê hương", "đất nước", "bác hồ", "hà nội", "lăng bác", "cờ đỏ", "sao vàng", "hoa sen", "phúc sơn", "việt nam", "tổ quốc"],
      activities: {
        am_nhac: {
          flagship: { title: "Dạy hát: 'Đêm qua em mơ gặp Bác Hồ' (Xuân Giao) - NDKH: Nghe hát: 'Nhớ ơn Bác'", ndtt: "DH: Đêm qua em mơ gặp Bác Hồ", ndkh: "NH: Nhớ ơn Bác", badge: "Âm nhạc" },
          presets: [
            { title: "Dạy hát: 'Đêm qua em mơ gặp Bác Hồ' (Xuân Giao) - NDKH: Nghe hát: 'Nhớ ơn Bác'", ndtt: "DH: Đêm qua em mơ gặp Bác Hồ", ndkh: "NH: Nhớ ơn Bác", tag: "Dạy hát" },
            { title: "Dạy hát: 'Em yêu thủ đô' (Bảo Trọng) - NDKH: TCÂN: 'Nghe hát nhảy vào vòng'", ndtt: "DH: Em yêu thủ đô", ndkh: "TCÂN: Vòng tròn âm nhạc", tag: "Dạy hát" },
            { title: "Vận động múa: 'Từ rừng xanh cháu về thăm Lăng Bác' (Hoàng Long - Hoàng Lân)", ndtt: "VĐM: Về thăm Lăng Bác", ndkh: "TCÂN: Tai ai tinh", tag: "Vận động múa" },
            { title: "Nghe hát: 'Như có Bác trong ngày vui đại thắng'", ndtt: "NH: Như có Bác trong ngày đại thắng", ndkh: "Vỗ tay theo nhịp cờ", tag: "Nghe hát" }
          ],
          objectives: {
            knowledge: [
              "Trẻ biết tên bài hát 'Đêm qua em mơ gặp Bác Hồ' của nhạc sĩ Xuân Giao.",
              "Hiểu nội dung bài hát: Tình cảm kính yêu vô bờ bến của các cháu thiếu niên nhi đồng đối với Bác Hồ - vị cha già kính yêu của dân tộc."
            ],
            skills: [
              "Hát đúng giai điệu êm dịu, tình cảm tha thiết; phát âm rõ từng lời ca.",
              "Vận động vuốt râu Bác, ôm ngực thể hiện lòng biết ơn."
            ],
            attitudes: [
              "Kính yêu Bác Hồ, chăm ngoan học giỏi để xứng đáng là cháu ngoan Bác Hồ."
            ]
          },
          preparation: {
            teacher: ["Đàn organ, ảnh Bác Hồ quàng khăn đỏ cho thiếu nhi, hoa sen tươi."],
            students: ["Hoa sen cài tay múa, trang phục gọn gàng."]
          },
          procedure: {
            intro: `1. Ổn định: Cho trẻ ngắm ảnh Bác Hồ với nụ cười hiền từ ôm các em nhỏ. Giới thiệu bài hát của nhạc sĩ Xuân Giao.`,
            instruction: `2. Dạy hát: Cô hát mẫu lần 1 và 2; Dạy trẻ hát diễn cảm; Tổ, nhóm, cá nhân biểu diễn; Nghe cô hát bài 'Nhớ ơn Bác'.`,
            conclusion: `3. Kết thúc: Khuyên dặn các bé thực hiện tốt 5 điều Bác Hồ dạy.`
          }
        },
        nhan_biet: {
          flagship: { title: "Khám phá: Lá cờ đỏ sao vàng thiêng liêng của Tổ quốc Việt Nam", ndtt: "Lá cờ đỏ sao vàng Tổ quốc", ndkh: "TC: Ghép đúng lá cờ", badge: "Nhận biết" },
          presets: [
            { title: "Khám phá: Lá cờ đỏ sao vàng thiêng liêng của Tổ quốc Việt Nam", ndtt: "Lá cờ đỏ sao vàng", ndkh: "TC: Ghép đúng cờ", tag: "Mẫu Chuẩn" },
            { title: "Bé tìm hiểu về Bác Hồ kính yêu và Lăng Bác tại Thủ đô Hà Nội", ndtt: "Bác Hồ và Lăng Bác", ndkh: "TC: Thăm Lăng Bác", tag: "Lịch sử" },
            { title: "Khám phá vẻ đẹp quê hương Phúc Sơn tươi đẹp đổi mới", ndtt: "Quê hương Phúc Sơn của bé", ndkh: "TC: Ảnh đẹp quê em", tag: "Quê hương" },
            { title: "Bé tìm hiểu về Quốc hoa Việt Nam: Hoa Sen ngát hương", ndtt: "Khám phá Hoa Sen", ndkh: "TC: Đầm sen nở hoa", tag: "Biểu tượng" }
          ],
          objectives: {
            knowledge: [
              "Trẻ nhận biết lá cờ Tổ quốc Việt Nam có nền màu đỏ tươi hình chữ nhật, ở giữa có ngôi sao vàng 5 cánh tỏa sáng.",
              "Hiểu ý nghĩa: Nền đỏ tượng trưng cho màu nhiệt huyết, sao vàng tượng trưng cho ánh sáng soi đường của dân tộc Việt Nam."
            ],
            skills: [
              "Rèn kỹ năng quan sát, chỉ đúng 5 cánh của ngôi sao vàng và đứng nghiêm trang khi chào cờ."
            ],
            attitudes: [
              "Tự hào là người con Việt Nam, có lòng yêu nước và yêu quê hương từ thuở ấu thơ."
            ]
          },
          preparation: {
            teacher: ["Lá cờ Tổ quốc thật; video lễ chào cờ trang nghiêm; mô hình Lăng Bác."],
            students: ["Mỗi trẻ một lá cờ đỏ sao vàng mini cầm tay."]
          },
          procedure: {
            intro: `1. Ổn định: Cho trẻ lắng nghe tiếng nhạc Quốc ca hùng tráng và xem video kéo cờ Tổ quốc.`,
            instruction: `2. Khám phá & Đàm thoại: Quan sát lá cờ (nền đỏ, sao vàng 5 cánh); Đếm 5 cánh sao vàng; Hướng dẫn tư thế đứng chào cờ nghiêm trang mắt hướng lên cờ; Trò chơi 'Ghép sao vàng vào lá cờ đỏ'.`,
            conclusion: `3. Kết thúc: Cả lớp cùng đứng nghiêm chào cờ trang nghiêm và tự hào.`
          }
        },
        tao_hinh: {
          flagship: { title: "Xé dán và tô màu lá cờ đỏ sao vàng hoặc hoa sen dâng Bác", ndtt: "Xé dán cờ đỏ sao vàng", ndkh: "Triển lãm hoa dâng Bác", badge: "Tạo hình" },
          presets: [
            { title: "Xé dán và tô màu lá cờ đỏ sao vàng hoặc hoa sen dâng Bác", ndtt: "Xé dán cờ đỏ sao vàng", ndkh: "Triển lãm hoa dâng Bác", tag: "Mẫu Chuẩn" },
            { title: "Vẽ và tô màu Lăng Bác Hồ uy nghiêm giữa quảng trường", ndtt: "Vẽ Lăng Bác Hồ", ndkh: "Góc tranh Ba Đình", tag: "Vẽ" },
            { title: "Nặn bông hoa sen hồng ngát hương tặng Bác", ndtt: "Nặn bông hoa sen", ndkh: "Đầm sen dâng Bác", tag: "Nặn" },
            { title: "In màu tranh phong cảnh quê hương Phúc Sơn xanh tươi", ndtt: "In màu tranh quê hương", ndkh: "Phúc Sơn quê em", tag: "In màu" }
          ],
          objectives: {
            knowledge: [
              "Trẻ biết xé dán ngôi sao vàng 5 cánh đặt chính giữa nền cờ đỏ hình chữ nhật.",
              "Hiểu bố cục cân đối của lá cờ Tổ quốc."
            ],
            skills: [
              "Rèn kỹ năng xé dải, miết hồ dán phẳng phiu, dán ngay ngắn không xộc xệch."
            ],
            attitudes: [
              "Nâng niu, trân trọng lá cờ Tổ quốc thiêng liêng."
            ]
          },
          preparation: {
            teacher: ["Tranh mẫu xé dán cờ đỏ sao vàng; giấy màu đỏ và vàng tươi; hồ dán."],
            students: ["Giấy A4 viền đẹp, giấy màu, hồ dán, khăn ẩm."]
          },
          procedure: {
            intro: `1. Ổn định: Hát bài 'Lá cờ đỏ'. Trò chuyện về ngày hội non sông.`,
            instruction: `2. Hướng dẫn & Thực hiện: Cô hướng dẫn dán nền đỏ trước, xé ngôi sao vàng 5 cánh dán cân đối ở giữa; Trẻ thực hành; Trưng bày triển lãm cờ hoa rực rỡ.`,
            conclusion: `3. Kết thúc: Cầm lá cờ vừa hoàn thành vẫy chào vui tươi.`
          }
        },
        van_hoc: {
          flagship: { title: "Thơ: 'Bác Hồ của em' (Tác giả: Phan Thị Thanh Nhàn)", ndtt: "Thơ: Bác Hồ của em (Phan Thị Thanh Nhàn)", ndkh: "Đàm thoại & ngâm thơ", badge: "Văn học" },
          presets: [
            { title: "Thơ: 'Bác Hồ của em' (Tác giả: Phan Thị Thanh Nhàn)", ndtt: "Thơ: Bác Hồ của em", ndkh: "Đàm thoại thơ", tag: "Mẫu Chuẩn" },
            { title: "Thơ: 'Ảnh Bác' (Tác giả: Trần Đăng Khoa)", ndtt: "Thơ: Ảnh Bác (Trần Đăng Khoa)", ndkh: "Đàm thoại", tag: "Thơ" },
            { title: "Truyện: 'Ai ngoan sẽ được thưởng' - Bác Hồ chia kẹo cho thiếu nhi", ndtt: "Truyện: Ai ngoan được thưởng", ndkh: "Kịch rối que", tag: "Truyện kể" },
            { title: "Ca dao về quê hương đất nước: 'Tháp Mười đẹp nhất bông sen'", ndtt: "Ca dao quê hương", ndkh: "Đọc diễn cảm", tag: "Ca dao" }
          ],
          objectives: {
            knowledge: [
              "Trẻ nhớ tên bài thơ 'Bác Hồ của em' của nhà thơ Phan Thị Thanh Nhàn.",
              "Hiểu nội dung: Tuy Bác đã đi xa nhưng hình ảnh Bác vẫn sống mãi trong tim các cháu, Bác luôn yêu thương và dõi theo từng bước trưởng thành của thiếu nhi."
            ],
            skills: [
              "Đọc thơ diễn cảm, xúc động, ngắt nhịp đúng lời thơ."
            ],
            attitudes: [
              "Kính yêu Bác Hồ, chăm ngoan vâng lời cha mẹ và cô giáo."
            ]
          },
          preparation: {
            teacher: ["Smart TV chiếu tranh hoạt họa Bác Hồ mỉm cười với thiếu nhi; đóa hoa sen."],
            students: ["Ghế ngồi chữ U, mũ múa hoa sen."]
          },
          procedure: {
            intro: `1. Ổn định: Đọc 2 câu ca dao: "Tháp Mười đẹp nhất bông sen / Việt Nam đẹp nhất có tên Bác Hồ".`,
            instruction: `2. Đọc thơ & Đàm thoại: Cô đọc diễn cảm; đàm thoại về tình yêu Bác dành cho các bạn nhỏ; dạy cả lớp, tổ, cá nhân đọc thơ truyền cảm.`,
            conclusion: `3. Kết thúc: Hứa với Bác chăm ngoan học giỏi mỗi ngày.`
          }
        },
        van_dong: {
          flagship: { title: "VĐCB: Đi đều bước theo nhịp cờ diễu hành - TCVĐ: Cướp cờ", ndtt: "VĐCB: Đi đều bước theo cờ", ndkh: "TCVĐ: Cướp cờ truyền thống", badge: "Vận động" },
          presets: [
            { title: "VĐCB: Đi đều bước theo nhịp cờ diễu hành - TCVĐ: Cướp cờ", ndtt: "VĐCB: Đi đều bước", ndkh: "TCVĐ: Cướp cờ", tag: "Mẫu Chuẩn" },
            { title: "VĐCB: Bật liên tục qua các vòng hoa dâng Bác", ndtt: "VĐCB: Bật qua các vòng hoa", ndkh: "TCVĐ: Đua thuyền", tag: "Bật nhảy" },
            { title: "VĐCB: Bò chui qua cổng vượt chướng ngại vật về Thủ đô", ndtt: "VĐCB: Bò chui qua cổng", ndkh: "TCVĐ: Về đích", tag: "Bò chui" },
            { title: "VĐCB: Ném bóng trúng đích cờ hoa", ndtt: "VĐCB: Ném trúng đích", ndkh: "TCVĐ: Kéo co hội làng", tag: "Ném đích" }
          ],
          objectives: {
            knowledge: [
              "Trẻ biết tên bài tập 'Đi đều bước theo nhịp cờ' và luật chơi trò chơi dân gian 'Cướp cờ'.",
              "Biết bước đi nhịp nhàng 1 - 2, tay đánh đều theo nhịp cờ hiệu của cô."
            ],
            skills: [
              "Rèn dáng đi oai phong, dứt khoát, tư thế đầu thẳng, ngực vươn cao; phản xạ nhanh nhẹn khi chạy cướp cờ."
            ],
            attitudes: [
              "Tự hào, hứng thú tham gia các bài tập mang tính kỷ luật và truyền thống văn hóa dân tộc."
            ]
          },
          preparation: {
            teacher: ["Cờ hiệu chỉ huy; ống cờ đặt ở giữa sân để chơi cướp cờ; loa kéo nhạc diễu binh hùng tráng."],
            students: ["Lá cờ đỏ sao vàng mini cầm tay."]
          },
          procedure: {
            intro: `1. Khởi động: Trẻ làm đoàn quân diễu hành đi theo vòng tròn.`,
            instruction: `2. Trọng động: BTPTC 'Hát vang bài ca người lính'; Cô làm mẫu và hướng dẫn đi đều bước theo nhịp 1 - 2; Trẻ thực hành; TCVĐ 'Cướp cờ' thi đua sôi động.`,
            conclusion: `3. Hồi tĩnh: Thả lỏng đi lại nhẹ nhàng vẫy cờ, khen ngợi tinh thần kỷ luật của trẻ.`
          }
        }
      }
    },

    // ==========================================
    // 10. LỄ HỘI & TẾT CỔ TRUYỀN
    // ==========================================
    le_hoi_su_kien: {
      id: "le_hoi_su_kien",
      name: "Lễ hội & Tết Cổ truyền",
      icon: "🏮",
      keywords: ["lễ hội", "tết", "nguyên đán", "trung thu", "mùa xuân", "bánh chưng", "hoa đào", "hoa mai", "mâm ngũ quả", "chúc tết", "hội làng", "hội xuân"],
      activities: {
        am_nhac: {
          flagship: { title: "Dạy hát: 'Sắp đến Tết rồi' (Hoàng Vân) - NDKH: VĐTN: 'Bé chúc Tết sum vầy'", ndtt: "DH: Sắp đến Tết rồi", ndkh: "VĐTN: Bé chúc Tết", badge: "Âm nhạc" },
          presets: [
            { title: "Dạy hát: 'Sắp đến Tết rồi' (Hoàng Vân) - NDKH: VĐTN: 'Bé chúc Tết sum vầy'", ndtt: "DH: Sắp đến Tết rồi", ndkh: "VĐTN: Bé chúc Tết", tag: "Dạy hát" },
            { title: "Dạy hát: 'Mùa xuân ơi' (Nguyễn Ngọc Thiện) - NDKH: Múa lân rộn rã", ndtt: "DH: Mùa xuân ơi", ndkh: "VĐM: Múa lân vui nhộn", tag: "Dạy hát" },
            { title: "Nghe hát: 'Ngày Tết quê em' (Từ Huy) - NDKH: TCÂN: Hái hoa dân chủ", ndtt: "NH: Ngày Tết quê em", ndkh: "TCÂN: Hái hoa mùa xuân", tag: "Nghe hát" },
            { title: "Dạy hát: 'Đêm Trung thu' (Phùng Như Thạch) - NDKH: Rước đèn", ndtt: "DH: Đêm Trung thu", ndkh: "Rước đèn ông sao", tag: "Trung thu" }
          ],
          objectives: {
            knowledge: [
              "Trẻ nhớ tên bài hát 'Sắp đến Tết rồi' của nhạc sĩ Hoàng Vân.",
              "Hiểu niềm vui hân hoan của bé khi Tết đến: Được mặc áo mới, được đi chúc Tết ông bà cha mẹ và nhận lì xì may mắn."
            ],
            skills: [
              "Hát đúng giai điệu rộn ràng, vui tươi, tràn đầy sắc xuân.",
              "Biết khoanh tay cúi đầu chúc Tết duyên dáng theo nhịp bài hát."
            ],
            attitudes: [
              "Hào hứng đón Tết cổ truyền, yêu quý phong tục truyền thống tốt đẹp của dân tộc."
            ]
          },
          preparation: {
            teacher: ["Đàn organ, cành hoa đào, hoa mai rực rỡ, bao lì xì đỏ, khánh chúc mừng năm mới."],
            students: ["Trang phục áo dài Tết truyền thống, xắc xô mini."]
          },
          procedure: {
            intro: `1. Ổn định: Mở đoạn nhạc xuân rộn rã với tiếng pháo nổ tưng bừng. Trò chuyện về ngày Tết sum vầy.`,
            instruction: `2. Dạy hát: Cô hát mẫu lần 1 và 2; Dạy trẻ hát nhịp nhàng; Từng tổ, nhóm bạn trai gái thi đua hát; Thực hành điệu bộ chúc Tết ông bà cha mẹ; TCÂN 'Hái hoa mùa xuân'.`,
            conclusion: `3. Kết thúc: Trao bao lì xì may mắn cho các bé chăm ngoan.`
          }
        },
        nhan_biet: {
          flagship: { title: "Khám phá: Mâm ngũ quả ngày Tết và phong tục chúc Tết sum vầy", ndtt: "Khám phá mâm ngũ quả ngày Tết", ndkh: "TC: Bày mâm ngũ quả", badge: "Nhận biết" },
          presets: [
            { title: "Khám phá: Mâm ngũ quả ngày Tết và phong tục chúc Tết sum vầy", ndtt: "Mâm ngũ quả ngày Tết", ndkh: "TC: Bày mâm ngũ quả", tag: "Mẫu Chuẩn" },
            { title: "Nhận biết phân biệt: Bánh chưng xanh vuông vắn và Bánh tét tròn dài", ndtt: "Bánh chưng & Bánh tét", ndkh: "TC: Gói bánh chưng", tag: "Ẩm thực" },
            { title: "Khám phá hoa đặc trưng ngày Tết: Hoa đào miền Bắc và Hoa mai miền Nam", ndtt: "Hoa đào và Hoa mai", ndkh: "TC: Trang trí cây Tết", tag: "Cây hoa" },
            { title: "Khám phá Lễ hội Đêm Trung thu: Đèn ông sao và Chị Hằng, Chú Cuội", ndtt: "Lễ hội Đêm Trung thu", ndkh: "TC: Rước đèn phá cỗ", tag: "Trung thu" }
          ],
          objectives: {
            knowledge: [
              "Trẻ nhận biết 5 loại quả quen thuộc trên mâm ngũ quả ngày Tết (chuối, bưởi, đào, hồng, quýt hoặc mãng cầu, sung, dừa, đu đủ, xoài).",
              "Hiểu ý nghĩa: Cầu chúc năm mới gia đình bình an, no ấm, may mắn."
            ],
            skills: [
              "Rèn kỹ năng quan sát, gọi đúng tên màu sắc, hình dáng các loại quả.",
              "Phát triển kỹ năng giao tiếp lễ phép khi chúc Tết người lớn."
            ],
            attitudes: [
              "Yêu quý không khí đầm ấm của Tết sum họp gia đình."
            ]
          },
          preparation: {
            teacher: ["Mâm ngũ quả thật; mô hình bánh chưng bánh tét, câu đối đỏ; video không khí chợ hoa Tết."],
            students: ["Lô tô các loại quả ngày Tết; mâm nhựa mini."]
          },
          procedure: {
            intro: `1. Ổn định: Đọc câu đố về quả bưởi vàng, nải chuối xanh ngày Tết.`,
            instruction: `2. Khám phá & Đàm thoại: Tìm hiểu từng loại quả trên mâm; Ý nghĩa màu sắc ngũ hành; Trò chơi 'Bé bày mâm ngũ quả đẹp mắt'.`,
            conclusion: `3. Kết thúc: Chúc cả lớp năm mới chăm ngoan, học giỏi.`
          }
        },
        tao_hinh: {
          flagship: { title: "Nặn bánh chưng bánh giầy ngày Tết cổ truyền", ndtt: "Nặn bánh chưng bánh giầy", ndkh: "Mâm cỗ Tết quê em", badge: "Tạo hình" },
          presets: [
            { title: "Nặn bánh chưng bánh giầy ngày Tết cổ truyền", ndtt: "Nặn bánh chưng bánh giầy", ndkh: "Mâm cỗ Tết quê em", tag: "Mẫu Chuẩn" },
            { title: "Vẽ và tô màu cành hoa đào hoa mai rực rỡ đón xuân", ndtt: "Vẽ hoa đào hoa mai", ndkh: "Sắc xuân lớp học", tag: "Vẽ" },
            { title: "Xé dán bao lì xì đỏ chúc Tết ông bà", ndtt: "Xé dán bao lì xì", ndkh: "Lì xì may mắn", tag: "Xé dán" },
            { title: "Làm lồng đèn ông sao lấp lánh rước hội trăng rằm", ndtt: "Làm lồng đèn ông sao", ndkh: "Đêm hội trăng rằm", tag: "Trung thu" }
          ],
          objectives: {
            knowledge: [
              "Trẻ biết bánh chưng hình vuông tượng trưng cho đất, bánh giầy hình tròn tượng trưng cho trời.",
              "Hiểu thao tác nặn hình khối vuông và khối tròn mịn màng."
            ],
            skills: [
              "Rèn kỹ năng xoay tròn, ấn dẹt, vỗ các cạnh tạo hình vuông vắn.",
              "Lăn sợi dài làm lạt buộc bánh chưng."
            ],
            attitudes: [
              "Trân trọng nét đẹp văn hóa cổ truyền của dân tộc."
            ]
          },
          preparation: {
            teacher: ["Mẫu nặn bánh chưng xanh có lạt buộc, đĩa bánh giầy trắng tròn; lá dong thật."],
            students: ["Đất nặn màu xanh lá cây, màu vàng, màu trắng; bảng con, khăn ẩm."]
          },
          procedure: {
            intro: `1. Ổn định: Nghe kể sự tích Bánh chưng bánh giầy của hoàng tử Lang Liêu.`,
            instruction: `2. Hướng dẫn & Thực hiện: Cô hướng dẫn nặn bánh chưng vuông và bánh giầy tròn; Trẻ thực hành; Trưng bày mâm cỗ Tết.`,
            conclusion: `3. Kết thúc: Khen ngợi sự khéo tay của các nghệ nhân nhí.`
          }
        },
        van_hoc: {
          flagship: { title: "Thơ: 'Tết đang vào nhà' (Tác giả: Nguyễn Hồng Kiên)", ndtt: "Thơ: Tết đang vào nhà (Nguyễn Hồng Kiên)", ndkh: "Đàm thoại & ngâm thơ", badge: "Văn học" },
          presets: [
            { title: "Thơ: 'Tết đang vào nhà' (Tác giả: Nguyễn Hồng Kiên)", ndtt: "Thơ: Tết đang vào nhà", ndkh: "Đàm thoại thơ", tag: "Mẫu Chuẩn" },
            { title: "Sự tích: 'Bánh chưng, bánh giầy' - Lòng hiếu thảo Lang Liêu", ndtt: "Truyện: Bánh chưng bánh giầy", ndkh: "Kịch rối que", tag: "Truyện kể" },
            { title: "Thơ: 'Cây đào' (Tác giả: Nhược Thủy)", ndtt: "Thơ: Cây đào nở hoa", ndkh: "Đàm thoại", tag: "Thơ" },
            { title: "Đồng dao: 'Rước đèn tháng Tám' - Vui hội trăng rằm", ndtt: "Đồng dao: Rước đèn tháng Tám", ndkh: "Trò chơi dân gian", tag: "Trung thu" }
          ],
          objectives: {
            knowledge: [
              "Trẻ nhớ tên bài thơ 'Tết đang vào nhà' của tác giả Nguyễn Hồng Kiên.",
              "Hiểu không khí rộn rã đón Tết: Hoa đào nở hồng, hoa mai nở vàng, mẹ phơi áo mới đón xuân sang."
            ],
            skills: [
              "Đọc thơ diễn cảm, tươi vui, phát âm to rõ ràng."
            ],
            attitudes: [
              "Háo hức đón Tết, biết giúp mẹ dọn dẹp nhà cửa gọn gàng đón xuân."
            ]
          },
          preparation: {
            teacher: ["Smart TV chiếu tranh hoạt hình bài thơ; cành hoa đào, hoa mai nở rộ."],
            students: ["Ghế ngồi chữ U, mũ múa hoa xuân."]
          },
          procedure: {
            intro: `1. Ổn định: Ngắm cành đào hé nụ hồng thắm báo hiệu Tết đến xuân về.`,
            instruction: `2. Đọc thơ & Đàm thoại: Cô đọc diễn cảm; đàm thoại trích dẫn lời thơ; Dạy trẻ đọc thơ thi đua sôi nổi; Cùng đóng vai chúc Tết.`,
            conclusion: `3. Kết thúc: Cả lớp cùng hát bài 'Mùa xuân ơi' chuyển góc chơi.`
          }
        },
        van_dong: {
          flagship: { title: "VĐCB: Ném bóng trúng đích - TCVĐ: Kéo co hội xuân làng quê", ndtt: "VĐCB: Ném bóng trúng đích", ndkh: "TCVĐ: Kéo co hội xuân", badge: "Vận động" },
          presets: [
            { title: "VĐCB: Ném bóng trúng đích - TCVĐ: Kéo co hội xuân làng quê", ndtt: "VĐCB: Ném bóng trúng đích", ndkh: "TCVĐ: Kéo co hội xuân", tag: "Mẫu Chuẩn" },
            { title: "VĐCB: Nhảy bao bố hội xuân tý hon - TCVĐ: Bịt mắt bắt dê", ndtt: "VĐCB: Nhảy bao bố", ndkh: "TCVĐ: Bịt mắt bắt dê", tag: "Trò chơi dân gian" },
            { title: "VĐCB: Đi thăng bằng trên cầu kiều hái hoa đào", ndtt: "VĐCB: Đi thăng bằng cầu kiều", ndkh: "TCVĐ: Hái hoa mùa xuân", tag: "Thăng bằng" },
            { title: "VĐCB: Bật liên tục qua các vòng hoa rước đèn", ndtt: "VĐCB: Bật qua các vòng", ndkh: "TCVĐ: Rước đèn", tag: "Bật nhảy" }
          ],
          objectives: {
            knowledge: [
              "Trẻ biết tên bài tập 'Ném bóng trúng đích' và luật chơi 'Kéo co hội xuân'.",
              "Biết đứng chân trước chân sau, tay cầm bóng đưa ngang tầm mắt và ném chuẩn xác vào đích cách xa 1.5 - 2m."
            ],
            skills: [
              "Rèn sự định hướng không gian, khéo léo của cơ tay và khả năng ước lượng cự ly."
            ],
            attitudes: [
              "Hào hứng tham gia các trò chơi dân gian ngày hội truyền thống của làng quê."
            ]
          },
          preparation: {
            teacher: ["Bích đích ném có dán hình hoa đào, quả bóng nhỏ; dây thừng kéo co có dải lụa đỏ; nhạc hội xuân rộn rã."],
            students: ["Trang phục thể thao thoải mái, giày bata."]
          },
          procedure: {
            intro: `1. Khởi động: Trẻ làm đoàn rước hội xuân đi vòng tròn theo điệu nhạc trống hội.`,
            instruction: `2. Trọng động: BTPTC 'Hội xuân rực rỡ'; Cô làm mẫu kỹ thuật ném bóng trúng đích; Trẻ thực hành thi đua; TCVĐ 'Kéo co' tưng bừng giữa 2 đội.`,
            conclusion: `3. Hồi tĩnh: Thả lỏng nhẹ nhàng, trao giải thưởng hội xuân cho cả hai đội.`
          }
        }
      }
    }
  };

  // ==========================================
  // HÀM TIỆN ÍCH TÌM KIẾM CHỦ ĐỀ & TỔNG HỢP NỘI DUNG
  // ==========================================

  // Chuẩn hóa chuỗi tiếng Việt bỏ dấu để tìm kiếm thông minh
  function normalizeVi(str) {
    if (!str) return "";
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .trim();
  }

  // 1. Tìm chủ đề chuẩn từ tên chủ đề do cô chọn hoặc gõ tự do
  function findThemeByTopic(topicString) {
    if (!topicString) return themePedagogyRegistry.dong_vat;
    const lower = topicString.toString().toLowerCase().trim();
    const norm = normalizeVi(topicString);

    // Tìm kiếm trực tiếp theo ID
    if (themePedagogyRegistry[lower] || themePedagogyRegistry[norm]) {
      return themePedagogyRegistry[lower] || themePedagogyRegistry[norm];
    }

    function checkKeywordMatch(fullText, kw) {
      if (!fullText || !kw) return false;
      if (kw.includes(" ")) {
        return fullText.includes(kw);
      }
      const words = fullText.split(/\s+/);
      return words.includes(kw);
    }

    // Quét tìm kiếm theo từ khóa của 10 chủ đề
    const keys = Object.keys(themePedagogyRegistry);
    let bestTheme = null;
    let maxScore = 0;

    for (const key of keys) {
      const theme = themePedagogyRegistry[key];
      let score = 0;

      // 1. So khớp tên chủ đề chính xác (có dấu hoặc không dấu)
      const themeNameLower = theme.name.toLowerCase();
      const themeNameNorm = normalizeVi(theme.name);
      if (lower.includes(themeNameLower)) {
        score += 30;
      } else if (norm.includes(themeNameNorm)) {
        score += 20;
      }

      // 2. So khớp các từ khóa
      if (theme.keywords) {
        for (const kw of theme.keywords) {
          const kwLower = kw.toLowerCase();
          const kwNorm = normalizeVi(kw);

          // Khớp có dấu (độ tin cậy rất cao - phân biệt chuẩn xác bố vs bộ đội, xe vs xem, ong vs trường)
          if (checkKeywordMatch(lower, kwLower)) {
            score += (kwLower.split(" ").length * 8) + 5;
          } 
          // Khớp không dấu (dự phòng trường hợp cô gõ tiếng Việt không dấu, yêu cầu từ >= 3 ký tự)
          else if (kwNorm.length >= 3 && checkKeywordMatch(norm, kwNorm)) {
            score += (kwNorm.split(" ").length * 4);
          }
        }
      }

      if (score > maxScore) {
        maxScore = score;
        bestTheme = theme;
      }
    }

    // Chỉ trả về theme chuẩn nếu có ít nhất 1 điểm tin cậy
    return maxScore > 0 ? bestTheme : null;
  }

  // 2. Lấy danh sách Preset gợi ý tiêu biểu theo Loại hoạt động và Chủ đề
  function getThematicPresets(activityType, topicString) {
    const act = activityType || "am_nhac";
    const theme = findThemeByTopic(topicString);

    if (theme && theme.activities && theme.activities[act] && theme.activities[act].presets) {
      return theme.activities[act].presets;
    }

    // Nếu là chủ đề tự gõ mới lạ, tự động sinh 4 preset gợi ý chuyên biệt bám sát chủ đề đó!
    const cleanTopic = (topicString || "Bé khám phá thế giới").trim();
    const actNames = {
      am_nhac: [
        { title: `Dạy hát bài học về ${cleanTopic} - NDKH: TCÂN: Ai nhanh nhất`, ndtt: `DH: Bài học ${cleanTopic}`, ndkh: `TCÂN: Ai nhanh nhất`, tag: "Dạy hát" },
        { title: `Nghe hát giai điệu vui tươi về ${cleanTopic} - NDKH: VĐTN`, ndtt: `NH: Khám phá ${cleanTopic}`, ndkh: `VĐTN: Vỗ tay theo nhịp`, tag: "Nghe hát" },
        { title: `Vận động múa phụ họa: Bé yêu ${cleanTopic}`, ndtt: `VĐM: Bé yêu ${cleanTopic}`, ndkh: `TCÂN: Vòng tròn gắn kết`, tag: "Vận động múa" },
        { title: `Biểu diễn văn nghệ tổng hợp chủ đề: ${cleanTopic}`, ndtt: `Biểu diễn: ${cleanTopic}`, ndkh: `Giao lưu nghệ thuật`, tag: "Biểu diễn" }
      ],
      nhan_biet: [
        { title: `Khám phá khoa học: Tìm hiểu những điều kỳ thú về ${cleanTopic}`, ndtt: `Khám phá: ${cleanTopic}`, ndkh: `TC: Thử tài tinh mắt`, tag: "Mẫu Chuẩn" },
        { title: `Nhận biết phân biệt các đặc điểm nổi bật của ${cleanTopic}`, ndtt: `Phân biệt đặc điểm: ${cleanTopic}`, ndkh: `TC: Ai chọn đúng`, tag: "Nhận biết" },
        { title: `Trò chuyện và tìm hiểu ích lợi của ${cleanTopic} quanh bé`, ndtt: `Ích lợi của ${cleanTopic}`, ndkh: `TC: Ghép tranh thông minh`, tag: "Xã hội" },
        { title: `Toán sơ đẳng: Đếm và so sánh số lượng liên quan đến ${cleanTopic}`, ndtt: `Đếm số lượng theo chủ đề`, ndkh: `TC: Về đúng ngôi nhà`, tag: "Toán" }
      ],
      tao_hinh: [
        { title: `Vẽ và tô màu bức tranh sinh động về ${cleanTopic}`, ndtt: `Vẽ tranh: ${cleanTopic}`, ndkh: `Triển lãm tranh đẹp`, tag: "Mẫu Chuẩn" },
        { title: `Nặn các mô hình đồ vật sáng tạo theo chủ đề ${cleanTopic}`, ndtt: `Nặn mô hình: ${cleanTopic}`, ndkh: `Bé khéo tay`, tag: "Nặn" },
        { title: `Xé dán bức tranh nhiều màu sắc: ${cleanTopic}`, ndtt: `Xé dán: ${cleanTopic}`, ndkh: `Bức tranh tập thể`, tag: "Xé dán" },
        { title: `In màu và trang trí sáng tạo theo chủ đề: ${cleanTopic}`, ndtt: `In màu: ${cleanTopic}`, ndkh: `Trưng bày góc tạo hình`, tag: "In màu" }
      ],
      van_hoc: [
        { title: `Thơ: Bài thơ thiếu nhi vui nhộn về ${cleanTopic}`, ndtt: `Thơ: ${cleanTopic}`, ndkh: `Kịch rối que sinh động`, tag: "Mẫu Chuẩn" },
        { title: `Truyện kể: Câu chuyện bài học đạo đức về ${cleanTopic}`, ndtt: `Truyện: ${cleanTopic}`, ndkh: `Đóng kịch nhân vật`, tag: "Truyện kể" },
        { title: `Đồng dao dân gian và câu đố gợi mở về ${cleanTopic}`, ndtt: `Đồng dao & Câu đố: ${cleanTopic}`, ndkh: `Trò chơi đố vui`, tag: "Đồng dao" },
        { title: `Đàm thoại và ngâm thơ diễn cảm: ${cleanTopic}`, ndtt: `Ngâm thơ: ${cleanTopic}`, ndkh: `Giao lưu đọc thơ`, tag: "Thơ" }
      ],
      van_dong: [
        { title: `VĐCB: Vượt chướng ngại vật khám phá ${cleanTopic} - TCVĐ: Tiếp sức`, ndtt: `VĐCB: Vượt chướng ngại vật`, ndkh: `TCVĐ: Tiếp sức ${cleanTopic}`, tag: "Mẫu Chuẩn" },
        { title: `VĐCB: Đi trong đường hẹp chở học cụ về ${cleanTopic}`, ndtt: `VĐCB: Đi thăng bằng đường hẹp`, ndkh: `TCVĐ: Về đúng bến`, tag: "Thăng bằng" },
        { title: `VĐCB: Bật liên tục qua các ô vạch theo chủ đề ${cleanTopic}`, ndtt: `VĐCB: Bật qua các ô vạch`, ndkh: `TCVĐ: Nhanh như thỏ`, tag: "Bật nhảy" },
        { title: `VĐCB: Bò chui qua cổng khéo léo - TCVĐ: Đua tài`, ndtt: `VĐCB: Bò chui qua cổng`, ndkh: `TCVĐ: Đua tài cùng bạn`, tag: "Bò chui" }
      ]
    };

    return actNames[act] || actNames.am_nhac;
  }

  // 3. Tổng hợp hoặc lấy Kế hoạch bài dạy chuẩn theo Chủ đề cho Offline Engine
  function getThematicPlan({ activityType, topic, ageObj, lessonTitle, subValues = {}, teacherName, schoolName, dayOfWeek, date, weekRange }) {
    const act = activityType || "am_nhac";
    const actualTopic = (topic || "Thế giới Động vật").trim();
    const theme = findThemeByTopic(actualTopic);
    const data = window.PRE_SCHOOL_DATA;
    const actObj = (data.activityTypes && data.activityTypes.find(a => a.id === act)) || { name: "Hoạt động Giáo dục" };
    const actualAge = ageObj || (data.ageGroups && data.ageGroups[1]) || { id: "mau_giao_be", name: "Mẫu giáo bé (3 - 4 tuổi)", duration: "20 - 25 phút" };
    const actualTeacher = (teacherName || "").trim() || (window.appState && window.appState.teacherName) || "Cô giáo Nguyễn Thị Tiên";
    const actualSchool = (schoolName || "").trim() || (window.appState && window.appState.schoolName) || "Trường Mầm non Phúc Sơn B";
    const actualDay = dayOfWeek || "Thứ Hai";
    const actualDate = date || "26/01/2026";
    const actualWeekRange = weekRange || "26/01/2026 - 30/01/2026";

    // Hàm định dạng Cột 1 (Hoạt động) chuẩn quy cách GDMN
    function formatCol1(actId, sVals, defTitle, defKh) {
      const aName = actObj.name;
      if (actId === "am_nhac") {
        const p1 = sVals.ndtt || defTitle || "Hoạt động Âm nhạc";
        const p2 = sVals.ndkh || defKh || "";
        let res = `-${aName}:\n- NDTT: ${p1}`;
        if (p2) res += `\n+ NDKH: ${p2}`;
        return res;
      }
      if (actId === "nhan_biet") {
        const p1 = sVals.sub_nhan_biet || defTitle || "Hoạt động Nhận biết";
        return `-${aName}:\n- ${p1}`;
      }
      if (actId === "tao_hinh") {
        const p1 = sVals.sub_tao_hinh || defTitle || "Hoạt động Tạo hình";
        return `-${aName}:\n- ${p1}`;
      }
      if (actId === "van_hoc") {
        const p1 = sVals.sub_van_hoc || defTitle || "Hoạt động Làm quen văn học";
        return `-${aName}:\n- Thơ/truyện: ${p1}`;
      }
      if (actId === "van_dong") {
        const p1 = sVals.sub_ptcb || defTitle || "Phát triển cơ bản";
        const p2 = sVals.sub_tcvd || defKh || "";
        let res = `-${aName}:\n- Phát triển cơ bản: ${p1}`;
        if (p2) res += `\n+ Trò chơi vận động: ${p2}`;
        return res;
      }
      const other = sVals.sub_khac || defTitle || "Hoạt động giáo dục";
      return `-${aName}:\n- ${other}`;
    }

    function synthesizeTitle(actId, sVals, defTitle) {
      if (actId === "am_nhac") {
        const p1 = sVals.ndtt;
        const p2 = sVals.ndkh;
        if (p1 && p2) return `${p1} - NDKH: ${p2}`;
        return p1 || p2 || defTitle;
      }
      if (actId === "nhan_biet") return sVals.sub_nhan_biet || defTitle;
      if (actId === "tao_hinh") return sVals.sub_tao_hinh || defTitle;
      if (actId === "van_hoc") return sVals.sub_van_hoc || defTitle;
      if (actId === "van_dong") {
        const p1 = sVals.sub_ptcb;
        const p2 = sVals.sub_tcvd;
        if (p1 && p2) return `${p1} - ${p2}`;
        return p1 || p2 || defTitle;
      }
      return sVals.sub_khac || defTitle;
    }

    // Hàm kiểm tra xem bài hiện tại có trùng với bài flagship mẫu gốc của chủ đề không
    function isMatchingFlagship(actData, finalTitle, activeSubValues) {
      if (!actData || !actData.flagship) return false;
      const flagTitle = (actData.flagship.title || "").toLowerCase();
      const flagNdtt = (actData.flagship.ndtt || "").toLowerCase();
      const title = (finalTitle || "").toLowerCase().trim();
      const subVals = Object.values(activeSubValues || {});
      const mainSub = (subVals[0] || "").toLowerCase().trim();

      // Nếu không có title hoặc tiêu đề ghi rõ "Mẫu Chuẩn"
      if (!title && !mainSub) return true;
      if (title.includes("mẫu chuẩn")) return true;

      // Chuẩn hóa chuỗi bằng cách bỏ các tiền tố thể loại
      const cleanFlag = flagNdtt.replace(/^(thơ|truyện|dạy hát|dh|nghe hát|nh|vđcb|vđm|vđ|xé dán|vẽ|nặn|khám phá|nhận biết)\s*[:\-\.]\s*/i, "").trim();
      const cleanTitle = title.replace(/^(thơ|truyện|dạy hát|dh|nghe hát|nh|vđcb|vđm|vđ|xé dán|vẽ|nặn|khám phá|nhận biết)\s*[:\-\.]\s*/i, "").trim();
      const cleanSub = mainSub.replace(/^(thơ|truyện|dạy hát|dh|nghe hát|nh|vđcb|vđm|vđ|xé dán|vẽ|nặn|khám phá|nhận biết)\s*[:\-\.]\s*/i, "").trim();

      if (cleanFlag.length >= 3) {
        if (cleanTitle.includes(cleanFlag) || cleanFlag.includes(cleanTitle)) return true;
        if (cleanSub.includes(cleanFlag) || cleanFlag.includes(cleanSub)) return true;
      }
      return false;
    }

    // Hàm kiến tạo nội dung sư phạm cá nhân hóa chuyên sâu theo đề tài & nội dung con được sửa
    function generateTailoredPedagogy(actId, finalTitle, activeSubValues, topic, ageObj, actObj) {
      const lower = (finalTitle || "").toLowerCase();
      const ageName = (ageObj && ageObj.name) || "Mẫu giáo";
      const cleanTitle = (finalTitle || "")
        .replace(/^(thơ|truyện|dạy hát|dh|nghe hát|nh|vđcb|vđm|vđ|xé dán|vẽ|nặn|khám phá|nhận biết)\s*[:\-\.]\s*/i, "")
        .replace(/["'“”]/g, "")
        .trim();

      // 1. LÀM QUEN VĂN HỌC (THƠ / TRUYỆN)
      if (actId === "van_hoc") {
        if (lower.includes("rùa và thỏ") || lower.includes("thỏ và rùa")) {
          return {
            objectives: {
              knowledge: [
                `Trẻ biết tên bài thơ/câu chuyện 'Rùa và thỏ', nhớ các nhân vật: Bạn Rùa và bạn Thỏ.`,
                `Hiểu nội dung tác phẩm: Thỏ vì kiêu ngạo, chủ quan mải chơi nên đã thua Rùa; Rùa tuy chậm chạp nhưng kiên trì, chăm chỉ không bỏ cuộc nên đã về đích trước.`
              ],
              skills: [
                `Trẻ đọc thơ diễn cảm (hoặc kể lại đoạn truyện theo gợi ý), phân biệt được giọng điệu của Thỏ (kiêu hãnh) và Rùa (điềm đạm, cố gắng).`,
                `Phát triển ngôn ngữ mạch lạc, nói tròn câu, tự tin trả lời các câu hỏi đàm thoại của cô.`
              ],
              attitudes: [
                `Trẻ hào hứng lắng nghe tác phẩm, tích cực tham gia đọc thơ/đóng kịch cùng cô và các bạn.`,
                `Giáo dục bài học đạo đức: Không được chủ quan, kiêu ngạo; học tập đức tính kiên trì, chăm chỉ và biết tôn trọng bạn bè.`
              ]
            },
            preparation: {
              teacher: [
                `Smart TV trình chiếu phim hoạt hình/video minh họa bài thơ/truyện 'Rùa và thỏ'.`,
                `Mô hình sa bàn khu rừng, vạch xuất phát - đích đến; rối tay Rùa và Thỏ.`
              ],
              students: [
                `Ghế ngồi hình chữ U thoáng mát; mũ múa Rùa và Thỏ cho trẻ.`,
                `Tâm thế vui vẻ, sẵn sàng tham gia bài học.`
              ]
            },
            procedure: {
              intro: `1. Ổn định tổ chức: (1 - 2 phút)
- Cô mở nhạc bài hát 'Đố bạn' hoặc cho trẻ giải câu đố vui về bạn Thỏ chạy nhanh và bạn Rùa bò chậm.
- Dẫn dắt: Hôm nay cô sẽ dạy các con một tác phẩm văn học rất nổi tiếng, đó là '${finalTitle}' nhé!`,
              instruction: `2. Phương pháp, hình thức tổ chức: (18 - 22 phút)
* Cô đọc thơ / kể chuyện:
- Lần 1: Cô đọc diễn cảm, thể hiện sự vui tươi, giọng Thỏ huênh hoang, giọng Rùa điềm đạm.
- Lần 2: Cô đọc kết hợp trình chiếu hình ảnh sa bàn / Smart TV sinh động.

* Đàm thoại, trích dẫn nội dung bài học:
- Tác phẩm có tên là gì? Trong bài có những nhân vật nào? (Bạn Rùa và bạn Thỏ).
- Bạn Thỏ đã thách đố bạn Rùa điều gì? (Chạy thi xem ai về đích trước).
- Trong lúc chạy thi, bạn Thỏ đã làm gì? (Thỏ mải hái hoa, bắt bướm rồi ngủ quên dưới gốc cây).
- Còn bạn Rùa thì như thế nào? (Rùa kiên trì, cố gắng từng bước bò về đích trước Thỏ).
- Qua câu chuyện/bài thơ, các con học tập được đức tính gì? (Không chủ quan, kiêu ngạo; phải kiên trì và chăm chỉ).

* Dạy trẻ đọc thơ / kể chuyện:
- Cả lớp đọc thơ cùng cô 2 - 3 lần (cô sửa ngọng và rèn cách phát âm rõ ràng).
- Từng tổ thi đua nhau đọc thơ; nhóm bạn trai, nhóm bạn gái đọc luân phiên.
- Mời cá nhân trẻ lên thể hiện sự tự tin.
- Hoạt động tương tác: Trẻ đội mũ múa, hóa thân đóng vai Rùa và Thỏ thi tài hào hứng.`,
              conclusion: `3. Kết thúc: (1 - 2 phút)
- Cô nhận xét buổi học, khen ngợi các bé đọc thơ hay và thuộc bài.
- Nhắc nhở các con luôn chăm ngoan, khiêm tốn và kiên trì trong mọi việc.`
            }
          };
        }

        // Tác phẩm văn học chung khác (thơ, truyện, đồng dao)
        return {
          objectives: {
            knowledge: [
              `Trẻ nhớ tên tác phẩm văn học '${finalTitle}' trong chủ đề '${topic}'.`,
              `Hiểu nội dung, nắm bắt tên các nhân vật và thông điệp ý nghĩa mà bài thơ/câu chuyện '${cleanTitle}' gửi gắm.`
            ],
            skills: [
              `Rèn kỹ năng đọc thơ to, rõ lời, diễn cảm, ngắt nghỉ đúng nhịp (hoặc kể lại các tình tiết chính của câu chuyện).`,
              `Phát triển ngôn ngữ mạch lạc, nói tròn câu, tự tin tương tác đàm thoại cùng cô giáo.`
            ],
            attitudes: [
              `Trẻ say mê, chăm chú lắng nghe và hứng thú tham gia các hoạt động văn học nghệ thuật.`,
              `Giáo dục tình cảm đạo đức tốt đẹp và thói quen tích cực gắn liền với nội dung '${cleanTitle}'.`
            ]
          },
          preparation: {
            teacher: [
              `Giáo án điện tử, màn hình Smart TV chiếu video/tranh minh họa sắc nét về '${cleanTitle}'.`,
              `Sa bàn mô hình, hệ thống câu hỏi đàm thoại gợi mở, rối que minh họa nhân vật.`
            ],
            students: [
              `Mũ múa các nhân vật trong tác phẩm '${cleanTitle}'; ghế ngồi hình chữ U.`,
              `Tâm thế hào hứng, sẵn sàng đón nhận bài học.`
            ]
          },
          procedure: {
            intro: `1. Ổn định tổ chức: (1 - 2 phút)
- Cô cùng trẻ hát một bài hát hoặc đố vui dẫn dắt sinh động về chủ đề '${topic}'.
- Giới thiệu tác phẩm: Hôm nay cô sẽ giới thiệu tới các con bài học '${finalTitle}'.`,
            instruction: `2. Phương pháp, hình thức tổ chức: (18 - 22 phút)
* Cô đọc thơ / kể chuyện:
- Lần 1: Cô đọc diễn cảm thể hiện tình cảm, nhịp điệu của tác phẩm.
- Lần 2: Cô đọc kết hợp tranh minh họa / Smart TV / sa bàn trực quan.

* Đàm thoại, trích dẫn nội dung:
- Cô đặt câu hỏi gợi mở về tên tác phẩm, các nhân vật và hành động trong bài '${cleanTitle}'.
- Giúp trẻ hiểu từ khó và trích dẫn các câu thơ/đoạn văn giàu hình ảnh.
- Giáo dục bài học thực tế gắn liền với lứa tuổi ${ageName}.

* Dạy trẻ đọc thơ / kể chuyện:
- Cả lớp đọc cùng cô 2 - 3 lần.
- Tổ, nhóm và cá nhân trẻ thi đua đọc thơ diễn cảm.
- Trò chơi kịch rối hoặc tương tác đóng kịch theo nội dung tác phẩm.`,
            conclusion: `3. Kết thúc: (1 - 2 phút)
- Nhận xét, tuyên dương tinh thần học tập của cả lớp.
- Chuyển tiếp hoạt động nhẹ nhàng.`
          }
        };
      }

      // 2. GIÁO DỤC ÂM NHẠC
      if (actId === "am_nhac") {
        const songName = (activeSubValues.ndtt || cleanTitle || "Bài hát tuổi thơ").replace(/^(dạy hát|dh|nghe hát|nh|vđm|vđ)\s*[:\-\.]\s*/i, "");
        const gameName = activeSubValues.ndkh || "TCÂN: Tai ai tinh";
        return {
          objectives: {
            knowledge: [
              `Trẻ biết tên bài hát '${songName}', cảm nhận giai điệu tươi vui, rộn ràng trong chủ đề '${topic}'.`,
              `Hiểu nội dung lời ca và nắm rõ cách chơi trò chơi âm nhạc '${gameName}'.`
            ],
            skills: [
              `Hát đúng giai điệu, rõ lời ca, phát âm to rõ ràng; rèn phản xạ nhanh theo tiết tấu nhịp điệu.`,
              `Biết vận động vỗ tay, nhún nhảy hoặc múa phụ họa nhịp nhàng theo lời ca.`
            ],
            attitudes: [
              `Trẻ yêu thích âm nhạc, tự tin thể hiện cảm xúc và hào hứng biểu diễn văn nghệ trước lớp.`,
              `Giáo dục tình cảm trong sáng gắn liền với chủ đề '${topic}'.`
            ]
          },
          preparation: {
            teacher: [
              `Đàn organ, loa kéo, nhạc beat chuẩn bài hát '${songName}'.`,
              `Dụng cụ âm nhạc: Xắc xô, phách tre, thanh gõ, mũ múa xinh xắn.`
            ],
            students: [
              `Dụng cụ gõ đệm mini cho từng tổ và cá nhân; tâm thế vui tươi sảng khoái.`
            ]
          },
          procedure: {
            intro: `1. Ổn định tổ chức: (1 - 2 phút)\n- Trò chuyện dẫn dắt trẻ vào chủ đề '${topic}' và giới thiệu bài học âm nhạc '${finalTitle}'.`,
            instruction: `2. Phương pháp, hình thức tổ chức: (18 - 22 phút)\n2.1. Nội dung trọng tâm: "${songName}"\n- Cô hát/biểu diễn mẫu lần 1 trọn vẹn, diễn cảm.\n- Giới thiệu nội dung, ý nghĩa của bài hát.\n- Cô hát lần 2 kết hợp cử chỉ điệu bộ/nhạc đệm.\n- Dạy trẻ hát: Cả lớp hát 2 - 3 lần; thi đua giữa các tổ; nhóm bạn trai, bạn gái; cá nhân thể hiện.\n\n2.2. Nội dung kết hợp: "${gameName}"\n- Cô giới thiệu luật chơi, cách chơi.\n- Cho trẻ tham gia chơi 2 - 3 lượt sôi nổi, khích lệ trẻ phản xạ nhanh.`,
            conclusion: `3. Kết thúc: (1 - 2 phút)\n- Cô khen ngợi cả lớp hát hay múa dẻo, vận động nhẹ nhàng ra sân.`
          }
        };
      }

      // 3. NHẬN BIẾT
      if (actId === "nhan_biet") {
        const objName = activeSubValues.sub_nhan_biet || cleanTitle || topic;
        return {
          objectives: {
            knowledge: [
              `Trẻ nhận biết, gọi đúng tên và phân biệt được các đặc điểm nổi bật của '${objName}'.`,
              `Hiểu công dụng, ích lợi và mối quan hệ gần gũi của '${objName}' trong chủ đề '${topic}'.`
            ],
            skills: [
              `Rèn kỹ năng quan sát, so sánh, phân loại và ghi nhớ có chủ định.`,
              `Phát triển ngôn ngữ mạch lạc, nói trọn câu rõ ràng chuẩn tiếng Việt.`
            ],
            attitudes: [
              `Trẻ tò mò, ham hiểu biết, hào hứng tham gia các hoạt động khám phá khoa học.`,
              `Có ý thức giữ gìn, bảo vệ đồ dùng và môi trường xung quanh.`
            ]
          },
          preparation: {
            teacher: [
              `Giáo án điện tử, màn hình Smart TV, vật thật hoặc mô hình trực quan về '${objName}'.`,
              `Hệ thống câu hỏi gợi mở, trò chơi tương tác củng cố bài học.`
            ],
            students: [
              `Rổ đựng lô tô / học cụ nhận biết đầy đủ cho từng trẻ.`
            ]
          },
          procedure: {
            intro: `1. Ổn định tổ chức: (1 - 2 phút)\n- Hát hoặc đố vui dẫn dắt vào bài học nhận biết '${finalTitle}'.`,
            instruction: `2. Phương pháp, hình thức tổ chức: (18 - 22 phút)\n* Khám phá & Đàm thoại:\n- Cho trẻ quan sát vật thật/mô hình về '${objName}'.\n- Cô đàm thoại gợi mở về đặc điểm, hình dáng, màu sắc, âm thanh/công dụng.\n- Cho trẻ so sánh, tìm điểm giống và khác nhau.\n\n* Trò chơi củng cố:\n- Trò chơi 1: 'Ai tinh mắt' (chọn nhanh lô tô theo hiệu lệnh).\n- Trò chơi 2: 'Về đúng nhà' gắn liền với '${objName}'.`,
            conclusion: `3. Kết thúc: (1 - 2 phút)\n- Khen ngợi tinh thần học tập của trẻ; giáo dục liên hệ thực tế.`
          }
        };
      }

      // 4. TẠO HÌNH
      if (actId === "tao_hinh") {
        const craftName = activeSubValues.sub_tao_hinh || cleanTitle || topic;
        return {
          objectives: {
            knowledge: [
              `Trẻ biết tên đề tài tạo hình '${craftName}', nhận biết đường nét, hình khối, màu sắc và bố cục cân đối.`,
              `Nắm được các kỹ năng tạo hình cơ bản phù hợp lứa tuổi ${ageName}.`
            ],
            skills: [
              `Rèn sự khéo léo của đôi bàn tay, cách cầm bút/chấm màu/dán giấy/nặn tạo hình.`,
              `Biết phối màu sắc hài hòa, sắp xếp bố cục cân đối trên trang giấy.`
            ],
            attitudes: [
              `Trẻ say sưa, kiên trì hoàn thành sản phẩm tạo hình của mình.`,
              `Biết yêu quý, nâng niu sản phẩm của mình và tôn trọng sản phẩm của bạn.`
            ]
          },
          preparation: {
            teacher: [
              `2 - 3 tranh mẫu gợi ý đa dạng chất liệu về '${craftName}'; giá trưng bày sản phẩm.`,
              `Nhạc nhẹ nhàng không lời tạo cảm hứng sáng tạo.`
            ],
            students: [
              `Bàn ghế, giấy A4, sáp màu, màu nước, hồ dán, đất nặn, khăn lau tay.`
            ]
          },
          procedure: {
            intro: `1. Ổn định tổ chức: (1 - 2 phút)\n- Hát bài hát dẫn dắt vào chủ đề '${topic}'.\n- Cho trẻ quan sát hộp quà bí mật về đề tài '${craftName}'.`,
            instruction: `2. Phương pháp, hình thức tổ chức: (18 - 22 phút)\n* Quan sát tranh mẫu:\n- Cho trẻ quan sát các tranh mẫu của cô và nhận xét về màu sắc, đường nét, bố cục.\n- Cô gợi mở ý tưởng sáng tạo cho trẻ.\n\n* Cô làm mẫu & phân tích kỹ năng:\n- Hướng dẫn các bước thực hiện thao tác tạo hình chuẩn xác.\n\n* Trẻ thực hiện:\n- Trẻ ngồi đúng tư thế, cô mở nhạc không lời nhẹ nhàng.\n- Cô bao quát, hướng dẫn trẻ còn lúng túng; khích lệ trẻ có sáng tạo mới.\n\n* Trưng bày và nhận xét sản phẩm:\n- Cho trẻ mang sản phẩm lên giá trưng bày; trẻ tự giới thiệu và nhận xét tranh bạn.`,
            conclusion: `3. Kết thúc: (1 - 2 phút)\n- Cô tổng kết, tuyên dương sự khéo léo của cả lớp, thu dọn đồ dùng gọn gàng.`
          }
        };
      }

      // 5. PHÁT TRIỂN GIÁO DỤC / VẬN ĐỘNG
      if (actId === "van_dong") {
        const moveName = (activeSubValues.sub_ptcb || cleanTitle || "Vận động cơ bản").replace(/^(vđcb|vđ|bài tập)\s*[:\-\.]\s*/i, "");
        const gameName = activeSubValues.sub_tcvd || "TCVĐ: Trò chơi vận động";
        return {
          objectives: {
            knowledge: [
              `Trẻ biết tên vận động cơ bản '${moveName}' và nắm rõ luật chơi của trò chơi '${gameName}'.`,
              `Hiểu kỹ thuật thực hiện động tác chuẩn xác theo đúng hiệu lệnh và hướng dẫn của cô.`
            ],
            skills: [
              `Rèn kỹ năng phối hợp vận động nhịp nhàng, thăng bằng cơ thể và phát triển các nhóm cơ bắp.`,
              `Phát triển tố chất nhanh nhẹn, khéo léo, tự tin khi tham gia bài tập và trò chơi.`
            ],
            attitudes: [
              `Trẻ hào hứng, tự tin tham gia luyện tập thể dục thể thao rèn luyện sức khỏe.`,
              `Có ý thức kỷ luật, xếp hàng tuần tự chờ đến lượt, không xô đẩy bạn.`
            ]
          },
          preparation: {
            teacher: [
              `Sân tập rộng rãi, bằng phẳng, sạch sẽ, an toàn; vạch chuẩn xuất phát.`,
              `Dụng cụ thể dục phù hợp với bài tập '${moveName}'; loa kéo nhạc sôi động.`
            ],
            students: [
              `Trang phục thể thao gọn gàng, giày vải thuận tiện vận động.`
            ]
          },
          procedure: {
            intro: `1. Khởi động: (2 - 3 phút)\n- Trẻ đi theo vòng tròn kết hợp đi bằng mũi chân, gót chân, chạy chậm, chạy nhanh rồi về 3 hàng ngang.`,
            instruction: `2. Trọng động: (18 - 20 phút)\n* BTPTC: Tập các động tác Tay, Chân, Bụng lườn, Bật nhảy theo nền nhạc sôi động.\n\n* VĐCB: "${moveName}"\n- Cô làm mẫu lần 1 trọn vẹn, dứt khoát.\n- Cô làm mẫu lần 2 + phân tích kỹ thuật động tác rõ ràng.\n- Trẻ thực hiện: Lần lượt 2 trẻ lên tập; cô quan sát, sửa sai và khích lệ trẻ.\n\n* TCVĐ: "${gameName}"\n- Cô phổ biến luật chơi, cách chơi.\n- Cho trẻ chơi 2 - 3 lượt hào hứng.`,
            conclusion: `3. Hồi tĩnh: (1 - 2 phút)\n- Đi lại nhẹ nhàng thả lỏng các khớp cổ chân, cổ tay; cô nhận xét tuyên dương cả lớp.`
          }
        };
      }

      // Default fallback
      return {
        objectives: {
          knowledge: [
            `Trẻ nhận biết và gọi đúng tên bài học '${finalTitle}' trong chủ đề '${topic}'.`,
            `Nắm được các kỹ năng cơ bản phù hợp lứa tuổi ${ageName}.`
          ],
          skills: [
            `Rèn kỹ năng quan sát, thực hành và phát triển ngôn ngữ mạch lạc.`
          ],
          attitudes: [
            `Hào hứng, tích cực tham gia hoạt động cùng cô và các bạn.`
          ]
        },
        preparation: {
          teacher: [`Smart TV, đồ dùng trực quan minh họa cho '${finalTitle}'.`],
          students: [`Học cụ đầy đủ cho từng trẻ.`]
        },
        procedure: {
          intro: `1. Ổn định: Dẫn dắt vào bài học '${finalTitle}'.`,
          instruction: `2. Hướng dẫn & Thực hành: Cô hướng dẫn mẫu; Trẻ thực hành; Củng cố bài học.`,
          conclusion: `3. Kết thúc: Tuyên dương, nhận xét buổi học.`
        }
      };
    }

    // A. Nếu thuộc 10 chủ đề chuẩn:
    if (theme && theme.activities && theme.activities[act]) {
      const actData = theme.activities[act];
      let title = (lessonTitle || "").trim();
      let ndtt = "";
      let ndkh = "";

      // Kiểm tra xem lessonTitle có khớp với preset nào không
      const matchedPreset = actData.presets.find(p => p.title.toLowerCase().includes(title.toLowerCase()) || title.toLowerCase().includes(p.title.toLowerCase()));
      if (matchedPreset) {
        title = matchedPreset.title;
        ndtt = matchedPreset.ndtt;
        ndkh = matchedPreset.ndkh;
      } else if (!title || title.includes("Mẫu Chuẩn") || title.includes("Hoa thơm bướm lượn")) {
        // Lấy flagship mặc định của chủ đề
        title = actData.flagship.title;
        ndtt = actData.flagship.ndtt;
        ndkh = actData.flagship.ndkh;
      } else {
        ndtt = title;
        ndkh = actData.flagship.ndkh;
      }

      // Hòa trộn subValues nếu người dùng đã tùy chỉnh các ô con
      const activeSubValues = Object.assign({}, subValues);
      if (act === "am_nhac") {
        if (!activeSubValues.ndtt) activeSubValues.ndtt = ndtt;
        if (!activeSubValues.ndkh && ndkh) activeSubValues.ndkh = ndkh;
      } else if (act === "nhan_biet") {
        if (!activeSubValues.sub_nhan_biet) activeSubValues.sub_nhan_biet = ndtt || title;
      } else if (act === "tao_hinh") {
        if (!activeSubValues.sub_tao_hinh) activeSubValues.sub_tao_hinh = ndtt || title;
      } else if (act === "van_hoc") {
        if (!activeSubValues.sub_van_hoc) activeSubValues.sub_van_hoc = ndtt || title;
      } else if (act === "van_dong") {
        if (!activeSubValues.sub_ptcb) activeSubValues.sub_ptcb = ndtt || title;
        if (!activeSubValues.sub_tcvd && ndkh) activeSubValues.sub_tcvd = ndkh;
      }

      const finalTitle = synthesizeTitle(act, activeSubValues, title);
      const activityCol = formatCol1(act, activeSubValues, finalTitle, ndkh);

      // Đồng bộ alias ndtt/ndkh
      const finalNdtt = activeSubValues.ndtt || activeSubValues.sub_nhan_biet || activeSubValues.sub_tao_hinh || activeSubValues.sub_van_hoc || activeSubValues.sub_ptcb || finalTitle;
      const finalNdkh = activeSubValues.ndkh || activeSubValues.sub_tcvd || "";

      // Kiểm tra xem bài hiện tại có phải là flagship mẫu chuẩn của chủ đề không
      const isFlagship = isMatchingFlagship(actData, finalTitle, activeSubValues);
      
      let finalObjectives, finalPreparation, finalProcedure;
      if (isFlagship) {
        finalObjectives = actData.objectives;
        finalPreparation = actData.preparation;
        finalProcedure = actData.procedure;
      } else {
        // Tự động sinh nội dung sư phạm chuyên biệt chuẩn xác theo đề tài và nội dung con vừa sửa
        const tailored = generateTailoredPedagogy(act, finalTitle, activeSubValues, actualTopic, actualAge, actObj);
        finalObjectives = tailored.objectives;
        finalPreparation = tailored.preparation;
        finalProcedure = tailored.procedure;
      }

      return {
        title: finalTitle,
        topic: actualTopic,
        topicName: actualTopic,
        dayOfWeek: actualDay,
        date: actualDate,
        weekRange: actualWeekRange,
        activityType: act,
        activityTypeName: actObj.name,
        badge: actObj.shortName || actObj.name,
        subValues: activeSubValues,
        ndtt: finalNdtt,
        ndkh: finalNdkh,
        activityCol: activityCol,
        ageId: actualAge.id,
        ageName: actualAge.name,
        duration: actualAge.duration,
        teacher: actualTeacher,
        school: actualSchool,
        objectives: finalObjectives,
        preparation: finalPreparation,
        procedure: finalProcedure,
        assessment: "",
        adjustment: "",
        engineUsed: isFlagship 
          ? `Offline Sư Phạm Heuristic Engine (Chủ đề: ${theme.name})`
          : `Offline Sư Phạm Heuristic Engine (Cá nhân hóa: ${finalTitle})`,
        isOffline: true,
        createdAt: new Date().toISOString()
      };
    }

    // B. Nếu là chủ đề hoàn toàn tự do (Custom Topic Heuristic Synthesizer):
    const activeSubValues = Object.assign({}, subValues);
    const defTitle = (lessonTitle || "").trim() || `${actObj.name}: Khám phá ${actualTopic}`;
    const finalTitle = synthesizeTitle(act, activeSubValues, defTitle);
    const activityCol = formatCol1(act, activeSubValues, finalTitle, `TC: Khám phá ${actualTopic}`);
    const finalNdtt = activeSubValues.ndtt || activeSubValues.sub_nhan_biet || activeSubValues.sub_tao_hinh || activeSubValues.sub_van_hoc || activeSubValues.sub_ptcb || finalTitle;
    const finalNdkh = activeSubValues.ndkh || activeSubValues.sub_tcvd || `TC: Trò chơi khám phá ${actualTopic}`;

    const tailored = generateTailoredPedagogy(act, finalTitle, activeSubValues, actualTopic, actualAge, actObj);

    return {
      title: finalTitle,
      topic: actualTopic,
      topicName: actualTopic,
      dayOfWeek: actualDay,
      date: actualDate,
      weekRange: actualWeekRange,
      activityType: act,
      activityTypeName: actObj.name,
      badge: actObj.shortName || actObj.name,
      subValues: activeSubValues,
      ndtt: finalNdtt,
      ndkh: finalNdkh,
      activityCol: activityCol,
      ageId: actualAge.id,
      ageName: actualAge.name,
      duration: actualAge.duration,
      teacher: actualTeacher,
      school: actualSchool,
      objectives: tailored.objectives,
      preparation: tailored.preparation,
      procedure: tailored.procedure,
      assessment: "",
      adjustment: "",
      engineUsed: `Offline Heuristic Engine (Chủ đề tùy chỉnh: ${actualTopic})`,
      isOffline: true,
      createdAt: new Date().toISOString()
    };
  }

  // Gắn vào window.PRE_SCHOOL_DATA
  if (typeof window !== "undefined") {
    if (!window.PRE_SCHOOL_DATA) window.PRE_SCHOOL_DATA = {};
    window.PRE_SCHOOL_DATA.themePedagogyRegistry = themePedagogyRegistry;
    window.PRE_SCHOOL_DATA.findThemeByTopic = findThemeByTopic;
    window.PRE_SCHOOL_DATA.getThematicPresets = getThematicPresets;
    window.PRE_SCHOOL_DATA.getThematicPlan = getThematicPlan;
  }

  // Export module nếu dùng trong môi trường Node.js (cho unit test)
  if (typeof module !== "undefined" && module.exports) {
    module.exports = {
      themePedagogyRegistry,
      findThemeByTopic,
      getThematicPresets,
      getThematicPlan
    };
  }
})();
