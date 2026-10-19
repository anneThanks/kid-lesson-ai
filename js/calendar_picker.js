/**
 * KID-LESSON AI - BỘ CHỌN LỊCH TUẦN HỌC & NGÀY DẠY MẦM NON (CALENDAR PICKER)
 * Tối ưu hóa 100% cho Giáo viên Mầm non:
 * - 1-Click chọn trọn tuần dạy Thứ 2 -> Thứ 6 (hoặc tùy chọn khoảng ngày tự do)
 * - Tự động đồng bộ với 5 bài dạy trong tuần (Âm nhạc, Nhận biết, Tạo hình, Văn học, Vận động)
 * - Hoạt động Offline 100%, không phụ thuộc thư viện ngoài
 */

class KidLessonCalendarPicker {
  constructor() {
    this.modal = null;
    this.currentYear = 2026;
    this.currentMonth = 0; // 0-indexed (0: Tháng 1, 11: Tháng 12)
    this.selectedStartDate = new Date(2026, 0, 26);
    this.selectedEndDate = new Date(2026, 0, 30);
    this.selectionMode = "week"; // "week" (chọn trọn tuần T2-T6) | "custom" (chọn từ ngày đến ngày)
    this.customStep = 0; // 0: chọn start, 1: chọn end
    this.onSelectCallback = null;
    this.targetInput = null;

    // Map tên hoạt động theo ngày chuẩn mầm non
    this.dayBadgeMap = {
      0: { code: "T2", name: "Thứ Hai", badge: "Âm nhạc", color: "#ec4899" },
      1: { code: "T3", name: "Thứ Ba", badge: "Nhận biết", color: "#3b82f6" },
      2: { code: "T4", name: "Thứ Tư", badge: "Tạo hình", color: "#10b981" },
      3: { code: "T5", name: "Thứ Năm", badge: "Văn học", color: "#f59e0b" },
      4: { code: "T6", name: "Thứ Sáu", badge: "Vận động", color: "#8b5cf6" }
    };
  }

  // Khởi tạo và gắn sự kiện DOM
  init() {
    this.modal = document.getElementById("modal-calendar-picker");
    if (!this.modal) return;

    // Đổ danh sách tháng & năm vào dropdown
    this.initDropdowns();

    // Gắn sự kiện nút đóng modal
    const btnClose = document.getElementById("btn-close-calendar");
    const btnCancel = document.getElementById("btn-cancel-calendar");
    if (btnClose) btnClose.onclick = () => this.close();
    if (btnCancel) btnCancel.onclick = () => this.close();

    // Đóng khi click ngoài khung modal
    this.modal.addEventListener("click", (e) => {
      if (e.target === this.modal) this.close();
    });

    // Đóng bằng phím ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen()) this.close();
    });

    // Sự kiện điều hướng tháng / năm
    const btnPrevMonth = document.getElementById("btn-cal-prev-month");
    const btnNextMonth = document.getElementById("btn-cal-next-month");
    const btnToday = document.getElementById("btn-cal-today");
    const selectMonth = document.getElementById("cal-select-month");
    const selectYear = document.getElementById("cal-select-year");

    if (btnPrevMonth) {
      btnPrevMonth.onclick = () => {
        this.currentMonth--;
        if (this.currentMonth < 0) {
          this.currentMonth = 11;
          this.currentYear--;
        }
        this.renderCalendar();
      };
    }

    if (btnNextMonth) {
      btnNextMonth.onclick = () => {
        this.currentMonth++;
        if (this.currentMonth > 11) {
          this.currentMonth = 0;
          this.currentYear++;
        }
        this.renderCalendar();
      };
    }

    if (btnToday) {
      btnToday.onclick = () => {
        const today = new Date();
        this.currentYear = today.getFullYear();
        this.currentMonth = today.getMonth();
        if (this.selectionMode === "week") {
          this.selectWeekOfDate(today);
        }
        this.renderCalendar();
      };
    }

    if (selectMonth) {
      selectMonth.onchange = () => {
        this.currentMonth = parseInt(selectMonth.value, 10);
        this.renderCalendar();
      };
    }

    if (selectYear) {
      selectYear.onchange = () => {
        this.currentYear = parseInt(selectYear.value, 10);
        this.renderCalendar();
      };
    }

    // Sự kiện chuyển chế độ chọn
    const btnModeWeek = document.getElementById("cal-mode-week");
    const btnModeCustom = document.getElementById("cal-mode-custom");

    if (btnModeWeek) {
      btnModeWeek.onclick = () => {
        this.setMode("week");
      };
    }
    if (btnModeCustom) {
      btnModeCustom.onclick = () => {
        this.setMode("custom");
      };
    }

    // Gắn sự kiện dải chọn nhanh (Preset chips)
    this.initPresetChips();

    // Nút Xác nhận Áp dụng
    const btnApply = document.getElementById("btn-apply-calendar");
    if (btnApply) {
      btnApply.onclick = () => this.applySelection();
    }

    // Gắn kích hoạt mở modal từ các nút và input bên ngoài
    this.bindExternalTriggers();
  }

  // Khởi tạo các dropdown chọn tháng & năm
  initDropdowns() {
    const selectMonth = document.getElementById("cal-select-month");
    const selectYear = document.getElementById("cal-select-year");

    if (selectMonth) {
      selectMonth.innerHTML = "";
      for (let m = 0; m < 12; m++) {
        const opt = document.createElement("option");
        opt.value = m;
        opt.textContent = `Tháng ${m + 1}`;
        selectMonth.appendChild(opt);
      }
    }

    if (selectYear) {
      selectYear.innerHTML = "";
      const curYear = new Date().getFullYear();
      for (let y = curYear - 2; y <= curYear + 4; y++) {
        const opt = document.createElement("option");
        opt.value = y;
        opt.textContent = `Năm ${y}`;
        selectYear.appendChild(opt);
      }
    }
  }

  // Khởi tạo các chip chọn tuần nhanh
  initPresetChips() {
    const chips = document.querySelectorAll(".cal-chip-btn");
    chips.forEach(chip => {
      chip.onclick = () => {
        chips.forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        const preset = chip.getAttribute("data-preset");
        this.handlePresetSelect(preset);
      };
    });
  }

  // Xử lý chọn nhanh
  handlePresetSelect(preset) {
    const today = new Date();
    if (preset === "current-week") {
      this.selectWeekOfDate(today);
    } else if (preset === "next-week") {
      const nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
      this.selectWeekOfDate(nextWeek);
    } else if (preset === "prev-week") {
      const prevWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
      this.selectWeekOfDate(prevWeek);
    } else if (preset === "tuan-20") {
      this.setRangeByDates(new Date(2026, 0, 26), new Date(2026, 0, 30));
    } else if (preset === "tuan-21") {
      this.setRangeByDates(new Date(2026, 1, 2), new Date(2026, 1, 6));
    } else if (preset === "tuan-22") {
      this.setRangeByDates(new Date(2026, 1, 9), new Date(2026, 1, 13));
    } else if (preset === "tuan-23") {
      this.setRangeByDates(new Date(2026, 1, 16), new Date(2026, 1, 20));
    }
    this.renderCalendar();
  }

  // Gắn kích hoạt mở modal từ các thành phần giao diện
  bindExternalTriggers() {
    // 1. Nút mở lịch bên cạnh input tuần
    const btnOpenWeek = document.getElementById("btn-open-week-calendar");
    if (btnOpenWeek) {
      btnOpenWeek.onclick = () => this.open({ mode: "week", targetInputId: "input-week-range" });
    }

    // 2. Ô input khoảng tuần
    const inputWeekRange = document.getElementById("input-week-range");
    if (inputWeekRange) {
      inputWeekRange.onclick = () => this.open({ mode: "week", targetInputId: "input-week-range" });
    }

    // 3. Dropdown Preset khi chọn "custom"
    const selectWeekPreset = document.getElementById("select-week-preset");
    if (selectWeekPreset) {
      selectWeekPreset.addEventListener("change", () => {
        if (selectWeekPreset.value === "custom") {
          this.open({ mode: "week", targetInputId: "input-week-range" });
        }
      });
    }

    // 4. Ô input ngày dạy của tiết (tự động tính theo tuần và ngày trong tuần)
    const btnOpenDay = document.getElementById("btn-open-day-calendar");
    if (btnOpenDay) {
      btnOpenDay.onclick = () => {
        this.open({ mode: "week", targetInputId: "input-lesson-date" });
      };
    }
  }

  // Đổi chế độ chọn
  setMode(mode) {
    this.selectionMode = mode;
    this.customStep = 0;
    const btnWeek = document.getElementById("cal-mode-week");
    const btnCustom = document.getElementById("cal-mode-custom");
    if (btnWeek) btnWeek.classList.toggle("active", mode === "week");
    if (btnCustom) btnCustom.classList.toggle("active", mode === "custom");
    this.renderCalendar();
  }

  // Kiểm tra modal đang mở hay không
  isOpen() {
    return this.modal && this.modal.classList.contains("active");
  }

  // Mở modal
  open(options = {}) {
    if (!this.modal) return;
    this.targetInput = options.targetInputId ? document.getElementById(options.targetInputId) : null;
    this.onSelectCallback = options.onSelect || null;

    if (options.mode) {
      this.setMode(options.mode);
    }

    // Lấy giá trị ban đầu từ input hoặc state
    let initialRange = options.initialRange;
    if (!initialRange && this.targetInput) {
      initialRange = this.targetInput.value;
    }
    if (!initialRange && window.appState) {
      initialRange = window.appState.weekRange;
    }

    this.parseAndSetInitialRange(initialRange);
    this.renderCalendar();
    this.modal.classList.add("active");
  }

  // Đóng modal
  close() {
    if (this.modal) {
      this.modal.classList.remove("active");
    }
  }

  // Phân tích chuỗi ngày ban đầu (ví dụ: "26/01/2026 - 30/01/2026" hoặc "26/01/2026")
  parseAndSetInitialRange(str) {
    if (!str) {
      this.selectWeekOfDate(new Date(2026, 0, 26));
      return;
    }

    const parts = str.split("-").map(s => s.trim());
    if (parts.length >= 2) {
      const s = this.parseDateVN(parts[0]);
      const e = this.parseDateVN(parts[1]);
      if (s && e) {
        this.setRangeByDates(s, e);
        return;
      }
    } else if (parts.length === 1) {
      const d = this.parseDateVN(parts[0]);
      if (d) {
        this.selectWeekOfDate(d);
        return;
      }
    }

    // Fallback mặc định
    this.selectWeekOfDate(new Date(2026, 0, 26));
  }

  // Chọn trọn tuần của 1 ngày (Thứ 2 đến Thứ 6)
  selectWeekOfDate(date) {
    const monday = this.getMondayOfWeek(date);
    const friday = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + 4);
    this.setRangeByDates(monday, friday);
  }

  // Thiết lập dải ngày
  setRangeByDates(start, end) {
    this.selectedStartDate = new Date(start.getFullYear(), start.getMonth(), start.getDate());
    this.selectedEndDate = new Date(end.getFullYear(), end.getMonth(), end.getDate());
    this.currentYear = this.selectedStartDate.getFullYear();
    this.currentMonth = this.selectedStartDate.getMonth();
  }

  // Lấy ngày Thứ Hai của tuần chứa date
  getMondayOfWeek(date) {
    const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const day = d.getDay(); // 0 = Chủ nhật, 1 = Thứ 2, ..., 6 = Thứ 7
    const diff = day === 0 ? -6 : 1 - day;
    d.setDate(d.getDate() + diff);
    return d;
  }

  // Tính số tuần năm học (Bắt đầu từ tuần đầu tháng 9)
  getSchoolWeekNumber(date) {
    const y = date.getFullYear();
    const m = date.getMonth();
    const schoolStartYear = m >= 8 ? y : y - 1;
    let firstMonday = new Date(schoolStartYear, 8, 1);
    while (firstMonday.getDay() !== 1) {
      firstMonday.setDate(firstMonday.getDate() + 1);
    }
    const mon = this.getMondayOfWeek(date);
    const diffDays = Math.round((mon.getTime() - firstMonday.getTime()) / (24 * 60 * 60 * 1000));
    const weekNum = Math.floor(diffDays / 7) + 1;
    return weekNum > 0 && weekNum <= 42 ? weekNum : null;
  }

  // Render toàn bộ lưới lịch
  renderCalendar() {
    // Cập nhật select tháng và năm
    const selectMonth = document.getElementById("cal-select-month");
    const selectYear = document.getElementById("cal-select-year");
    if (selectMonth) selectMonth.value = this.currentMonth;
    if (selectYear) selectYear.value = this.currentYear;

    const tbody = document.getElementById("cal-tbody");
    if (!tbody) return;
    tbody.innerHTML = "";

    // Tìm ngày đầu tháng
    const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1);
    // Tìm Thứ Hai của tuần đầu tiên
    const calStart = this.getMondayOfWeek(firstDayOfMonth);

    const today = new Date();
    const todayStr = this.formatDateVN(today);
    const startStr = this.formatDateVN(this.selectedStartDate);
    const endStr = this.formatDateVN(this.selectedEndDate);

    let runner = new Date(calStart.getFullYear(), calStart.getMonth(), calStart.getDate());

    // Tạo 6 hàng tuần
    for (let row = 0; row < 6; row++) {
      const tr = document.createElement("tr");
      tr.className = "cal-week-row";

      // 1. Ô cột Tuần học (Week badge)
      const tdWeek = document.createElement("td");
      tdWeek.className = "cal-td-week";
      const weekDate = new Date(runner.getFullYear(), runner.getMonth(), runner.getDate());
      const weekNum = this.getSchoolWeekNumber(weekDate);
      const weekLabel = weekNum ? `T.${weekNum}` : `W${row + 1}`;

      const btnWeek = document.createElement("button");
      btnWeek.type = "button";
      btnWeek.className = "cal-week-btn";
      btnWeek.textContent = weekLabel;
      btnWeek.title = `Bấm để chọn nhanh tuần ${weekLabel} (${this.formatDateVN(weekDate)} - ${this.formatDateVN(new Date(weekDate.getFullYear(), weekDate.getMonth(), weekDate.getDate() + 4))})`;
      btnWeek.onclick = () => {
        this.selectWeekOfDate(weekDate);
        this.renderCalendar();
      };
      tdWeek.appendChild(btnWeek);
      tr.appendChild(tdWeek);

      // Cờ kiểm tra xem tuần này có đang được chọn hay không
      let isRowSelected = false;

      // 2. 7 ngày trong tuần (T2 -> CN)
      for (let col = 0; col < 7; col++) {
        const tdDay = document.createElement("td");
        tdDay.className = "cal-td-day";

        const currentCellDate = new Date(runner.getFullYear(), runner.getMonth(), runner.getDate());
        const cellDateStr = this.formatDateVN(currentCellDate);
        const isCurrentMonth = currentCellDate.getMonth() === this.currentMonth;
        const isToday = cellDateStr === todayStr;
        const isWeekend = col >= 5; // T7, CN

        const timeCurrent = currentCellDate.getTime();
        const timeStart = this.selectedStartDate ? new Date(this.selectedStartDate.getFullYear(), this.selectedStartDate.getMonth(), this.selectedStartDate.getDate()).getTime() : 0;
        const timeEnd = this.selectedEndDate ? new Date(this.selectedEndDate.getFullYear(), this.selectedEndDate.getMonth(), this.selectedEndDate.getDate()).getTime() : 0;

        const isStart = cellDateStr === startStr;
        const isEnd = cellDateStr === endStr;
        const isInRange = timeCurrent >= timeStart && timeCurrent <= timeEnd;

        if (isInRange) isRowSelected = true;

        const btnDay = document.createElement("button");
        btnDay.type = "button";
        btnDay.className = "cal-day-cell";
        btnDay.textContent = currentCellDate.getDate();
        btnDay.setAttribute("data-date", cellDateStr);

        if (!isCurrentMonth) btnDay.classList.add("other-month");
        if (isWeekend) btnDay.classList.add("weekend");
        if (isToday) btnDay.classList.add("is-today");

        if (isInRange) {
          btnDay.classList.add("in-range");
          if (isStart) btnDay.classList.add("range-start");
          if (isEnd) btnDay.classList.add("range-end");
          if (isStart && isEnd) btnDay.classList.add("single-day");
        }

        // Tooltip dễ hiểu
        const dayNames = ["Chủ nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
        btnDay.title = `${dayNames[currentCellDate.getDay()]}, ${cellDateStr}`;

        // Sự kiện click ngày
        btnDay.onclick = () => {
          this.handleDateClick(currentCellDate);
        };

        // Hiệu ứng rê chuột xem trước (Hover)
        btnDay.onmouseenter = () => {
          this.handleDateHover(currentCellDate, tr, col);
        };

        tdDay.appendChild(btnDay);
        tr.appendChild(tdDay);

        // Tăng thêm 1 ngày
        runner.setDate(runner.getDate() + 1);
      }

      if (isRowSelected) {
        btnWeek.classList.add("active");
      }

      // Rê chuột ra khỏi hàng thì xóa preview
      tr.onmouseleave = () => {
        document.querySelectorAll(".cal-day-cell.hover-preview").forEach(el => {
          el.classList.remove("hover-preview", "hover-start", "hover-end");
        });
      };

      tbody.appendChild(tr);
    }

    // Cập nhật thẻ xem trước (Selected Breakdown Card)
    this.updatePreviewCard();
  }

  // Xử lý khi bấm vào ô ngày
  handleDateClick(clickedDate) {
    if (this.selectionMode === "week") {
      this.selectWeekOfDate(clickedDate);
      this.renderCalendar();
    } else {
      // Chế độ tự do (Custom)
      if (this.customStep === 0) {
        this.selectedStartDate = new Date(clickedDate.getFullYear(), clickedDate.getMonth(), clickedDate.getDate());
        this.selectedEndDate = new Date(clickedDate.getFullYear(), clickedDate.getMonth(), clickedDate.getDate());
        this.customStep = 1;
      } else {
        const timeClicked = clickedDate.getTime();
        const timeStart = this.selectedStartDate.getTime();
        if (timeClicked < timeStart) {
          this.selectedEndDate = new Date(this.selectedStartDate.getTime());
          this.selectedStartDate = new Date(clickedDate.getFullYear(), clickedDate.getMonth(), clickedDate.getDate());
        } else {
          this.selectedEndDate = new Date(clickedDate.getFullYear(), clickedDate.getMonth(), clickedDate.getDate());
        }
        this.customStep = 0;
      }
      this.renderCalendar();
    }
  }

  // Xử lý hover để xem trước dải ngày
  handleDateHover(hoveredDate, tr, colIndex) {
    // Xóa hover cũ
    document.querySelectorAll(".cal-day-cell.hover-preview").forEach(el => {
      el.classList.remove("hover-preview", "hover-start", "hover-end");
    });

    if (this.selectionMode === "week") {
      // Bôi sáng từ Thứ 2 đến Thứ 6 của tuần đó
      const weekCells = tr.querySelectorAll(".cal-td-day:nth-child(-n+6) .cal-day-cell");
      weekCells.forEach((c, idx) => {
        c.classList.add("hover-preview");
        if (idx === 0) c.classList.add("hover-start");
        if (idx === weekCells.length - 1) c.classList.add("hover-end");
      });
    } else if (this.selectionMode === "custom" && this.customStep === 1) {
      // Đang chọn ngày kết thúc
      const startTime = this.selectedStartDate.getTime();
      const hoverTime = hoveredDate.getTime();
      const minTime = Math.min(startTime, hoverTime);
      const maxTime = Math.max(startTime, hoverTime);

      const allCells = document.querySelectorAll(".cal-day-cell");
      allCells.forEach(cell => {
        const dtStr = cell.getAttribute("data-date");
        const dt = this.parseDateVN(dtStr);
        if (dt) {
          const t = dt.getTime();
          if (t >= minTime && t <= maxTime) {
            cell.classList.add("hover-preview");
          }
        }
      });
    }
  }

  // Cập nhật thẻ tóm tắt kết quả chọn
  updatePreviewCard() {
    const rangeText = document.getElementById("cal-preview-range-text");
    const countPill = document.getElementById("cal-preview-count-pill");
    const daysGrid = document.getElementById("cal-preview-days-grid");
    const footerInput = document.getElementById("cal-footer-input");

    const sStr = this.formatDateVN(this.selectedStartDate);
    const eStr = this.formatDateVN(this.selectedEndDate);
    const fullRangeStr = `${sStr} - ${eStr}`;

    if (rangeText) rangeText.textContent = fullRangeStr;
    if (footerInput) footerInput.value = fullRangeStr;

    // Tính số ngày dạy
    const diffDays = Math.round((this.selectedEndDate - this.selectedStartDate) / (24 * 60 * 60 * 1000)) + 1;
    if (countPill) {
      countPill.textContent = `${diffDays} ngày học`;
    }

    // Đổ 5 ngày dạy chi tiết vào lưới xem trước
    if (daysGrid) {
      daysGrid.innerHTML = "";
      const mon = this.selectedStartDate;

      // Lấy danh sách badge từ appState nếu có
      const weeklyCache = (window.appState && window.appState.weeklyPlanCache) || {};
      const dayKeys = ["mon", "tue", "wed", "thu", "fri"];

      for (let i = 0; i < 5; i++) {
        const d = new Date(mon.getFullYear(), mon.getMonth(), mon.getDate() + i);
        const dStr = this.formatDateVN(d);
        const dayMeta = this.dayBadgeMap[i] || { code: `T${i+2}`, name: `Thứ ${i+2}`, badge: "Hoạt động" };
        const key = dayKeys[i];
        const cachedPlan = weeklyCache[key];
        const badgeName = (cachedPlan && cachedPlan.badge) || dayMeta.badge;

        const isCurrentRangeDay = d.getTime() <= this.selectedEndDate.getTime();

        const card = document.createElement("div");
        card.className = `cal-day-mini-card ${isCurrentRangeDay ? "active" : "inactive"}`;
        card.innerHTML = `
          <div class="mini-day-top">
            <span class="mini-day-code">${dayMeta.code}</span>
            <span class="mini-day-name">${dayMeta.name}</span>
          </div>
          <div class="mini-day-date">${dStr.slice(0, 5)}</div>
          <div class="mini-day-badge">${badgeName}</div>
        `;
        daysGrid.appendChild(card);
      }
    }
  }

  // Áp dụng khoảng tuần đã chọn và đồng bộ vào hệ thống
  applySelection() {
    const sStr = this.formatDateVN(this.selectedStartDate);
    const eStr = this.formatDateVN(this.selectedEndDate);
    const rangeStr = `${sStr} - ${eStr}`;

    // 1. Cập nhật input tuần
    const inputWeekRange = document.getElementById("input-week-range");
    if (inputWeekRange) {
      inputWeekRange.value = rangeStr;
    }

    // 2. Cập nhật state toàn cục
    if (window.appState) {
      window.appState.weekRange = rangeStr;

      // Cập nhật lại ngày cho tất cả 5 ngày trong weeklyPlanCache (T2 - T6)
      const dayKeys = ["mon", "tue", "wed", "thu", "fri"];
      const mon = this.selectedStartDate;

      dayKeys.forEach((key, idx) => {
        const targetDate = new Date(mon.getFullYear(), mon.getMonth(), mon.getDate() + idx);
        const dateFormatted = this.formatDateVN(targetDate);

        if (window.appState.weeklyPlanCache && window.appState.weeklyPlanCache[key]) {
          window.appState.weeklyPlanCache[key].date = dateFormatted;
          window.appState.weeklyPlanCache[key].weekRange = rangeStr;
        }

        // Cập nhật ngày của ngày đang chọn
        if (key === window.appState.selectedDay) {
          window.appState.selectedDate = dateFormatted;
          const inputLessonDate = document.getElementById("input-lesson-date");
          if (inputLessonDate) inputLessonDate.value = dateFormatted;
        }
      });

      // Cập nhật realtime hiển thị kế hoạch bài dạy
      if (typeof window.updateActivePlanRealtime === "function") {
        window.updateActivePlanRealtime({ rebuildContent: false });
      } else {
        // Kích hoạt render lại bảng nếu có hàm
        const plan = window.appState.currentLessonPlan;
        if (plan) {
          plan.date = window.appState.selectedDate;
          plan.weekRange = rangeStr;
          const dateCell = document.querySelector(".lp-meta-date");
          if (dateCell) dateCell.textContent = dateFormatted;
        }
      }
    }

    // 3. Đồng bộ Select Week Preset
    const selectWeekPreset = document.getElementById("select-week-preset");
    if (selectWeekPreset) {
      let matched = false;
      for (let i = 0; i < selectWeekPreset.options.length; i++) {
        if (selectWeekPreset.options[i].value === rangeStr) {
          selectWeekPreset.selectedIndex = i;
          matched = true;
          break;
        }
      }
      if (!matched) {
        // Cập nhật option custom
        const customOpt = selectWeekPreset.querySelector('option[value="custom"]');
        if (customOpt) {
          customOpt.textContent = `✏️ Tùy chỉnh: ${rangeStr}`;
          selectWeekPreset.value = "custom";
        }
      }
    }

    // 4. Gọi callback tùy chỉnh nếu có
    if (typeof this.onSelectCallback === "function") {
      this.onSelectCallback(rangeStr, this.selectedStartDate, this.selectedEndDate);
    }

    // 5. Hiển thị Toast thông báo thành công
    if (typeof window.showToast === "function") {
      window.showToast(`🗓️ Đã chọn tuần học: ${rangeStr}`);
    }

    // Hiệu ứng âm thanh nhẹ nếu có
    if (window.speechSystem && typeof window.speechSystem.playCorrectSound === "function") {
      window.speechSystem.playCorrectSound();
    }

    // Đóng modal
    this.close();
  }

  // Tiện ích định dạng ngày DD/MM/YYYY
  formatDateVN(date) {
    if (!date || isNaN(date.getTime())) return "";
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  }

  // Tiện ích phân tích DD/MM/YYYY -> Date
  parseDateVN(str) {
    if (!str) return null;
    const match = str.trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    if (!match) return null;
    const d = parseInt(match[1], 10);
    const m = parseInt(match[2], 10) - 1;
    const y = parseInt(match[3], 10);
    return new Date(y, m, d);
  }
}

// Gắn vào window toàn cục để các module khác truy cập
window.KidLessonCalendarPicker = KidLessonCalendarPicker;
