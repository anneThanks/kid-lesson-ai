/**
 * KID-LESSON AI - WEB SPEECH API & AUDIO SYNTHESIZER
 * - Nhận dạng giọng nói tiếng Việt (Speech-to-Text) cho giáo viên
 * - Đọc diễn cảm tiếng Việt (Text-to-Speech) cho thơ, câu đố và thẻ học
 * - Bộ tổng hợp âm thanh lớp học mầm non (Web Audio API Synthesizer 100% offline)
 */

class KidLessonSpeech {
  constructor() {
    this.recognition = null;
    this.isListening = false;
    this.synth = window.speechSynthesis || null;
    this.audioCtx = null;
    this.initRecognition();
  }

  // Khởi tạo nhận dạng giọng nói tiếng Việt
  initRecognition() {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) {
      console.warn("[KID-LESSON AI] Trình duyệt không hỗ trợ Web Speech API.");
      return;
    }

    try {
      this.recognition = new SpeechRec();
      this.recognition.lang = "vi-VN";
      this.recognition.continuous = false; // Tối ưu cho mobile, tránh ngắt đột ngột
      this.recognition.interimResults = false;
      this.recognition.maxAlternatives = 1;
    } catch (e) {
      console.warn("[KID-LESSON AI] Không thể khởi tạo SpeechRecognition:", e);
    }
  }

  // Bắt đầu lắng nghe giọng nói của cô giáo
  startListening({ onStart, onResult, onError, onEnd }) {
    if (!this.recognition) {
      if (onError) onError("Trình duyệt không hỗ trợ micro giọng nói. Vui lòng dùng Chrome hoặc Edge.");
      return;
    }

    if (this.isListening) {
      this.stopListening();
      return;
    }

    this.recognition.onstart = () => {
      this.isListening = true;
      if (onStart) onStart();
    };

    this.recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      if (onResult) onResult(transcript);
    };

    this.recognition.onerror = (event) => {
      this.isListening = false;
      if (event.error !== "no-speech" && event.error !== "aborted") {
        if (onError) onError(`Lỗi micro: ${event.error}`);
      }
    };

    this.recognition.onend = () => {
      this.isListening = false;
      if (onEnd) onEnd();
    };

    try {
      this.recognition.start();
    } catch (err) {
      console.warn("[KID-LESSON AI] Lỗi start speech:", err);
      this.isListening = false;
      if (onEnd) onEnd();
    }
  }

  stopListening() {
    if (this.recognition && this.isListening) {
      try {
        this.recognition.stop();
      } catch (e) {}
      this.isListening = false;
    }
  }

  // Đọc diễn cảm tiếng Việt (Text-to-Speech)
  speakText(text, { onStart, onEnd } = {}) {
    if (!this.synth) {
      alert("Trình duyệt không hỗ trợ đọc văn bản tự động.");
      return;
    }

    // Dừng âm thanh đang phát
    this.synth.cancel();

    const cleanText = text.replace(/[*#_~]/g, "").trim();
    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = "vi-VN";
    utterance.rate = 0.9; // Tốc độ hơi chậm, ấm áp, thích hợp với trẻ mầm non
    utterance.pitch = 1.05; // Cao độ tươi vui

    // Tìm giọng tiếng Việt nếu có sẵn trên máy
    const voices = this.synth.getVoices();
    const viVoice = voices.find(v => v.lang.startsWith("vi") || v.lang.includes("VN"));
    if (viVoice) {
      utterance.voice = viVoice;
    }

    if (onStart) utterance.onstart = onStart;
    if (onEnd) {
      utterance.onend = onEnd;
      utterance.onerror = onEnd;
    }

    this.synth.speak(utterance);
  }

  stopSpeaking() {
    if (this.synth) {
      this.synth.cancel();
    }
  }

  // ==========================================
  // WEB AUDIO API SOUND SYNTHESIZER (0đ, 0 FILE)
  // Tạo âm thanh vui nhộn cho lớp học
  // ==========================================
  getAudioContext() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContextClass();
    }
    if (this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  // Âm thanh Trả lời Đúng (Ding-Dong vui vẻ)
  playCorrectSound() {
    try {
      const ctx = this.getAudioContext();
      const now = ctx.currentTime;

      // Note 1: E5
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(659.25, now);
      gain1.gain.setValueAtTime(0.2, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.3);

      // Note 2: G#5
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(830.61, now + 0.12);
      gain2.gain.setValueAtTime(0.25, now + 0.12);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.12);
      osc2.stop(now + 0.45);

      // Note 3: B5 (Chiến thắng)
      const osc3 = ctx.createOscillator();
      const gain3 = ctx.createGain();
      osc3.type = "sine";
      osc3.frequency.setValueAtTime(987.77, now + 0.25);
      gain3.gain.setValueAtTime(0.3, now + 0.25);
      gain3.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
      osc3.connect(gain3);
      gain3.connect(ctx.destination);
      osc3.start(now + 0.25);
      osc3.stop(now + 0.7);
    } catch (e) {
      console.warn("Lỗi phát âm thanh đúng:", e);
    }
  }

  // Âm thanh thử lại (Boing nhẹ nhàng, không gây sợ hãi)
  playTryAgainSound() {
    try {
      const ctx = this.getAudioContext();
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(220, now + 0.3);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.35);
    } catch (e) {
      console.warn("Lỗi phát âm thanh sai:", e);
    }
  }

  // Hiệu ứng pháo hoa giấy & vỗ tay mừng chiến thắng
  playCheerSound() {
    try {
      const ctx = this.getAudioContext();
      const now = ctx.currentTime;
      // Arpeggio vui nhộn C Major chord
      const freqs = [523.25, 659.25, 783.99, 1046.50];
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0.25, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.4);
      });
    } catch (e) {
      console.warn("Lỗi cheer:", e);
    }
  }
}

// Export to window
if (typeof window !== "undefined") {
  window.KidLessonSpeech = KidLessonSpeech;
}
