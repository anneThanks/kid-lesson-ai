/**
 * KID-LESSON AI - MAIN APPLICATION CONTROLLER
 * Quản lý Trạng Thái Kế Hoạch Tuần (5 Ngày - 5 Hoạt Động), Cấu Hình Real-Time, Xuất Word (.doc) & In A4
 * Bám sát Thông tư 51/2020/TT-BGDĐT & Thực tế Giảng dạy Mầm non Đồng Tâm / Phúc Sơn
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. KHỞI TẠO CÁC HỆ THỐNG CON
  const aiEngine = new KidLessonAIEngine();
  const speechSystem = new KidLessonSpeech();
  const gamesSystem = new KidLessonGames(speechSystem);

  // Khởi tạo Canvas Pháo hoa Confetti
  const confettiCanvas = document.getElementById("confetti-canvas");
  if (confettiCanvas) {
    gamesSystem.initConfetti(confettiCanvas);
  }

  // 2. STATE TOÀN BỘ ỨNG DỤNG
  const appState = {
    selectedAge: "mau_giao_be",
    weekRange: "26/01/2026 - 30/01/2026",
    selectedDay: "mon",
    selectedDate: "26/01/2026",
    selectedActivityType: "am_nhac",
    selectedTopic: "Thế giới Động vật - Các loài côn trùng và hoa mùa xuân",
    lessonTitle: "Nghe hát: 'Hoa thơm bướm lượn' (Dân ca quan họ Bắc Ninh) - NDKH: TCÂN: 'Ai nhanh nhất'",
    teacherName: localStorage.getItem("kid_lesson_teacher_name") || "Cô giáo Nguyễn Thị Tiên",
    schoolName: localStorage.getItem("kid_lesson_school_name") || "Trường Mầm non Phúc Sơn B",
    
    currentLessonPlan: null,
    weeklyPlanCache: {}, // Lưu các bài của Thứ 2 -> Thứ 6
    viewMode: "single",  // "single" hoặc "full_week"

    currentLiterary: null,
    currentFlashcards: [],
    currentCanvaPrompts: null,
    activeTab: "tab-lesson-plan"
  };

  window.appState = appState;

  // Nạp 5 bài mẫu vàng từ PRE_SCHOOL_DATA.sampleWeeklyPlan kèm ndtt, ndkh, badge
  const defaultDayMeta = {
    mon: { badge: "Âm nhạc", ndtt: "NH: Hoa thơm, bướm lượn", ndkh: "TCÂN: Ai nhanh nhất" },
    tue: { badge: "Nhận biết", ndtt: "Ôn nhận biết hình tròn, hình vuông", ndkh: "Trò chơi tương tác AI & Bé khéo tay" },
    wed: { badge: "Tạo hình", ndtt: "In màu trang trí cánh bướm", ndkh: "Trưng bày tranh hoa bướm" },
    thu: { badge: "Văn học", ndtt: "Thơ: Ong và bướm (Nhược Thủy)", ndkh: "TC: Ai nhanh nhất (Cắm ong bướm)" },
    fri: { badge: "Vận động", ndtt: "VĐCB: Ném và bắt bóng bằng 2 tay", ndkh: "TCVĐ: Kéo co" }
  };

  if (window.PRE_SCHOOL_DATA && window.PRE_SCHOOL_DATA.sampleWeeklyPlan) {
    const sampleDays = window.PRE_SCHOOL_DATA.sampleWeeklyPlan.days;
    Object.keys(sampleDays).forEach(k => {
      const dayData = JSON.parse(JSON.stringify(sampleDays[k]));
      if (defaultDayMeta[k]) {
        dayData.badge = defaultDayMeta[k].badge;
        dayData.ndtt = defaultDayMeta[k].ndtt;
        dayData.ndkh = defaultDayMeta[k].ndkh;
      }
      dayData.teacher = appState.teacherName;
      dayData.school = appState.schoolName;
      appState.weeklyPlanCache[k] = dayData;
    });
    appState.currentLessonPlan = appState.weeklyPlanCache["mon"];
  }

  // 3. CACHE DOM ELEMENTS
  const els = {
    // Cấu hình Kế hoạch bài dạy
    selectAge: document.getElementById("select-age"),
    selectWeekPreset: document.getElementById("select-week-preset"),
    inputWeekRange: document.getElementById("input-week-range"),
    dayPillsContainer: document.getElementById("day-pills-container"),
    inputLessonDate: document.getElementById("input-lesson-date"),
    
    // Cấu hình Thể loại & Hoạt động Real-time
    activeDayLabel: document.getElementById("active-day-label"),
    selectActivityType: document.getElementById("select-activity-type"),
    inputNdtt: document.getElementById("input-ndtt"),
    inputNdkh: document.getElementById("input-ndkh"),

    inputTopic: document.getElementById("input-topic"),
    topicsDatalist: document.getElementById("topics-datalist"),
    btnClearTopic: document.getElementById("btn-clear-topic"),
    inputLessonTitle: document.getElementById("input-lesson-title"),
    presetChipsBox: document.getElementById("preset-chips-box"),
    btnGenerateAll: document.getElementById("btn-generate-all"),
    engineStatusPill: document.getElementById("engine-status-pill"),

    // Tabs & Panels
    navTabs: document.querySelectorAll(".nav-tab-btn"),
    tabPanels: document.querySelectorAll(".tab-content-panel"),

    // Workspace Display
    lessonDisplayContainer: document.getElementById("lesson-display-container"),
    literaryGrid: document.getElementById("literary-grid"),
    flashcardsGrid: document.getElementById("flashcards-grid"),
    quizContainer: document.getElementById("quiz-game-container"),
    shadowGameContainer: document.getElementById("shadow-game-container"),

    // Library
    libraryList: document.getElementById("library-cards-grid"),
    btnExportLibraryJson: document.getElementById("btn-export-library-json"),
    btnImportLibraryJson: document.getElementById("btn-import-library-json"),
    fileImportInput: document.getElementById("file-import-input"),

    // Modals
    modalSettings: document.getElementById("modal-settings"),
    btnOpenSettings: document.getElementById("btn-open-settings"),
    btnCloseSettings: document.getElementById("btn-close-settings"),
    btnSaveSettings: document.getElementById("btn-save-settings"),
    inputGeminiKey: document.getElementById("input-gemini-key"),
    btnToggleKeyVisibility: document.getElementById("btn-toggle-key-visibility"),
    btnTestGeminiKey: document.getElementById("btn-test-gemini-key"),
    keyStatusBanner: document.getElementById("key-status-banner"),
    keyStatusIcon: document.getElementById("key-status-icon"),
    keyStatusTitle: document.getElementById("key-status-title"),
    keyStatusDesc: document.getElementById("key-status-desc"),
    selectGeminiModel: document.getElementById("select-gemini-model"),
    wrapperCustomModel: document.getElementById("wrapper-custom-model"),
    inputCustomModel: document.getElementById("input-custom-model"),
    inputTeacherName: document.getElementById("input-teacher-name"),
    inputSchoolName: document.getElementById("input-school-name"),

    modalGuide: document.getElementById("modal-guide"),
    btnOpenGuide: document.getElementById("btn-open-guide"),
    btnCloseGuide: document.getElementById("btn-close-guide"),

    // Canva Studio & Smart TV
    modalCanvaStudio: document.getElementById("modal-canva-studio"),
    btnCloseCanvaStudio: document.getElementById("btn-close-canva-studio"),
    btnCloseCanvaFooter: document.getElementById("btn-close-canva-footer"),
    btnDownloadPptxCanva: document.getElementById("btn-download-pptx-canva"),
    btnOpenCanvaWeb: document.getElementById("btn-open-canva-web"),
    btnLaunchSmartTv: document.getElementById("btn-launch-smart-tv"),
    btnCopyCanvaPrompt: document.getElementById("btn-copy-canva-prompt"),
    canvaPreviewDayBadge: document.getElementById("canva-preview-day-badge"),
    canvaPreviewTitle: document.getElementById("canva-preview-title"),
    canvaPreviewSub: document.getElementById("canva-preview-sub"),
    canvaSlidesThumbnails: document.getElementById("canva-slides-thumbnails"),

    // Smart TV Player
    modalSmartTv: document.getElementById("modal-smart-tv-presentation"),
    btnTvSpeak: document.getElementById("btn-tv-speak"),
    btnTvFullscreen: document.getElementById("btn-tv-fullscreen"),
    btnTvClose: document.getElementById("btn-tv-close"),
    btnTvPrev: document.getElementById("btn-tv-prev"),
    btnTvNext: document.getElementById("btn-tv-next")
  };

  window.appState = appState;

  // 4. KHỞI TẠO CÁC BỘ CHỌN (DROPDOWNS & DATALIST)
  function initDropdowns() {
    const data = window.PRE_SCHOOL_DATA;

    // 1. Đổ lứa tuổi
    if (els.selectAge) {
      els.selectAge.innerHTML = data.ageGroups.map(a => 
        `<option value="${a.id}" ${a.id === appState.selectedAge ? "selected" : ""}>${a.icon} ${a.name}</option>`
      ).join("");
    }

    // 2. Đổ loại hoạt động giáo dục
    if (els.selectActivityType) {
      els.selectActivityType.innerHTML = data.activityTypes.map(act => 
        `<option value="${act.id}" ${act.id === appState.selectedActivityType ? "selected" : ""}>${act.icon} ${act.name}</option>`
      ).join("");
    }

    // 3. Đổ danh sách tất cả chủ đề vào datalist
    if (els.topicsDatalist && data.allTopics) {
      els.topicsDatalist.innerHTML = data.allTopics.map(t => 
        `<option value="${t}"></option>`
      ).join("");
    }

    // 4. Khởi tạo giá trị ban đầu cho các trường realtime của Thứ Hai
    syncConfigFormWithDay(appState.selectedDay);

    // 5. Cập nhật các chip gợi ý bài học
    updatePresetChips();
    updateEngineStatusBadge();
  }

  // Đồng bộ form cấu hình với dữ liệu của ngày đang chọn
  function syncConfigFormWithDay(dayId) {
    const daysNameMap = { mon: "Thứ Hai", tue: "Thứ Ba", wed: "Thứ Tư", thu: "Thứ Năm", fri: "Thứ Sáu" };
    const dayName = daysNameMap[dayId] || "Thứ Hai";

    if (els.activeDayLabel) {
      els.activeDayLabel.textContent = dayName;
    }

    const plan = appState.weeklyPlanCache[dayId] || {
      activityType: "am_nhac",
      badge: "Âm nhạc",
      ndtt: "",
      ndkh: "",
      title: "",
      date: appState.selectedDate,
      topic: appState.selectedTopic
    };

    if (els.selectActivityType && plan.activityType) {
      els.selectActivityType.value = plan.activityType;
      appState.selectedActivityType = plan.activityType;
    }

    if (els.inputNdtt) {
      els.inputNdtt.value = plan.ndtt || plan.title || "";
    }

    if (els.inputNdkh) {
      els.inputNdkh.value = plan.ndkh || "";
    }

    if (els.inputLessonTitle) {
      els.inputLessonTitle.value = plan.title || "";
      appState.lessonTitle = plan.title || "";
    }

    if (els.inputLessonDate && plan.date) {
      els.inputLessonDate.value = plan.date;
      appState.selectedDate = plan.date;
    }

    if (els.inputTopic && plan.topic) {
      els.inputTopic.value = plan.topic;
      appState.selectedTopic = plan.topic;
    }

    // Tự động đồng bộ badge hiển thị trên Day Pill
    const badgeText = plan.badge || getBadgeForActivity(plan.activityType);
    const badgeEl = document.getElementById(`badge-${dayId}`);
    if (badgeEl) {
      badgeEl.textContent = badgeText;
    }
  }

  function getBadgeForActivity(actId) {
    const map = {
      am_nhac: "Âm nhạc",
      nhan_biet: "Nhận biết",
      tao_hinh: "Tạo hình",
      van_hoc: "Văn học",
      van_dong: "Vận động",
      khac: "Khác"
    };
    return map[actId] || "Hoạt động";
  }

  // Danh sách các bài dạy mẫu tiêu biểu theo từng loại hoạt động
  function getPresetsForActivity(actId) {
    const presets = {
      am_nhac: [
        { title: "Nghe hát: 'Hoa thơm bướm lượn' (Quan họ Bắc Ninh) - NDKH: TCÂN: 'Ai nhanh nhất'", ndtt: "NH: Hoa thơm, bướm lượn", ndkh: "TCÂN: Ai nhanh nhất", tag: "Mẫu Chuẩn" },
        { title: "Dạy hát: 'Con bướm vàng' - NDKH: Nghe hát: 'Bướm hoa'", ndtt: "DH: Con bướm vàng", ndkh: "NH: Bướm hoa", tag: "Dạy hát" },
        { title: "Vận động múa: 'Em yêu cây xanh' - NDKH: TCÂN: 'Tai ai tinh'", ndtt: "VĐM: Em yêu cây xanh", ndkh: "TCÂN: Tai ai tinh", tag: "Vận động múa" },
        { title: "Nghe hát: 'Chị ong nâu và em bé' - NDKH: Biểu diễn tự do", ndtt: "NH: Chị ong nâu và em bé", ndkh: "Biểu diễn tự do", tag: "Nghe hát" }
      ],
      nhan_biet: [
        { title: "Ôn nhận biết hình tròn, hình vuông (Trợ giảng AI 'Hình học vui nhộn')", ndtt: "Ôn nhận biết hình tròn, hình vuông", ndkh: "Trò chơi tương tác AI & Bé khéo tay", tag: "Mẫu Chuẩn" },
        { title: "Nhận biết phân biệt: Màu đỏ - Màu vàng của hoa mùa xuân", ndtt: "Nhận biết màu đỏ - màu vàng", ndkh: "TC: Chọn hoa đúng màu", tag: "Màu sắc" },
        { title: "Nhận biết to - nhỏ: Quả bưởi to và Quả cam nhỏ", ndtt: "Nhận biết to - nhỏ", ndkh: "TC: Về đúng vườn quả", tag: "Toán sơ đẳng" },
        { title: "Khám phá khoa học: Bạn Gà trống và Bạn Vịt bầu", ndtt: "Phân biệt Gà trống và Vịt bầu", ndkh: "TC: Về đúng ngôi nhà", tag: "Khám phá KH" }
      ],
      tao_hinh: [
        { title: "In màu trang trí cánh bướm", ndtt: "In màu trang trí cánh bướm", ndkh: "Trưng bày tranh hoa bướm", tag: "Mẫu Chuẩn" },
        { title: "Vẽ và tô màu những bông hoa tươi thắm tặng cô", ndtt: "Vẽ hoa tươi thắm", ndkh: "Bé ngắm hoa đẹp", tag: "Vẽ" },
        { title: "Nặn chú sâu con ngộ nghĩnh từ đất nặn", ndtt: "Nặn chú sâu con", ndkh: "Trưng bày vườn sâu", tag: "Nặn" },
        { title: "Xé dán cánh hoa mùa xuân rực rỡ", ndtt: "Xé dán cánh hoa", ndkh: "Bé khéo tay", tag: "Xé dán" }
      ],
      van_hoc: [
        { title: "Thơ: 'Ong và bướm' (Nhược Thủy) - Mô hình kịch rối que", ndtt: "Thơ: Ong và bướm (Nhược Thủy)", ndkh: "TC: Ai nhanh nhất", tag: "Mẫu Chuẩn" },
        { title: "Thơ: 'Hoa cúc vàng' (Nguyễn Viết Bình)", ndtt: "Thơ: Hoa cúc vàng", ndkh: "Đàm thoại & ngâm thơ", tag: "Thơ" },
        { title: "Truyện cổ tích: 'Quả táo của ai?'", ndtt: "Truyện: Quả táo của ai", ndkh: "Đóng kịch rối nhân vật", tag: "Truyện kể" },
        { title: "Đồng dao: 'Rải ranh / Kéo cưa lừa xẻ'", ndtt: "Đồng dao dân gian", ndkh: "Trò chơi vận động", tag: "Đồng dao" }
      ],
      van_dong: [
        { title: "VĐCB: Ném và bắt bóng bằng 2 tay - TCVĐ: Kéo co", ndtt: "VĐCB: Ném và bắt bóng bằng 2 tay", ndkh: "TCVĐ: Kéo co", tag: "Mẫu Chuẩn" },
        { title: "VĐCB: Bò chui qua cổng - TCVĐ: Cáo và thỏ", ndtt: "VĐCB: Bò chui qua cổng", ndkh: "TCVĐ: Cáo và thỏ", tag: "Bò chui" },
        { title: "VĐCB: Đi trong đường hẹp đầu đội túi cát - TCVĐ: Mèo đuổi chuột", ndtt: "VĐCB: Đi thăng bằng đường hẹp", ndkh: "TCVĐ: Mèo đuổi chuột", tag: "Thăng bằng" },
        { title: "VĐCB: Bật liên tục qua các vòng - TCVĐ: Gắp cua bỏ giỏ", ndtt: "VĐCB: Bật qua các vòng", ndkh: "TCVĐ: Gắp cua bỏ giỏ", tag: "Bật nhảy" }
      ]
    };
    return presets[actId] || presets.am_nhac;
  }

  // Cập nhật chip gợi ý bài học nhanh theo ngày & loại hoạt động
  function updatePresetChips() {
    if (!els.presetChipsBox) return;

    const act = appState.selectedActivityType;
    const list = getPresetsForActivity(act);

    els.presetChipsBox.innerHTML = list.map(item => `
      <span class="chip-tag" data-title="${escapeHtml(item.title)}" data-ndtt="${escapeHtml(item.ndtt || '')}" data-ndkh="${escapeHtml(item.ndkh || '')}">
        <span>${item.tag === "Mẫu Chuẩn" ? "⭐" : "💡"}</span> ${escapeHtml(item.title)}
      </span>
    `).join("");

    // Gắn sự kiện click chip -> Cập nhật real-time ngay lập tức toàn bộ bảng bên phải
    els.presetChipsBox.querySelectorAll(".chip-tag").forEach(chip => {
      chip.onclick = () => {
        const title = chip.dataset.title;
        const ndtt = chip.dataset.ndtt;
        const ndkh = chip.dataset.ndkh;

        if (title && els.inputLessonTitle) {
          els.inputLessonTitle.value = title;
          appState.lessonTitle = title;
        }
        if (ndtt && els.inputNdtt) {
          els.inputNdtt.value = ndtt;
        }
        if (ndkh && els.inputNdkh) {
          els.inputNdkh.value = ndkh;
        }

        // Live update toàn bộ 4 cột của bảng kế hoạch bên phải tức thì
        updateActivePlanRealtime({ rebuildContent: true });
        showToast(`✨ Đã nạp bài dạy: "${title.slice(0, 35)}..."`);
      };
    });
  }

  // Hàm cập nhật trực tiếp 4 cột trên DOM của bảng Kế hoạch giáo dục (Real-time 60fps)
  function updateTableColumnsDOM(plan) {
    if (appState.viewMode !== "single") return;
    const tableBody = document.querySelector(".official-plan-table tbody");
    if (!tableBody) return;
    const firstRow = tableBody.querySelector("tr");
    if (!firstRow) return;

    const cols = firstRow.children;
    if (cols.length < 4) return;

    // CỘT 1: HOẠT ĐỘNG
    const col1Content = cols[0].querySelector(".cell-text-content") || cols[0];
    col1Content.innerHTML = escapeHtml(plan.activityCol || "").replace(/\n/g, "<br>");
    cols[0].classList.remove("live-updated-cell");
    void cols[0].offsetWidth; // trigger reflow
    cols[0].classList.add("live-updated-cell");

    // CỘT 2: MỤC ĐÍCH
    const knowList = (plan.objectives && plan.objectives.knowledge) ? plan.objectives.knowledge : [];
    const skillList = (plan.objectives && plan.objectives.skills) ? plan.objectives.skills : [];
    const attList = (plan.objectives && plan.objectives.attitudes) ? plan.objectives.attitudes : [];
    cols[1].innerHTML = `
      <div class="cell-block-title">1. Kiến thức:</div>
      <ul class="cell-list-content">
        ${knowList.map(k => `<li>${escapeHtml(k)}</li>`).join("")}
      </ul>
      <div class="cell-block-title">2. Kỹ năng:</div>
      <ul class="cell-list-content">
        ${skillList.map(s => `<li>${escapeHtml(s)}</li>`).join("")}
      </ul>
      <div class="cell-block-title">3. Thái độ:</div>
      <ul class="cell-list-content">
        ${attList.map(a => `<li>${escapeHtml(a)}</li>`).join("")}
      </ul>
    `;
    cols[1].classList.remove("live-updated-cell");
    void cols[1].offsetWidth;
    cols[1].classList.add("live-updated-cell");

    // CỘT 3: CHUẨN BỊ
    const teachPrep = (plan.preparation && plan.preparation.teacher) ? plan.preparation.teacher : [];
    const studPrep = (plan.preparation && plan.preparation.students) ? plan.preparation.students : [];
    cols[2].innerHTML = `
      <div class="cell-block-title">1. Đồ dùng của cô:</div>
      <ul class="cell-list-content">
        ${teachPrep.map(t => `<li>${escapeHtml(t)}</li>`).join("")}
      </ul>
      <div class="cell-block-title">2. Đồ dùng của trẻ:</div>
      <ul class="cell-list-content">
        ${studPrep.map(s => `<li>${escapeHtml(s)}</li>`).join("")}
      </ul>
    `;
    cols[2].classList.remove("live-updated-cell");
    void cols[2].offsetWidth;
    cols[2].classList.add("live-updated-cell");

    // CỘT 4: CÁCH TIẾN HÀNH
    const intro = (plan.procedure && plan.procedure.intro) ? plan.procedure.intro : "1. Ổn định tổ chức:";
    const instruction = (plan.procedure && plan.procedure.instruction) ? plan.procedure.instruction : "2. Phương pháp, hình thức tổ chức:";
    const conclusion = (plan.procedure && plan.procedure.conclusion) ? plan.procedure.conclusion : "3. Kết thúc:";
    cols[3].innerHTML = `
      <div class="cell-block-title">1. Ổn định tổ chức:</div>
      <div class="cell-text-content">${escapeHtml(intro.replace(/^1\.\s*Ổn định tổ chức:\s*/i, "")).replace(/\n/g, "<br>")}</div>

      <div class="cell-block-title" style="margin-top: 10px;">2. Phương pháp, hình thức tổ chức:</div>
      <div class="cell-text-content">${escapeHtml(instruction.replace(/^2\.\s*Phương pháp[^\n]*\n?/i, "")).replace(/\n/g, "<br>")}</div>

      <div class="cell-block-title" style="margin-top: 10px;">3. Kết thúc:</div>
      <div class="cell-text-content">${escapeHtml(conclusion.replace(/^3\.\s*Kết thúc:\s*/i, "")).replace(/\n/g, "<br>")}</div>
    `;
    cols[3].classList.remove("live-updated-cell");
    void cols[3].offsetWidth;
    cols[3].classList.add("live-updated-cell");

    // Đồng bộ lại tiêu đề ngày và tuần trên trang in
    const titleEl = document.querySelector(".plan-day-title");
    if (titleEl) {
      titleEl.textContent = `${plan.dayOfWeek}, ngày ${plan.date}`;
    }
    const subTitleEl = document.querySelector(".paper-subtitle");
    if (subTitleEl) {
      subTitleEl.textContent = `Tuần học: ${plan.weekRange || appState.weekRange} | Lớp: ${plan.ageName || "Mẫu giáo"}`;
    }
  }

  // Hàm debounce chống giật lag khi gõ văn bản nhanh
  function debounce(func, wait) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  // 5. THIẾT LẬP CÁC LẮNG NGHE SỰ KIỆN REAL-TIME (LIVE SYNC)
  function initRealtimeListeners() {
    // 1. Thay đổi Loại hoạt động (Select) -> Cập nhật badge trên Day Pill, inputs mẫu, chips, và TOÀN BỘ CỘT BÊN PHẢI REAL-TIME
    if (els.selectActivityType) {
      els.selectActivityType.addEventListener("change", (e) => {
        const actId = e.target.value;
        appState.selectedActivityType = actId;
        const defaultBadge = getBadgeForActivity(actId);

        // Cập nhật text badge tự động trên Day Pill và Nav Bar
        const day = appState.selectedDay;
        const pillBadge = document.getElementById(`badge-${day}`);
        if (pillBadge) pillBadge.textContent = defaultBadge;

        const navBtn = document.querySelector(`.week-nav-btn[data-navday="${day}"]`);
        if (navBtn) {
          const dayCode = { mon: "T2", tue: "T3", wed: "T4", thu: "T5", fri: "T6" }[day] || "T2";
          navBtn.textContent = `${dayCode}: ${defaultBadge}`;
        }

        // Tự động nạp mẫu bài dạy chuẩn đầu tiên của thể loại mới vào các ô input
        const presets = getPresetsForActivity(actId);
        if (presets && presets.length > 0) {
          const first = presets[0];
          if (els.inputLessonTitle) els.inputLessonTitle.value = first.title;
          if (els.inputNdtt) els.inputNdtt.value = first.ndtt;
          if (els.inputNdkh) els.inputNdkh.value = first.ndkh;
          appState.lessonTitle = first.title;
        }

        // Cập nhật chips gợi ý và update toàn bộ bảng bên phải
        updatePresetChips();
        updateActivePlanRealtime({ rebuildContent: true });
        showToast(`🎭 Đã chuyển sang: ${defaultBadge}`);
      });
    }

    // 2. Thay đổi Lứa tuổi (Select Age) -> Cập nhật thời lượng, lứa tuổi và mục tiêu bài dạy real-time
    if (els.selectAge) {
      els.selectAge.addEventListener("change", (e) => {
        appState.selectedAge = e.target.value;
        updateActivePlanRealtime({ rebuildContent: true });
        showToast(`👶 Đã đổi lứa tuổi sang: ${e.target.selectedOptions[0].text}`);
      });
    }

    // 3. Thay đổi NDTT (Nội dung trọng tâm) -> Cập nhật Cột 1 và bài dạy real-time
    if (els.inputNdtt) {
      els.inputNdtt.addEventListener("input", debounce(() => {
        updateActivePlanRealtime({ rebuildContent: false });
      }, 80));
    }

    // 4. Thay đổi NDKH (Nội dung kết hợp) -> Cập nhật Cột 1 real-time
    if (els.inputNdkh) {
      els.inputNdkh.addEventListener("input", debounce(() => {
        updateActivePlanRealtime({ rebuildContent: false });
      }, 80));
    }

    // 5. Thay đổi Tên bài dạy -> Cập nhật title, Cột 1 và tái sinh Mục đích, Chuẩn bị, Tiến trình real-time
    if (els.inputLessonTitle) {
      els.inputLessonTitle.addEventListener("input", debounce((e) => {
        appState.lessonTitle = e.target.value;
        const day = appState.selectedDay;
        if (appState.weeklyPlanCache[day]) {
          appState.weeklyPlanCache[day].title = e.target.value;
        }
        updateActivePlanRealtime({ rebuildContent: true });
      }, 120));
    }

    // 6. Thay đổi Ngày dạy -> Cập nhật header ngày real-time
    if (els.inputLessonDate) {
      els.inputLessonDate.addEventListener("input", (e) => {
        appState.selectedDate = e.target.value;
        const day = appState.selectedDay;
        if (appState.weeklyPlanCache[day]) {
          appState.weeklyPlanCache[day].date = e.target.value;
        }
        updateActivePlanRealtime({ rebuildContent: false });
      });
    }

    // 7. Thay đổi Chủ đề bài học -> Cập nhật realtime và tái sinh nội dung phù hợp chủ đề
    if (els.inputTopic) {
      const onTopicChange = debounce((e) => {
        appState.selectedTopic = e.target.value;
        const day = appState.selectedDay;
        if (appState.weeklyPlanCache[day]) {
          appState.weeklyPlanCache[day].topic = e.target.value;
        }
        updateActivePlanRealtime({ rebuildContent: true });
      }, 150);

      els.inputTopic.addEventListener("input", onTopicChange);
      els.inputTopic.addEventListener("change", onTopicChange);
    }
  }

  // Cập nhật nội dung Cột 1 ("Hoạt động"), Cột 2 ("Mục đích"), Cột 3 ("Chuẩn bị"), Cột 4 ("Cách tiến hành")
  // và tiêu đề trên bảng Kế hoạch giáo dục tức thì (Real-time)
  function updateActivePlanRealtime(options = { rebuildContent: false }) {
    const day = appState.selectedDay;
    const plan = appState.weeklyPlanCache[day];
    if (!plan) return;

    const data = window.PRE_SCHOOL_DATA;
    const actId = els.selectActivityType ? els.selectActivityType.value : plan.activityType;
    const actObj = data.activityTypes.find(a => a.id === actId) || { name: "Hoạt động Giáo dục" };
    const ndtt = (els.inputNdtt ? els.inputNdtt.value : plan.ndtt || "").trim();
    const ndkh = (els.inputNdkh ? els.inputNdkh.value : plan.ndkh || "").trim();
    const title = (els.inputLessonTitle ? els.inputLessonTitle.value : plan.title || "").trim();
    const topic = (els.inputTopic ? els.inputTopic.value : plan.topic || appState.selectedTopic).trim();
    const date = (els.inputLessonDate ? els.inputLessonDate.value : plan.date || appState.selectedDate).trim();
    const ageId = (els.selectAge ? els.selectAge.value : appState.selectedAge);
    const ageObj = data.ageGroups.find(a => a.id === ageId) || data.ageGroups[1];

    // Nếu yêu cầu tái tạo nội dung (khi đổi thể loại, click preset, đổi tên bài, đổi chủ đề, hoặc đổi lứa tuổi):
    if (options.rebuildContent) {
      const generated = aiEngine.generateOfflineLessonPlan({
        topic: topic || appState.selectedTopic,
        activityType: actId,
        actObj: actObj,
        dayOfWeek: plan.dayOfWeek,
        date: date,
        weekRange: appState.weekRange,
        ageObj: ageObj,
        lessonTitle: title || ndtt || actObj.name,
        teacherName: appState.teacherName,
        schoolName: appState.schoolName
      });

      plan.objectives = generated.objectives;
      plan.preparation = generated.preparation;
      plan.procedure = generated.procedure;
      plan.assessment = generated.assessment || plan.assessment || "";
      plan.adjustment = generated.adjustment || plan.adjustment || "";
      plan.ageId = ageObj.id;
      plan.ageName = ageObj.name;
      plan.duration = ageObj.duration;
    }

    plan.teacher = appState.teacherName;
    plan.school = appState.schoolName;
    plan.activityType = actId;
    plan.activityTypeName = actObj.name;
    plan.title = title || ndtt || actObj.name;
    plan.ndtt = ndtt;
    plan.ndkh = ndkh;
    plan.topic = topic;
    plan.date = date;
    plan.badge = getBadgeForActivity(actId);

    // Soạn text Cột 1 chuẩn quy cách
    let col1Text = `-${actObj.name}:`;
    if (ndtt) col1Text += `\n- NDTT: ${ndtt}`;
    if (ndkh) col1Text += `\n+ NDKH: ${ndkh}`;
    plan.activityCol = col1Text;

    // Lưu lại cache
    appState.weeklyPlanCache[day] = plan;
    appState.currentLessonPlan = plan;

    // Cập nhật trực tiếp vào DOM ô bảng bên phải
    if (appState.viewMode === "single") {
      updateTableColumnsDOM(plan);
    } else {
      renderLessonPlanPaper(plan, true);
    }
  }

  // 6. ĐIỀU HƯỚNG NGÀY TRONG TUẦN (THỨ 2 -> THỨ 6)
  function initDayPills() {
    const buttons = document.querySelectorAll(".day-pill-btn");
    buttons.forEach(btn => {
      btn.onclick = () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const day = btn.dataset.day;
        appState.selectedDay = day;

        // Tính ngày theo thứ trong tuần
        calculateDateForDay(day);

        // Đồng bộ form cấu hình real-time với ngày vừa chọn
        syncConfigFormWithDay(day);

        // Cập nhật lại chip gợi ý
        updatePresetChips();

        // Hiển thị bài dạy của ngày đó
        if (appState.weeklyPlanCache[day]) {
          const plan = appState.weeklyPlanCache[day];
          appState.currentLessonPlan = plan;
          renderLessonPlanPaper(plan, false);
          showToast(`Đã chuyển sang ${plan.dayOfWeek} (${plan.badge || plan.activityTypeName})`);
        }
      };
    });
  }

  // Tính ngày tương ứng cho từng thứ dựa vào ngày bắt đầu tuần
  function calculateDateForDay(dayId) {
    const offsets = { mon: 0, tue: 1, wed: 2, thu: 3, fri: 4 };
    const offset = offsets[dayId] !== undefined ? offsets[dayId] : 0;

    const rangeStr = els.inputWeekRange ? els.inputWeekRange.value : appState.weekRange;
    const parts = rangeStr.split("-").map(s => s.trim());
    const startDateStr = parts[0]; // e.g. "26/01/2026"

    const dateMatch = startDateStr.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    if (dateMatch) {
      const d = parseInt(dateMatch[1], 10);
      const m = parseInt(dateMatch[2], 10) - 1;
      const y = parseInt(dateMatch[3], 10);
      const targetDate = new Date(y, m, d + offset);

      const dd = String(targetDate.getDate()).padStart(2, "0");
      const mm = String(targetDate.getMonth() + 1).padStart(2, "0");
      const yyyy = targetDate.getFullYear();
      const resultDate = `${dd}/${mm}/${yyyy}`;

      appState.selectedDate = resultDate;
      if (els.inputLessonDate) els.inputLessonDate.value = resultDate;
      return resultDate;
    }

    if (els.inputLessonDate) appState.selectedDate = els.inputLessonDate.value;
    return appState.selectedDate;
  }

  // Xử lý bộ chọn khoảng ngày (Week Preset)
  function initWeekPresets() {
    if (els.selectWeekPreset && els.inputWeekRange) {
      els.selectWeekPreset.onchange = () => {
        const val = els.selectWeekPreset.value;
        if (val !== "custom") {
          els.inputWeekRange.value = val;
          appState.weekRange = val;
          calculateDateForDay(appState.selectedDay);
          updateActivePlanRealtime({ rebuildContent: false });
          showToast(`Đã chọn khoảng tuần: ${val}`);
        } else {
          els.inputWeekRange.focus();
        }
      };

      els.inputWeekRange.onchange = () => {
        appState.weekRange = els.inputWeekRange.value;
        calculateDateForDay(appState.selectedDay);
        updateActivePlanRealtime({ rebuildContent: false });
      };
    }

    if (els.btnClearTopic && els.inputTopic) {
      els.btnClearTopic.onclick = () => {
        els.inputTopic.value = "";
        els.inputTopic.placeholder = "Gõ tên chủ đề mới của cô vào đây...";
        els.inputTopic.focus();
        appState.selectedTopic = "";
        updateActivePlanRealtime({ rebuildContent: false });
        showToast("✏️ Cô hãy gõ chủ đề mới!");
      };
    }
  }

  // Trạng thái Dual-Engine Badge
  function updateEngineStatusBadge() {
    if (!els.engineStatusPill) return;
    if (aiEngine.hasValidApiKey() && navigator.onLine) {
      els.engineStatusPill.className = "engine-status-pill online";
      els.engineStatusPill.innerHTML = `<span>🟢</span> Gemini Cloud AI`;
      els.engineStatusPill.title = "Đang kết nối Gemini Generative AI tạo giáo án cá nhân hóa mới";
    } else {
      els.engineStatusPill.className = "engine-status-pill offline";
      els.engineStatusPill.innerHTML = `<span>⚡</span> Offline 0đ (Siêu tốc)`;
      els.engineStatusPill.title = "Chế độ Sư phạm Heuristic Offline: 0đ máy chủ, không cần mạng, chạy tức thì";
    }
  }

  // 7. NHẬN DẠNG GIỌNG NÓI TIẾNG VIỆT
  function initSpeechInput() {
    if (!els.btnMicVoice) return;

    els.btnMicVoice.onclick = () => {
      speechSystem.startListening({
        onStart: () => {
          els.btnMicVoice.classList.add("recording");
          els.btnMicVoice.title = "Đang lắng nghe cô giáo nói...";
          showToast("🎙️ Đang nghe... Cô hãy nói tên bài dạy!");
        },
        onResult: (text) => {
          if (els.inputLessonTitle) {
            els.inputLessonTitle.value = text;
            appState.lessonTitle = text;
            if (els.inputNdtt) els.inputNdtt.value = text;
            updateActivePlanRealtime({ rebuildContent: true });
            showToast(`Đã nhận diện: "${text}"`);
          }
        },
        onError: (err) => {
          showToast(`Lỗi micro: ${err}`);
        },
        onEnd: () => {
          els.btnMicVoice.classList.remove("recording");
          els.btnMicVoice.title = "Nói tên bài dạy bằng giọng nói tiếng Việt";
        }
      });
    };
  }

  // 8. TẠO KẾ HOẠCH BÀI DẠY BẰNG AI THEO CONFIG HIỆN TẠI
  async function generateCurrentDayLesson() {
    appState.selectedAge = els.selectAge ? els.selectAge.value : appState.selectedAge;
    appState.weekRange = (els.inputWeekRange ? els.inputWeekRange.value : appState.weekRange).trim();
    appState.selectedDate = (els.inputLessonDate ? els.inputLessonDate.value : appState.selectedDate).trim();
    appState.selectedActivityType = els.selectActivityType ? els.selectActivityType.value : appState.selectedActivityType;
    appState.selectedTopic = (els.inputTopic ? els.inputTopic.value : appState.selectedTopic).trim() || "Thế giới Động vật";
    appState.lessonTitle = (els.inputLessonTitle ? els.inputLessonTitle.value : "").trim() || "Bài học mầm non bổ ích";

    const daysNameMap = { mon: "Thứ Hai", tue: "Thứ Ba", wed: "Thứ Tư", thu: "Thứ Năm", fri: "Thứ Sáu" };
    const currentDayName = daysNameMap[appState.selectedDay] || "Thứ Hai";

    if (els.btnGenerateAll) {
      els.btnGenerateAll.disabled = true;
      els.btnGenerateAll.innerHTML = `<span>⏳</span> Đang Tạo Giáo Án Chuẩn 4 Cột...`;
    }

    try {
      showToast(`✨ AI đang xây dựng Kế hoạch ${currentDayName} (${appState.selectedActivityType})...`);

      const lessonPlan = await aiEngine.generateLessonPlan({
        topic: appState.selectedTopic,
        activityType: appState.selectedActivityType,
        dayOfWeek: currentDayName,
        date: appState.selectedDate,
        weekRange: appState.weekRange,
        ageId: appState.selectedAge,
        lessonTitle: appState.lessonTitle,
        teacherName: appState.teacherName,
        schoolName: appState.schoolName
      });

      // Bổ sung thông tin sư phạm và NDTT/NDKH
      lessonPlan.teacher = appState.teacherName;
      lessonPlan.school = appState.schoolName;
      lessonPlan.badge = getBadgeForActivity(appState.selectedActivityType);
      lessonPlan.ndtt = els.inputNdtt ? els.inputNdtt.value : lessonPlan.title;
      lessonPlan.ndkh = els.inputNdkh ? els.inputNdkh.value : "";

      // Lưu vào cache tuần và cập nhật hiển thị
      appState.weeklyPlanCache[appState.selectedDay] = lessonPlan;
      appState.currentLessonPlan = lessonPlan;
      renderLessonPlanPaper(lessonPlan, false);

      // Hiệu ứng ăn mừng nhẹ
      gamesSystem.triggerConfetti();
      speechSystem.playCorrectSound();
      showToast(`🎉 Đã tạo Kế hoạch bài dạy ${currentDayName} thành công!`);

    } catch (error) {
      console.error("[KID-LESSON AI] Lỗi tạo bài dạy:", error);
      showToast("Lỗi: " + error.message);
    } finally {
      if (els.btnGenerateAll) {
        els.btnGenerateAll.disabled = false;
        els.btnGenerateAll.innerHTML = `<span>✨</span> Bấm Tạo Kế Hoạch Bài Dạy Bằng AI`;
      }
    }
  }

  // 9. RENDER BẢNG KẾ HOẠCH BÀI DẠY (4 CỘT CHUẨN FILE MẪU CỦA TRƯỜNG)
  function renderLessonPlanPaper(plan, isFullWeek = false) {
    if (!els.lessonDisplayContainer) return;

    appState.viewMode = isFullWeek ? "full_week" : "single";

    // Lấy badge của từng ngày để hiển thị trên thanh điều hướng đỉnh
    const getDayBadge = (d) => {
      if (appState.weeklyPlanCache[d] && appState.weeklyPlanCache[d].badge) {
        return appState.weeklyPlanCache[d].badge;
      }
      return defaultDayMeta[d] ? defaultDayMeta[d].badge : "Học";
    };

    // 1. THANH CHUYỂN NGÀY VÀ CÁC NÚT THAO TÁC TRÊN ĐỈNH
    const toolbarHtml = `
      <div class="week-nav-bar">
        <div class="week-nav-days">
          <button type="button" class="week-nav-btn ${!isFullWeek && plan.dayOfWeek === 'Thứ Hai' ? 'active' : ''}" data-navday="mon">
            T2: ${getDayBadge('mon')}
          </button>
          <button type="button" class="week-nav-btn ${!isFullWeek && plan.dayOfWeek === 'Thứ Ba' ? 'active' : ''}" data-navday="tue">
            T3: ${getDayBadge('tue')}
          </button>
          <button type="button" class="week-nav-btn ${!isFullWeek && plan.dayOfWeek === 'Thứ Tư' ? 'active' : ''}" data-navday="wed">
            T4: ${getDayBadge('wed')}
          </button>
          <button type="button" class="week-nav-btn ${!isFullWeek && plan.dayOfWeek === 'Thứ Năm' ? 'active' : ''}" data-navday="thu">
            T5: ${getDayBadge('thu')}
          </button>
          <button type="button" class="week-nav-btn ${!isFullWeek && plan.dayOfWeek === 'Thứ Sáu' ? 'active' : ''}" data-navday="fri">
            T6: ${getDayBadge('fri')}
          </button>
          <button type="button" class="week-nav-btn btn-all-week ${isFullWeek ? 'active' : ''}" id="btn-nav-full-week">
            📋 Xem Toàn Tuần (5 Ngày)
          </button>
        </div>

        <div class="toolbar-btns">
          <button class="btn-tool btn-save-library" id="btn-save-library" title="Lưu vào Thư viện của cô">
            <span>💾</span> Lưu Thư Viện
          </button>
          <button class="btn-tool btn-export-docx" id="btn-export-docx" title="Xuất file Word (.doc) chuẩn bảng 4 cột kẻ ô">
            <span>📄</span> Xuất Word (.doc)
          </button>
          <button class="btn-tool btn-canva-slide" id="btn-open-canva-studio" title="Studio Slide Canva & Trình Chiếu Bài Giảng AI">
            <span>🎨</span> Tạo Slide
          </button>
        </div>
      </div>
    `;

    // 2. TẠO NỘI DUNG TỪNG NGÀY HOẶC CẢ 5 NGÀY
    let paperHtml = "";

    if (isFullWeek) {
      const daysKeys = ["mon", "tue", "wed", "thu", "fri"];
      const daysContent = daysKeys.map(k => {
        const dayPlan = appState.weeklyPlanCache[k] || plan;
        return renderSingleDayTableHtml(dayPlan);
      }).join("<div style='margin: 30px 0; border-top: 2px dashed #cbd5e1;'></div>");

      paperHtml = `
        <div class="lesson-paper" id="printable-lesson-paper" contenteditable="true" spellcheck="false" title="Bấm vào văn bản bất kỳ để chỉnh sửa trực tiếp">
          ${renderAdministrativeHeader(plan)}
          <h1 class="paper-title">KẾ HOẠCH GIÁO DỤC TUẦN (5 NGÀY CHUẨN)</h1>
          <div class="paper-subtitle">
            Chủ đề: <strong>${plan.topic || plan.topicName}</strong><br>
            Khoảng thời gian: <strong>${appState.weekRange}</strong> | Lứa tuổi: <strong>${plan.ageName || "Mẫu giáo"}</strong><br>
            Giáo viên phụ trách: <strong>${plan.teacher || appState.teacherName}</strong>
          </div>
          ${daysContent}
          ${renderSignatureTable(plan.teacher || appState.teacherName)}
        </div>
      `;
    } else {
      paperHtml = `
        <div class="lesson-paper" id="printable-lesson-paper" contenteditable="true" spellcheck="false" title="Bấm vào văn bản bất kỳ để chỉnh sửa trực tiếp">
          ${renderAdministrativeHeader(plan)}
          <div class="paper-subtitle" style="text-align: right; font-style: italic; margin-bottom: 8px;">
            Tuần học: ${plan.weekRange || appState.weekRange} | Lớp: ${plan.ageName || "Mẫu giáo"} | GV: <strong>${plan.teacher || appState.teacherName}</strong>
          </div>
          ${renderSingleDayTableHtml(plan)}
          ${renderSignatureTable(plan.teacher || appState.teacherName)}
        </div>
      `;
    }

    els.lessonDisplayContainer.innerHTML = toolbarHtml + paperHtml;

    // Gắn sự kiện các nút
    bindLessonToolbarActions(plan, isFullWeek);
    bindWeekNavButtons();
  }

  // Render tiêu ngữ hành chính quản lý nhà nước
  function renderAdministrativeHeader(plan) {
    const school = (plan && plan.school) || appState.schoolName || "Trường Mầm non Phúc Sơn B";
    const schoolUpper = school.toUpperCase();

    // Lấy tên địa phương từ trường học (ví dụ: Trường Mầm non Phúc Sơn B -> Phúc Sơn)
    let place = school.replace(/^(Trường\s+)?(Mầm\s+non\s+|MN\s+)/i, "").trim() || "Phúc Sơn";
    const commune = place.replace(/\s+[AB]$/i, "");

    const upperAgency = commune.toLowerCase().includes("phúc sơn")
      ? "ỦY BAN NHÂN DÂN XÃ PHÚC SƠN"
      : `PHÒNG GIÁO DỤC VÀ ĐÀO TẠO`;

    const now = new Date();
    const dateStr = `${place}, ngày ${now.getDate()} tháng ${now.getMonth() + 1} năm ${now.getFullYear()}`;

    return `
      <table class="paper-header-table" style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
        <tr>
          <td style="width: 50%; vertical-align: top; text-align: left; font-size: 11pt;">
            <strong>${upperAgency}</strong><br>
            <strong>${schoolUpper}</strong><br>
            <em>Tổ Chuyên Môn Khối Mầm Non</em>
          </td>
          <td style="width: 50%; vertical-align: top; text-align: right; font-size: 11pt;">
            <strong>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</strong><br>
            <strong>Độc lập - Tự do - Hạnh phúc</strong><br>
            <em>${dateStr}</em>
          </td>
        </tr>
      </table>
    `;
  }

  // Render 1 Bảng 4 Cột chuẩn cho 1 ngày
  function renderSingleDayTableHtml(p) {
    const actColText = p.activityCol || `-${p.activityTypeName || 'Hoạt động'}:\n- NDTT: ${p.ndtt || p.title}${p.ndkh ? '\n+ NDKH: ' + p.ndkh : ''}`;
    const knowList = (p.objectives && p.objectives.knowledge) ? p.objectives.knowledge : [];
    const skillList = (p.objectives && p.objectives.skills) ? p.objectives.skills : [];
    const attList = (p.objectives && p.objectives.attitudes) ? p.objectives.attitudes : [];

    const teachPrep = (p.preparation && p.preparation.teacher) ? p.preparation.teacher : [];
    const studPrep = (p.preparation && p.preparation.students) ? p.preparation.students : [];

    const intro = (p.procedure && p.procedure.intro) ? p.procedure.intro : "1. Ổn định tổ chức:";
    const instruction = (p.procedure && p.procedure.instruction) ? p.procedure.instruction : "2. Phương pháp, hình thức tổ chức:";
    const conclusion = (p.procedure && p.procedure.conclusion) ? p.procedure.conclusion : "3. Kết thúc:";

    return `
      <div class="plan-day-wrapper">
        <h2 class="plan-day-title">
          ${p.dayOfWeek}, ngày ${p.date}
        </h2>

        <table class="official-plan-table" border="1" cellspacing="0" cellpadding="8">
          <thead>
            <tr>
              <th style="width: 18%; text-align: center; background: #f8fafc;">Hoạt động</th>
              <th style="width: 22%; text-align: center; background: #f8fafc;">Mục đích</th>
              <th style="width: 20%; text-align: center; background: #f8fafc;">Chuẩn bị</th>
              <th style="width: 40%; text-align: center; background: #f8fafc;">Cách tiến hành</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <!-- CỘT 1: HOẠT ĐỘNG -->
              <td style="vertical-align: top;">
                <div class="cell-text-content" style="font-weight: 500;">
                  ${escapeHtml(actColText).replace(/\n/g, "<br>")}
                </div>
              </td>

              <!-- CỘT 2: MỤC ĐÍCH -->
              <td style="vertical-align: top;">
                <div class="cell-block-title">1. Kiến thức:</div>
                <ul class="cell-list-content">
                  ${knowList.map(k => `<li>${escapeHtml(k)}</li>`).join("")}
                </ul>

                <div class="cell-block-title">2. Kỹ năng:</div>
                <ul class="cell-list-content">
                  ${skillList.map(s => `<li>${escapeHtml(s)}</li>`).join("")}
                </ul>

                <div class="cell-block-title">3. Thái độ:</div>
                <ul class="cell-list-content">
                  ${attList.map(a => `<li>${escapeHtml(a)}</li>`).join("")}
                </ul>
              </td>

              <!-- CỘT 3: CHUẨN BỊ -->
              <td style="vertical-align: top;">
                <div class="cell-block-title">1. Đồ dùng của cô:</div>
                <ul class="cell-list-content">
                  ${teachPrep.map(t => `<li>${escapeHtml(t)}</li>`).join("")}
                </ul>

                <div class="cell-block-title">2. Đồ dùng của trẻ:</div>
                <ul class="cell-list-content">
                  ${studPrep.map(s => `<li>${escapeHtml(s)}</li>`).join("")}
                </ul>
              </td>

              <!-- CỘT 4: CÁCH TIẾN HÀNH -->
              <td style="vertical-align: top;">
                <div class="cell-block-title">1. Ổn định tổ chức:</div>
                <div class="cell-text-content">${escapeHtml(intro.replace(/^1\.\s*Ổn định tổ chức:\s*/i, "")).replace(/\n/g, "<br>")}</div>

                <div class="cell-block-title" style="margin-top: 10px;">2. Phương pháp, hình thức tổ chức:</div>
                <div class="cell-text-content">${escapeHtml(instruction.replace(/^2\.\s*Phương pháp[^\n]*\n?/i, "")).replace(/\n/g, "<br>")}</div>

                <div class="cell-block-title" style="margin-top: 10px;">3. Kết thúc:</div>
                <div class="cell-text-content">${escapeHtml(conclusion.replace(/^3\.\s*Kết thúc:\s*/i, "")).replace(/\n/g, "<br>")}</div>
              </td>
            </tr>

            <!-- 2 HÀNG CUỐI: ĐÁNH GIÁ/NHẬN XÉT & CHỈNH SỬA -->
            <tr>
              <td class="review-row-label" style="font-weight: bold; background: #fafafa;">
                Đánh giá/Nhận xét
              </td>
              <td colspan="3" class="review-row-content" style="padding: 10px;">
                ${escapeHtml(p.assessment || "Trẻ tham gia đầy đủ, hào hứng, hoàn thành tốt các mục tiêu kiến thức và kỹ năng trong tiết dạy.")}
              </td>
            </tr>
            <tr>
              <td class="review-row-label" style="font-weight: bold; background: #fafafa;">
                Chỉnh sửa
              </td>
              <td colspan="3" class="review-row-content" style="padding: 10px;">
                ${escapeHtml(p.adjustment || "")}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }

  // Render chữ ký cuối bài
  function renderSignatureTable(teacherName) {
    const actualTeacher = teacherName || appState.teacherName || "Cô giáo Trường Mầm non Phúc Sơn B";
    return `
      <table class="paper-signature-table" style="width: 100%; margin-top: 28px; border-collapse: collapse; font-family: 'Times New Roman', Times, serif;">
        <tr>
          <td style="width: 50%; text-align: center; vertical-align: top; font-size: 12pt;">
            <strong>DUYỆT CỦA BAN GIÁM HIỆU / TỔ CHUYÊN MÔN</strong><br>
            <em>(Ký và ghi rõ họ tên)</em><br><br><br><br><br>
            <strong>Hiệu trưởng / Tổ phó CM</strong>
          </td>
          <td style="width: 50%; text-align: center; vertical-align: top; font-size: 12pt;">
            <strong>GIÁO VIÊN SOẠN BÀI</strong><br>
            <em>(Ký và ghi rõ họ tên)</em><br><br><br><br><br>
            <strong>${actualTeacher}</strong>
          </td>
        </tr>
      </table>
    `;
  }

  // Thoát chuỗi an toàn chống lỗi HTML
  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // 10. GẮN SỰ KIỆN CÁC NÚT ĐIỀU HƯỚNG TRÊN ĐỈNH BÀI GIẢNG (WEEK NAV)
  function bindWeekNavButtons() {
    const navButtons = document.querySelectorAll(".week-nav-btn[data-navday]");
    navButtons.forEach(btn => {
      btn.onclick = () => {
        const day = btn.dataset.navday;
        const pillBtn = document.getElementById(`day-pill-${day}`);
        if (pillBtn) pillBtn.click();
      };
    });

    const btnAllWeek = document.getElementById("btn-nav-full-week");
    if (btnAllWeek) {
      btnAllWeek.onclick = () => {
        renderLessonPlanPaper(appState.currentLessonPlan, true);
        showToast("📋 Đang hiển thị trọn bộ Kế hoạch tuần 5 ngày!");
      };
    }
  }

  // 11. GẮN SỰ KIỆN TOOLBAR BÀI DẠY (XUẤT WORD, IN, LƯU, SAO CHÉP)
  function bindLessonToolbarActions(plan, isFullWeek) {
    const btnRead = document.getElementById("btn-read-lesson-title");
    if (btnRead) {
      btnRead.onclick = () => {
        speechSystem.speakText(`Đề tài: ${plan.title}. Ngày dạy: ${plan.dayOfWeek}`);
      };
    }

    const btnPrint = document.getElementById("btn-print-lesson");
    if (btnPrint) {
      btnPrint.onclick = () => {
        window.print();
      };
    }

    const btnCopy = document.getElementById("btn-copy-lesson");
    if (btnCopy) {
      btnCopy.onclick = () => {
        const textContent = document.getElementById("printable-lesson-paper").innerText;
        navigator.clipboard.writeText(textContent).then(() => {
          showToast("📋 Đã sao chép toàn bộ kế hoạch bài dạy vào Clipboard!");
        });
      };
    }

    const btnSave = document.getElementById("btn-save-library");
    if (btnSave) {
      btnSave.onclick = () => {
        saveLessonToLibrary(plan);
      };
    }

    const btnDocx = document.getElementById("btn-export-docx");
    if (btnDocx) {
      btnDocx.onclick = () => {
        exportLessonToWordFile(plan, isFullWeek);
      };
    }

    const btnCanva = document.getElementById("btn-open-canva-studio");
    if (btnCanva) {
      btnCanva.onclick = () => {
        openCanvaStudio(plan);
      };
    }

    const btnSmartTv = document.getElementById("btn-open-smart-tv");
    if (btnSmartTv) {
      btnSmartTv.onclick = () => {
        if (window.CanvaSlideBuilder) {
          window.CanvaSlideBuilder.launchSmartTvPresentation(plan, 0);
        }
      };
    }
  }

  // 11.B. MỞ HỘP THOẠI CANVA SLIDE STUDIO
  function openCanvaStudio(plan) {
    if (!plan) return;
    if (!window.CanvaSlideBuilder) {
      showToast("Lỗi: CanvaSlideBuilder chưa sẵn sàng.");
      return;
    }

    // Hiển thị thông tin bài dạy
    if (els.canvaPreviewDayBadge) {
      els.canvaPreviewDayBadge.textContent = `${plan.dayOfWeek} • ${plan.badge || plan.activityTypeName || "Tiết Học"}`;
    }
    if (els.canvaPreviewTitle) {
      els.canvaPreviewTitle.textContent = plan.title || "Kế hoạch bài dạy mầm non";
    }
    if (els.canvaPreviewSub) {
      els.canvaPreviewSub.textContent = `Chủ đề: ${plan.topic || plan.topicName || "Bé khám phá"} | Lớp: ${plan.ageName || "Mẫu giáo"} | GV: ${plan.teacher || appState.teacherName}`;
    }

    // Trích xuất 6 slide và tạo thumbnail xem trước kèm ảnh minh họa
    const slides = window.CanvaSlideBuilder.extractSlides(plan);
    if (els.canvaSlidesThumbnails) {
      els.canvaSlidesThumbnails.innerHTML = slides.map((s, idx) => `
        <div class="canva-slide-thumb-card" style="border-top: 4px solid #${s.accentColor || '4f46e5'};">
          <div class="thumb-img-box">
            <img src="${s.image}" alt="Slide ${s.index}" class="thumb-img" id="thumb-preview-img-${idx}" />
            <label class="btn-thumb-change-img" title="Chọn ảnh minh họa khác từ máy tính cho Slide này">
              <span>📷 Đổi ảnh</span>
              <input type="file" accept="image/*" class="input-slide-change-img" data-slide-idx="${idx}" style="display:none;" />
            </label>
          </div>
          <div class="thumb-header">
            <span class="thumb-num">Slide ${s.index}</span>
            <span class="thumb-tag" style="background: #${s.bgColor || 'eef2ff'}; color: #${s.accentColor || '4f46e5'};">${s.tag}</span>
          </div>
          <div class="thumb-title">${escapeHtml(s.title)}</div>
          <div class="thumb-desc">${escapeHtml(s.subtitle || s.content || "").slice(0, 80)}...</div>
          <button type="button" class="btn-thumb-preview" data-slide-idx="${idx}">
            <span>▶️</span> Chiếu Slide Này
          </button>
        </div>
      `).join("");

      // Gắn sự kiện đổi ảnh tải lên từ máy tính
      els.canvaSlidesThumbnails.querySelectorAll(".input-slide-change-img").forEach(input => {
        input.onchange = (e) => {
          const file = e.target.files && e.target.files[0];
          if (!file) return;
          const sIdx = parseInt(input.dataset.slideIdx, 10);
          const reader = new FileReader();
          reader.onload = (re) => {
            const dataUrl = re.target.result;
            if (window.CanvaSlideBuilder) {
              window.CanvaSlideBuilder.updateSlideImage(sIdx, dataUrl);
            }
            const imgEl = document.getElementById(`thumb-preview-img-${sIdx}`);
            if (imgEl) imgEl.src = dataUrl;
            showToast(`✅ Đã thay ảnh minh họa cho Slide ${sIdx + 1}!`);
          };
          reader.readAsDataURL(file);
        };
      });

      // Gắn sự kiện các nút xem slide đơn lẻ
      els.canvaSlidesThumbnails.querySelectorAll(".btn-thumb-preview").forEach(btn => {
        btn.onclick = (e) => {
          e.stopPropagation();
          const idx = parseInt(btn.dataset.slideIdx, 10);
          if (els.modalCanvaStudio) els.modalCanvaStudio.classList.remove("active");
          window.CanvaSlideBuilder.launchSmartTvPresentation(plan, idx);
        };
      });
    }

    if (els.modalCanvaStudio) {
      els.modalCanvaStudio.classList.add("active");
    }
  }

  // Khởi tạo các sự kiện tĩnh cho Modal Canva Studio & Smart TV
  function initCanvaStudioModals() {
    if (els.btnCloseCanvaStudio && els.modalCanvaStudio) {
      els.btnCloseCanvaStudio.onclick = () => els.modalCanvaStudio.classList.remove("active");
    }
    if (els.btnCloseCanvaFooter && els.modalCanvaStudio) {
      els.btnCloseCanvaFooter.onclick = () => els.modalCanvaStudio.classList.remove("active");
    }

    // Nút khôi phục ảnh minh họa gốc
    const btnResetSlideImages = document.getElementById("btn-reset-slide-images");
    if (btnResetSlideImages) {
      btnResetSlideImages.onclick = () => {
        if (window.CanvaSlideBuilder && appState.currentLessonPlan) {
          window.CanvaSlideBuilder.resetSlideImages();
          openCanvaStudio(appState.currentLessonPlan);
          showToast("🔄 Đã khôi phục toàn bộ ảnh minh họa mầm non ban đầu!");
        }
      };
    }

    // Tải file PPTX kéo thả Canva
    if (els.btnDownloadPptxCanva) {
      els.btnDownloadPptxCanva.onclick = async () => {
        if (!window.CanvaSlideBuilder || !appState.currentLessonPlan) return;
        try {
          showToast("⏳ Đang xuất file PowerPoint (.pptx) chuẩn Canva 16:9...");
          const fileName = await window.CanvaSlideBuilder.exportPptx(appState.currentLessonPlan);
          showToast(`🎉 Đã tải file: ${fileName}! Cô hãy kéo thả file này vào Canva.`);
        } catch (err) {
          console.error("Lỗi xuất PPTX:", err);
          showToast("Lỗi tạo file PPTX: " + err.message);
        }
      };
    }

    // Mở Canva
    if (els.btnOpenCanvaWeb) {
      els.btnOpenCanvaWeb.onclick = () => {
        if (window.CanvaSlideBuilder) {
          window.CanvaSlideBuilder.openCanva();
        } else {
          window.open("https://www.canva.com/", "_blank");
        }
      };
    }

    // Bắt đầu trình chiếu Smart TV
    if (els.btnLaunchSmartTv) {
      els.btnLaunchSmartTv.onclick = () => {
        if (els.modalCanvaStudio) els.modalCanvaStudio.classList.remove("active");
        if (window.CanvaSlideBuilder && appState.currentLessonPlan) {
          window.CanvaSlideBuilder.launchSmartTvPresentation(appState.currentLessonPlan, 0);
        }
      };
    }

    // Sao chép dàn ý Canva Magic AI
    if (els.btnCopyCanvaPrompt) {
      els.btnCopyCanvaPrompt.onclick = () => {
        if (!window.CanvaSlideBuilder || !appState.currentLessonPlan) return;
        const prompt = window.CanvaSlideBuilder.generateCanvaPrompt(appState.currentLessonPlan);
        navigator.clipboard.writeText(prompt).then(() => {
          showToast("📋 Đã sao chép Dàn ý bài giảng Canva vào Clipboard!");
        }).catch(() => {
          showToast("Vui lòng cho phép quyền truy cập Clipboard.");
        });
      };
    }

    // Smart TV Player Events
    if (els.btnTvClose) {
      els.btnTvClose.onclick = () => {
        if (window.CanvaSlideBuilder) window.CanvaSlideBuilder.closeSmartTvPresentation();
      };
    }
    if (els.btnTvPrev) {
      els.btnTvPrev.onclick = () => {
        if (window.CanvaSlideBuilder) window.CanvaSlideBuilder.prevTvSlide();
      };
    }
    if (els.btnTvNext) {
      els.btnTvNext.onclick = () => {
        if (window.CanvaSlideBuilder) window.CanvaSlideBuilder.nextTvSlide();
      };
    }
    if (els.btnTvSpeak) {
      els.btnTvSpeak.onclick = () => {
        if (window.CanvaSlideBuilder) window.CanvaSlideBuilder.speakCurrentSlide();
      };
    }
    if (els.btnTvFullscreen) {
      els.btnTvFullscreen.onclick = () => {
        const tvElem = document.getElementById("modal-smart-tv-presentation");
        if (!tvElem) return;
        if (!document.fullscreenElement) {
          tvElem.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
      };
    }
  }

  // 12. XUẤT FILE WORD (.DOC) CHUẨN THỂ THỨC NGHỊ ĐỊNH 30/2020/NĐ-CP KÈM BẢNG KẺ Ô 4 CỘT
  function exportLessonToWordFile(plan, isFullWeek = false) {
    showToast("📄 Đang khởi tạo file Word (.doc) chuẩn bảng kẻ ô 4 cột...");

    const paperEl = document.getElementById("printable-lesson-paper");
    const contentHtml = paperEl ? paperEl.innerHTML : "";

    const schoolClean = (plan.school || appState.schoolName || "MN_Phuc_Son_B").replace(/[^a-zA-Z0-9\u00C0-\u1EF9]/g, "_").slice(0, 30);
    const titlePrefix = isFullWeek ? "Ke_Hoach_Tuan" : `Giao_An_${plan.dayOfWeek}`;

    const wordDocument = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' 
            xmlns:w='urn:schemas-microsoft-com:office:word' 
            xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset='utf-8'>
        <title>${titlePrefix}_${schoolClean}</title>
        <!--[if gte mso 9]>
        <xml>
          <w:WordDocument>
            <w:View>Print</w:View>
            <w:Zoom>100</w:Zoom>
            <w:DoNotOptimizeForBrowser/>
          </w:WordDocument>
        </xml>
        <![endif]-->
        <style>
          @page {
            size: 210mm 297mm;
            margin: 20mm 15mm 20mm 20mm;
          }
          body {
            font-family: 'Times New Roman', Times, serif;
            font-size: 13pt;
            line-height: 1.45;
            color: #000;
          }
          table { width: 100%; border-collapse: collapse; }
          .official-plan-table { border: 1pt solid #000; margin-bottom: 20pt; }
          .official-plan-table th, .official-plan-table td { border: 1pt solid #000; padding: 6pt; vertical-align: top; }
          .official-plan-table th { background-color: #f2f2f2; font-weight: bold; text-align: center; }
          .plan-day-title { font-size: 14pt; font-weight: bold; text-align: center; margin: 15pt 0 10pt 0; }
          .paper-title { font-size: 16pt; font-weight: bold; text-align: center; }
          .paper-subtitle { text-align: center; font-size: 12pt; font-style: italic; margin-bottom: 15pt; }
          .cell-block-title { font-weight: bold; margin-top: 4pt; }
          ul { margin: 2pt 0 4pt 15pt; padding: 0; }
          li { margin-bottom: 2pt; }
          .week-nav-bar { display: none !important; }
        </style>
      </head>
      <body>
        ${contentHtml}
      </body>
      </html>
    `;

    const blob = new Blob(["\ufeff", wordDocument], {
      type: "application/msword"
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const safeName = (plan.title || "Giao_An").replace(/[^a-zA-Z0-9\u00C0-\u1EF9]/g, "_").slice(0, 30);
    link.href = url;
    link.download = `${titlePrefix}_${safeName}_${schoolClean}.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    showToast("✅ Đã tải file Word Kế hoạch giáo dục thành công!");
  }

  // 13. THƯ VIỆN BÀI DẠY (SAVE / LOAD / DELETE)
  function getLibraryLessons() {
    try {
      const raw = localStorage.getItem("kid_lesson_saved_library");
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveLessonToLibrary(plan) {
    const list = getLibraryLessons();
    const item = {
      id: "lesson_" + Date.now(),
      savedAt: new Date().toLocaleDateString("vi-VN"),
      plan: plan
    };
    list.unshift(item);
    localStorage.setItem("kid_lesson_saved_library", JSON.stringify(list));
    showToast("💾 Đã lưu Kế hoạch giáo dục vào Thư viện của cô!");
  }

  function renderSavedLessonLibrary() {
    const list = getLibraryLessons();
    if (!els.libraryList) return;

    if (list.length === 0) {
      els.libraryList.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #64748b;">
          <p style="font-size: 2.5rem; margin-bottom: 10px;">📂</p>
          <h3>Thư viện chưa có bài dạy nào được lưu.</h3>
          <p>Sau khi tạo kế hoạch bài dạy, cô hãy bấm "Lưu Thư Viện" để lưu trữ kho bài giảng nhé!</p>
        </div>
      `;
      return;
    }

    els.libraryList.innerHTML = list.map(item => `
      <div class="saved-lesson-card">
        <div class="saved-meta-row">
          <span>📅 ${item.savedAt}</span>
          <span>👶 ${item.plan.ageName || "Mẫu giáo"}</span>
          <span>🗓️ ${item.plan.dayOfWeek || "Kế hoạch ngày"}</span>
        </div>
        <h4 class="saved-title">${item.plan.title}</h4>
        <p style="font-size: 0.85rem; color: #64748b; margin-bottom: 12px;">
          Chủ đề: <strong>${item.plan.topic || item.plan.topicName || "Chủ đề GDMN"}</strong>
        </p>
        <div class="saved-actions">
          <button class="btn-tool btn-load-saved" data-id="${item.id}" style="flex:1;">
            <span>📖</span> Mở Xem
          </button>
          <button class="btn-tool btn-delete-saved" data-id="${item.id}" style="color: #e11d48;">
            <span>🗑️</span> Xóa
          </button>
        </div>
      </div>
    `).join("");

    // Gắn sự kiện Mở và Xóa
    els.libraryList.querySelectorAll(".btn-load-saved").forEach(btn => {
      btn.onclick = () => {
        const id = btn.dataset.id;
        const found = list.find(l => l.id === id);
        if (found) {
          appState.currentLessonPlan = found.plan;
          renderLessonPlanPaper(found.plan, false);
          const tabBtn = document.querySelector('.nav-tab-btn[data-tab="tab-lesson-plan"]');
          if (tabBtn) tabBtn.click();
          showToast(`Đã mở bài: "${found.plan.title}"`);
        }
      };
    });

    els.libraryList.querySelectorAll(".btn-delete-saved").forEach(btn => {
      btn.onclick = () => {
        const id = btn.dataset.id;
        if (confirm("Cô có chắc muốn xóa bài này khỏi Thư viện không?")) {
          const newList = list.filter(l => l.id !== id);
          localStorage.setItem("kid_lesson_saved_library", JSON.stringify(newList));
          renderSavedLessonLibrary();
          showToast("Đã xóa bài.");
        }
      };
    });
  }

  // Sao lưu và phục hồi JSON
  function initLibraryBackup() {
    if (els.btnExportLibraryJson) {
      els.btnExportLibraryJson.onclick = () => {
        const list = getLibraryLessons();
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(list, null, 2));
        const downloadAnchor = document.createElement("a");
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", `Sao_Luu_Giao_An_MN_Dong_Tam_${Date.now()}.json`);
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
        showToast("✅ Đã xuất file sao lưu thư viện JSON!");
      };
    }

    if (els.btnImportLibraryJson && els.fileImportInput) {
      els.btnImportLibraryJson.onclick = () => els.fileImportInput.click();

      els.fileImportInput.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const imported = JSON.parse(event.target.result);
            if (Array.isArray(imported)) {
              localStorage.setItem("kid_lesson_saved_library", JSON.stringify(imported));
              renderSavedLessonLibrary();
              showToast(`✅ Đã nhập thành công ${imported.length} bài vào thư viện!`);
            } else {
              alert("File JSON không đúng định dạng danh sách.");
            }
          } catch (err) {
            alert("Lỗi đọc file JSON: " + err.message);
          }
        };
        reader.readAsText(file);
      };
    }
  }

  // 14. CHUYỂN TAB CHÍNH CỦA ỨNG DỤNG
  function initTabNavigation() {
    els.navTabs.forEach(btn => {
      btn.onclick = () => {
        const targetTab = btn.dataset.tab;
        if (!targetTab) return;

        els.navTabs.forEach(b => b.classList.remove("active"));
        els.tabPanels.forEach(p => p.classList.remove("active"));

        btn.classList.add("active");
        const panel = document.getElementById(targetTab);
        if (panel) panel.classList.add("active");

        appState.activeTab = targetTab;

        if (targetTab === "tab-library") {
          renderSavedLessonLibrary();
        }
      };
    });
  }

  // Cập nhật Banner trạng thái API Key bên trong Modal Cài Đặt
  function updateModalKeyStatus(key, testResult) {
    if (!els.keyStatusBanner) return;

    if (testResult) {
      if (testResult.testing) {
        els.keyStatusBanner.className = "key-status-banner testing";
        if (els.keyStatusIcon) els.keyStatusIcon.textContent = "⏳";
        if (els.keyStatusTitle) els.keyStatusTitle.textContent = "Đang kiểm tra kết nối với Google Gemini...";
        if (els.keyStatusDesc) els.keyStatusDesc.textContent = "Hệ thống đang gửi tín hiệu xác thực tới máy chủ Google AI...";
      } else if (testResult.success) {
        els.keyStatusBanner.className = "key-status-banner success";
        if (els.keyStatusIcon) els.keyStatusIcon.textContent = "✅";
        if (els.keyStatusTitle) els.keyStatusTitle.textContent = `Kết nối thành công! Key đã sẵn sàng (${testResult.model || "Gemini"})`;
        if (els.keyStatusDesc) els.keyStatusDesc.textContent = "Mã API Key hợp lệ và hoạt động tốt. Trợ lý AI sẽ sáng tạo giáo án độc đáo và sinh câu hỏi/bài thơ không giới hạn.";
      } else if (testResult.error) {
        els.keyStatusBanner.className = "key-status-banner error";
        if (els.keyStatusIcon) els.keyStatusIcon.textContent = "❌";
        if (els.keyStatusTitle) els.keyStatusTitle.textContent = "Kiểm tra kết nối thất bại";
        if (els.keyStatusDesc) els.keyStatusDesc.textContent = testResult.message || "Không thể kết nối đến máy chủ Google AI.";
      }
      return;
    }

    const trimmedKey = (key || "").trim();
    if (trimmedKey && trimmedKey.length > 20) {
      const masked = trimmedKey.length > 8 ? "••••" + trimmedKey.slice(-4) : "••••";
      els.keyStatusBanner.className = "key-status-banner ready";
      if (els.keyStatusIcon) els.keyStatusIcon.textContent = "🟢";
      if (els.keyStatusTitle) els.keyStatusTitle.textContent = `Đã nhận diện Gemini Key (${trimmedKey.length} ký tự)`;
      if (els.keyStatusDesc) els.keyStatusDesc.innerHTML = `Mã key: <code>${masked}</code>. Hãy bấm <strong>[⚡ Kiểm tra kết nối]</strong> để kiểm tra trực tiếp hoặc bấm <strong>[Lưu Cấu Hình]</strong> để kích hoạt.`;
    } else if (trimmedKey && trimmedKey.length <= 20) {
      els.keyStatusBanner.className = "key-status-banner ready";
      if (els.keyStatusIcon) els.keyStatusIcon.textContent = "🟡";
      if (els.keyStatusTitle) els.keyStatusTitle.textContent = `Đang nhập API Key (${trimmedKey.length} ký tự)`;
      if (els.keyStatusDesc) els.keyStatusDesc.textContent = "Gemini API Key thường bắt đầu bằng AIzaSy... và dài khoảng 39 ký tự. Cô vui lòng kiểm tra đã dán đầy đủ chưa nhé.";
    } else {
      els.keyStatusBanner.className = "key-status-banner offline";
      if (els.keyStatusIcon) els.keyStatusIcon.textContent = "⚡";
      if (els.keyStatusTitle) els.keyStatusTitle.textContent = "Chế độ Sư Phạm Heuristic Offline 0đ (Mặc định)";
      if (els.keyStatusDesc) els.keyStatusDesc.textContent = "Hệ thống hoạt động 100% mượt mà ngay cả khi không có mạng, không tốn chi phí, bảo mật nội bộ.";
    }
  }

  // 15. MODAL CÀI ĐẶT
  function initSettingsModal() {
    function getSelectedModelName() {
      let model = els.selectGeminiModel ? els.selectGeminiModel.value : "gemini-2.5-flash";
      if (model === "custom") {
        const customVal = els.inputCustomModel ? els.inputCustomModel.value.trim() : "";
        return customVal || "gemini-2.5-flash";
      }
      return model;
    }

    // Đồng bộ dữ liệu hiện tại lên modal khi mở
    function syncSettingsToUI() {
      if (els.inputGeminiKey) {
        els.inputGeminiKey.value = aiEngine.apiKey || "";
        els.inputGeminiKey.type = "password";
      }
      if (els.btnToggleKeyVisibility) {
        els.btnToggleKeyVisibility.textContent = "👁️";
        els.btnToggleKeyVisibility.title = "Hiện mã Key";
      }

      const standardModels = ["gemini-2.5-flash", "gemini-2.5-pro", "gemini-1.5-pro", "gemini-1.5-flash"];
      const currentModel = aiEngine.modelName || "gemini-2.5-flash";
      if (els.selectGeminiModel) {
        if (standardModels.includes(currentModel)) {
          els.selectGeminiModel.value = currentModel;
          if (els.wrapperCustomModel) els.wrapperCustomModel.style.display = "none";
        } else {
          els.selectGeminiModel.value = "custom";
          if (els.wrapperCustomModel) els.wrapperCustomModel.style.display = "block";
          if (els.inputCustomModel) els.inputCustomModel.value = currentModel;
        }
      }

      if (els.inputTeacherName) els.inputTeacherName.value = appState.teacherName || "Cô giáo Nguyễn Thị Tiên";
      if (els.inputSchoolName) els.inputSchoolName.value = appState.schoolName || "Trường Mầm non Phúc Sơn B";

      updateModalKeyStatus(aiEngine.apiKey);
    }

    if (els.btnOpenSettings && els.modalSettings) {
      els.btnOpenSettings.onclick = () => {
        syncSettingsToUI();
        els.modalSettings.classList.add("active");
      };
    }

    if (els.btnCloseSettings && els.modalSettings) {
      els.btnCloseSettings.onclick = () => els.modalSettings.classList.remove("active");
    }

    // Toggle xem/ẩn key
    if (els.btnToggleKeyVisibility && els.inputGeminiKey) {
      els.btnToggleKeyVisibility.onclick = () => {
        const isPwd = els.inputGeminiKey.type === "password";
        els.inputGeminiKey.type = isPwd ? "text" : "password";
        els.btnToggleKeyVisibility.textContent = isPwd ? "🙈" : "👁️";
        els.btnToggleKeyVisibility.title = isPwd ? "Ẩn mã Key" : "Hiện mã Key";
      };
    }

    // Lắng nghe realtime khi người dùng dán hoặc gõ key
    if (els.inputGeminiKey) {
      const handleKeyChange = () => {
        const key = els.inputGeminiKey.value.trim();
        // Tự động nạp vào engine và cập nhật giao diện thời gian thực
        aiEngine.setApiKey(key);
        updateEngineStatusBadge();
        updateModalKeyStatus(key);
      };

      els.inputGeminiKey.addEventListener("input", handleKeyChange);
      els.inputGeminiKey.addEventListener("paste", () => setTimeout(handleKeyChange, 50));
    }

    // Lắng nghe đổi model
    if (els.selectGeminiModel) {
      els.selectGeminiModel.onchange = () => {
        const val = els.selectGeminiModel.value;
        if (val === "custom") {
          if (els.wrapperCustomModel) els.wrapperCustomModel.style.display = "block";
          if (els.inputCustomModel) {
            els.inputCustomModel.focus();
            if (els.inputCustomModel.value.trim()) {
              aiEngine.setModelName(els.inputCustomModel.value.trim());
            }
          }
        } else {
          if (els.wrapperCustomModel) els.wrapperCustomModel.style.display = "none";
          aiEngine.setModelName(val);
        }
        const key = els.inputGeminiKey ? els.inputGeminiKey.value.trim() : "";
        if (key && key.length > 20) {
          updateModalKeyStatus(key);
        }
      };
    }

    if (els.inputCustomModel) {
      els.inputCustomModel.oninput = () => {
        const val = els.inputCustomModel.value.trim();
        if (val) aiEngine.setModelName(val);
      };
    }

    // Nút Kiểm tra kết nối trực tiếp
    if (els.btnTestGeminiKey && els.inputGeminiKey) {
      els.btnTestGeminiKey.onclick = async () => {
        const key = els.inputGeminiKey.value.trim();
        const model = getSelectedModelName();

        if (!key) {
          updateModalKeyStatus("", {
            error: true,
            message: "Chưa có API Key để kiểm tra! Cô hãy dán Google Gemini API Key vào ô trên trước nhé."
          });
          showToast("⚠️ Vui lòng dán API Key trước khi kiểm tra!");
          return;
        }

        els.btnTestGeminiKey.disabled = true;
        const originalText = els.btnTestGeminiKey.innerHTML;
        els.btnTestGeminiKey.innerHTML = `<span>⏳</span> Đang test...`;
        updateModalKeyStatus(key, { testing: true });

        try {
          const res = await aiEngine.testApiKey(key, model);
          if (res.success) {
            aiEngine.setApiKey(key);
            aiEngine.setModelName(model);
            updateEngineStatusBadge();
            updateModalKeyStatus(key, {
              success: true,
              model: res.model
            });
            showToast(`✅ Kết nối thành công tới ${model}!`);
          } else {
            updateModalKeyStatus(key, {
              error: true,
              message: res.message
            });
            showToast(`❌ Kiểm tra thất bại: ${res.message}`);
          }
        } catch (err) {
          updateModalKeyStatus(key, {
            error: true,
            message: err.message
          });
          showToast(`❌ Lỗi: ${err.message}`);
        } finally {
          els.btnTestGeminiKey.disabled = false;
          els.btnTestGeminiKey.innerHTML = originalText;
        }
      };
    }

    // Nút Lưu Cấu Hình
    if (els.btnSaveSettings && els.modalSettings) {
      els.btnSaveSettings.onclick = () => {
        const key = els.inputGeminiKey ? els.inputGeminiKey.value.trim() : "";
        const model = getSelectedModelName();
        const teacher = els.inputTeacherName ? els.inputTeacherName.value.trim() : "";
        const school = els.inputSchoolName ? els.inputSchoolName.value.trim() : "";

        aiEngine.setApiKey(key);
        aiEngine.setModelName(model);

        if (teacher) {
          appState.teacherName = teacher;
          localStorage.setItem("kid_lesson_teacher_name", teacher);
        }
        if (school) {
          appState.schoolName = school;
          localStorage.setItem("kid_lesson_school_name", school);
        }

        // CẬP NHẬT TỨC THÌ VÀO CÁC KẾ HOẠCH BÀI GIẢNG TRONG BỘ NHỚ
        Object.keys(appState.weeklyPlanCache).forEach(k => {
          if (appState.weeklyPlanCache[k]) {
            if (teacher) appState.weeklyPlanCache[k].teacher = teacher;
            if (school) appState.weeklyPlanCache[k].school = school;
          }
        });

        if (appState.currentLessonPlan) {
          if (teacher) appState.currentLessonPlan.teacher = teacher;
          if (school) appState.currentLessonPlan.school = school;
          renderLessonPlanPaper(appState.currentLessonPlan, appState.viewMode === "full_week");
        }

        // Cập nhật tiêu đề Smart TV nếu đang có trên DOM
        const tvSchoolEl = document.querySelector(".tv-school-title");
        if (tvSchoolEl && school) {
          tvSchoolEl.textContent = `${school} • Lớp Học Thông Minh`;
        }

        updateEngineStatusBadge();
        els.modalSettings.classList.remove("active");
        showToast(`✅ Đã lưu cấu hình AI (${model}) & Cập nhật bài giảng cho ${teacher || "Cô giáo"}!`);
      };
    }

    if (els.btnOpenGuide && els.modalGuide) {
      els.btnOpenGuide.onclick = () => els.modalGuide.classList.add("active");
    }
    if (els.btnCloseGuide && els.modalGuide) {
      els.btnCloseGuide.onclick = () => els.modalGuide.classList.remove("active");
    }
  }

  // TOAST THÔNG BÁO NHANH
  function showToast(msg) {
    let container = document.getElementById("toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      container.className = "toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = "toast-msg";
    toast.innerHTML = `<span>✨</span> <div>${msg}</div>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transition = "opacity 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // 16. KHỞI CHẠY LẦN ĐẦU
  function startApp() {
    initDropdowns();
    initDayPills();
    initWeekPresets();
    initRealtimeListeners();
    initTabNavigation();
    initSpeechInput();
    initSettingsModal();
    initLibraryBackup();
    initCanvaStudioModals();

    // Nút Bấm Tạo Kế Hoạch Bằng AI
    if (els.btnGenerateAll) {
      els.btnGenerateAll.onclick = () => generateCurrentDayLesson();
    }

    // Hiển thị bài đầu tiên (Thứ Hai) ngay khi mở web
    if (appState.currentLessonPlan) {
      renderLessonPlanPaper(appState.currentLessonPlan, false);
    } else {
      generateCurrentDayLesson();
    }
  }

  startApp();
});
