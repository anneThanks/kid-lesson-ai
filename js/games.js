/**
 * KID-LESSON AI - CLASSROOM INTERACTIVE MINI-GAMES
 * - Game 1: Đố Vui Thông Minh (Multiple Choice Quiz with Sound & Confetti)
 * - Game 2: Tìm Bóng Con Vật / Ghép Đôi Đúng Nhà
 * - Hiệu ứng Pháo hoa giấy Canvas Confetti 100% Offline
 */

class KidLessonGames {
  constructor(speechSystem) {
    this.speech = speechSystem;
    this.currentQuizIndex = 0;
    this.score = 0;
    this.quizList = [];
    this.canvas = null;
    this.ctx = null;
    this.confettiParticles = [];
    this.isConfettiActive = false;
  }

  // Khởi tạo Canvas Confetti
  initConfetti(canvasElement) {
    this.canvas = canvasElement;
    if (this.canvas) {
      this.ctx = this.canvas.getContext("2d");
      this.resizeCanvas();
      window.addEventListener("resize", () => this.resizeCanvas());
    }
  }

  resizeCanvas() {
    if (this.canvas) {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
  }

  triggerConfetti() {
    if (!this.canvas || !this.ctx) return;
    this.confettiParticles = [];
    const colors = ["#f43f5e", "#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#ec4899", "#06b6d4"];

    for (let i = 0; i < 90; i++) {
      this.confettiParticles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height * 0.4,
        size: Math.random() * 9 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 6,
        vy: Math.random() * 4 + 2,
        rotation: Math.random() * 360,
        vr: (Math.random() - 0.5) * 10
      });
    }

    if (!this.isConfettiActive) {
      this.isConfettiActive = true;
      this.animateConfetti();
    }
  }

  animateConfetti() {
    if (!this.isConfettiActive || !this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    let activeCount = 0;
    for (const p of this.confettiParticles) {
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.vr;

      if (p.y < this.canvas.height) {
        activeCount++;
        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate((p.rotation * Math.PI) / 180);
        this.ctx.fillStyle = p.color;
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        this.ctx.restore();
      }
    }

    if (activeCount > 0) {
      requestAnimationFrame(() => this.animateConfetti());
    } else {
      this.isConfettiActive = false;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  // ==========================================
  // GAME 1: ĐỐ VUI THÔNG MINH
  // ==========================================
  loadQuizList(customQuestions = null) {
    if (customQuestions && customQuestions.length > 0) {
      this.quizList = customQuestions;
    } else if (window.PRE_SCHOOL_DATA && window.PRE_SCHOOL_DATA.quizGames) {
      this.quizList = window.PRE_SCHOOL_DATA.quizGames;
    } else {
      this.quizList = [];
    }
    this.currentQuizIndex = 0;
    this.score = 0;
  }

  renderQuizCard(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (!this.quizList || this.quizList.length === 0) {
      container.innerHTML = `
        <div class="empty-quiz-state">
          <p>Chưa có câu hỏi nào. Hãy tạo bài dạy để sinh câu đố mới!</p>
        </div>
      `;
      return;
    }

    if (this.currentQuizIndex >= this.quizList.length) {
      // Đã hoàn thành tất cả câu hỏi
      this.speech.playCheerSound();
      this.triggerConfetti();

      container.innerHTML = `
        <div class="game-victory-card">
          <div class="victory-trophy">🏆</div>
          <h2 class="victory-title">BÉ THẬT XUẤT SẮC!</h2>
          <p class="victory-desc">Bé đã hoàn thành xuất sắc tất cả câu đố của cô giáo!</p>
          <div class="stars-earned">
            <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
          </div>
          <p class="victory-score">Điểm số đạt được: <strong>${this.score} / ${this.quizList.length * 10}</strong> điểm</p>
          <button class="btn-primary-action" id="btn-restart-quiz">
            <span>🔄</span> Chơi Lại Từ Đầu
          </button>
        </div>
      `;

      const restartBtn = document.getElementById("btn-restart-quiz");
      if (restartBtn) {
        restartBtn.onclick = () => {
          this.currentQuizIndex = 0;
          this.score = 0;
          this.renderQuizCard(containerId);
        };
      }
      return;
    }

    const currentQ = this.quizList[this.currentQuizIndex];

    container.innerHTML = `
      <div class="quiz-play-box">
        <div class="quiz-meta-bar">
          <span class="quiz-badge">Câu ${this.currentQuizIndex + 1} / ${this.quizList.length}</span>
          <span class="quiz-topic-tag">🌟 ${currentQ.topic || "Mầm non"}</span>
          <span class="quiz-score-badge">⭐ Điểm: ${this.score}</span>
        </div>

        <div class="quiz-question-row">
          <h3 class="quiz-question-title">${currentQ.question}</h3>
          <button class="btn-sound-read" id="btn-read-quiz-question" title="Đọc to câu hỏi">
            <span>🔊</span> Đọc Câu Hỏi
          </button>
        </div>

        <div class="quiz-options-grid">
          ${currentQ.options.map((opt, idx) => `
            <button class="quiz-opt-btn" data-index="${idx}" data-correct="${opt.isCorrect}">
              <span class="opt-icon">${opt.icon || "🐾"}</span>
              <span class="opt-text">${opt.text}</span>
            </button>
          `).join("")}
        </div>

        <div class="quiz-feedback-box" id="quiz-feedback-box" style="display: none;"></div>
      </div>
    `;

    // Gắn sự kiện nút đọc
    const readBtn = document.getElementById("btn-read-quiz-question");
    if (readBtn) {
      readBtn.onclick = () => {
        this.speech.speakText(currentQ.question);
      };
    }

    // Tự động đọc câu hỏi cho trẻ nghe
    this.speech.speakText(currentQ.question);

    // Gắn sự kiện chọn đáp án
    const optBtns = container.querySelectorAll(".quiz-opt-btn");
    optBtns.forEach(btn => {
      btn.onclick = () => {
        const isCorrect = btn.dataset.correct === "true";
        this.handleAnswerSelection(btn, isCorrect, currentQ, containerId);
      };
    });
  }

  handleAnswerSelection(btnElement, isCorrect, currentQ, containerId) {
    const feedbackBox = document.getElementById("quiz-feedback-box");
    const allBtns = document.querySelectorAll(".quiz-opt-btn");

    // Vô hiệu hóa click lặp lại
    allBtns.forEach(b => b.disabled = true);

    if (isCorrect) {
      btnElement.classList.add("correct");
      this.score += 10;
      this.speech.playCorrectSound();
      this.triggerConfetti();

      if (feedbackBox) {
        feedbackBox.style.display = "block";
        feedbackBox.className = "quiz-feedback-box success";
        feedbackBox.innerHTML = `
          <div class="fb-inner">
            <span class="fb-icon">🎉</span>
            <div>
              <strong>Hoan hô bé! Bé trả lời đúng rồi!</strong>
              <p>${currentQ.feedback || "Bé rất giỏi và thông minh!"}</p>
            </div>
          </div>
          <button class="btn-next-question" id="btn-next-question">
            Câu Tiếp Theo ➔
          </button>
        `;
      }

      this.speech.speakText("Hoan hô bé! Bé rất thông minh!");
    } else {
      btnElement.classList.add("wrong");
      this.speech.playTryAgainSound();

      // Đánh dấu nút đúng
      allBtns.forEach(b => {
        if (b.dataset.correct === "true") b.classList.add("correct");
      });

      if (feedbackBox) {
        feedbackBox.style.display = "block";
        feedbackBox.className = "quiz-feedback-box warning";
        feedbackBox.innerHTML = `
          <div class="fb-inner">
            <span class="fb-icon">💡</span>
            <div>
              <strong>Chưa đúng rồi, bé hãy quan sát kỹ lại nhé!</strong>
              <p>${currentQ.feedback || ""}</p>
            </div>
          </div>
          <button class="btn-next-question" id="btn-next-question">
            Câu Tiếp Theo ➔
          </button>
        `;
      }
      this.speech.speakText("Chưa đúng rồi, bé thử lại ở câu tiếp theo nhé!");
    }

    const nextBtn = document.getElementById("btn-next-question");
    if (nextBtn) {
      nextBtn.onclick = () => {
        this.currentQuizIndex++;
        this.renderQuizCard(containerId);
      };
    }
  }

  // ==========================================
  // GAME 2: TÌM BÓNG ĐÚNG ĐÔI (MATCH SHADOW)
  // ==========================================
  renderShadowGame(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const items = [
      { id: "dog", name: "Bạn Cún Con", icon: "🐶", silhouette: "🐕‍🦺" },
      { id: "cat", name: "Bạn Mèo Mướp", icon: "🐱", silhouette: "🐈" },
      { id: "duck", name: "Bạn Vịt Bầu", icon: "🦆", silhouette: "🦢" },
      { id: "rooster", name: "Chú Gà Trống", icon: "🐓", silhouette: "🐔" }
    ];

    container.innerHTML = `
      <div class="shadow-game-wrapper">
        <div class="game-instruction-banner">
          <span>👀</span>
          <p><strong>Bé Tìm Bóng Con Vật:</strong> Bé hãy bấm vào con vật bên trái, rồi bấm vào bóng đen tương ứng bên phải nhé!</p>
        </div>
        <div class="shadow-game-columns">
          <div class="shadow-col left" id="shadow-left-col">
            ${items.map(item => `
              <div class="shadow-item-card" data-id="${item.id}" data-type="origin">
                <span class="shadow-emoji">${item.icon}</span>
                <span class="shadow-name">${item.name}</span>
              </div>
            `).join("")}
          </div>
          <div class="shadow-col right" id="shadow-right-col">
            ${[...items].sort(() => Math.random() - 0.5).map(item => `
              <div class="shadow-item-card shadow-dark" data-id="${item.id}" data-type="shadow">
                <span class="shadow-emoji filter-silhouette">${item.icon}</span>
                <span class="shadow-name">Bóng số ?</span>
              </div>
            `).join("")}
          </div>
        </div>
        <div class="shadow-status-bar" id="shadow-status-bar">
          Hãy bấm chọn 1 con vật bên trái!
        </div>
      </div>
    `;

    let selectedLeft = null;
    let matchedCount = 0;

    const leftCards = container.querySelectorAll('.shadow-item-card[data-type="origin"]');
    const rightCards = container.querySelectorAll('.shadow-item-card[data-type="shadow"]');
    const statusBar = document.getElementById("shadow-status-bar");

    leftCards.forEach(card => {
      card.onclick = () => {
        if (card.classList.contains("matched")) return;
        leftCards.forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
        selectedLeft = card.dataset.id;
        if (statusBar) statusBar.innerHTML = `Đã chọn con vật! Bây giờ hãy bấm vào chiếc bóng tương ứng bên phải!`;
      };
    });

    rightCards.forEach(card => {
      card.onclick = () => {
        if (card.classList.contains("matched")) return;
        if (!selectedLeft) {
          if (statusBar) statusBar.innerHTML = `<span style="color:#e11d48">Vui lòng bấm chọn con vật bên trái trước nhé!</span>`;
          return;
        }

        const shadowId = card.dataset.id;
        if (shadowId === selectedLeft) {
          // Đúng!
          this.speech.playCorrectSound();
          this.triggerConfetti();

          card.classList.add("matched");
          card.classList.remove("shadow-dark");
          const originCard = container.querySelector(`.shadow-item-card[data-id="${selectedLeft}"][data-type="origin"]`);
          if (originCard) originCard.classList.add("matched");

          matchedCount++;
          selectedLeft = null;

          if (matchedCount === items.length) {
            this.speech.playCheerSound();
            if (statusBar) statusBar.innerHTML = `🎉 <strong>TUYỆT VỜI!</strong> Bé đã ghép đúng bóng của tất cả con vật!`;
            this.speech.speakText("Bé giỏi quá! Bé đã tìm đúng hết bóng rồi!");
          } else {
            if (statusBar) statusBar.innerHTML = `✅ <strong>Chính xác!</strong> Hãy tiếp tục tìm bóng cho các bạn khác nhé!`;
          }
        } else {
          // Sai
          this.speech.playTryAgainSound();
          card.classList.add("shake-error");
          setTimeout(() => card.classList.remove("shake-error"), 500);
          if (statusBar) statusBar.innerHTML = `❌ <strong>Chưa đúng bóng rồi!</strong> Bé thử nhìn kỹ lại bóng khác xem nào!`;
        }
      };
    });
  }
}

// Export to window
if (typeof window !== "undefined") {
  window.KidLessonGames = KidLessonGames;
}
