/**
 * KID-LESSON AI - HYBRID DUAL-ENGINE AI SYSTEM
 * - Engine 1: Offline Preschool Rule & Template Engine (100% offline, 0ms, 0đ)
 * - Engine 2: Google Gemini Generative AI (Online Cloud LLM)
 * Bám sát Chương trình GDMN - Thông tư 51/2020/TT-BGDĐT
 */

class KidLessonAIEngine {
  constructor() {
    this.apiKey = localStorage.getItem("kid_lesson_gemini_api_key") || "";
    this.modelName = localStorage.getItem("kid_lesson_model_name") || "gemini-2.5-flash";
    this.preferCloudAI = localStorage.getItem("kid_lesson_prefer_cloud") === "true";
  }

  setApiKey(key) {
    this.apiKey = (key || "").trim();
    localStorage.setItem("kid_lesson_gemini_api_key", this.apiKey);
  }

  setModelName(model) {
    this.modelName = model || "gemini-2.5-flash";
    localStorage.setItem("kid_lesson_model_name", this.modelName);
  }

  setPreferCloud(prefer) {
    this.preferCloudAI = !!prefer;
    localStorage.setItem("kid_lesson_prefer_cloud", this.preferCloudAI ? "true" : "false");
  }

  hasValidApiKey() {
    return !!(this.apiKey && this.apiKey.length > 20);
  }

  // Kiểm tra kết nối trực tiếp với Google Gemini API
  async testApiKey(customKey, modelName) {
    const key = (customKey || this.apiKey || "").trim();
    const model = modelName || this.modelName || "gemini-2.5-flash";

    if (!key) {
      return {
        success: false,
        errorType: "EMPTY",
        message: "Chưa nhập API Key. Hãy dán mã API Key của cô từ Google AI Studio (bắt đầu bằng AIzaSy...)."
      };
    }

    if (key.length < 20) {
      return {
        success: false,
        errorType: "TOO_SHORT",
        message: "API Key quá ngắn (chưa đủ 20 ký tự). Cô vui lòng kiểm tra lại xem có copy thiếu không nhé."
      };
    }

    if (!navigator.onLine) {
      return {
        success: false,
        errorType: "NO_NETWORK",
        message: "Máy tính đang mất kết nối Internet. Vui lòng kiểm tra lại mạng Wi-Fi."
      };
    }

    try {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;
      const payload = {
        contents: [
          {
            role: "user",
            parts: [{ text: "ping" }]
          }
        ],
        generationConfig: {
          maxOutputTokens: 5,
          temperature: 0.1
        }
      };

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 12000);

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (res.ok) {
        return {
          success: true,
          model: model,
          message: `Kết nối thành công! Google Gemini (${model}) hoạt động hoàn hảo.`
        };
      }

      const errText = await res.text();
      let friendlyError = `Mã lỗi ${res.status}`;
      try {
        const parsed = JSON.parse(errText);
        if (parsed.error && parsed.error.message) {
          friendlyError = parsed.error.message;
        }
      } catch (e) {
        friendlyError = errText.substring(0, 120);
      }

      if (friendlyError.includes("API_KEY_INVALID") || res.status === 400 || res.status === 403) {
        friendlyError = "API Key không chính xác hoặc chưa được kích hoạt. Cô hãy kiểm tra lại mã Key từ Google AI Studio (aistudio.google.com).";
      } else if (res.status === 429) {
        friendlyError = "Đã chạm giới hạn tần suất miễn phí (Quota limit). Vui lòng đợi 1 phút rồi thử lại.";
      }

      return {
        success: false,
        errorType: "API_ERROR",
        status: res.status,
        message: friendlyError
      };
    } catch (err) {
      const isTimeout = err.name === "AbortError";
      return {
        success: false,
        errorType: isTimeout ? "TIMEOUT" : "NETWORK_ERROR",
        message: isTimeout 
          ? "Hết thời gian chờ kết nối (12 giây). Đường truyền mạng đến Google AI bị chậm."
          : `Lỗi mạng khi gọi Google API: ${err.message}`
      };
    }
  }

  // ==========================================
  // ==========================================
  // PHÂN HỆ 1: TẠO KẾ HOẠCH BÀI DẠY (BẢNG 4 CỘT CHUẨN GDMN)
  // ==========================================
  async generateLessonPlan({ topic, customTopic, activityType, dayOfWeek, date, weekRange, ageId, lessonTitle, teacherName, schoolName }) {
    const data = window.PRE_SCHOOL_DATA;
    const actualTopic = (customTopic || topic || "Thế giới Động vật - Các loài côn trùng và hoa mùa xuân").trim();
    const actualActivityType = activityType || "am_nhac";
    const actObj = data.activityTypes.find(a => a.id === actualActivityType) || data.activityTypes[0];
    const ageObj = data.ageGroups.find(a => a.id === ageId) || data.ageGroups[1];
    const actualLessonTitle = (lessonTitle || "").trim() || `${actObj.name}: Khám phá ${actualTopic}`;
    const actualTeacher = (teacherName || "").trim() || (window.appState && window.appState.teacherName) || localStorage.getItem("kid_lesson_teacher_name") || "Cô giáo Nguyễn Thị Tiên";
    const actualSchool = (schoolName || "").trim() || (window.appState && window.appState.schoolName) || localStorage.getItem("kid_lesson_school_name") || "Trường Mầm non Phúc Sơn B";
    const actualDay = dayOfWeek || "Thứ Hai";
    const actualDate = date || "26/01/2026";
    const actualWeekRange = weekRange || "26/01/2026 - 30/01/2026";

    // 1. Thử gọi Cloud AI nếu có Key và kết nối mạng
    if (this.hasValidApiKey() && navigator.onLine) {
      try {
        const cloudResult = await this.callGeminiForLessonPlan({
          topicName: actualTopic,
          activityTypeName: actObj.name,
          activityType: actualActivityType,
          dayOfWeek: actualDay,
          date: actualDate,
          weekRange: actualWeekRange,
          ageName: ageObj.name,
          duration: ageObj.duration,
          lessonTitle: actualLessonTitle,
          teacherName: actualTeacher,
          schoolName: actualSchool
        });
        if (cloudResult && cloudResult.title) {
          cloudResult.engineUsed = "Gemini Cloud AI (" + this.modelName + ")";
          cloudResult.isOffline = false;
          cloudResult.teacher = actualTeacher;
          cloudResult.school = actualSchool;
          return cloudResult;
        }
      } catch (err) {
        console.warn("[KID-LESSON AI] Lỗi gọi Gemini, tự động chuyển về Offline Engine:", err);
      }
    }

    // 2. Chạy Offline Heuristic Rule Engine (Fallback an toàn tuyệt đối)
    return this.generateOfflineLessonPlan({
      topic: actualTopic,
      activityType: actualActivityType,
      actObj,
      dayOfWeek: actualDay,
      date: actualDate,
      weekRange: actualWeekRange,
      ageObj,
      lessonTitle: actualLessonTitle,
      teacherName: actualTeacher,
      schoolName: actualSchool
    });
  }

  // Offline Engine sinh Kế hoạch bài dạy theo bảng 4 cột chuẩn
  generateOfflineLessonPlan({ topic, activityType, actObj, dayOfWeek, date, weekRange, ageObj, lessonTitle, teacherName, schoolName }) {
    const data = window.PRE_SCHOOL_DATA;
    const lowerTitle = (lessonTitle || "").toLowerCase().trim();
    const actualActObj = actObj || (data.activityTypes.find(a => a.id === activityType) || { name: "Hoạt động Giáo dục" });
    const actualTeacher = (teacherName || "").trim() || (window.appState && window.appState.teacherName) || localStorage.getItem("kid_lesson_teacher_name") || "Cô giáo Nguyễn Thị Tiên";
    const actualSchool = (schoolName || "").trim() || (window.appState && window.appState.schoolName) || localStorage.getItem("kid_lesson_school_name") || "Trường Mầm non Phúc Sơn B";

    // 1. Kiểm tra trong bộ Kế hoạch tuần mẫu (5 ngày vàng chuẩn của trường)
    if (data.sampleWeeklyPlan && data.sampleWeeklyPlan.days) {
      const days = data.sampleWeeklyPlan.days;
      let matchedDay = null;

      if (activityType === "am_nhac" && (lowerTitle.includes("hoa thơm") || lowerTitle.includes("bướm lượn") || !lowerTitle || lowerTitle.includes("mẫu chuẩn"))) {
        matchedDay = days.mon;
      } else if (activityType === "nhan_biet" && (lowerTitle.includes("hình tròn") || lowerTitle.includes("hình vuông") || !lowerTitle || lowerTitle.includes("mẫu chuẩn"))) {
        matchedDay = days.tue;
      } else if (activityType === "tao_hinh" && (lowerTitle.includes("cánh bướm") || lowerTitle.includes("in màu") || !lowerTitle || lowerTitle.includes("mẫu chuẩn"))) {
        matchedDay = days.wed;
      } else if (activityType === "van_hoc" && (lowerTitle.includes("ong và bướm") || lowerTitle.includes("nhược thủy") || !lowerTitle || lowerTitle.includes("mẫu chuẩn"))) {
        matchedDay = days.thu;
      } else if (activityType === "van_dong" && (lowerTitle.includes("bóng") || lowerTitle.includes("kéo co") || !lowerTitle || lowerTitle.includes("mẫu chuẩn"))) {
        matchedDay = days.fri;
      }

      if (matchedDay) {
        const tpl = JSON.parse(JSON.stringify(matchedDay));
        tpl.teacher = actualTeacher;
        tpl.school = actualSchool;
        tpl.dayOfWeek = dayOfWeek;
        tpl.date = date;
        tpl.weekRange = weekRange;
        tpl.ageId = ageObj.id;
        tpl.ageName = ageObj.name;
        tpl.duration = ageObj.duration;
        tpl.topic = topic;
        tpl.engineUsed = "Offline Sư Phạm Heuristic Engine (0đ)";
        tpl.isOffline = true;
        if (lessonTitle && !lessonTitle.includes("Mẫu Chuẩn")) {
          tpl.title = lessonTitle;
        }
        return tpl;
      }
    }

    // 2. KHO BÀI DẠY MẪU THEO CÁC GỢI Ý TIÊU BIỂU (PRESET CHIPS)
    // 2.1. ÂM NHẠC
    if (activityType === "am_nhac") {
      if (lowerTitle.includes("con bướm vàng")) {
        return {
          title: "Dạy hát: 'Con bướm vàng' - NDKH: Nghe hát: 'Bướm hoa'",
          topic, topicName: topic, dayOfWeek, date, weekRange, activityType,
          activityTypeName: actualActObj.name, ageId: ageObj.id, ageName: ageObj.name, duration: ageObj.duration, teacher: teacherName,
          activityCol: `- Âm nhạc:\n- NDTT: DH: Con bướm vàng\n+ NDKH: NH: Bướm hoa`,
          objectives: {
            knowledge: [
              "Trẻ biết tên bài hát 'Con bướm vàng', cảm nhận giai điệu vui tươi, nhí nhảnh.",
              "Trẻ chú ý lắng nghe cô hát bài 'Bướm hoa' và cảm nhận được sự mềm mại, tha thướt của giai điệu dân ca."
            ],
            skills: [
              "Rèn kỹ năng hát đúng giai điệu, lời ca, phát âm rõ ràng từng tiếng.",
              "Trẻ biết vận động vỗ tay theo nhịp hoặc làm động tác bướm bay nhịp nhàng cùng cô."
            ],
            attitudes: [
              "Trẻ yêu thích ca hát, hứng thú tham gia các trò chơi âm nhạc.",
              "Giáo dục trẻ tình yêu thiên nhiên, biết bảo vệ các loài hoa và côn trùng có ích."
            ]
          },
          preparation: {
            teacher: ["Đàn organ ghi âm bài 'Con bướm vàng', 'Bướm hoa'.", "Mũ múa bướm vàng xinh xắn, hoa cài tay."],
            students: ["Ghế ngồi chữ U, mũ múa con bướm cho từng trẻ.", "Tâm thế vui vẻ, sẵn sàng biểu diễn."]
          },
          procedure: {
            intro: `1. Ổn định tổ chức:\n- Cô cùng trẻ chơi trò chơi 'Bướm bay tìm hoa' trong vườn lớp học.\n- Trò chuyện dẫn dắt: Các con vừa làm những chú bướm màu gì? Hôm nay cô sẽ dạy các con một bài hát rất hay về chú bướm vàng đáng yêu nhé!`,
            instruction: `2. Phương pháp, hình thức tổ chức:\n2.1. Dạy hát: "Con bướm vàng"\n- Cô hát lần 1: Thể hiện giai điệu tươi vui, ánh mắt nụ cười rạng rỡ.\n- Giới thiệu nội dung bài hát: Bài hát kể về chú bướm vàng lượn quanh cánh hoa hồng rất đẹp.\n- Cô hát lần 2: Kết hợp làm điệu bộ bướm chao lượn.\n- Dạy trẻ hát: Cả lớp hát cùng cô 2 - 3 lần; từng tổ thi đua; nhóm bạn trai, bạn gái hát; mời cá nhân trẻ thể hiện.\n\n2.2. Nghe hát: "Bướm hoa"\n- Cô hát lần 1 diễn cảm, êm dịu.\n- Cô hát lần 2: Mời các bé đứng lên làm những chú bướm bay dạo chơi cùng cô theo điệu nhạc.\n\n2.3. Trò chơi âm nhạc: "Ai nhanh nhất"\n- Trẻ nghe tiếng đàn, nhạc nhanh thì đi nhanh, nhạc dừng thì nhanh chân nhảy vào vòng kết bạn.`,
            conclusion: `3. Kết thúc:\n- Cô khen ngợi cả lớp hát hay, múa dẻo.\n- Cả lớp làm đàn bướm vẫy cánh nhẹ nhàng ra sân dạo chơi.`
          },
          assessment: "", adjustment: "", engineUsed: "Offline Sư Phạm Heuristic Engine (0đ)", isOffline: true, createdAt: new Date().toISOString()
        };
      }
      if (lowerTitle.includes("cây xanh")) {
        return {
          title: "Vận động múa: 'Em yêu cây xanh' - NDKH: TCÂN: 'Tai ai tinh'",
          topic, topicName: topic, dayOfWeek, date, weekRange, activityType,
          activityTypeName: actualActObj.name, ageId: ageObj.id, ageName: ageObj.name, duration: ageObj.duration, teacher: teacherName,
          activityCol: `- Âm nhạc:\n- NDTT: VĐM: Em yêu cây xanh\n+ NDKH: TCÂN: Tai ai tinh`,
          objectives: {
            knowledge: [
              "Trẻ nhớ tên bài hát 'Em yêu cây xanh' (Hoàng Văn Yến), thuộc lời và hiểu ý nghĩa bài hát trồng cây cho bóng mát.",
              "Trẻ biết múa nhịp nhàng các động tác xòe tay, nghiêng người mô phỏng tán cây."
            ],
            skills: [
              "Rèn kỹ năng múa mềm mại, kết hợp nhịp chân và tay theo lời ca.",
              "Phát triển tai nghe âm nhạc, đoán đúng âm thanh nhạc cụ trong trò chơi 'Tai ai tinh'."
            ],
            attitudes: [
              "Giáo dục trẻ yêu quý cây xanh, chăm chỉ tưới nước và không bẻ cành hái lá.",
              "Hào hứng tham gia biểu diễn văn nghệ."
            ]
          },
          preparation: {
            teacher: ["Đàn organ, loa kéo, đạo cụ lá cây xinh xắn, xắc xô, phách tre."],
            students: ["Trang phục gọn gàng, vòng nguyệt quế lá cây nhỏ xinh trên đầu."]
          },
          procedure: {
            intro: `1. Ổn định tổ chức:\n- Cô cho trẻ ngắm chậu cây xanh trong lớp và đàm thoại về lợi ích của cây tỏa bóng mát và cho hoa thơm trái ngọt.`,
            instruction: `2. Phương pháp, hình thức tổ chức:\n2.1. Vận động múa: "Em yêu cây xanh"\n- Cả lớp cùng hát lại bài hát 1 lần.\n- Cô làm mẫu lần 1 trọn vẹn, duyên dáng.\n- Cô làm mẫu lần 2 + phân tích động tác: 'Em rất thích trồng nhiều cây xanh' hai tay đưa lên cao như cành cây vươn đón nắng.\n- Cho trẻ thực hành: Cả lớp múa, các tổ thi đua, cặp bạn múa đôi.\n\n2.2. Trò chơi: "Tai ai tinh"\n- Một trẻ bịt mắt, lắng nghe cô gõ xắc xô hoặc đàn ở hướng nào và đoán tên nhạc cụ.`,
            conclusion: `3. Kết thúc:\n- Nhận xét tuyên dương các nghệ sĩ nhí.\n- Cả lớp cùng múa hát dạo quanh vườn cây sân trường.`
          },
          assessment: "", adjustment: "", engineUsed: "Offline Sư Phạm Heuristic Engine (0đ)", isOffline: true, createdAt: new Date().toISOString()
        };
      }
    }

    // 2.2. NHẬN BIẾT
    if (activityType === "nhan_biet") {
      if (lowerTitle.includes("màu đỏ") || lowerTitle.includes("màu vàng")) {
        return {
          title: "Nhận biết phân biệt: Màu đỏ - Màu vàng của hoa mùa xuân",
          topic, topicName: topic, dayOfWeek, date, weekRange, activityType,
          activityTypeName: actualActObj.name, ageId: ageObj.id, ageName: ageObj.name, duration: ageObj.duration, teacher: teacherName,
          activityCol: `- Hoạt động nhận biết:\n- Nhận biết phân biệt: Màu đỏ - Màu vàng`,
          objectives: {
            knowledge: [
              "Trẻ nhận biết và phân biệt chính xác màu đỏ và màu vàng của các bông hoa mùa xuân.",
              "Trẻ biết gọi đúng tên 'Bông hoa màu đỏ', 'Bông hoa màu vàng'."
            ],
            skills: [
              "Rèn kỹ năng quan sát, so sánh và chọn đúng đồ vật theo màu sắc yêu cầu.",
              "Phát triển ngôn ngữ mạch lạc, phát âm rõ ràng chuẩn tiếng Việt."
            ],
            attitudes: [
              "Trẻ hào hứng tham gia các trò chơi phân loại màu sắc cùng bạn.",
              "Giáo dục trẻ biết chăm sóc hoa tươi làm đẹp lớp học và ngôi nhà."
            ]
          },
          preparation: {
            teacher: ["Mô hình giỏ hoa mùa xuân gồm nhiều hoa màu đỏ và hoa màu vàng.", "Bảng gắn phân loại 2 màu."],
            students: ["Mỗi trẻ một rổ đựng 2 bông hoa: 1 hoa đỏ, 1 hoa vàng.", "2 lọ hoa màu đỏ và màu vàng để chơi cắm hoa."]
          },
          procedure: {
            intro: `1. Ổn định tổ chức:\n- Cô đọc câu đố về hoa mùa xuân và mở hộp quà bí mật xuất hiện những bông hoa rực rỡ.`,
            instruction: `2. Phương pháp, hình thức tổ chức:\n2.1. Nhận biết phân biệt màu đỏ - màu vàng:\n- Cô giơ bông hoa màu đỏ lên và hỏi: Đây là hoa màu gì các con? (Cả lớp, cá nhân phát âm 'Màu đỏ').\n- Cô giơ tiếp bông hoa màu vàng: Bông hoa này có màu gì? (Phát âm 'Màu vàng').\n- So sánh trực quan: Đặt hai bông hoa cạnh nhau để trẻ thấy rõ sự khác biệt rực rỡ.\n\n2.2. Trò chơi ôn luyện:\n* Trò chơi 1: 'Chọn hoa theo hiệu lệnh' - Cô hô 'Màu đỏ' trẻ giơ hoa đỏ, cô hô 'Màu vàng' trẻ giơ hoa vàng.\n* Trò chơi 2: 'Bé khéo tay cắm hoa đúng màu' - Trẻ cắm hoa đỏ vào lọ đỏ, hoa vàng vào lọ vàng.`,
            conclusion: `3. Kết thúc:\n- Kiểm tra kết quả bình hoa của các bé, khen ngợi và cùng hát bài 'Màu hoa'.`
          },
          assessment: "", adjustment: "", engineUsed: "Offline Sư Phạm Heuristic Engine (0đ)", isOffline: true, createdAt: new Date().toISOString()
        };
      }
      if (lowerTitle.includes("to") || lowerTitle.includes("nhỏ") || lowerTitle.includes("bưởi") || lowerTitle.includes("cam")) {
        return {
          title: "Nhận biết to - nhỏ: Quả bưởi to và Quả cam nhỏ",
          topic, topicName: topic, dayOfWeek, date, weekRange, activityType,
          activityTypeName: actualActObj.name, ageId: ageObj.id, ageName: ageObj.name, duration: ageObj.duration, teacher: teacherName,
          activityCol: `- Hoạt động nhận biết:\n- Nhận biết to - nhỏ: Quả bưởi to & Quả cam nhỏ`,
          objectives: {
            knowledge: [
              "Trẻ nhận biết và phân biệt được độ to - nhỏ giữa quả bưởi (to hơn) và quả cam (nhỏ hơn).",
              "Trẻ biết quả bưởi và quả cam đều là trái cây thơm ngon, giàu vitamin C bổ dưỡng."
            ],
            skills: [
              "Rèn kỹ năng so sánh kích thước bằng phương pháp đặt chồng/đặt cạnh đối tượng.",
              "Phát âm to, rõ ràng các từ chỉ kích thước: 'Quả bưởi to', 'Quả cam nhỏ'."
            ],
            attitudes: [
              "Trẻ yêu thích ăn hoa quả sạch, rửa tay trước khi ăn.",
              "Tích cực tham gia trò chơi phân loại quả."
            ]
          },
          preparation: {
            teacher: ["1 quả bưởi thật to, 1 quả cam thật nhỏ.", "Rổ to, rổ nhỏ; đĩa hoa quả cắt sẵn."],
            students: ["Lô tô hình quả bưởi và quả cam.", "Đĩa hoa quả trải nghiệm."]
          },
          procedure: {
            intro: `1. Ổn định tổ chức:\n- Cô cho trẻ sờ 'Túi thần kỳ' đoán xem có loại quả gì tròn tròn trơn trơn bên trong!`,
            instruction: `2. Phương pháp, hình thức tổ chức:\n2.1. Khám phá và so sánh to - nhỏ:\n- Cô lấy quả bưởi và quả cam đặt cạnh nhau.\n- Cô hỏi: Quả nào to hơn? Quả nào nhỏ hơn? (Cho trẻ đặt quả cam đằng trước quả bưởi: Vẫn nhìn thấy quả bưởi vì bưởi to hơn; đặt quả bưởi đằng trước quả cam: Không nhìn thấy cam vì cam nhỏ hơn bị che khuất).\n- Cho trẻ phát âm: 'Quả bưởi to hơn - Quả cam nhỏ hơn'.\n\n2.2. Trò chơi trải nghiệm:\n- Trò chơi 1: 'Ai tinh mắt' - Giơ nhanh quả to/quả nhỏ theo hiệu lệnh của cô.\n- Trò chơi 2: 'Bé đi siêu thị' - Chọn quả bưởi to để vào xe đẩy to, chọn quả cam nhỏ để vào giỏ nhỏ.`,
            conclusion: `3. Kết thúc:\n- Cho trẻ cùng cô nếm thử hương vị thơm ngọt của múi cam múi bưởi và vệ sinh tay sạch sẽ.`
          },
          assessment: "", adjustment: "", engineUsed: "Offline Sư Phạm Heuristic Engine (0đ)", isOffline: true, createdAt: new Date().toISOString()
        };
      }
    }

    // 2.3. TẠO HÌNH
    if (activityType === "tao_hinh") {
      if (lowerTitle.includes("vẽ") || lowerTitle.includes("hoa tươi")) {
        return {
          title: "Vẽ và tô màu những bông hoa tươi thắm tặng cô",
          topic, topicName: topic, dayOfWeek, date, weekRange, activityType,
          activityTypeName: actualActObj.name, ageId: ageObj.id, ageName: ageObj.name, duration: ageObj.duration, teacher: teacherName,
          activityCol: `- Hoạt động tạo hình:\n- Vẽ và tô màu những bông hoa tươi thắm`,
          objectives: {
            knowledge: [
              "Trẻ biết sử dụng các nét cong, nét tròn khép kín để vẽ cánh hoa, nét thẳng làm cành hoa và nét xiên làm lá.",
              "Trẻ biết phối màu sắc hài hòa để bức tranh hoa thêm rực rỡ."
            ],
            skills: [
              "Rèn kỹ năng cầm bút sáp bằng 3 đầu ngón tay, tư thế ngồi ngay ngắn không tì ngực vào bàn.",
              "Rèn kỹ năng tô màu mịn, đều tay và không chờm ra ngoài đường viền."
            ],
            attitudes: [
              "Trẻ say mê, hào hứng tạo ra sản phẩm đẹp bằng đôi tay của mình.",
              "Biết trân trọng sản phẩm tranh vẽ và có tình cảm biết ơn cô giáo."
            ]
          },
          preparation: {
            teacher: ["2 - 3 tranh mẫu vẽ hoa bằng sáp màu, màu nước; giá trưng bày tranh.", "Nhạc không lời du dương nhẹ nhàng."],
            students: ["Giấy vẽ A4 có khung viền hoa, hộp sáp màu 12 màu cho mỗi trẻ.", "Khăn lau tay ẩm."]
          },
          procedure: {
            intro: `1. Ổn định tổ chức:\n- Cô và trẻ cùng hát bài 'Hoa trường em'.\n- Trò chuyện: Lớp chúng mình sắp đến ngày hội của các cô giáo rồi, các con có muốn tự tay vẽ một vườn hoa thật đẹp để tặng các cô không nào?`,
            instruction: `2. Phương pháp, hình thức tổ chức:\n* Quan sát tranh mẫu:\n- Cô giới thiệu tranh mẫu vẽ hoa cúc vàng, hoa hồng đỏ.\n- Đàm thoại gợi mở: Nhị hoa vẽ bằng nét gì? Cánh hoa vẽ như thế nào? Màu sắc của hoa ra sao?\n\n* Cô vẽ mẫu và hướng dẫn kỹ năng:\n- Cô cầm bút bằng tay phải, dùng nét tròn làm nhị hoa, vẽ các nét cong tròn bao quanh làm cánh hoa, vẽ nét thẳng xuống làm cành hoa và thêm 2 chiếc lá xanh.\n- Cô tô màu nhị vàng, cánh đỏ tươi, lá xanh mướt.\n\n* Trẻ thực hiện:\n- Trẻ ngồi đúng tư thế, cô mở nhạc không lời.\n- Cô bao quát, đến từng bàn khích lệ và hướng dẫn những trẻ còn lúng túng.\n\n* Nhận xét sản phẩm:\n- Trẻ mang tranh lên giá trưng bày chung.\n- Mời trẻ chọn và khen bức tranh mình thích; cô tổng kết khen ngợi sự sáng tạo của cả lớp.`,
            conclusion: `3. Kết thúc:\n- Cả lớp khoanh tay dâng tặng những bức tranh hoa tuyệt đẹp cho cô giáo và cùng hát bài 'Bông hoa mừng cô'.`
          },
          assessment: "", adjustment: "", engineUsed: "Offline Sư Phạm Heuristic Engine (0đ)", isOffline: true, createdAt: new Date().toISOString()
        };
      }
      if (lowerTitle.includes("nặn") || lowerTitle.includes("sâu con")) {
        return {
          title: "Nặn chú sâu con ngộ nghĩnh từ đất nặn",
          topic, topicName: topic, dayOfWeek, date, weekRange, activityType,
          activityTypeName: actualActObj.name, ageId: ageObj.id, ageName: ageObj.name, duration: ageObj.duration, teacher: teacherName,
          activityCol: `- Hoạt động tạo hình:\n- Nặn chú sâu con ngộ nghĩnh`,
          objectives: {
            knowledge: [
              "Trẻ biết đặc điểm của chú sâu: Mình dài gồm nhiều đốt tròn nối liền nhau, có mắt và râu.",
              "Trẻ hiểu các thao tác nặn: Chia đất, xoay tròn, gắn đính các phần đất nặn."
            ],
            skills: [
              "Rèn luyện sự khéo léo của cơ bàn tay và các ngón tay qua kỹ năng xoay tròn, lăn dài và ấn dẹt.",
              "Biết phối màu đất nặn rực rỡ để chú sâu thêm ngộ nghĩnh."
            ],
            attitudes: [
              "Trẻ kiên nhẫn, hào hứng tham gia hoạt động nặn.",
              "Có ý thức giữ gìn vệ sinh, không bôi đất nặn ra bàn hay quần áo."
            ]
          },
          preparation: {
            teacher: ["Mô hình chú sâu mẫu nặn từ đất sét nhiều màu.", "Bảng nặn, khăn ẩm, đĩa lá cây xanh."],
            students: ["Đất nặn các màu sắc tươi sáng, bảng con, dao cắt đất an toàn cho trẻ."]
          },
          procedure: {
            intro: `1. Ổn định tổ chức:\n- Cô đọc câu đố vui về chú sâu con bò lổm ngổm trên lá cây xanh.`,
            instruction: `2. Phương pháp, hình thức tổ chức:\n* Quan sát vật mẫu:\n- Cho trẻ quan sát mô hình chú sâu mẫu: Thân sâu có những hình gì ghép lại với nhau? (Các viên bi tròn gắn nối tiếp).\n\n* Cô làm mẫu:\n- Cô bóp mềm đất nặn, chia đất thành nhiều phần nhỏ.\n- Đặt đất vào lòng bàn tay xoay tròn thành các viên tròn xoe.\n- Gắn nối tiếp các viên tròn lại làm thân sâu, gắn thêm 2 chiếc râu nhỏ xinh trên đầu.\n\n* Trẻ thực hiện:\n- Trẻ nặn chú sâu theo ý tưởng riêng, cô đến khích lệ, hướng dẫn trẻ gắn đính chắc chắn.\n\n* Trưng bày sản phẩm:\n- Cho trẻ đặt chú sâu lên những chiếc lá xanh trên bàn trưng bày 'Khu vườn vui nhộn'.`,
            conclusion: `3. Kết thúc:\n- Trẻ ngắm nhìn các chú sâu đáng yêu, lau sạch tay bằng khăn ẩm và thu dọn đồ dùng.`
          },
          assessment: "", adjustment: "", engineUsed: "Offline Sư Phạm Heuristic Engine (0đ)", isOffline: true, createdAt: new Date().toISOString()
        };
      }
    }

    // 2.4. VĂN HỌC
    if (activityType === "van_hoc") {
      if (lowerTitle.includes("hoa cúc vàng")) {
        return {
          title: "Thơ: 'Hoa cúc vàng' (Tác giả: Nguyễn Viết Bình)",
          topic, topicName: topic, dayOfWeek, date, weekRange, activityType,
          activityTypeName: actualActObj.name, ageId: ageObj.id, ageName: ageObj.name, duration: ageObj.duration, teacher: teacherName,
          activityCol: `- Làm quen văn học:\n- Thơ: Hoa cúc vàng (Nguyễn Viết Bình)`,
          objectives: {
            knowledge: [
              "Trẻ biết tên bài thơ 'Hoa cúc vàng' của nhà thơ Nguyễn Viết Bình.",
              "Hiểu nội dung bài thơ: Mùa đông trời lạnh giá, hoa cúc vàng gom những tia nắng ấm áp để mùa xuân bung nở rực rỡ sưởi ấm khắp đất trời."
            ],
            skills: [
              "Trẻ đọc thơ diễn cảm, ngắt nghỉ đúng nhịp điệu của bài thơ.",
              "Phát triển ngôn ngữ mạch lạc, trả lời rõ ràng câu hỏi đàm thoại."
            ],
            attitudes: [
              "Trẻ thêm yêu mến vẻ đẹp của hoa cúc mùa xuân.",
              "Biết bảo vệ chăm sóc hoa, không ngắt hoa bẻ cành."
            ]
          },
          preparation: {
            teacher: ["Giáo án điện tử, máy tính, Smart TV chiếu hình ảnh sinh động của bài thơ.", "Chậu hoa cúc vàng thật rực rỡ."],
            students: ["Ghế ngồi chữ U, mũ múa hoa cúc vàng cho trẻ."]
          },
          procedure: {
            intro: `1. Ổn định tổ chức:\n- Cho trẻ quan sát chậu hoa cúc vàng và đàm thoại về màu vàng rực rỡ đón mùa xuân sang.`,
            instruction: `2. Phương pháp, hình thức tổ chức:\n* Cô đọc thơ:\n- Lần 1: Đọc diễn cảm, thể hiện sự ấm áp vui tươi.\n- Lần 2: Đọc thơ kết hợp hình ảnh trình chiếu sinh động trên màn hình.\n\n* Đàm thoại trích dẫn nội dung:\n- Bài thơ có tên là gì? Do ai sáng tác?\n- Mùa đông lạnh giá như thế nào? (Trích: 'Suốt cả mùa đông / Gió rét căm căm').\n- Hoa cúc đã làm gì? (Trích: 'Ấp ủ trong lòng / Mầm cây nho nhỏ').\n- Mùa xuân đến hoa cúc nở ra sao? (Trích: 'Áo vàng như nắng / Rực rỡ mùa xuân').\n- Giáo dục trẻ yêu hoa, tưới nước bắt sâu cho cây hoa.\n\n* Dạy trẻ đọc thơ:\n- Cả lớp đọc thơ cùng cô 2 - 3 lần.\n- Từng tổ, nhóm bạn trai bạn gái, cá nhân thi đua đọc diễn cảm.`,
            conclusion: `3. Kết thúc:\n- Cả lớp hóa thân thành những bông hoa cúc vàng tỏa hương khoe sắc đón chào xuân mới.`
          },
          assessment: "", adjustment: "", engineUsed: "Offline Sư Phạm Heuristic Engine (0đ)", isOffline: true, createdAt: new Date().toISOString()
        };
      }
    }

    // 2.5. VẬN ĐỘNG
    if (activityType === "van_dong") {
      if (lowerTitle.includes("bò chui") || lowerTitle.includes("cổng")) {
        return {
          title: "VĐCB: Bò chui qua cổng - TCVĐ: Cáo và thỏ",
          topic, topicName: topic, dayOfWeek, date, weekRange, activityType,
          activityTypeName: actualActObj.name, ageId: ageObj.id, ageName: ageObj.name, duration: ageObj.duration, teacher: teacherName,
          activityCol: `- Phát triển vận động:\n- VĐCB: Bò chui qua cổng\n- TCVĐ: Cáo và thỏ`,
          objectives: {
            knowledge: [
              "Trẻ biết tên vận động 'Bò chui qua cổng' và luật chơi trò chơi 'Cáo và thỏ'.",
              "Trẻ hiểu kỹ thuật bò bằng bàn tay và cẳng chân, khéo léo chui qua cổng không chạm lưng vào cổng."
            ],
            skills: [
              "Rèn kỹ năng phối hợp chân nọ tay kia nhịp nhàng, mắt nhìn thẳng hướng bò.",
              "Phát triển thể lực, sự khéo léo và nhanh nhẹn khi tham gia trò chơi."
            ],
            attitudes: [
              "Trẻ hào hứng, tự tin, tích cực tham gia các bài tập vận động.",
              "Ý thức tổ chức kỷ luật, xếp hàng theo thứ tự chờ đến lượt."
            ]
          },
          preparation: {
            teacher: ["4 - 6 cổng chui bằng nhựa chắc chắn (chiều cao 45 - 50cm).", "Mũ cáo cho cô, mũ thỏ cho trẻ; nhạc khởi động sôi nổi."],
            students: ["Trang phục thể thao gọn gàng, giày vải thuận tiện."]
          },
          procedure: {
            intro: `1. Ổn định tổ chức:\n- Kiểm tra sức khỏe, sĩ số của trẻ; cho trẻ khởi động nhẹ nhàng các khớp cổ tay, cổ chân.`,
            instruction: `2. Phương pháp, hình thức tổ chức:\na. Khởi động: Đi theo vòng tròn kết hợp đi bằng mũi chân, gót chân, chạy chậm, chạy nhanh.\nb. Trọng động:\n* BTPTC: Tập các động tác Tay, Chân, Bụng lườn, Bật nhảy theo nền nhạc sôi động.\n* VĐCB: 'Bò chui qua cổng'\n- Cô làm mẫu lần 1 không giải thích.\n- Cô làm mẫu lần 2 + Phân tích: Ở tư thế chuẩn bị, quỳ trước vạch xuất phát bằng bàn tay và cẳng chân. Khi có hiệu lệnh, bò tiến về phía trước phối hợp tay nọ chân kia, khi đến cổng khéo léo cúi đầu chui qua không chạm vào cổng.\n- Trẻ thực hành: Lần lượt 2 trẻ lên thực hiện; cô quan sát sửa sai kịp thời.\n* TCVĐ: 'Cáo và thỏ'\n- Chơi 2 - 3 lượt hào hứng, trẻ chạy nhanh về chuồng khi cáo xuất hiện.\nc. Hồi tĩnh: Đi lại nhẹ nhàng thả lỏng cơ thể.`,
            conclusion: `3. Kết thúc:\n- Khen ngợi tinh thần tập luyện của các bé, dặn dò uống nước và giữ gìn sức khỏe.`
          },
          assessment: "", adjustment: "", engineUsed: "Offline Sư Phạm Heuristic Engine (0đ)", isOffline: true, createdAt: new Date().toISOString()
        };
      }
    }

    // 3. TỔNG HỢP NỘI DUNG SƯ PHẠM ĐỘC QUYỀN THEO TỪNG THỂ LOẠI (DYNAMIC HEURISTIC ENGINE)
    const actSpecificObjectives = {
      am_nhac: {
        know: [
          `Trẻ biết tên bài hát/hoạt động âm nhạc '${lessonTitle}', cảm nhận được giai điệu bài hát trong chủ đề '${topic}'.`,
          `Trẻ hiểu nội dung lời ca và biết cách tham gia trò chơi âm nhạc kết hợp.`
        ],
        skill: [
          `Phát triển tai nghe âm nhạc, rèn phản xạ nhanh nhẹn theo tiết tấu nhịp điệu.`,
          `Trẻ hát rõ lời, đúng giai điệu và biết vận động phụ họa tự tin theo âm nhạc.`
        ],
        att: [
          `Trẻ yêu thích âm nhạc, hào hứng tham gia biểu diễn cùng cô và các bạn.`,
          `Giáo dục trẻ tình cảm trong sáng gắn liền với chủ đề '${topic}'.`
        ],
        prepT: [
          `Đàn organ, loa kéo, nhạc beat bài hát '${lessonTitle}'.`,
          `Dụng cụ gõ đệm: Xắc xô, thanh phách tre, trống lắc, mũ múa.`
        ],
        prepS: [
          `Ghế ngồi hình chữ U thoáng mát, tâm thế vui vẻ sẵn sàng ca hát.`,
          `Dụng cụ âm nhạc mini cho từng tổ và cá nhân.`
        ]
      },
      nhan_biet: {
        know: [
          `Trẻ nhận biết, gọi đúng tên và nắm được các đặc điểm nổi bật của '${lessonTitle}'.`,
          `Phát triển nhận thức về thế giới xung quanh phù hợp lứa tuổi ${ageObj.name}.`
        ],
        skill: [
          `Rèn luyện kỹ năng quan sát, so sánh, phân loại và ghi nhớ có chủ định.`,
          `Phát triển ngôn ngữ mạch lạc, trả lời rõ ràng câu hỏi gợi mở của cô.`
        ],
        att: [
          `Trẻ tò mò, ham hiểu biết, hào hứng tham gia các hoạt động khám phá khoa học.`,
          `Có ý thức giữ gìn, bảo vệ đồ dùng và môi trường xung quanh.`
        ],
        prepT: [
          `Giáo án điện tử, màn hình Smart TV, vật thật hoặc mô hình trực quan về '${lessonTitle}'.`,
          `Hệ thống câu hỏi gợi mở, trò chơi tương tác 'Chị AI thông thái'.`
        ],
        prepS: [
          `Rổ đựng lô tô / học cụ nhận biết đầy đủ cho từng trẻ.`,
          `Tâm thế hào hứng, sẵn sàng tham gia thử thách.`
        ]
      },
      tao_hinh: {
        know: [
          `Trẻ nhận biết đặc điểm, hình dáng, màu sắc và bố cục của đề tài '${lessonTitle}'.`,
          `Hiểu kỹ thuật và các bước thực hiện sản phẩm tạo hình sáng tạo.`
        ],
        skill: [
          `Rèn luyện kỹ năng khéo léo của đôi bàn tay, cách cầm bút/chấm màu/dán giấy.`,
          `Biết phối hợp các màu sắc hài hòa và sắp xếp bố cục cân đối trên trang giấy.`
        ],
        att: [
          `Trẻ say sưa, kiên trì hoàn thành sản phẩm tạo hình của mình.`,
          `Biết yêu quý và giữ gìn sản phẩm của mình cũng như của bạn.`
        ],
        prepT: [
          `2 - 3 tranh mẫu gợi ý với các chất liệu đa dạng, giá trưng bày sản phẩm.`,
          `Bàn ghế, màu nước, bút sáp, hồ dán, khăn lau tay cho trẻ.`
        ],
        prepS: [
          `Giấy vẽ A4 có khung viền đẹp, khay đựng nguyên vật liệu tạo hình cho từng bàn.`,
          `Trang phục gọn gàng, sẵn sàng thỏa sức sáng tạo.`
        ]
      },
      van_hoc: {
        know: [
          `Trẻ nhớ tên bài thơ/câu chuyện '${lessonTitle}', nhớ tên tác giả.`,
          `Hiểu nội dung tác phẩm, nắm được tính cách của các nhân vật chính.`
        ],
        skill: [
          `Trẻ đọc thơ / kể chuyện diễn cảm theo ngữ điệu, ánh mắt, cử chỉ.`,
          `Rèn kỹ năng lắng nghe và trả lời tròn câu khi đàm thoại trích dẫn tác phẩm.`
        ],
        att: [
          `Trẻ hứng thú nghe cô kể chuyện, đọc thơ và học hỏi những bài học đạo đức nhân văn.`,
          `Giáo dục trẻ tính trung thực, chăm chỉ và biết vâng lời người lớn.`
        ],
        prepT: [
          `Giáo án điện tử trình chiếu tranh thơ / phim hoạt hình sinh động '${lessonTitle}'.`,
          `Mô hình sa bàn khung rối que, trang phục hóa thân nhân vật.`
        ],
        prepS: [
          `Ghế ngồi chữ U, mũ múa các nhân vật trong tác phẩm.`,
          `Tâm thế chăm chú đón nghe tác phẩm văn học.`
        ]
      },
      van_dong: {
        know: [
          `Trẻ nắm được tên vận động cơ bản '${lessonTitle}' và luật chơi trò chơi vận động.`,
          `Hiểu kỹ thuật thực hiện động tác theo đúng hiệu lệnh của cô.`
        ],
        skill: [
          `Phát triển các nhóm cơ, rèn tố chất nhanh - mạnh - bền - khéo và thăng bằng.`,
          `Phối hợp tay - mắt - chân nhịp nhàng, có tinh thần phối hợp đồng đội khi chơi.`
        ],
        att: [
          `Trẻ tự tin, hào hứng luyện tập thể dục thể thao rèn luyện sức khỏe.`,
          `Có ý thức kỷ luật, xếp hàng ngay ngắn và tuân thủ luật chơi.`
        ],
        prepT: [
          `Sân tập rộng rãi, sạch sẽ, an toàn bằng phẳng; loa kéo nhạc khởi động sôi động.`,
          `Dụng cụ vận động: Bóng, bao cát, vòng thể dục, vạch chuẩn xuất phát.`
        ],
        prepS: [
          `Trang phục thể thao thoải mái, giày bata thuận tiện vận động.`,
          `Sức khỏe tốt, tinh thần vui tươi sảng khoái.`
        ]
      }
    };

    const targetPack = actSpecificObjectives[activityType] || actSpecificObjectives.am_nhac;

    // Soạn text Cột 1
    let activityCol = `-${actualActObj.name}:`;
    activityCol += `\n- NDTT: ${lessonTitle}`;
    if (activityType === "am_nhac") activityCol += `\n+ NDKH: TCÂN: Ai nhanh nhất`;
    else if (activityType === "van_dong") activityCol += `\n+ NDKH: TCVĐ: Trò chơi dân gian`;

    // Soạn các bước tiến trình
    let introText = `1. Ổn định tổ chức: (1 - 2 phút)\n- Cô cùng trẻ hát/đọc câu đố dẫn dắt sinh động về chủ đề '${topic}'.\n- Giới thiệu đề tài: Hôm nay cô con mình sẽ cùng khám phá bài học '${lessonTitle}' nhé!`;
    let methodText = `2. Phương pháp, hình thức tổ chức: (18 - 22 phút)\n2.1. Nội dung trọng tâm: "${lessonTitle}"\n- Cô giới thiệu, hướng dẫn mẫu và phân tích các kỹ năng cốt lõi.\n- Tổ chức cho trẻ thực hành theo cá nhân, nhóm và tập thể lớp.\n- Cô bao quát, sửa sai và khích lệ sự tự tin của từng bé.\n\n2.2. Hoạt động bổ trợ & Trò chơi củng cố:\n- Tổ chức trò chơi tương tác sôi nổi giúp củng cố kiến thức và kỹ năng cho trẻ.`;
    let conclusionText = `3. Kết thúc: (1 - 2 phút)\n- Cô nhận xét, tuyên dương các bé chăm ngoan, hăng hái.\n- Chuyển sang hoạt động tiếp theo nhẹ nhàng.`;

    return {
      title: lessonTitle,
      topic: topic,
      topicName: topic,
      dayOfWeek: dayOfWeek,
      date: date,
      weekRange: weekRange,
      activityType: activityType,
      activityTypeName: actualActObj.name,
      ageId: ageObj.id,
      ageName: ageObj.name,
      duration: ageObj.duration,
      teacher: teacherName,
      activityCol: activityCol,
      objectives: {
        knowledge: targetPack.know,
        skills: targetPack.skill,
        attitudes: targetPack.att
      },
      preparation: {
        teacher: targetPack.prepT,
        students: targetPack.prepS
      },
      procedure: {
        intro: introText,
        instruction: methodText,
        conclusion: conclusionText
      },
      assessment: "",
      adjustment: "",
      engineUsed: "Offline Sư Phạm Heuristic Engine (0đ)",
      isOffline: true,
      createdAt: new Date().toISOString()
    };
  }

  async callGeminiForLessonPlan({ topicName, activityTypeName, activityType, dayOfWeek, date, weekRange, ageName, duration, lessonTitle, teacherName, schoolName }) {
    const actualTeacher = (teacherName || "").trim() || (window.appState && window.appState.teacherName) || localStorage.getItem("kid_lesson_teacher_name") || "Cô giáo Nguyễn Thị Tiên";
    const actualSchool = (schoolName || "").trim() || (window.appState && window.appState.schoolName) || localStorage.getItem("kid_lesson_school_name") || "Trường Mầm non Phúc Sơn B";

    const systemPrompt = `Bạn là Chuyên gia Phương pháp Giáo dục Mầm non am hiểu sâu sắc Chương trình GDMN của Bộ Giáo dục và Đào tạo Việt Nam (Thông tư 51/2020/TT-BGDĐT).
Nhiệm vụ: Soạn Kế hoạch bài dạy theo đúng chuẩn cấu trúc BẢNG 4 CỘT của Bộ GD&ĐT (Cột 1: Hoạt động | Cột 2: Mục đích | Cột 3: Chuẩn bị | Cột 4: Cách tiến hành).
Hãy trả về DUY NHẤT một chuỗi JSON hợp lệ (không kèm markdown \`\`\`json ở ngoài), theo đúng cấu trúc sau:
{
  "title": "${lessonTitle}",
  "topic": "${topicName}",
  "dayOfWeek": "${dayOfWeek}",
  "date": "${date}",
  "weekRange": "${weekRange}",
  "activityType": "${activityType}",
  "activityTypeName": "${activityTypeName}",
  "ageName": "${ageName}",
  "duration": "${duration}",
  "teacher": "${actualTeacher}",
  "school": "${actualSchool}",
  "activityCol": "- ${activityTypeName}:\n- NDTT: ${lessonTitle}\n+ NDKH: Trò chơi củng cố",
  "objectives": {
    "knowledge": ["2-3 gạch đầu dòng mục tiêu kiến thức cụ thể, đo lường được"],
    "skills": ["3-4 gạch đầu dòng mục tiêu kỹ năng rèn luyện"],
    "attitudes": ["2 gạch đầu dòng mục tiêu thái độ giáo dục"]
  },
  "preparation": {
    "teacher": ["3-4 món đồ dùng của cô, có slide AI và học liệu số, màn hình Smart TV"],
    "students": ["2-3 món đồ dùng của trẻ, rổ học cụ, trang phục"]
  },
  "procedure": {
    "intro": "1. Ổn định tổ chức: (1 - 2 phút)\n- Nội dung cô dẫn dắt bằng lời thoại, câu đố, âm nhạc vui tươi...",
    "instruction": "2. Phương pháp, hình thức tổ chức: (18 - 22 phút)\n- Tiến trình cụ thể có lời thoại cô - trẻ, các trò chơi củng cố 1, 2...",
    "conclusion": "3. Kết thúc: (1 - 2 phút)\n- Nhận xét tuyên dương, chuyển hoạt động."
  },
  "assessment": "",
  "adjustment": ""
}`;

    const userPrompt = `Hãy soạn giáo án chi tiết cho:
- Ngày trong tuần: ${dayOfWeek}, ngày ${date} (Kế hoạch tuần: ${weekRange})
- Loại hoạt động: ${activityTypeName} (${activityType})
- Đề tài bài dạy: "${lessonTitle}"
- Chủ đề: "${topicName}"
- Lứa tuổi: ${ageName} (${duration})
- Người thực hiện: ${actualTeacher}
- Đơn vị: ${actualSchool}`;

    const responseText = await this.executeGeminiRequest(systemPrompt, userPrompt);
    const cleaned = responseText.replace(/```json[\r\n]*/g, "").replace(/```[\r\n]*/g, "").trim();
    return JSON.parse(cleaned);
  }

  async callGeminiForLiterary({ topicName, lessonTitle, ageName }) {
    const systemPrompt = `Bạn là Nhà thơ thiếu nhi và Nhà văn mầm non tài hoa.
Hãy sáng tác các tác phẩm văn học mầm non tươi vui, trong sáng, gieo vần dí dỏm cho đề tài bài học.
Hãy trả về DUY NHẤT một chuỗi JSON hợp lệ (không kèm markdown \`\`\`json ở ngoài), theo đúng cấu trúc sau:
{
  "poem": {
    "title": "Tên bài thơ viết hoa",
    "author": "KID-LESSON AI & Cô giáo sáng tác",
    "genre": "Thơ 4 chữ hoặc 5 chữ mầm non",
    "content": "Toàn văn bài thơ gồm 3-4 khổ thơ ngắn gọn, dễ thuộc dễ nhớ"
  },
  "riddles": [
    {
      "question": "Câu đố có vần điệu 2-4 dòng",
      "answer": "Đáp án con vật / đồ vật",
      "hint": "Gợi ý vui vẻ cho bé"
    },
    {
      "question": "Câu đố thứ 2",
      "answer": "Đáp án",
      "hint": "Gợi ý"
    },
    {
      "question": "Câu đố thứ 3",
      "answer": "Đáp án",
      "hint": "Gợi ý"
    }
  ],
  "puppetScript": {
    "title": "Tên hoạt cảnh kịch rối ngắn",
    "characters": "Tên 2 nhân vật rối que",
    "duration": "3 phút",
    "script": "Lời thoại vui nhộn, ngắn gọn giữa 2 nhân vật để dẫn dắt vào bài học"
  }
}`;

    const userPrompt = `Sáng tác trọn bộ: 1 bài thơ mầm non mới, 3 câu đố có vần điệu và 1 kịch bản rối ngắn 3 phút cho:
- Đề tài: "${lessonTitle}"
- Chủ đề: "${topicName}"
- Độ tuổi: "${ageName}"`;

    const responseText = await this.executeGeminiRequest(systemPrompt, userPrompt);
    const cleaned = responseText.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    return JSON.parse(cleaned);
  }

  async executeGeminiRequest(systemInstruction, userContent) {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${this.modelName}:generateContent?key=${this.apiKey}`;
    
    const payload = {
      contents: [
        {
          role: "user",
          parts: [{ text: userContent }]
        }
      ],
      systemInstruction: {
        parts: [{ text: systemInstruction }]
      },
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 3500
      }
    };

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Gemini API Error ${response.status}: ${errText}`);
    }

    const json = await response.json();
    if (json.candidates && json.candidates[0] && json.candidates[0].content) {
      return json.candidates[0].content.parts.map(p => p.text).join("");
    }
    throw new Error("Phản hồi từ Gemini không có dữ liệu hợp lệ.");
  }
}

// Export to window
if (typeof window !== "undefined") {
  window.KidLessonAIEngine = KidLessonAIEngine;
}
