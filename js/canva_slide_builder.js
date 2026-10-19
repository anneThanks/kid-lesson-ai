/**
 * KID-LESSON AI - CANVA & SMART TV SLIDE BUILDER
 * Module tự động tạo Slide trình chiếu từ Kế hoạch bài dạy:
 * 1. Xuất file PowerPoint (.pptx) chuẩn layout 16:9 mầm non kéo thả 1-click vào Canva.
 * 2. Trình chiếu Smart TV trực tiếp 100% Offline trên Web (kèm giọng đọc AI tiếng Việt & hiệu ứng âm thanh).
 * 3. Sinh Prompt Master cho Canva Magic Design & Canva Bulk Create.
 */

(function (window) {
  "use strict";

  // Bảng màu thiết kế Slide mầm non hiện đại (Canva / Pastel EdTech)
  const PALETTE = {
    primary: "4F46E5",     // Indigo
    primaryLight: "EEF2FF",
    sky: "0284C7",         // Sky Blue
    skyLight: "F0F9FF",
    emerald: "059669",     // Emerald Green
    emeraldLight: "ECFDF5",
    amber: "D97706",       // Amber
    amberLight: "FFFBEB",
    rose: "E11D48",        // Rose
    roseLight: "FFF1F2",
    purple: "7C3AED",      // Violet
    purpleLight: "F5F3FF",
    dark: "1E1B4B",        // Slate Dark
    text: "1E293B",        // Body Text
    muted: "64748B",       // Muted Text
    white: "FFFFFF",
    cardBorder: "E2E8F0"
  };

  const CanvaSlideBuilder = {
    currentSlides: [],
    currentPlan: null,
    currentSlideIndex: 0,
    isPlayingVoice: false,

    // 1. TRÍCH XUẤT 6 SLIDE SƯ PHẠM TỪ KẾ HOẠCH BÀI DẠY
    extractSlides(plan) {
      if (!plan) return [];
      this.currentPlan = plan;

      const title = plan.title || "Tiết Học Mầm Non";
      const topic = plan.topic || plan.topicName || "Bé Khám Phá Thế Giới";
      const ageName = plan.ageName || "Mẫu giáo";
      const duration = plan.duration || "20 - 25 phút";
      const teacher = plan.teacher || (window.appState && window.appState.teacherName) || localStorage.getItem("kid_lesson_teacher_name") || "Cô giáo Nguyễn Thị Tiên";
      const school = plan.school || (window.appState && window.appState.schoolName) || localStorage.getItem("kid_lesson_school_name") || "Trường Mầm Non Phúc Sơn B";
      const dayOfWeek = plan.dayOfWeek || "Thứ Hai";
      const date = plan.date || "26/01/2026";
      const weekRange = plan.weekRange || "";
      const ndtt = plan.ndtt || plan.title || "Khám phá bài học mới";
      const ndkh = plan.ndkh || "Trò chơi củng cố vui nhộn";

      // Mục tiêu
      const knowList = (plan.objectives && plan.objectives.knowledge) ? plan.objectives.knowledge : ["Trẻ nắm được tên và nội dung bài học."];
      const skillList = (plan.objectives && plan.objectives.skills) ? plan.objectives.skills : ["Rèn kỹ năng quan sát, lắng nghe, trả lời to rõ."];
      const attList = (plan.objectives && plan.objectives.attitudes) ? plan.objectives.attitudes : ["Trẻ hào hứng tham gia, biết yêu quý bạn bè và trường lớp."];

      // Tiến trình
      const introRaw = (plan.procedure && plan.procedure.intro) ? plan.procedure.intro : "Cô và trẻ cùng trò chuyện, giải câu đố vui mở đầu tiết học.";
      const instructRaw = (plan.procedure && plan.procedure.instruction) ? plan.procedure.instruction : "Cô giới thiệu nội dung, hướng dẫn trẻ khám phá và cùng đàm thoại.";
      const concRaw = (plan.procedure && plan.procedure.conclusion) ? plan.procedure.conclusion : "Cô nhận xét, tuyên dương trẻ ngoan và kết thúc bài học.";

      const cleanIntro = introRaw.replace(/^1\.\s*Ổn định tổ chức:\s*/i, "").trim();
      const cleanInstruct = instructRaw.replace(/^2\.\s*Phương pháp[^\n]*\n?/i, "").trim();
      const cleanConc = concRaw.replace(/^3\.\s*Kết thúc:\s*/i, "").trim();

      const slides = [
        // SLIDE 1: TRANG BÌA
        {
          index: 1,
          type: "title",
          tag: "BÀI GIẢNG ĐIỆN TỬ MẦM NON",
          title: title,
          subtitle: `Chủ đề: ${topic}`,
          meta: [
            { icon: "👶", label: "Lứa tuổi", value: ageName },
            { icon: "⏱️", label: "Thời lượng", value: duration },
            { icon: "📅", label: "Ngày dạy", value: `${dayOfWeek}, ${date}` },
            { icon: "👩‍🏫", label: "Giáo viên", value: teacher }
          ],
          school: school.toUpperCase(),
          accentColor: PALETTE.primary,
          bgColor: PALETTE.primaryLight,
          speechText: `Chào mừng các bé đến với tiết học: ${title}. Cô chúc cả lớp có một giờ học thật vui và bổ ích!`
        },

        // SLIDE 2: MỤC TIÊU BÀI HỌC (BÉ SẼ HỌC GÌ?)
        {
          index: 2,
          type: "objectives",
          tag: "MỤC TIÊU TIẾT DẠY",
          title: "Bé Học Được Những Gì Hôm Nay?",
          subtitle: "3 Trụ cột phát triển toàn diện theo chuẩn Bộ GD&ĐT",
          columns: [
            {
              title: "🧠 1. Kiến Thức",
              items: knowList,
              color: PALETTE.sky,
              bg: PALETTE.skyLight
            },
            {
              title: "🌟 2. Kỹ Năng",
              items: skillList,
              color: PALETTE.emerald,
              bg: PALETTE.emeraldLight
            },
            {
              title: "❤️ 3. Thái Độ",
              items: attList,
              color: PALETTE.rose,
              bg: PALETTE.roseLight
            }
          ],
          accentColor: PALETTE.sky,
          bgColor: PALETTE.skyLight,
          speechText: `Trong bài học này, các bé sẽ được trang bị các kiến thức mới, rèn luyện kỹ năng quan sát, tự tin và nuôi dưỡng thái độ yêu thương trường lớp!`
        },

        // SLIDE 3: HOẠT ĐỘNG 1 - KHỞI ĐỘNG & GÂY HỨNG THÚ
        {
          index: 3,
          type: "intro",
          tag: "HOẠT ĐỘNG 1: KHỞI ĐỘNG",
          title: "Bé Cùng Khởi Động & Gây Hứng Thú",
          subtitle: "Ổn định tổ chức & Đố vui / Thơ ca mở màn",
          content: cleanIntro,
          tip: "💡 Bé hãy ngồi thật ngoan, chú ý lắng nghe và đoán xem cô mang đến điều bất ngờ gì nào!",
          accentColor: PALETTE.amber,
          bgColor: PALETTE.amberLight,
          speechText: `Hoạt động 1: Khởi động và gây hứng thú. ${cleanIntro.slice(0, 180)}`
        },

        // SLIDE 4: HOẠT ĐỘNG 2 - KHÁM PHÁ & TRẢI NGHIỆM
        {
          index: 4,
          type: "instruction",
          tag: "HOẠT ĐỘNG 2: TRỌNG TÂM",
          title: "Bé Khám Phá & Trải Nghiệm Mới",
          subtitle: `Nội dung trọng tâm (NDTT): ${ndtt}`,
          content: cleanInstruct,
          tip: "🌸 Bé cùng tương tác, trả lời to rõ và khám phá những điều thú vị cùng cô nhé!",
          accentColor: PALETTE.primary,
          bgColor: PALETTE.primaryLight,
          speechText: `Hoạt động 2: Khám phá trọng tâm bài học. ${ndtt}. ${cleanInstruct.slice(0, 200)}`
        },

        // SLIDE 5: HOẠT ĐỘNG 3 - TRÒ CHƠI CỦNG CỐ
        {
          index: 5,
          type: "game",
          tag: "HOẠT ĐỘNG 3: TRÒ CHƠI",
          title: "Bé Chơi Vui Củng Cố Bài Học",
          subtitle: `Nội dung kết hợp (NDKH): ${ndkh}`,
          content: "Cô tổ chức cho các bé tham gia trò chơi vận động hoặc câu đố tương tác ôn luyện kiến thức vừa học.",
          rules: [
            "🎯 Luật chơi: Bé lắng nghe hiệu lệnh của cô và phối hợp cùng bạn bè.",
            "🎲 Cách chơi: Nhanh mắt, nhanh tay chọn đúng đáp án hoặc biểu diễn hào hứng.",
            "⭐ Phần thưởng: Bé nào chơi đúng và nhiệt tình nhất sẽ nhận được ngôi sao chăm ngoan!"
          ],
          tip: "⭐ Các bé đã sẵn sàng bước vào trò chơi vui nhộn cùng cô chưa nào?",
          accentColor: PALETTE.emerald,
          bgColor: PALETTE.emeraldLight,
          speechText: `Hoạt động 3: Trò chơi củng cố: ${ndkh}. Các bé hãy cùng cô chơi thật vui và nhận hoa bé ngoan nào!`
        },

        // SLIDE 6: HOẠT ĐỘNG 4 - KẾT THÚC & TUYÊN DƯƠNG
        {
          index: 6,
          type: "conclusion",
          tag: "HOẠT ĐỘNG 4: KẾT THÚC",
          title: "Tuyên Dương & Kết Thúc Tiết Học",
          subtitle: "Nhận xét giờ học & Giáo dục bài học thực tế",
          content: cleanConc || "Cô nhận xét, tuyên dương tinh thần học tập hăng hái của cả lớp. Giáo dục trẻ tình yêu thiên nhiên, biết vâng lời ông bà, cha mẹ và cô giáo.",
          praise: "🎉 Cả lớp chúng mình hôm nay học rất ngoan, chú ý lắng nghe và hăng hái phát biểu!",
          wish: "🌸 Chúc các bé luôn chăm ngoan, khỏe mạnh và luôn yêu thích từng giờ học ở trường mầm non! Hẹn gặp lại các bé vào tiết học sau!",
          accentColor: PALETTE.purple,
          bgColor: PALETTE.purpleLight,
          speechText: `Tiết học của chúng mình hôm nay đến đây là kết thúc rồi! Cô khen ngợi tất cả các con đã học thật chăm chỉ và ngoan ngoãn. Chào tạm biệt các con!`
        }
      ];

      this.currentSlides = slides;
      return slides;
    },

    // 2. XUẤT FILE POWERPOINT (.PPTX) CHUẨN 16:9 TƯƠNG THÍCH 100% CANVA
    async exportPptx(plan) {
      if (typeof PptxGenJS === "undefined") {
        alert("Thư viện PptxGenJS chưa sẵn sàng. Vui lòng thử lại!");
        return;
      }

      const slides = this.extractSlides(plan);
      if (!slides || slides.length === 0) {
        alert("Chưa có dữ liệu bài dạy để tạo Slide!");
        return;
      }

      const pres = new PptxGenJS();
      pres.layout = "LAYOUT_16x9"; // 13.33 x 7.5 inches chuẩn Smart TV & Canva
      pres.author = plan.teacher || (window.appState && window.appState.teacherName) || localStorage.getItem("kid_lesson_teacher_name") || "Cô giáo Nguyễn Thị Tiên";
      pres.company = plan.school || (window.appState && window.appState.schoolName) || localStorage.getItem("kid_lesson_school_name") || "Trường Mầm Non Phúc Sơn B";
      pres.title = plan.title || "Slide Bài Giảng Mầm Non";

      slides.forEach((s) => {
        const slide = pres.addSlide();

        // 1. Nền trang Slide (Pastel Card)
        slide.background = { color: s.bgColor };

        // 2. Top Banner Header Bar
        slide.addShape("rect", {
          x: 0.6,
          y: 0.4,
          w: 12.13,
          h: 0.7,
          fill: { color: s.accentColor }
        });

        slide.addText(s.tag || "BÀI GIẢNG ĐIỆN TỬ MẦM NON", {
          x: 0.8,
          y: 0.4,
          w: 8.0,
          h: 0.7,
          fontSize: 14,
          bold: true,
          color: "FFFFFF",
          fontFace: "Arial",
          valign: "middle"
        });

        slide.addText(`Slide ${s.index}/6 • KID-LESSON AI`, {
          x: 9.0,
          y: 0.4,
          w: 3.5,
          h: 0.7,
          fontSize: 12,
          color: "FFFFFF",
          fontFace: "Arial",
          align: "right",
          valign: "middle"
        });

        // 3. Nội dung theo từng loại Slide
        if (s.type === "title") {
          // Card trắng trung tâm
          slide.addShape("rect", {
            x: 0.6,
            y: 1.3,
            w: 12.13,
            h: 5.4,
            fill: { color: "FFFFFF" },
            line: { color: PALETTE.cardBorder, width: 1.5 }
          });

          slide.addText(s.title, {
            x: 1.0,
            y: 1.6,
            w: 11.33,
            h: 1.5,
            fontSize: 28,
            bold: true,
            color: PALETTE.dark,
            fontFace: "Arial",
            align: "center",
            valign: "middle"
          });

          slide.addText(s.subtitle, {
            x: 1.0,
            y: 3.1,
            w: 11.33,
            h: 0.6,
            fontSize: 18,
            italic: true,
            color: PALETTE.sky,
            fontFace: "Arial",
            align: "center"
          });

          // 4 Hộp thông tin metadata
          const colW = 2.6;
          const startX = 1.0;
          s.meta.forEach((m, idx) => {
            const bx = startX + idx * (colW + 0.3);
            slide.addShape("rect", {
              x: bx,
              y: 4.0,
              w: colW,
              h: 1.4,
              fill: { color: PALETTE.primaryLight },
              line: { color: PALETTE.primary, width: 1 }
            });
            slide.addText(`${m.icon} ${m.label}\n${m.value}`, {
              x: bx,
              y: 4.1,
              w: colW,
              h: 1.2,
              fontSize: 13,
              bold: true,
              color: PALETTE.text,
              fontFace: "Arial",
              align: "center",
              valign: "middle"
            });
          });

          slide.addText(s.school, {
            x: 1.0,
            y: 5.7,
            w: 11.33,
            h: 0.5,
            fontSize: 12,
            bold: true,
            color: PALETTE.muted,
            fontFace: "Arial",
            align: "center"
          });

        } else if (s.type === "objectives") {
          // Tiêu đề Slide
          slide.addText(s.title, {
            x: 0.6,
            y: 1.2,
            w: 12.13,
            h: 0.6,
            fontSize: 22,
            bold: true,
            color: PALETTE.dark,
            fontFace: "Arial"
          });

          // 3 Cột: Kiến thức, Kỹ năng, Thái độ
          const colW = 3.8;
          s.columns.forEach((col, idx) => {
            const cx = 0.6 + idx * (colW + 0.35);
            slide.addShape("rect", {
              x: cx,
              y: 1.9,
              w: colW,
              h: 4.9,
              fill: { color: "FFFFFF" },
              line: { color: col.color, width: 2 }
            });

            // Tiêu đề cột
            slide.addShape("rect", {
              x: cx,
              y: 1.9,
              w: colW,
              h: 0.7,
              fill: { color: col.color }
            });

            slide.addText(col.title, {
              x: cx,
              y: 1.9,
              w: colW,
              h: 0.7,
              fontSize: 15,
              bold: true,
              color: "FFFFFF",
              fontFace: "Arial",
              align: "center",
              valign: "middle"
            });

            // Nội dung items
            const bulletItems = col.items.map(it => ({ text: it, options: { bullet: true, fontSize: 13, color: PALETTE.text, fontFace: "Arial" } }));
            slide.addText(bulletItems, {
              x: cx + 0.2,
              y: 2.7,
              w: colW - 0.4,
              h: 3.9,
              valign: "top"
            });
          });

        } else if (s.type === "game") {
          // Tiêu đề Slide
          slide.addText(s.title, {
            x: 0.6,
            y: 1.2,
            w: 12.13,
            h: 0.6,
            fontSize: 22,
            bold: true,
            color: PALETTE.dark,
            fontFace: "Arial"
          });

          slide.addText(s.subtitle, {
            x: 0.6,
            y: 1.8,
            w: 12.13,
            h: 0.5,
            fontSize: 16,
            bold: true,
            color: PALETTE.emerald,
            fontFace: "Arial"
          });

          // Khung chính
          slide.addShape("rect", {
            x: 0.6,
            y: 2.4,
            w: 12.13,
            h: 4.4,
            fill: { color: "FFFFFF" },
            line: { color: PALETTE.cardBorder, width: 1.5 }
          });

          const gameLines = s.rules.map(r => ({ text: r, options: { bullet: false, fontSize: 16, color: PALETTE.text, fontFace: "Arial" } }));
          slide.addText(gameLines, {
            x: 1.0,
            y: 2.7,
            w: 11.33,
            h: 2.8,
            valign: "top"
          });

          slide.addShape("rect", {
            x: 1.0,
            y: 5.7,
            w: 11.33,
            h: 0.8,
            fill: { color: PALETTE.emeraldLight },
            line: { color: PALETTE.emerald, width: 1 }
          });
          slide.addText(s.tip, {
            x: 1.2,
            y: 5.7,
            w: 10.9,
            h: 0.8,
            fontSize: 15,
            bold: true,
            color: PALETTE.emerald,
            fontFace: "Arial",
            valign: "middle"
          });

        } else {
          // Slide thông thường: Intro, Instruction, Conclusion
          slide.addText(s.title, {
            x: 0.6,
            y: 1.2,
            w: 12.13,
            h: 0.6,
            fontSize: 22,
            bold: true,
            color: PALETTE.dark,
            fontFace: "Arial"
          });

          if (s.subtitle) {
            slide.addText(s.subtitle, {
              x: 0.6,
              y: 1.8,
              w: 12.13,
              h: 0.5,
              fontSize: 16,
              bold: true,
              color: s.accentColor,
              fontFace: "Arial"
            });
          }

          // Card trắng chứa nội dung
          slide.addShape("rect", {
            x: 0.6,
            y: 2.4,
            w: 12.13,
            h: 4.4,
            fill: { color: "FFFFFF" },
            line: { color: PALETTE.cardBorder, width: 1.5 }
          });

          // Text nội dung
          let bodyText = s.content;
          if (s.praise) bodyText = `${s.praise}\n\n${s.content}\n\n${s.wish}`;

          slide.addText(bodyText, {
            x: 1.0,
            y: 2.7,
            w: 11.33,
            h: 3.0,
            fontSize: 15,
            color: PALETTE.text,
            fontFace: "Arial",
            valign: "top"
          });

          if (s.tip) {
            slide.addShape("rect", {
              x: 1.0,
              y: 5.7,
              w: 11.33,
              h: 0.8,
              fill: { color: s.bgColor },
              line: { color: s.accentColor, width: 1 }
            });
            slide.addText(s.tip, {
              x: 1.2,
              y: 5.7,
              w: 10.9,
              h: 0.8,
              fontSize: 14,
              bold: true,
              color: s.accentColor,
              fontFace: "Arial",
              valign: "middle"
            });
          }
        }
      });

      // Tên file tải về
      const safeTitle = (plan.title || "Giao_An_Mam_Non").replace(/[^a-zA-Z0-9\u00C0-\u1EF9]/g, "_").slice(0, 30);
      const fileName = `Slide_Canva_${safeTitle}_${plan.dayOfWeek || "BaiDay"}.pptx`;

      await pres.writeFile({ fileName: fileName });
      return fileName;
    },

    // 3. SINH DÀN Ý CHUYÊN BIỆT CHO CANVA MAGIC DESIGN & BULK CREATE
    generateCanvaPrompt(plan) {
      const slides = this.extractSlides(plan);
      let text = `# DÀN Ý BÀI THUYẾT TRÌNH CANVA (TẠO BẰNG KID-LESSON AI)\n`;
      text += `> Hãy tạo thiết kế bài thuyết trình mầm non 6 trang, tỷ lệ 16:9, màu sắc tươi sáng pastel, hình ảnh minh họa hoạt hình dễ thương, font chữ tròn to rõ chuẩn sư phạm mầm non.\n\n`;

      slides.forEach(s => {
        text += `--- \n`;
        text += `## SLIDE ${s.index}: ${s.title.toUpperCase()}\n`;
        text += `* **Tiêu đề:** ${s.title}\n`;
        if (s.subtitle) text += `* **Phụ đề:** ${s.subtitle}\n`;
        if (s.content) text += `* **Nội dung:** ${s.content.replace(/\n/g, " ")}\n`;
        if (s.columns) {
          s.columns.forEach(c => {
            text += `* **${c.title}:** ${c.items.join("; ")}\n`;
          });
        }
        if (s.rules) text += `* **Trò chơi:** ${s.rules.join(" | ")}\n`;
        text += `\n`;
      });

      return text;
    },

    // 4. MỞ TRỰC TIẾP TRANG CHỦ CANVA TRONG TAB MỚI
    openCanva() {
      window.open("https://www.canva.com/", "_blank");
    },

    // 5. TRÌNH CHIẾU SMART TV LỚP HỌC (WEB PRESENTATION PLAYER)
    launchSmartTvPresentation(plan, startIdx = 0) {
      const slides = this.extractSlides(plan);
      if (!slides || slides.length === 0) {
        alert("Chưa có kế hoạch bài dạy để trình chiếu!");
        return;
      }

      this.currentSlideIndex = startIdx;
      const modal = document.getElementById("modal-smart-tv-presentation");
      if (!modal) return;

      modal.classList.add("active");
      this.renderTvSlide(this.currentSlideIndex);

      // Gắn sự kiện phím điều hướng ← / → / ESC
      document.onkeydown = (e) => {
        if (!modal.classList.contains("active")) return;
        if (e.key === "ArrowLeft") {
          this.prevTvSlide();
        } else if (e.key === "ArrowRight") {
          this.nextTvSlide();
        } else if (e.key === "Escape") {
          this.closeSmartTvPresentation();
        }
      };
    },

    // Render 1 Slide trong giao diện Smart TV
    renderTvSlide(index) {
      const slides = this.currentSlides;
      if (index < 0 || index >= slides.length) return;
      this.currentSlideIndex = index;
      const s = slides[index];

      const container = document.getElementById("smart-tv-slide-viewport");
      const indicator = document.getElementById("smart-tv-counter");
      if (indicator) {
        indicator.textContent = `Slide ${index + 1} / ${slides.length}`;
      }

      if (!container) return;

      let bodyHtml = "";
      if (s.type === "title") {
        bodyHtml = `
          <div class="tv-slide-title-wrap">
            <div class="tv-badge" style="background: ${s.accentColor}; color: #fff;">${s.tag}</div>
            <h1 class="tv-main-title">${escapeHtml(s.title)}</h1>
            <p class="tv-sub-title">${escapeHtml(s.subtitle)}</p>
            <div class="tv-meta-grid">
              ${s.meta.map(m => `
                <div class="tv-meta-item">
                  <span class="tv-meta-icon">${m.icon}</span>
                  <div>
                    <div class="tv-meta-label">${m.label}</div>
                    <div class="tv-meta-val">${m.value}</div>
                  </div>
                </div>
              `).join("")}
            </div>
            <div class="tv-school-tag">${s.school}</div>
          </div>
        `;
      } else if (s.type === "objectives") {
        bodyHtml = `
          <div class="tv-slide-content-wrap">
            <div class="tv-badge" style="background: ${s.accentColor}; color: #fff;">${s.tag}</div>
            <h2 class="tv-heading">${escapeHtml(s.title)}</h2>
            <p class="tv-sub-heading">${escapeHtml(s.subtitle)}</p>
            <div class="tv-columns-grid">
              ${s.columns.map(col => `
                <div class="tv-column-card" style="border-top: 5px solid ${col.color};">
                  <div class="tv-col-header" style="color: ${col.color};">${col.title}</div>
                  <ul class="tv-col-list">
                    ${col.items.map(it => `<li>${escapeHtml(it)}</li>`).join("")}
                  </ul>
                </div>
              `).join("")}
            </div>
          </div>
        `;
      } else if (s.type === "game") {
        bodyHtml = `
          <div class="tv-slide-content-wrap">
            <div class="tv-badge" style="background: ${s.accentColor}; color: #fff;">${s.tag}</div>
            <h2 class="tv-heading">${escapeHtml(s.title)}</h2>
            <div class="tv-highlight-chip" style="background: #d1fae5; color: #065f46;">${escapeHtml(s.subtitle)}</div>
            <div class="tv-game-box">
              <div class="tv-game-desc">${escapeHtml(s.content)}</div>
              <div class="tv-rules-list">
                ${s.rules.map(r => `<div class="tv-rule-item">${escapeHtml(r)}</div>`).join("")}
              </div>
              <div class="tv-tip-banner" style="background: #ecfdf5; border-left: 4px solid #10b981; color: #047857;">
                ${s.tip}
              </div>
            </div>
          </div>
        `;
      } else {
        bodyHtml = `
          <div class="tv-slide-content-wrap">
            <div class="tv-badge" style="background: ${s.accentColor}; color: #fff;">${s.tag}</div>
            <h2 class="tv-heading">${escapeHtml(s.title)}</h2>
            ${s.subtitle ? `<p class="tv-sub-heading">${escapeHtml(s.subtitle)}</p>` : ""}
            <div class="tv-general-box">
              ${s.praise ? `<div class="tv-praise-banner">🎉 ${escapeHtml(s.praise)}</div>` : ""}
              <div class="tv-general-text">${escapeHtml(s.content).replace(/\n/g, "<br>")}</div>
              ${s.wish ? `<div class="tv-wish-banner">🌸 ${escapeHtml(s.wish)}</div>` : ""}
              ${s.tip ? `<div class="tv-tip-banner" style="background: ${s.bgColor}; border-left: 4px solid ${s.accentColor}; color: ${s.accentColor};">${s.tip}</div>` : ""}
            </div>
          </div>
        `;
      }

      container.innerHTML = bodyHtml;

      // Cập nhật trạng thái các nút Trước / Sau
      const btnPrev = document.getElementById("btn-tv-prev");
      const btnNext = document.getElementById("btn-tv-next");
      if (btnPrev) btnPrev.disabled = index === 0;
      if (btnNext) {
        if (index === slides.length - 1) {
          btnNext.innerHTML = `<span>🎉</span> Hoàn Thành`;
        } else {
          btnNext.innerHTML = `<span>Tiếp</span> ❯`;
        }
      }

      // Kích hoạt pháo hoa và reo hò ở slide cuối cùng
      if (index === slides.length - 1) {
        if (window.gamesSystem && typeof window.gamesSystem.triggerConfetti === "function") {
          window.gamesSystem.triggerConfetti();
        }
        if (window.speechSystem && typeof window.speechSystem.playCheerSound === "function") {
          window.speechSystem.playCheerSound();
        }
      }
    },

    nextTvSlide() {
      if (this.currentSlideIndex < this.currentSlides.length - 1) {
        this.renderTvSlide(this.currentSlideIndex + 1);
      } else {
        // Slide cuối -> Đóng hoặc chúc mừng
        if (window.gamesSystem) window.gamesSystem.triggerConfetti();
        if (window.showToast) window.showToast("🎉 Chúc mừng cô và các bé đã hoàn thành tiết học xuất sắc!");
      }
    },

    prevTvSlide() {
      if (this.currentSlideIndex > 0) {
        this.renderTvSlide(this.currentSlideIndex - 1);
      }
    },

    speakCurrentSlide() {
      const s = this.currentSlides[this.currentSlideIndex];
      if (!s) return;
      if (window.speechSystem && typeof window.speechSystem.speakText === "function") {
        window.speechSystem.speakText(s.speechText || s.title);
      }
    },

    closeSmartTvPresentation() {
      const modal = document.getElementById("modal-smart-tv-presentation");
      if (modal) modal.classList.remove("active");
      document.onkeydown = null;
      if (window.speechSystem && window.speechSystem.synth) {
        window.speechSystem.synth.cancel();
      }
    }
  };

  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Xuất ra toàn cục
  window.CanvaSlideBuilder = CanvaSlideBuilder;

})(window);
