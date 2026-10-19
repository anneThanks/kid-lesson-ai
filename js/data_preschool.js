/**
 * KID-LESSON AI - Cơ sở tri thức Sư phạm Mầm non Việt Nam
 * Bám sát Chương trình GDMN & Thông tư 51/2020/TT-BGDĐT
 * Đơn vị áp dụng: Trường Mầm non Phúc Sơn B
 */

const PRE_SCHOOL_DATA = {
  // 1. CÁC ĐỘ TUỔI MẦM NON
  ageGroups: [
    { id: "nha_tre", name: "Nhà trẻ (24 - 36 tháng)", label: "Nhà trẻ (24-36 th)", icon: "🍼", duration: "15 - 20 phút" },
    { id: "mau_giao_be", name: "Mẫu giáo bé (3 - 4 tuổi)", label: "Mẫu giáo bé (3-4 tuổi)", icon: "🐣", duration: "20 - 25 phút" },
    { id: "mau_giao_nho", name: "Mẫu giáo nhỡ (4 - 5 tuổi)", label: "Mẫu giáo nhỡ (4-5 tuổi)", icon: "🐥", duration: "25 - 30 phút" },
    { id: "mau_giao_lon", name: "Mẫu giáo lớn (5 - 6 tuổi)", label: "Mẫu giáo lớn (5-6 tuổi)", icon: "🦅", duration: "30 - 35 phút" }
  ],

  // 1b. 5 HOẠT ĐỘNG GIÁO DỤC CHUẨN TRONG TUẦN (MỖI NGÀY 1 HOẠT ĐỘNG)
  activityTypes: [
    {
      id: "am_nhac",
      name: "Hoạt động Âm nhạc",
      shortName: "Âm nhạc",
      icon: "🎵",
      domainId: "tham_my",
      defaultDayId: "mon",
      description: "Dạy hát, nghe hát, vận động theo nhạc, trò chơi âm nhạc",
      subFields: [
        {
          key: "ndtt",
          label: "🎯 Nội dung trọng tâm (NDTT):",
          placeholder: "Ví dụ: NH: Hoa thơm, bướm lượn (hoặc DH: Con bướm vàng, VĐM: Em yêu cây xanh)...",
          prefix: "- NDTT: "
        },
        {
          key: "ndkh",
          label: "🎲 Nội dung kết hợp (NDKH):",
          placeholder: "Ví dụ: TCÂN: Ai nhanh nhất (hoặc NH: Bướm hoa, TCÂN: Tai ai tinh)...",
          prefix: "+ NDKH: "
        }
      ]
    },
    {
      id: "nhan_biet",
      name: "Hoạt động Nhận biết",
      shortName: "Nhận biết",
      icon: "🧠",
      domainId: "nhan_thuc",
      defaultDayId: "tue",
      description: "Nhận biết tập nói, Khám phá KH, Toán sơ đẳng, Hình khối & Màu sắc",
      subFields: [
        {
          key: "sub_nhan_biet",
          label: "🔍 Các nội dung liên quan đến nhận biết:",
          placeholder: "Ví dụ: Ôn nhận biết hình tròn, hình vuông; Phân biệt màu đỏ - màu vàng; Nhận biết to - nhỏ...",
          prefix: "- "
        }
      ]
    },
    {
      id: "tao_hinh",
      name: "Hoạt động Tạo hình",
      shortName: "Tạo hình",
      icon: "🎨",
      domainId: "tham_my",
      defaultDayId: "wed",
      description: "Vẽ, nặn, xé dán, in màu, chấm màu, trang trí tranh ảnh sáng tạo",
      subFields: [
        {
          key: "sub_tao_hinh",
          label: "🎨 Các nội dung liên quan đến tạo hình:",
          placeholder: "Ví dụ: In màu trang trí cánh bướm; Vẽ hoa mùa xuân; Nặn chú sâu con; Xé dán cánh hoa...",
          prefix: "- "
        }
      ]
    },
    {
      id: "van_hoc",
      name: "Hoạt động Làm quen văn học",
      shortName: "Làm quen văn học",
      icon: "📖",
      domainId: "ngon_ngu",
      defaultDayId: "thu",
      description: "Thơ, truyện kể, ca dao đồng dao, đàm thoại trích dẫn, kịch rối",
      subFields: [
        {
          key: "sub_van_hoc",
          label: "📚 Thơ/truyện:",
          placeholder: "Ví dụ: Thơ: 'Ong và bướm' (Nhược Thủy); Truyện cổ tích: 'Quả táo của ai?'...",
          prefix: "- "
        }
      ]
    },
    {
      id: "van_dong",
      name: "Hoạt động Phát triển giáo dục",
      shortName: "Phát triển giáo dục",
      icon: "🏃",
      domainId: "the_chat",
      defaultDayId: "fri",
      description: "Phát triển cơ bản (VĐCB), Trò chơi vận động rèn khéo léo và thể lực",
      subFields: [
        {
          key: "sub_ptcb",
          label: "🏃 Phát triển cơ bản:",
          placeholder: "Ví dụ: VĐCB: Ném và bắt bóng bằng 2 tay; Bò chui qua cổng; Đi trong đường hẹp...",
          prefix: "- Phát triển cơ bản: "
        },
        {
          key: "sub_tcvd",
          label: "🎯 Trò chơi vận động:",
          placeholder: "Ví dụ: TCVĐ: Kéo co; TCVĐ: Cáo và thỏ; TCVĐ: Mèo đuổi chuột...",
          prefix: "+ Trò chơi vận động: "
        }
      ]
    },
    {
      id: "khac",
      name: "Hoạt động Giáo dục khác",
      shortName: "Khác",
      icon: "⭐",
      domainId: "tinh_cam_xh",
      defaultDayId: "",
      description: "Kỹ năng sống, trải nghiệm, giao lưu tập thể",
      subFields: [
        {
          key: "sub_khac",
          label: "⭐ Nội dung hoạt động:",
          placeholder: "Ví dụ: Kỹ năng sống: Bé biết rửa tay đúng cách...",
          prefix: "- "
        }
      ]
    }
  ],

  // 1c. CÁC NGÀY TRONG TUẦN & PHÂN BỔ HOẠT ĐỘNG
  daysOfWeek: [
    { id: "mon", name: "Thứ Hai", shortName: "T2", defaultActivity: "am_nhac", label: "Thứ Hai - Âm nhạc", offsetDays: 0 },
    { id: "tue", name: "Thứ Ba", shortName: "T3", defaultActivity: "nhan_biet", label: "Thứ Ba - Nhận biết", offsetDays: 1 },
    { id: "wed", name: "Thứ Tư", shortName: "T4", defaultActivity: "tao_hinh", label: "Thứ Tư - Tạo hình", offsetDays: 2 },
    { id: "thu", name: "Thứ Năm", shortName: "T5", defaultActivity: "van_hoc", label: "Thứ Năm - Văn học", offsetDays: 3 },
    { id: "fri", name: "Thứ Sáu", shortName: "T6", defaultActivity: "van_dong", label: "Thứ Sáu - Phát triển giáo dục", offsetDays: 4 }
  ],

  // 1d. TẤT CẢ CHỦ ĐỀ GỘP (CHỌN HOẶC TỰ NHẬP MỚI)
  allTopics: [
    "Thế giới Động vật - Các loài côn trùng và hoa mùa xuân",
    "Thế giới Động vật - Vật nuôi quen thuộc trong gia đình",
    "Thế giới Động vật - Động vật sống trong rừng kỳ thú",
    "Thế giới Động vật - Thế giới động vật dưới nước",
    "Thế giới Thực vật - Một số loài hoa đẹp mùa xuân",
    "Thế giới Thực vật - Các loại quả ngon quanh bé",
    "Thế giới Thực vật - Rau củ tươi sạch bổ dưỡng",
    "Thế giới Thực vật - Cây xanh tỏa bóng mát",
    "Bản thân Bé - 5 giác quan kỳ diệu",
    "Bản thân Bé - Các bộ phận trên cơ thể bé",
    "Bản thân Bé - Bé giữ gìn vệ sinh và sức khỏe",
    "Gia đình Thân yêu - Ngôi nhà của bé",
    "Gia đình Thân yêu - Những người thân trong gia đình",
    "Gia đình Thân yêu - Đồ dùng trong gia đình",
    "Trường Mầm non Của Bé - Lớp học thân yêu của bé",
    "Trường Mầm non Của Bé - Đồ chơi trong lớp và ngoài sân",
    "Phương tiện Giao thông - Đường bộ (Ô tô, xe máy, xe buýt)",
    "Phương tiện Giao thông - Bé học luật an toàn giao thông",
    "Nghề nghiệp Quanh Bé - Chú bộ đội và Công an nhân dân",
    "Nghề nghiệp Quanh Bé - Bác sĩ và Y tá áo trắng",
    "Nghề nghiệp Quanh Bé - Nghề nông dân một nắng hai sương",
    "Nước & Hiện tượng Tự nhiên - Mùa hè và nguồn nước ngọt quý giá",
    "Quê hương - Đất nước - Bác Hồ kính yêu",
    "Lễ hội & Tết Cổ truyền - Tết Nguyên Đán rực rỡ sắc xuân"
  ],


  // 2. 5 LĨNH VỰC PHÁT TRIỂN GDMN THEO THÔNG TƯ 51/2020/TT-BGDĐT
  domains: [
    {
      id: "nhan_thuc",
      name: "Phát triển Nhận thức (Khám phá KH & Toán)",
      shortName: "Phát triển Nhận thức",
      icon: "🔍",
      color: "#0284c7",
      bgColor: "#e0f2fe",
      description: "Khám phá khoa học, khám phá xã hội, làm quen với một số khái niệm toán sơ đẳng"
    },
    {
      id: "ngon_ngu",
      name: "Phát triển Ngôn ngữ (Văn học, Chữ viết)",
      shortName: "Phát triển Ngôn ngữ",
      icon: "📖",
      color: "#d97706",
      bgColor: "#fef3c7",
      description: "Làm quen tác phẩm văn học (thơ, truyện, ca dao, đồng dao), phát triển vốn từ, tiền đọc - tiền viết"
    },
    {
      id: "tham_my",
      name: "Phát triển Thẩm mỹ (Âm nhạc & Tạo hình)",
      shortName: "Phát triển Thẩm mỹ",
      icon: "🎨",
      color: "#db2777",
      bgColor: "#fce7f3",
      description: "Ca hát, nghe nhạc, vận động theo nhạc; vẽ, nặn, cắt dán, xé dán sáng tạo"
    },
    {
      id: "the_chat",
      name: "Phát triển Thể chất (Vận động & Dinh dưỡng)",
      shortName: "Phát triển Thể chất",
      icon: "🏃",
      color: "#16a34a",
      bgColor: "#dcfce7",
      description: "Vận động cơ bản, trò chơi vận động rèn khéo léo, giáo dục dinh dưỡng và vệ sinh cá nhân"
    },
    {
      id: "tinh_cam_xh",
      name: "Phát triển Tình cảm - Kỹ năng xã hội",
      shortName: "Tình cảm & KN Xã hội",
      icon: "❤️",
      color: "#9333ea",
      bgColor: "#f3e8ff",
      description: "Ý thức bản thân, nhận biết cảm xúc, tình bạn, lễ phép, quy tắc an toàn trong cuộc sống"
    }
  ],

  // 3. 10 CHỦ ĐỀ GIÁO DỤC MẦM NON LỚN TRONG NĂM HỌC
  topics: [
    {
      id: "dong_vat",
      name: "Thế giới Động vật",
      icon: "🐾",
      branches: ["Vật nuôi trong gia đình", "Động vật sống trong rừng", "Động vật dưới nước", "Các loài chim và côn trùng"],
      sampleLessons: [
        { title: "Tìm hiểu bạn Gà trống và bạn Vịt bầu", domain: "nhan_thuc", age: "mau_giao_nho" },
        { title: "Bài thơ: Đàn gà con (Phạm Hổ)", domain: "ngon_ngu", age: "mau_giao_be" },
        { title: "Vận động múa: Đố bạn", domain: "tham_my", age: "mau_giao_lon" },
        { title: "Tạo hình: Nặn chú rùa con ngộ nghĩnh", domain: "tham_my", age: "mau_giao_nho" },
        { title: "Bé đếm số lượng 5 và nhận biết số 5 (đàn bướm)", domain: "nhan_thuc", age: "mau_giao_lon" }
      ]
    },
    {
      id: "thuc_vat",
      name: "Thế giới Thực vật",
      icon: "🌸",
      branches: ["Một số loài hoa đẹp", "Các loại quả ngon", "Rau củ tốt cho sức khỏe", "Cây xanh và bóng mát"],
      sampleLessons: [
        { title: "Khám phá: Quả cam và quả chuối chín", domain: "nhan_thuc", age: "nha_tre" },
        { title: "Vẽ và tô màu bông hoa tặng cô", domain: "tham_my", age: "mau_giao_be" },
        { title: "Bé tìm hiểu: Hạt mầm lớn lên như thế nào?", domain: "nhan_thuc", age: "mau_giao_lon" },
        { title: "Bài thơ: Cây bắp cải bẹ xanh", domain: "ngon_ngu", age: "mau_giao_be" }
      ]
    },
    {
      id: "ban_than",
      name: "Bản thân Bé",
      icon: "🧒",
      branches: ["Tôi là ai? (Họ tên, giới tính)", "Các bộ phận trên cơ thể bé", "Bé giữ gìn vệ sinh và sức khỏe", "Cảm xúc của bé"],
      sampleLessons: [
        { title: "Khám phá 5 giác quan kỳ diệu của bé", domain: "nhan_thuc", age: "mau_giao_nho" },
        { title: "Kỹ năng sống: Bé rửa tay 6 bước sạch khuẩn", domain: "the_chat", age: "mau_giao_be" },
        { title: "Hát và vận động: Cái mũi nhỏ xinh", domain: "tham_my", age: "mau_giao_be" }
      ]
    },
    {
      id: "gia_dinh",
      name: "Gia đình Thân yêu",
      icon: "🏡",
      branches: ["Ngôi nhà của bé", "Những người thân trong gia đình", "Đồ dùng trong gia đình", "Bữa cơm gia đình ấm áp"],
      sampleLessons: [
        { title: "Trò chuyện về những người thân yêu trong nhà", domain: "tinh_cam_xh", age: "mau_giao_be" },
        { title: "Phân biệt đồ dùng để ăn và đồ dùng để uống", domain: "nhan_thuc", age: "mau_giao_nho" },
        { title: "Bài thơ: Lấy tăm cho bà", domain: "ngon_ngu", age: "mau_giao_nho" }
      ]
    },
    {
      id: "truong_mam_non",
      name: "Trường Mầm non Của Bé",
      icon: "🏫",
      branches: ["Lớp học thân yêu của bé", "Các cô giáo và bác cấp dưỡng", "Đồ chơi trong lớp và ngoài sân", "Bạn bè cùng vui"],
      sampleLessons: [
        { title: "Làm quen với lớp học và bạn mới", domain: "tinh_cam_xh", age: "nha_tre" },
        { title: "Bé biết cất đồ chơi gọn gàng đúng nơi quy định", domain: "tinh_cam_xh", age: "mau_giao_be" },
        { title: "Hát bài: Vui đến trường", domain: "tham_my", age: "mau_giao_nho" }
      ]
    },
    {
      id: "giao_thong",
      name: "Phương tiện Giao thông",
      icon: "🚗",
      branches: ["Phương tiện giao thông đường bộ", "Phương tiện giao thông đường thủy", "Giao thông đường hàng không", "Bé học luật an toàn giao thông"],
      sampleLessons: [
        { title: "Khám phá: Xe ô tô con và Xe buýt", domain: "nhan_thuc", age: "mau_giao_be" },
        { title: "Bé tìm hiểu ý nghĩa đèn tín hiệu giao thông", domain: "nhan_thuc", age: "mau_giao_lon" },
        { title: "Tạo hình: Dán đoàn tàu hỏa rực rỡ", domain: "tham_my", age: "mau_giao_nho" }
      ]
    },
    {
      id: "nghe_nghiep",
      name: "Nghề nghiệp Quanh Bé",
      icon: "👨‍⚕️",
      branches: ["Nghề dạy học cao quý", "Nghề y tế chăm sóc sức khỏe", "Nghề nông dân một nắng hai sương", "Nghề chú công an, bộ đội"],
      sampleLessons: [
        { title: "Bé tìm hiểu công việc của Bác sĩ và Y tá", domain: "nhan_thuc", age: "mau_giao_nho" },
        { title: "Bé tập làm Chú bộ đội tý hon diễu hành", domain: "the_chat", age: "mau_giao_lon" },
        { title: "Hát bài: Cháu yêu cô chú công nhân", domain: "tham_my", age: "mau_giao_be" }
      ]
    },
    {
      id: "nuoc_hien_tuong",
      name: "Nước & Hiện tượng Tự nhiên",
      icon: "💧",
      branches: ["Nước ngọt quý giá và nguồn nước", "Thời tiết 4 mùa (Mùa hè, Mùa mưa...)", "Ngày và đêm, Mặt trời và Mặt trăng", "Bảo vệ nguồn nước sạch"],
      sampleLessons: [
        { title: "Thí nghiệm khoa học: Vật chìm - vật nổi trong nước", domain: "nhan_thuc", age: "mau_giao_lon" },
        { title: "Khám phá: Nước có ích lợi gì với bé và cây cối?", domain: "nhan_thuc", age: "mau_giao_nho" },
        { title: "Bài thơ: Mưa rơi tí tách", domain: "ngon_ngu", age: "mau_giao_be" }
      ]
    },
    {
      id: "que_huong_bac_ho",
      name: "Quê hương - Đất nước - Bác Hồ",
      icon: "🇻🇳",
      branches: ["Quê hương Phúc Sơn tươi đẹp", "Thủ đô Hà Nội ngàn năm văn hiến", "Bác Hồ kính yêu với thiếu nhi", "Các danh lam thắng cảnh Việt Nam"],
      sampleLessons: [
        { title: "Bé tìm hiểu về Bác Hồ và hoa sen ngát hương", domain: "nhan_thuc", age: "mau_giao_lon" },
        { title: "Hát múa: Nhớ ơn Bác Hồ", domain: "tham_my", age: "mau_giao_lon" },
        { title: "Bé vẽ lá cờ đỏ sao vàng Tổ quốc", domain: "tham_my", age: "mau_giao_nho" }
      ]
    },
    {
      id: "le_hoi_su_kien",
      name: "Lễ hội & Tết Cổ truyền",
      icon: "🏮",
      branches: ["Tết Trung thu rộn rã", "Ngày hội Nhà giáo Việt Nam 20/11", "Tết Nguyên Đán cổ truyền", "Ngày Quốc tế Thiếu nhi 1/6"],
      sampleLessons: [
        { title: "Trải nghiệm: Bé cùng cô nặn bánh trôi nước", domain: "tham_my", age: "mau_giao_lon" },
        { title: "Làm bưu thiếp rực rỡ tặng cô giáo nhân ngày 20/11", domain: "tham_my", age: "mau_giao_nho" }
      ]
    }
  ],

  // 4. KHO GIÁO ÁN MẪU HOÀN CHỈNH 5 BƯỚC THEO CHUẨN THÔNG TƯ 51/2020/TT-BGDĐT
  lessonTemplates: {
    "ga_vit": {
      topicId: "dong_vat",
      topicName: "Thế giới Động vật",
      branchName: "Vật nuôi trong gia đình",
      domainId: "nhan_thuc",
      domainName: "Phát triển Nhận thức - Khám phá Khoa học",
      title: "Tìm hiểu và phân biệt Bạn Gà trống và Bạn Vịt bầu",
      ageId: "mau_giao_nho",
      ageName: "Mẫu giáo nhỡ (4 - 5 tuổi)",
      duration: "25 - 30 phút",
      teacher: "Cô giáo Trường MN Phúc Sơn B",
      
      // I. MỤC TIÊU (3 PHẦN CHUẨN)
      objectives: {
        knowledge: [
          "Trẻ gọi đúng tên, phân biệt được đặc điểm nổi bật của Gà trống (mào đỏ, mỏ nhọn, chân có cựa, gáy ò ó o) và Vịt bầu (mỏ dẹt, chân có màng, bơi dưới nước, kêu cạp cạp).",
          "Trẻ hiểu được thức ăn quen thuộc và môi trường sống của gà, vịt (gà sống trên cạn, vịt vừa sống trên cạn vừa bơi lội giỏi dưới nước).",
          "Trẻ biết gà và vịt đều là những vật nuôi có ích, đẻ trứng và cung cấp thịt bổ dưỡng cho con người."
        ],
        skills: [
          "Rèn kỹ năng quan sát, so sánh và phát hiện điểm giống - khác nhau rõ rệt giữa hai đối tượng.",
          "Phát triển ngôn ngữ mạch lạc, nói tròn câu, mô tả rõ nét đặc điểm của con vật.",
          "Rèn phản xạ nhanh nhẹn, tinh mắt khi tham gia các trò chơi củng cố bài học."
        ],
        attitudes: [
          "Trẻ hào hứng, tích cực tham gia các hoạt động học tập và trải nghiệm cùng cô và các bạn.",
          "Giáo dục trẻ tình yêu thương, biết quý trọng và chăm sóc, cho các con vật nuôi ăn uống, không trêu chọc hay ném đồ vào con vật."
        ]
      },

      // II. CHUẨN BỊ (CÔ & TRẺ)
      preparation: {
        teacher: [
          "Giáo án điện tử KID-LESSON AI trình chiếu trên màn hình Smart TV sắc nét.",
          "Bộ thẻ Flashcard số hình ảnh động gà trống vỗ cánh gáy và đàn vịt bơi dưới ao.",
          "Mô hình chuồng gà và hồ nước mini trong lớp.",
          "Nhạc các bài hát thiếu nhi: 'Đàn gà con', 'Một con vịt', 'Đàn gà trong sân'."
        ],
        students: [
          "Mỗi trẻ 1 rổ đựng lô tô hình gà trống và vịt bầu.",
          "Mũ múa gà trống, mũ múa vịt bầu đủ cho cả lớp.",
          "Trang phục gọn gàng, tâm thế vui tươi, sẵn sàng học tập."
        ]
      },

      // III. TIẾN TRÌNH HOẠT ĐỘNG (3 BƯỚC SƯ PHẠM LÔI CUỐN)
      steps: [
        {
          stepNumber: "1",
          stepName: "Bước 1: Ổn định tổ chức & Gây hứng thú (3 - 5 phút)",
          activities: [
            {
              speaker: "Cô giáo",
              content: "Xúm xít, xúm xít! Hôm nay lớp chúng mình có hai người bạn vô cùng đặc biệt từ nông trang Phúc Sơn đến thăm. Để biết bạn là ai, cô mời các con cùng lắng nghe câu đố này nhé:\n'Con gì mào đỏ gáy vang,\nSớm mai báo thức rộn ràng xóm thôn?'\nĐó là ai các con nhỉ?"
            },
            {
              speaker: "Trẻ trả lời",
              content: "Dạ thưa cô, là chú Gà trống ạ!"
            },
            {
              speaker: "Cô giáo",
              content: "Đúng rồi! Cả lớp cùng bắt chước tiếng gáy vang của chú gà trống nào: Ò... ó... o...! Còn người bạn thứ hai thì sao? Các con hãy lắng nghe tiếng kêu này: 'Cạp... cạp... cạp!'. Đố các con là ai nào?\nĐó chính là bạn Vịt bầu trắng muốt! Hôm nay cô con mình sẽ cùng nhau khám phá xem bạn Gà trống và bạn Vịt bầu có điều gì thú vị và khác nhau nhé!"
            }
          ]
        },
        {
          stepNumber: "2",
          stepName: "Bước 2: Phương pháp & Hình thức tổ chức (18 - 22 phút) - NỘI DUNG TRỌNG TÂM",
          activities: [
            {
              speaker: "1. Quan sát và đàm thoại về bạn Gà trống",
              content: "- Cô trình chiếu hình ảnh chú Gà trống oai vệ trên màn hình.\n- Cô đàm thoại gợi mở:\n  + Các con nhìn xem chú gà trống có những bộ phận nào? (Đầu, mình, đuôi, 2 chân).\n  + Trên đầu gà có gì nổi bật? (Mào đỏ chót hình vương miện, chiếc mỏ nhọn hoắt).\n  + Chiếc mỏ nhọn giúp gà làm gì? (Mổ thóc, mổ sâu bọ).\n  + Chân gà có đặc điểm gì? (Chân có móng sắc nhọn, có cựa để bới đất tìm giun).\n  + Bộ lông của chú gà trông như thế nào? (Nhiều màu sắc sặc sỡ, đuôi cong vút kiêu hãnh)."
            },
            {
              speaker: "2. Quan sát và đàm thoại về bạn Vịt bầu",
              content: "- Cô trình chiếu video chú Vịt bầu đang tung tăng bơi lội dưới làn nước mát.\n- Cô dẫn dắt đàm thoại:\n  + Bạn Vịt bầu có mỏ như thế nào các con? (Mỏ bẹt, dẹt, màu vàng cam).\n  + Đố các con biết vì sao bạn vịt lại bơi giỏi dưới nước mà bạn gà lại không bơi được? (Nhờ chân vịt có lớp màng da nối giữa các ngón, hoạt động như mái chèo).\n  + Bộ lông của bạn vịt có gì đặc biệt? (Lông vịt có lớp dầu trơn mượt, không bị thấm nước, giúp vịt nổi bồng bềnh)."
            },
            {
              speaker: "3. So sánh: Điểm giống nhau và khác nhau giữa Gà và Vịt",
              content: "★ GIỐNG NHAU:\n- Đều là động vật nuôi trong gia đình (thuộc nhóm gia cầm).\n- Đều có 2 chân, 2 cánh, có mỏ, đẻ trứng và được con người chăm sóc.\n\n★ KHÁC NHAU:\n- Gà: Mỏ nhọn, chân có móng sắc không có màng, kiếm ăn trên cạn, không biết bơi.\n- Vịt: Mỏ dẹt, chân có màng bơi, kiếm mồi cả trên cạn và lặn ngụp bắt cá tôm dưới nước giỏi."
            },
            {
              speaker: "4. Trò chơi củng cố 1: 'Ai nhanh mắt - Ai chọn đúng'",
              content: "- Cách chơi: Cô nói đặc điểm (hoặc phát ra tiếng kêu), trẻ phải tìm thật nhanh lô tô con vật đó giơ lên cao và đọc to tên con vật.\n- Ví dụ: Cô hô 'Chân có màng bơi!' -> Trẻ giơ lô tô 'Bạn Vịt bầu!'."
            },
            {
              speaker: "5. Trò chơi củng cố 2: 'Về đúng ngôi nhà thân yêu'",
              content: "- Cô chia lớp làm 2 đội: Đội Gà con và Đội Vịt con đội mũ múa tương ứng.\n- Cô chuẩn bị 2 bến đỗ: 1 góc 'Chuồng gà trên cạn' và 1 góc 'Ao nước trong xanh'.\n- Trẻ vừa đi vừa hát theo điệu nhạc. Khi có hiệu lệnh 'Trời tối rồi, mau về nhà thôi!', các chú gà phải chạy nhanh về chuồng trên cạn, các chú vịt phải bơi về ao nước. Ai về nhầm nhà sẽ phải làm động tác nhảy lò cò."
            }
          ]
        },
        {
          stepNumber: "3",
          stepName: "Bước 3: Kết thúc hoạt động & Giáo dục (2 - 3 phút)",
          activities: [
            {
              speaker: "Cô nhận xét & Tuyên dương",
              content: "- Cô nhận xét giờ học, khen ngợi tinh thần hăng hái phát biểu và sự đoàn kết của các con trong trò chơi.\n- Giáo dục thái độ: Nhắc nhở các con khi về nhà hãy cùng bố mẹ cho đàn gà, đàn vịt ăn thóc, uống nước sạch, biết yêu quý và bảo vệ loài vật.\n- Cả lớp cùng hát vang bài hát 'Đàn gà trong sân' và nhẹ nhàng nối đuôi nhau ra sân dạo chơi."
            }
          ]
        }
      ]
    },

    "cam_chuoi": {
      topicId: "thuc_vat",
      topicName: "Thế giới Thực vật",
      branchName: "Các loại quả ngon quanh bé",
      domainId: "nhan_thuc",
      domainName: "Phát triển Nhận thức - Nhận biết tập nói",
      title: "Nhận biết - Tập nói: Quả cam tròn xoe & Quả chuối chín vàng",
      ageId: "nha_tre",
      ageName: "Nhà trẻ (24 - 36 tháng)",
      duration: "15 - 20 phút",
      teacher: "Cô giáo Trường MN Phúc Sơn B",
      objectives: {
        knowledge: [
          "Trẻ nhận biết và gọi đúng tên 'Quả cam' và 'Quả chuối'.",
          "Trẻ nhận biết màu sắc (cam màu xanh/cam; chuối màu vàng khi chín) và hình dáng (cam tròn xoe, chuối dài cong cong).",
          "Trẻ biết trước khi ăn phải rửa tay, bóc vỏ bỏ vào thùng rác."
        ],
        skills: [
          "Rèn phát âm rõ ràng từ: 'Quả cam', 'Quả chuối', 'Tròn xoe', 'Màu vàng'.",
          "Phát triển xúc giác và vị giác khi sờ vỏ quả và nếm vị ngọt thanh."
        ],
        attitudes: [
          "Trẻ thích thú ăn hoa quả tươi để cơ thể cao lớn, khỏe mạnh, da dẻ hồng hào."
        ]
      },
      preparation: {
        teacher: ["Quả cam và quả chuối thật đã rửa sạch", "Mô hình cây ăn quả", "Đĩa hoa quả cắt sẵn cho trẻ nếm thử"],
        students: ["Tâm lý thoải mái, tay sạch sẽ."]
      },
      steps: [
        {
          stepNumber: "1",
          stepName: "Bước 1: Ổn định & Gây hứng thú",
          activities: [
            { speaker: "Cô giáo", content: "Cô mở 'Chiếc hộp kỳ diệu', cho trẻ đưa tay sờ và đoán xem trong hộp có món quà gì thơm nức!" }
          ]
        },
        {
          stepNumber: "2",
          stepName: "Bước 2: Quan sát, nhận biết, tập nói và trải nghiệm vị giác",
          activities: [
            { speaker: "Khám phá Quả Cam", content: "Cô cho trẻ sờ vỏ quả cam ram ráp, ngửi mùi tinh dầu thơm, lăn quả cam tròn xoe trên bàn." },
            { speaker: "Khám phá Quả Chuối", content: "Cô hướng dẫn trẻ nhận xét quả chuối có dáng cong cong như vầng trăng khuyết, vỏ nhẵn mịn, khi bóc ra có ruột thơm ngọt." },
            { speaker: "Bé nếm thử trái cây", content: "Cô cho từng trẻ nếm thử 1 miếng chuối ngọt lịm và 1 múi cam mọng nước chua chua ngọt ngọt." }
          ]
        },
        {
          stepNumber: "3",
          stepName: "Bước 3: Kết thúc & Dặn dò",
          activities: [
            { speaker: "Giáo dục dinh dưỡng", content: "Cô dặn bé chăm ăn hoa quả mỗi ngày để có đôi mắt sáng ngời và không bị ốm đau." }
          ]
        }
      ]
    },

    "chua_chay": {
      topicId: "nghe_nghiep",
      topicName: "Nghề nghiệp Quanh Bé",
      branchName: "Nghề cứu hỏa dũng cảm",
      domainId: "nhan_thuc",
      domainName: "Phát triển Nhận thức - Khám phá Khoa học",
      title: "Bé tìm hiểu về Chú Cứu hỏa dũng cảm và Kỹ năng thoát hiểm",
      ageId: "mau_giao_lon",
      ageName: "Mẫu giáo lớn (5 - 6 tuổi)",
      duration: "30 - 35 phút",
      teacher: "Cô giáo Trường MN Phúc Sơn B",
      objectives: {
        knowledge: [
          "Trẻ biết trang phục đặc trưng của lính cứu hỏa (bộ đồ chống cháy, mũ bảo hiểm có kính, ủng cao su).",
          "Trẻ biết xe chữa cháy màu đỏ, có còi hú ưu tiên 'Inh ỏi inh ỏi' và vòi phun nước áp lực cao.",
          "Trẻ ghi nhớ số điện thoại khẩn cấp 114 khi có đám cháy."
        ],
        skills: [
          "Thực hành kỹ năng thoát hiểm: Lấy khăn ướt bịt mũi miệng, cúi thấp người men theo chân tường chạy ra cửa thoát hiểm an toàn."
        ],
        attitudes: [
          "Kính trọng, biết ơn những chiến sĩ cứu hỏa dũng cảm; cẩn thận không nghịch lửa, bật lửa hay ổ cắm điện."
        ]
      },
      preparation: {
        teacher: ["Slide AI hình ảnh chú cứu hỏa", "Mô hình xe cứu hỏa", "Khăn xô ẩm cho cả lớp thực hành thoát hiểm"],
        students: ["Trang phục năng động."]
      },
      steps: [
        {
          stepNumber: "1",
          stepName: "Bước 1: Tiếng còi xe ưu tiên vang dội",
          activities: [
            { speaker: "Cô giáo", content: "Cô bật đoạn âm thanh còi cứu hỏa 'Inh ỏi... inh ỏi!'. Đố các con đó là tiếng còi của chiếc xe gì đang chạy vội vã?" }
          ]
        },
        {
          stepNumber: "2",
          stepName: "Bước 2: Tìm hiểu công việc và Diễn tập thoát hiểm",
          activities: [
            { speaker: "Tìm hiểu chú cứu hỏa", content: "Khám phá trang phục chống nhiệt, bình dưỡng khí, thang cứu nạn trên xe." },
            { speaker: "Học số khẩn cấp 114", content: "Bé cùng nhau hô to: 1 - 1 - 4 Cứu hỏa kịp thời!" },
            { speaker: "Thực hành thoát hiểm khi có khói", content: "Cô tạo tình huống giả định khói mù mịt. Hướng dẫn từng bạn thấm ướt khăn, bịt chặt mũi miệng, cúi sát sàn nhà bò men theo đường viền tường ra cửa an toàn." }
          ]
        },
        {
          stepNumber: "3",
          stepName: "Bước 3: Tuyên dương bé can đảm",
          activities: [
            { speaker: "Cô giáo", content: "Cô trao huy hiệu 'Chiến sĩ nhí an toàn' cho các bé hoàn thành xuất sắc bài diễn tập." }
          ]
        }
      ]
    }
  },


  // 4b. KẾ HOẠCH GIÁO DỤC TUẦN MẪU (5 NGÀY - 5 HOẠT ĐỘNG CHUẨN ĐỒNG TÂM / PHÚC SƠN)
  sampleWeeklyPlan: {
    weekTitle: "Kế hoạch giáo dục tuần: Bé làm quen với hoa thơm và côn trùng",
    weekRange: "26/01/2026 - 30/01/2026",
    topic: "Thế giới Động vật - Các loài côn trùng và hoa mùa xuân",
    ageId: "mau_giao_be",
    ageName: "Mẫu giáo bé (3 - 4 tuổi)",
    days: {
      mon: {
        dayId: "mon",
        dayOfWeek: "Thứ Hai",
        date: "26/01/2026",
        weekRange: "26/01/2026 - 30/01/2026",
        topic: "Thế giới Động vật - Các loài côn trùng và hoa mùa xuân",
        activityType: "am_nhac",
        activityTypeName: "Hoạt động Âm nhạc",
        title: "Nghe hát: 'Hoa thơm bướm lượn' (Dân ca quan họ Bắc Ninh) - NDKH: TCÂN: 'Ai nhanh nhất'",
        activityCol: "- Hoạt động Âm nhạc:\n- NDTT: NH: Hoa thơm, bướm lượn\n+ NDKH: TCÂN: Ai nhanh nhất",
        subValues: { ndtt: "NH: Hoa thơm, bướm lượn", ndkh: "TCÂN: Ai nhanh nhất" },
        objectives: {
          knowledge: [
            "Trẻ biết tên bài hát, cảm nhận được giai điệu bài hát 'Hoa thơm bướm lượn'.",
            "Biết cách chơi của trò chơi 'Ai nhanh nhất'."
          ],
          skills: [
            "Phát triển tai nghe âm nhạc cho trẻ.",
            "Rèn cho trẻ sự tự tin khi lắng nghe cô hát, cảm nhận giai điệu bài hát.",
            "Có kỹ năng chơi thành thạo trò chơi."
          ],
          attitudes: [
            "Giáo dục trẻ biết yêu quý, chăm sóc và bảo vệ các loài hoa.",
            "Trẻ hứng thú khi nghe cô hát và hưởng ứng cùng cô."
          ]
        },
        preparation: {
          teacher: [
            "Đàn nhạc bài hát 'Hoa thơm bướm lượn', nhạc trò chơi.",
            "Trang phục hát, múa."
          ],
          students: [
            "Ghế hoặc vòng tròn để chơi trò chơi.",
            "Tâm thế vui tươi, sẵn sàng học hát."
          ]
        },
        procedure: {
          intro: `1. Ổn định tổ chức:
- Cho cả lớp xem cành hoa cúc
- Trò chuyện:
  + Cô đố các con cô cầm gì đây?
  + Hoa đào thường có vào mùa nào?
  + Cô giới thiệu bài hát: Hôm nay cô sẽ tặng cho các con bài hát “Hoa thơm, bướm lượn”, các con có thích không?`,
          instruction: `2. Phương pháp, hình thức tổ chức:
2.1. Nghe hát: "Hoa thơm bướm lượn" Dân ca quan họ Bắc Ninh
- Cô hát lần 1: cô hát thể hiện giai điệu vui tươi của bài hát.
- Cô giới thiệu tên bài hát, tên tác giả.
- Cô hát lần 2: cô hát và minh họa theo lời ca bài hát.
  + Đàm thoại về nội dung bài hát: Bằng cách đọc chậm rõ lời bài hát.
- Cô hát lần 3: mời cô phụ tham gia hát.
- Cô hát lần 4: cho trẻ nghe ca sĩ hát.

2.3. Trò chơi âm nhạc: Ai nhanh nhất
- Cách chơi:
  + Xếp chỗ: Xếp ghế hoặc vòng tròn thành một vòng tròn trên sàn.
  + Bắt đầu: Người quản trò bật nhạc. Người chơi đi vòng quanh ghế/vòng tròn theo nhạc.
  + Hiệu lệnh: Khi nhạc dừng đột ngột, hoặc có hiệu lệnh "Tìm ghế!" / "Về vòng!" từ quản trò, người chơi phải nhanh chân nhảy vào một chiếc ghế/vòng tròn. Người quản trò có thể điều chỉnh nhạc: hát chậm/nhỏ thì đi chậm, hát nhanh/to thì đi nhanh để tăng độ khó.
- Luật chơi: Bạn nào không tìm được ghế/vòng thì thua cuộc và phải nhảy lò cò (hoặc làm theo hình phạt khác). Bỏ bớt một ghế/vòng và chơi tiếp cho đến khi còn người chiến thắng.`,
          conclusion: `3. Kết thúc:
- Cho trẻ vỗ tay và dạo chơi cùng cô trên nền nhạc bài “Hoa thơm, bướm lượn”.
- Chuyển hoạt động.`
        },
        assessment: "",
        adjustment: ""
      },
      tue: {
        dayId: "tue",
        dayOfWeek: "Thứ Ba",
        date: "27/01/2026",
        weekRange: "26/01/2026 - 30/01/2026",
        topic: "Thế giới Động vật - Các loài côn trùng và hoa mùa xuân",
        activityType: "nhan_biet",
        activityTypeName: "Hoạt động Nhận biết",
        title: "Ôn nhận biết hình tròn, hình vuông (Ứng dụng Trợ giảng AI)",
        activityCol: "- Hoạt động Nhận biết:\n- Ôn nhận biết hình tròn, hình vuông",
        subValues: { sub_nhan_biet: "Ôn nhận biết hình tròn, hình vuông" },
        objectives: {
          knowledge: [
            "Trẻ nhận biết và gọi đúng tên hình tròn, hình vuông thông qua trò chơi.",
            "Trẻ biết cách chơi một số trò chơi cùng bạn và cô."
          ],
          skills: [
            "Trẻ có kỹ năng nhận biết được hình tròn và hình vuông qua các dấu hiệu đặc trưng.",
            "Củng cố kỹ năng về màu sắc: Màu xanh, màu đỏ, màu vàng.",
            "Phát triển kỹ năng quan sát, ghi nhớ có chủ định.",
            "Trẻ có kỹ năng chơi trò chơi tương tác theo yêu cầu của cô."
          ],
          attitudes: [
            "Trẻ hứng thú tham gia hoạt động cùng Chị AI thông thái.",
            "Đoàn kết với bạn khi chơi."
          ]
        },
        preparation: {
          teacher: [
            "Máy tính, ti vi thông minh Smart TV.",
            "Giáo án điện tử KID-LESSON AI.",
            "2 Hộp quà bí ẩn, 2 rổ hình tròn, hình vuông.",
            "Video sử dụng AI: 'Hình học vui nhộn' & Trợ giảng AI 'Chị AI thông thái'.",
            "2 đường hẹp; Quần áo trang phục tự thiết kế cho cô (Anh hình vuông, Chị hình tròn)."
          ],
          students: [
            "Mỗi trẻ 1 hình vuông, 1 hình tròn.",
            "2 rổ hình tròn, hình vuông."
          ]
        },
        procedure: {
          intro: `1. Ổn định tổ chức: (1- 2 phút)
- Cô xin chào các bé đến với chương trình “Bé tài năng” ngày hôm nay.
- Đến dự chương trình bé tài năng ngày hôm nay với chúng mình còn có rất nhiều các cô giáo về dự, các con khoanh tay đẹp để chào các cô nào.
- Để mở đầu cho chương trình ngay sau đây chúng ta sẽ vui mừng chào đón những vị khách vô cùng đặc biệt xin mời các con hãy nổ 1 tràng pháo tay thật lớn để chào đón những vị khách đặc biệt của chúng ta ngày hôm nay.
- Cô mở nhạc nền vui nhộn, cô số 2, cô số 3 đi ra trình diễn thời trang đóng vai anh hình vuông, chị hình tròn ra biểu diễn và giới thiệu anh vuông, chị tròn xin chào tất cả các em.`,
          instruction: `2. Phương pháp, hình thức tổ chức (12 phút)
2.1. Ôn nhận biết hình tròn - hình vuông:
- Cô 2 và cô 3 đi ra đọc Rap:
  + Anh hình vuông: 'Anh là anh vuông / Bốn cạnh bằng nhau / Bốn góc vuông vắn / Anh không lăn được.'
  + Chị hình tròn: 'Còn đây chị đẹp / Chính là chị tròn / Chị lăn lăn lăn / Tròn xoe như ông mặt trời.'
- Chúng mình cùng chào anh vuông và chị tròn nào.
  + Các em ơi! Thế chúng mình nhìn xem anh vuông và chị tròn có trang phục đẹp không?
  + Trang phục của chị tròn trang trí bằng hình gì nhỉ? (Hình tròn màu đỏ).
  + Trang phục của anh vuông được trang trí bằng hình gì? (Hình vuông màu vàng).
- Cô khái quát lại: Trên trang phục của anh vuông và chị tròn đều trang trí bằng hình vuông, hình tròn rực rỡ. Nổ một tràng pháo tay chúc mừng nào!

2.2. Trò chơi ôn luyện:
* Trò chơi 1: “Hộp quà bí ẩn”
- Cách chơi: Cô chia làm 2 đội, mỗi đội có 2 giỏ hình vuông và hình tròn. Nhiệm vụ từng bạn đi qua đường hẹp, lấy búa đập vào ô hộp quà bí ẩn, lấy hình giơ lên và đọc to tên hình. Lấy được hình vuông để vào rổ hình vuông, lấy được hình tròn để vào rổ hình tròn. Trò chơi diễn ra trong 1 bản nhạc.
- Kiểm tra kết quả và tuyên dương trẻ.

* Trò chơi 2: “Hình học vui nhộn” (Tương tác cùng Chị AI thông thái)
- Cách chơi: Chia làm 3 nhóm, thảo luận trả lời các câu hỏi và làm theo yêu cầu của Chị AI thông thái trên màn hình.
- Chị AI tương tác: Có những bản nhạc và hình học vui nhộn.
  + Chị AI đố: 'Hình tròn xuất hiện trên màn hình, đố các bé đây là hình gì? Bé hãy chọn hình và giơ lên nào?'.
  + Trẻ chọn và giơ hình tròn, Chị AI phát âm: 'Chính xác đây là hình tròn, xin chúc mừng các bé!'.
  + Chị AI đố tiếp hình vuông, sau đó xuất hiện câu hỏi tư duy: Hình tam giác màu xanh xuất hiện, và hình nào vừa biến mất? Trẻ quan sát tinh mắt và nói đúng tên hình biến mất.

* Trò chơi 3: “Bé khéo tay”
- Cách chơi: Anh vuông và chị tròn trở lại sân khấu nhờ các bé trang trí trang phục lộng lẫy: Áo anh vuông gắn hình vuông, áo chị tròn gắn hình tròn trong 1 bản nhạc.
- Cô và trẻ cùng kiểm tra kết quả, khen ngợi 2 đội.`,
          conclusion: `3. Kết thúc: (1 phút)
- Hôm nay CM được chơi với hình vuông, hình tròn CM có thích không? Có vui không?
- Mời các bé cùng bước lên sân khấu để cùng anh vuông, chị tròn biểu diễn thời trang cùng bộ trang phục mà các con vừa trang trí nhé.
- Các con khoanh tay chào tạm biệt các cô.`
        },
        assessment: "",
        adjustment: ""
      },
      wed: {
        dayId: "wed",
        dayOfWeek: "Thứ Tư",
        date: "28/01/2026",
        weekRange: "26/01/2026 - 30/01/2026",
        topic: "Thế giới Động vật - Các loài côn trùng và hoa mùa xuân",
        activityType: "tao_hinh",
        activityTypeName: "Hoạt động Tạo hình",
        title: "In màu trang trí cánh bướm",
        activityCol: "- Hoạt động Tạo hình:\n- In màu trang trí cánh bướm",
        subValues: { sub_tao_hinh: "In màu trang trí cánh bướm" },
        objectives: {
          knowledge: [
            "Trẻ nhận biết các màu xanh, vàng, đỏ của khuy áo, của các hình tròn.",
            "Trẻ nhận biết con bướm có nhiều màu sắc, cánh to, có râu."
          ],
          skills: [
            "Ôn nhận biết màu xanh, màu vàng, màu đỏ.",
            "Rèn trẻ kỹ năng chấm hồ, chấm màu khéo léo.",
            "Trẻ biết chấm màu và dán đúng hình tròn màu xanh dán vào vệt chấm màu xanh, hình tròn màu đỏ dán vào vệt chấm màu đỏ, hình tròn màu vàng dán vào vệt chấm màu vàng.",
            "Trẻ biết trang trí thêm chi tiết cho con bướm sinh động."
          ],
          attitudes: [
            "Giáo dục trẻ chú ý, hứng thú trong giờ học.",
            "Giáo dục trẻ biết yêu quý động vật có ích (bướm thụ phấn cho hoa)."
          ]
        },
        preparation: {
          teacher: [
            "Tranh 1: Con bướm trang trí hình tròn màu xanh, vàng, đỏ làm bằng chất liệu khuy áo.",
            "Tranh 2: Con bướm trang trí hình tròn bằng chất liệu xốp dạ.",
            "Tranh 3: Con bướm trang trí hình tròn bằng chấm màu nước.",
            "1 video quay cô làm mẫu trang trí con bướm bằng chấm màu xanh, vàng, đỏ."
          ],
          students: [
            "Khay đựng hình tròn màu vàng, màu xanh, màu đỏ (làm bằng vải, giấy màu, khuy áo).",
            "Khay đựng màu nước; Rau củ tỉa hình tròn chấm màu, bông tăm, khăn lau tay, hồ dán.",
            "Mỗi trẻ một tranh con bướm có vệt chấm màu vàng, xanh, đỏ.",
            "Giá trưng bày sản phẩm của trẻ."
          ]
        },
        procedure: {
          intro: `1. Ổn định tổ chức:
- Cô và trẻ cùng hát và vận động bài “Con bướm vàng”.
- Xem đoạn video về con bướm: Con gì đây? Con bướm đang làm gì? Bay ở đâu? Bướm màu gì?
- Giáo dục: Bướm là con vật có ích, biết thụ phấn cho hoa giúp hoa thêm nhiều màu sắc. Vì vậy các con không bắt bướm và biết yêu quý bảo vệ chúng.
- Giới thiệu bài: Hôm nay cô và các con sẽ cùng trang trí con bướm cho thật đẹp và nhiều màu sắc nhé!`,
          instruction: `2. Phương pháp và hình thức tổ chức:
* Quan sát tranh mẫu:
- Tranh 1: Con bướm trang trí khuy áo xanh, vàng, đỏ.
- Tranh 2: Con bướm trang trí bằng xốp dạ.
- Tranh 3: Con bướm trang trí bằng chấm màu nước.
- Đàm thoại gợi mở với trẻ về chất liệu và màu sắc rực rỡ.

* Cô làm mẫu:
- Cho trẻ xem video cô làm mẫu bằng chấm màu nước.
- Cô làm mẫu trực tiếp: Bức tranh cô đã dán sẵn một bên cánh. Bây giờ cô dùng tăm bông chấm hồ vào các vệt chấm màu, chọn đúng hình tròn cùng màu dán vào. Mời 1 trẻ lên dán thử cùng cô.
- Cho trẻ nhắc lại cách làm.

* Hỏi ý tưởng của trẻ:
- Con muốn trang trí con bướm ra sao? Con dán như thế nào? (Hỏi 3 - 5 trẻ).

* Trẻ thực hiện:
- Trẻ về chỗ thực hiện, cô bật nhạc bài 'Con bướm vàng'.
- Cô đi bao quát, hướng dẫn trẻ cầm tăm bông chấm màu, dán đúng vị trí màu sắc. Gợi ý trẻ trang trí thêm họa tiết hoa lá.

* Nhận xét sản phẩm:
- Trẻ mang tranh lên giá trưng bày chung.
- Mời trẻ nhận xét bài của mình và bài của bạn: Con dán được con gì? Bạn dán bằng cách gì? Bức tranh có giống mẫu cô không?
- Cô nhận xét bài của trẻ và khen ngợi sự sáng tạo của cả lớp.`,
          conclusion: `3. Kết thúc:
- Cho trẻ hát bài “Gọi bướm” và nhẹ nhàng đi ra ngoài dạo chơi.`
        },
        assessment: "",
        adjustment: ""
      },
      thu: {
        dayId: "thu",
        dayOfWeek: "Thứ Năm",
        date: "29/01/2026",
        weekRange: "26/01/2026 - 30/01/2026",
        topic: "Thế giới Động vật - Các loài côn trùng và hoa mùa xuân",
        activityType: "van_hoc",
        activityTypeName: "Hoạt động Làm quen văn học",
        title: "Thơ: 'Ong và bướm' (Tác giả: Nhược Thủy)",
        activityCol: "- Hoạt động Làm quen văn học:\n- Thơ/truyện: Thơ: Ong và bướm (Nhược Thủy)",
        subValues: { sub_van_hoc: "Thơ: Ong và bướm (Nhược Thủy)" },
        objectives: {
          knowledge: [
            "Trẻ biết tên bài thơ: 'Ong và bướm'.",
            "Trẻ biết tên các nhân vật trong bài thơ: Bạn Bướm trắng, Bạn Ong nâu.",
            "Trẻ hiểu nội dung bài thơ: Bài thơ nói về bạn Ong và bạn Bướm. Bạn Bướm trắng rất đẹp nhưng hay rong chơi lười biếng. Bạn Ong rất chăm chỉ, chịu khó và luôn nghe lời mẹ dặn 'Việc chưa xong / Đi chơi rong / Mẹ không thích'."
          ],
          skills: [
            "Trẻ đọc được bài thơ 'Ong và bướm' với sự giúp đỡ của cô.",
            "Trẻ trả lời được các câu hỏi đàm thoại của cô rõ ràng, đủ câu.",
            "Trẻ thể hiện tình cảm, điệu bộ cử chỉ khi đọc thơ."
          ],
          attitudes: [
            "Trẻ hứng thú tham gia vào hoạt động học thơ.",
            "Giáo dục trẻ học tập bạn Ong: Biết vâng lời ông bà, bố mẹ, chăm chỉ làm việc tốt."
          ]
        },
        preparation: {
          teacher: [
            "Giáo án điện tử, máy tính, ti vi.",
            "Powerpoint, video clip hoạt hình nội dung bài thơ 'Ong và bướm'.",
            "Mô hình sân khấu khung rối que Ong và Bướm.",
            "Nhạc bài hát: 'Chị ong nâu và em bé', 'Ong và bướm'."
          ],
          students: [
            "Trang phục gọn gàng, trẻ ngồi ghế hình chữ U.",
            "Mỗi đội 1 rổ đựng hình con ong, con bướm.",
            "2 mô hình vườn hoa nhỏ xinh (màu vàng và màu đỏ).",
            "Mũ múa ong và bướm đủ cho cả lớp."
          ]
        },
        procedure: {
          intro: `1. Ổn định tổ chức:
- Cô giới thiệu khách đến thăm lớp.
- Trẻ khởi động theo lời bài hát “Ong và Bướm”.
- Trò chuyện: Vừa rồi các con hát bài hát gì? Bài hát có nhắc đến bạn gì?
- Giới thiệu bài thơ: Hôm nay cô sẽ dạy cả lớp mình bài thơ rất hay: “Ong và bướm” do nhà thơ Nhược Thủy sáng tác.`,
          instruction: `2. Phương pháp và hình thức tổ chức:
* Cô đọc thơ cho trẻ nghe:
- Lần 1: Cô đọc diễn cảm thể hiện sự vui tươi, hồn nhiên. Hỏi trẻ tên bài thơ, tác giả.
- Lần 2: Cô đọc thơ trên mô hình khung rối sinh động.

* Đàm thoại trích dẫn nội dung bài thơ:
- Trong bài thơ có nhắc đến những con vật nào?
- Bạn bướm trắng đi chơi ở đâu và gặp ai? Trích: 'Con bướm trắng / Lượn vườn hồng / Gặp con ong / Đang bay vội'. (Giải thích từ 'Bay vội': Bay nhanh, khẩn trương).
- Nhìn thấy Ong, Bướm đã rủ Ong đi đâu? Trích: 'Bướm liền gọi / Rủ đi chơi'.
- Bạn Ong trả lời thế nào? Trích: 'Ong trả lời: / Tôi còn bận'. (Giải thích từ 'Bận': Còn công việc chưa làm xong).
- Mẹ bạn Ong đã dặn điều gì? Trích: 'Mẹ tôi dặn: / Việc chưa xong / Đi chơi rong / Mẹ không thích'.
- Giáo dục: Bạn Ong chăm chỉ biết vâng lời mẹ, bạn Bướm mải chơi. Các con học tập bạn Ong chăm chỉ làm việc giúp đỡ bố mẹ và luôn vâng lời người lớn.
- Lần 3: Cô cho trẻ đọc thơ theo đoạn video hoạt hình trên màn hình.

* Dạy trẻ đọc thơ:
- Cho cả lớp đọc thơ 2 - 3 lần.
- Chia lớp thành 2 tổ: Tổ Ong Vàng và Tổ Bươm Bướm thi đua nhau đọc thơ (cô chú ý sửa sai phát âm).
- Mời 2 - 3 nhóm trẻ lên đọc thể hiện bằng cử chỉ điệu bộ.
- Mời cá nhân trẻ lên đọc diễn cảm.
- Cả lớp đọc lại bài thơ một lần nữa. Tuyên dương động viên trẻ.

* Trò chơi: “Ai nhanh nhất”
- Cách chơi: Chia lớp làm 2 đội (Đội Ong Vàng và Đội Bươm Bướm). Mỗi đội có 1 rổ đựng ong và bướm. Nhiệm vụ các bé là cầm chú ong và bướm cắm đúng vào vườn hoa tương ứng của đội mình trong thời gian 1 bản nhạc. Đội nào cắm nhanh hơn sẽ thắng cuộc.`,
          conclusion: `3. Kết thúc:
- Động viên, khuyến khích sự tự tin của trẻ.
- Nhẹ nhàng chuyển sang hoạt động tiếp theo.`
        },
        assessment: "",
        adjustment: ""
      },
      fri: {
        dayId: "fri",
        dayOfWeek: "Thứ Sáu",
        date: "30/01/2026",
        weekRange: "26/01/2026 - 30/01/2026",
        topic: "Thế giới Động vật - Các loài côn trùng và hoa mùa xuân",
        activityType: "van_dong",
        activityTypeName: "Hoạt động Phát triển giáo dục",
        title: "VĐCB: Ném và bắt bóng bằng 2 tay - TCVĐ: Kéo co",
        activityCol: "- Hoạt động Phát triển giáo dục:\n- Phát triển cơ bản: VĐCB: Ném và bắt bóng bằng 2 tay\n+ Trò chơi vận động: TCVĐ: Kéo co",
        subValues: { sub_ptcb: "VĐCB: Ném và bắt bóng bằng 2 tay", sub_tcvd: "TCVĐ: Kéo co" },
        objectives: {
          knowledge: [
            "Trẻ nhớ tên vận động, biết dùng sức của đôi tay ném và bắt bóng bằng hai tay, không làm rơi bóng xuống đất.",
            "Trẻ hiểu luật và biết cách chơi trò chơi: Kéo co."
          ],
          skills: [
            "Rèn kỹ năng ném đúng hướng, kỹ năng phản ứng nhanh nhẹn, khéo léo.",
            "Trẻ biết phối hợp tay mắt nhịp nhàng để bắt bóng chuẩn xác.",
            "Có kỹ năng phối hợp đồng đội khi chơi trò chơi."
          ],
          attitudes: [
            "Trẻ yêu thích luyện tập thể dục, tinh thần sảng khoái, năng động.",
            "Hứng thú và tích cực tham gia hoạt động vận động cùng bạn bè."
          ]
        },
        preparation: {
          teacher: [
            "Sân tập rộng rãi, sạch sẽ, an toàn bằng phẳng.",
            "10 - 20 quả bóng nhỏ, rổ đựng bóng.",
            "Dây thừng bền chắc có dải lụa đỏ để chơi kéo co.",
            "Nhạc bài: 'Mời anh lên tàu lửa', 'Kìa con bướm vàng', nhạc chơi trò chơi sôi động."
          ],
          students: [
            "Trang phục thể thao gọn gàng, giày dép thuận tiện.",
            "Sức khỏe tốt, tâm thế vui vẻ, sẵn sàng."
          ]
        },
        procedure: {
          intro: `1. Ổn định tổ chức:
- Cô cùng trẻ nói chuyện về thời tiết trong ngày, kiểm tra sĩ số, trang phục và sức khỏe của trẻ. Nhắc nhở trẻ bỏ giày dép ngay ngắn đúng nơi quy định.
- Trò chuyện với trẻ về cách luyện tập thể thao để tăng cường sức khỏe của bé và gia đình.`,
          instruction: `2. Phương pháp, hình thức tổ chức:
a. Khởi động:
- Cho trẻ đi theo đội hình vòng tròn vừa đi vừa hát bài “Mời anh lên tàu lửa” kết hợp các kiểu đi: Đi thường, đi bằng mũi bàn chân, đi bằng gót chân, chạy chậm, chạy nhanh, đi thường. Chuyển đội hình về 3 hàng ngang.

b. Trọng động:
* Bài tập phát triển chung (BTPTC) - Kết hợp nhạc:
- Động tác hô hấp: 2 tay để lên trước miệng hít vào thật sâu và thở ra từ từ (2 lần 2 nhịp).
- Động tác tay: Ở tư thế chuẩn bị, 2 tay đưa ngang trước mặt (2 lần 2 nhịp).
- Động tác chân: Ở tư thế chuẩn bị, cúi người cầm bóng đưa lên trước mặt (4 lần 2 nhịp).
- Động tác bật: 2 tay cầm bóng nhảy tại chỗ (2 lần 2 nhịp).

* Vận động cơ bản (VĐCB): “Ném và bắt bóng bằng 2 tay”
- Cho trẻ điểm số và tách thành 2 hàng đối diện nhau.
- Hỏi trẻ: Từ những quả bóng này chúng ta có thể thực hiện được vận động gì? Mời 2 trẻ lên thử sức.
- Cô làm mẫu lần 1: Không giải thích, thao tác chuẩn xác.
- Cô làm mẫu lần 2 + Phân tích: Cô đứng đối diện bạn, cách nhau khoảng 1m. Cô cầm bóng bằng 2 tay đưa ngang ngực rồi ném cho người đứng đối diện mình. Người đối diện tập trung bắt bóng bằng hai tay và ném ngược lại.
- Trẻ thực hành:
  + Lần 1: Cho lần lượt mỗi tổ 1 bạn lên thực hiện với nhau đến hết lớp (khoảng cách 1m).
  + Lần 2: Cô tăng độ khó: Nâng khoảng cách giữa 2 bạn đứng đối diện nhau hơn 1m (2 lần).
- Củng cố: Hỏi lại tên vận động, mời 2 trẻ thực hiện lại 1 lần nữa.

* Trò chơi vận động: Kéo co
- Cô giới thiệu tên trò chơi, cho trẻ nhắc lại luật và cách chơi.
- Cho trẻ thi đấu kéo co 2 lần. Cô nhận xét, tuyên dương tinh thần quyết tâm và sự đoàn kết của 2 đội.

c. Hồi tĩnh:
- Cho trẻ vừa đi vừa vẫy tay nhẹ nhàng 1 - 2 vòng sân trên nền nhạc êm dịu, thả lỏng toàn thân.`,
          conclusion: `3. Kết thúc:
- Cô nhận xét buổi tập, khen ngợi sự tích cực của cả lớp.
- Cho trẻ cùng cô thu dọn đồ dùng, bóng và dây thừng gọn gàng.`
        },
        assessment: "",
        adjustment: ""
      }
    }
  },

  // 5. KHO THƠ VÀ CÂU ĐỐ MẦM NON SÁNG TÁC THEO CHỦ ĐỀ
  poemsAndRiddles: {
    "dong_vat": {
      poem: {
        title: "BẠN GÀ BẠN VỊT",
        author: "KID-LESSON AI sáng tác",
        genre: "Thơ 4 chữ mầm non",
        content: `Sáng sớm tinh mơ
Gà gáy ó o
Đánh thức bản nhỏ
Bé ơi dậy mau!

Bạn Vịt lạch bạch
Mỏ dẹt màu vàng
Chân mang đôi màng
Bơi hồ tung tăng.

Gà bới đất tìm
Được chú giun béo
Vịt lặn bắt cá
Vẫy đuôi reo mừng.

Đôi bạn thân thiết
Cùng ở bên nhau
Chăm ngoan mau lớn
Cho đời thêm vui!`
      },
      riddles: [
        {
          question: "Con gì mào đỏ tươi xinh,\nSớm mai cất tiếng gọi bình minh lên?",
          answer: "Chú Gà trống",
          hint: "Có tiếng gáy: Ò... ó... o!"
        },
        {
          question: "Con gì chân có đôi màng,\nMỏ dẹt màu vàng, bơi lội dưới ao?",
          answer: "Bạn Vịt bầu",
          hint: "Có tiếng kêu: Cạp... cạp... cạp!"
        },
        {
          question: "Bốn chân bốn cẳng thon thon,\nĐêm nằm canh cổng, sủa dồn 'Gâu gâu'?",
          answer: "Chú Chó con thân thiện",
          hint: "Là người bạn trung thành giữ nhà cho bé."
        }
      ],
      puppetScript: {
        title: "CHUYỆN Ở NÔNG TRẠI PHÚC SƠN",
        characters: "Rối que Gà Trống Vàng và Rối que Vịt Bầu Trắng",
        duration: "3 phút",
        script: `(Âm nhạc rộn rã nổi lên, Gà Trống nhảy ra vỗ hai cánh bành bạch)
- Gà Trống: Ó ó o! Chào các bạn nhỏ Trường Mầm non Phúc Sơn B! Tớ là Gà Trống Vàng đây! Nhìn chiếc mào đỏ như vương miện trên đầu tớ có oai phong không nào?
(Vịt Bầu lạch bạch bơi ra bên cạnh)
- Vịt Bầu: Cạp cạp cạp! Chào anh Gà Trống, chào các bé ngoan! Anh Gà Trống ơi, hôm nay trời nắng đẹp quá, anh có muốn xuống ao bơi thi cùng em không?
- Gà Trống: Ấy chết, không được đâu Vịt Bầu ơi! Chân anh không có màng như chân em, anh mà nhảy xuống nước là ướt sũng bộ lông đẹp và bị chìm đấy! Anh chỉ thích ở trên bờ bới đất tìm giun cho các bé ăn thôi!
- Vịt Bầu: À ra thế! Vậy em sẽ bơi dưới ao bắt tôm tép, còn anh ở trên bãi cỏ nhé! Chúng mình cùng cố gắng giúp ích cho bác nông dân nhé!`
      }
    },

    "thuc_vat": {
      poem: {
        title: "HẠT MẦM BÉ XINH",
        author: "KID-LESSON AI sáng tác",
        genre: "Thơ 5 chữ",
        content: `Nằm ngoan trong lòng đất
Hạt mầm bé ngủ say
Bỗng một ngày mưa tưới
Đánh thức mầm tỉnh ngay.

Mầm xòe hai lá nhỏ
Đón ánh nắng ban mai
Gió thì thầm khe khẽ:
"Bé mầm lớn lên này!"

Ngày ngày cô chăm bón
Tưới từng giọt mát lành
Hạt mầm thành cây lớn
Cho hoa quả trĩu cành.`
      },
      riddles: [
        {
          question: "Quả gì tròn xoe màu cam,\nMúi nhiều mọng nước, nhiều vitamin C?",
          answer: "Quả Cam tươi mát",
          hint: "Mẹ hay vắt nước cho bé uống khi mệt."
        },
        {
          question: "Quả gì cong cong vầng trăng,\nKhi chín vàng ruộm, bóc ăn ngọt lịm?",
          answer: "Quả Chuối chín",
          hint: "Món ăn yêu thích của bạn Khỉ tinh nghịch."
        }
      ],
      puppetScript: {
        title: "GIỌT NƯỚC VÀ HẠT MẦM",
        characters: "Rối Giọt Nước Xanh và Rối Hạt Mầm Nâu",
        duration: "3 phút",
        script: `(Hạt Mầm cuộn tròn nằm im)
- Hạt Mầm: Ôi tối quá, tối quá! Mình nằm ở đây buồn ngủ quá đi mất thôi...
(Giọt Nước nhảy nhót tung tăng rưới nhẹ lên Hạt Mầm)
- Giọt Nước: Tí tách, tí tách! Hạt Mầm ơi dậy đi nào! Tớ đem giọt mát của mùa xuân đến cho cậu đây!
- Hạt Mầm (vươn vai bật dậy): Oa... Mát quá, dễ chịu quá! Cảm ơn Giọt Nước nhé! Tớ thấy mình đang vươn lên đón nắng hồng đây!`
      }
    },

    "ban_than": {
      poem: {
        title: "ĐÔI BÀN TAY BÉ",
        author: "KID-LESSON AI sáng tác",
        genre: "Thơ 4 chữ",
        content: `Đôi bàn tay bé
Mười ngón xinh xinh
Biết cầm thìa ăn
Biết cài cúc áo.

Tay cầm bút vẽ
Ngôi nhà của em
Tay cầm đồ chơi
Xếp hình khéo léo.

Trước khi ăn bánh
Sau khi đi chơi
Bé nhớ rửa tay
Xà phòng thơm ngát!`
      },
      riddles: [
        {
          question: "Cái gì hai mắt sáng ngời,\nGiúp bé nhìn thấy đất trời bao la?",
          answer: "Đôi mắt của bé",
          hint: "Được ví như hai vì sao nhỏ trên khuôn mặt."
        },
        {
          question: "Cái gì nhô nhọn ở giữa,\nNgửi hoa ngát hương, hít thở mỗi ngày?",
          answer: "Cái mũi nhỏ xinh",
          hint: "Nằm ngay giữa khuôn mặt đáng yêu."
        }
      ],
      puppetScript: {
        title: "BÉ GẤU HỌC RỬA TAY",
        characters: "Rối Bé Gấu và Bác Sĩ Cú Vèo",
        duration: "3 phút",
        script: `(Bé Gấu nhảy chân sáo, tay dính đầy đất cát bẩn)
- Bé Gấu: A đói bụng quá, có đĩa bánh mật thơm lừng mẹ để trên bàn, ăn thôi!
(Bác Sĩ Cú bay ra ngăn lại)
- Bác Sĩ Cú: Dừng lại ngay Gấu con ơi! Nhìn đôi bàn tay cậu kìa, đen nhẻm toàn vi khuẩn xấu xí đấy! Nếu không rửa tay mà cầm đồ ăn, vi khuẩn sẽ chui vào bụng làm cậu bị đau bụng quằn quại đấy!
- Bé Gấu: Ôi sợ quá, sợ quá! Cháu phải làm sao bây giờ ạ?
- Bác Sĩ Cú: Hãy cùng cô giáo và các bạn Trường MN Phúc Sơn B rửa tay 6 bước với xà phòng thật sạch nhé!`
      }
    }
  },

  // 6. DANH MỤC THẺ FLASHCARD SỐ THEO CHỦ ĐỀ
  flashcards: {
    "dong_vat": [
      {
        id: "fc_ga_trong",
        nameVi: "Chú Gà Trống",
        nameEn: "Rooster",
        desc: "Mào đỏ tươi, đuôi cong vút, cất tiếng gáy vang báo thức buổi sáng.",
        icon: "🐓",
        soundText: "Gà trống, gáy ò ó o"
      },
      {
        id: "fc_vit_bau",
        nameVi: "Bạn Vịt Bầu",
        nameEn: "Duck",
        desc: "Mỏ dẹt màu vàng, chân có màng bơi tung tăng dưới làn nước mát.",
        icon: "🦆",
        soundText: "Vịt bầu, bơi dưới nước, kêu cạp cạp"
      },
      {
        id: "fc_meo_con",
        nameVi: "Mèo Con Ngoan",
        nameEn: "Cat / Kitten",
        desc: "Bộ lông mềm mại, mắt tròn xoe, bắt chuột tài ba trong góc nhà.",
        icon: "🐱",
        soundText: "Mèo con, kêu meo meo"
      },
      {
        id: "fc_cho_cung",
        nameVi: "Cún Con Dễ Thương",
        nameEn: "Dog / Puppy",
        desc: "Thính tai vẫy đuôi, canh giữ ngôi nhà an toàn cho bé suốt ngày đêm.",
        icon: "🐶",
        soundText: "Chú chó, sủa gâu gâu trung thành"
      },
      {
        id: "fc_trau_vang",
        nameVi: "Chú Trâu Nông Thôn",
        nameEn: "Water Buffalo",
        desc: "Sừng cong vút, chăm chỉ giúp bác nông dân cày ruộng phì nhiêu.",
        icon: "🐃",
        soundText: "Con trâu, bạn của nhà nông"
      },
      {
        id: "fc_chim_sau",
        nameVi: "Chim Sâu Nhỏ",
        nameEn: "Bird",
        desc: "Cất cánh chuyền cành, hót líu lo bắt sâu bảo vệ cây xanh.",
        icon: "🐦",
        soundText: "Con chim, hót líu lo trên cành"
      }
    ],

    "thuc_vat": [
      {
        id: "fc_qua_cam",
        nameVi: "Quả Cam Tươi",
        nameEn: "Orange",
        desc: "Vỏ nhẵn mọng nước, nhiều vitamin C giúp bé khỏe mạnh hồng hào.",
        icon: "🍊",
        soundText: "Quả cam tròn xoe, thơm ngon ngọt lành"
      },
      {
        id: "fc_qua_chuoi",
        nameVi: "Quả Chuối Chín",
        nameEn: "Banana",
        desc: "Cong cong trăng khuyết, vỏ vàng ruộm, ruột thơm lừng mềm ngọt.",
        icon: "🍌",
        soundText: "Quả chuối chín vàng, bổ dưỡng"
      },
      {
        id: "fc_bap_cai",
        nameVi: "Rau Bắp Cải",
        nameEn: "Cabbage",
        desc: "Bẹ cuộn tròn xoe lớp lớp, nhiều chất xơ giúp tiêu hóa tốt.",
        icon: "🥬",
        soundText: "Bắp cải xanh tươi giòn mát"
      },
      {
        id: "fc_hoa_hong",
        nameVi: "Bông Hoa Hồng",
        nameEn: "Rose",
        desc: "Cánh hoa đỏ thắm xếp từng tầng, tỏa hương thơm ngát sân trường.",
        icon: "🌹",
        soundText: "Hoa hồng đỏ thắm ngát hương thơm"
      }
    ]
  },

  // 7. CÂU HỎI TRÒ CHƠI TƯƠNG TÁC LỚP HỌC (MINI-GAMES)
  quizGames: [
    {
      id: "q1",
      topic: "Động vật",
      question: "Bạn nhỏ nào có màng chân bơi lội tung tăng dưới ao nước?",
      options: [
        { text: "Chú Gà Trống", icon: "🐓", isCorrect: false },
        { text: "Bạn Vịt Bầu", icon: "🦆", isCorrect: true },
        { text: "Bạn Mèo Mướp", icon: "🐱", isCorrect: false }
      ],
      feedback: "Chính xác rồi! Chân bạn Vịt có màng da nối giữa các ngón như mái chèo đấy!"
    },
    {
      id: "q2",
      topic: "Động vật",
      question: "Buổi sáng sớm, con vật nào thường cất tiếng gáy vang 'Ò... ó... o' báo thức cả nhà dậy?",
      options: [
        { text: "Chú Gà Trống", icon: "🐓", isCorrect: true },
        { text: "Chú Chó Vàng", icon: "🐶", isCorrect: false },
        { text: "Chú Cá Vàng", icon: "🐟", isCorrect: false }
      ],
      feedback: "Hoan hô bé! Chú Gà Trống với chiếc mào đỏ tươi gáy rất vang buổi sáng!"
    },
    {
      id: "q3",
      topic: "Thực vật",
      question: "Quả nào sau đây có hình dáng cong cong như vầng trăng khuyết?",
      options: [
        { text: "Quả Cam tròn", icon: "🍊", isCorrect: false },
        { text: "Quả Dưa hấu", icon: "🍉", isCorrect: false },
        { text: "Quả Chuối chín", icon: "🍌", isCorrect: true }
      ],
      feedback: "Đúng rồi! Quả chuối chín cong cong như chiếc thuyền con trăng khuyết!"
    },
    {
      id: "q4",
      topic: "Bản thân",
      question: "Trước khi ngồi vào bàn ăn cơm, bé cần làm gì để bảo vệ sức khỏe?",
      options: [
        { text: "Rửa tay sạch bằng xà phòng", icon: "🧼", isCorrect: true },
        { text: "Chạy nhảy nghịch đất cát", icon: "🏃", isCorrect: false },
        { text: "Lấy tay quệt lên quần áo", icon: "👕", isCorrect: false }
      ],
      feedback: "Bé rất giỏi! Rửa tay 6 bước sạch khuẩn giúp bụng bé không bao giờ bị đau!"
    }
  ]
};

// Export to window
if (typeof window !== "undefined") {
  window.PRE_SCHOOL_DATA = PRE_SCHOOL_DATA;
}
