// Ensure functions are attached to window so inline onclick handlers work

(function () {
  // Helpers
  function getRandomChar(str) {
    return str[Math.floor(Math.random() * str.length)];
  }

  function assessStrength(pw) {
    if (!pw) return { score: 0, text: 'Too short' };
    let score = 0;
    if (pw.length >= 8) score++;
    if (pw.length >= 12) score++;
    if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    // normalize 0..4
    score = Math.min(4, Math.max(0, score - 1));
    const labels = ['Very weak', 'Weak', 'Okay', 'Strong', 'Very strong'];
    return { score, text: labels[score] || '—' };
  }

  function updateStrengthUI(pw) {
    const { score, text } = assessStrength(pw);
    const meter = document.getElementById('strength');
    const label = document.getElementById('strength-text');
    if (meter) meter.value = score;
    if (label) label.textContent = `Strength: ${text}`;
  }

  // Toast helper
  function showToast(msg, ms = 1600) {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(() => t.classList.remove('show'), ms);
  }

  // Dark mode toggle (stores preference) and sync with checkbox
  window.toggleDarkMode = function (force) {
    const shouldEnable = typeof force === 'boolean' ? force : !document.body.classList.contains('dark');
    document.body.classList.toggle('dark', shouldEnable);
    localStorage.setItem('pw_dark', shouldEnable ? '1' : '0');
    const cb = document.getElementById('darkmode-toggle');
    if (cb) cb.checked = shouldEnable;
  };

  // initialize dark mode checkbox and restore preference
  function initDarkMode() {
    const cb = document.getElementById('darkmode-toggle');
    const saved = localStorage.getItem('pw_dark') === '1';
    document.body.classList.toggle('dark', saved);
    if (cb) {
      cb.checked = saved;
      cb.addEventListener('change', (e) => window.toggleDarkMode(e.target.checked));
    }
  }
  document.addEventListener('DOMContentLoaded', initDarkMode);

  // Main functions exposed to window for inline handlers
  window.generatePassword = function () {
    const length = Number(document.getElementById('length').value) || 12;
    const useUpper = document.getElementById('uppercase').checked;
    const useLower = document.getElementById('lowercase').checked;
    const useNumbers = document.getElementById('numbers').checked;
    const useSymbols = document.getElementById('symbols').checked;

    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?/`~';

    let pool = '';
    if (useUpper) pool += upper;
    if (useLower) pool += lower;
    if (useNumbers) pool += numbers;
    if (useSymbols) pool += symbols;

    if (!pool) {
      return showToast('Select at least one character type', 1400);
    }

    let password = '';
    for (let i = 0; i < length; i++) {
      password += getRandomChar(pool);
    }

    const out = document.getElementById('result');
    if (out) out.value = password;
    updateStrengthUI(password);
    showToast('New password generated', 900);
  };

  window.copyPassword = function () {
    const el = document.getElementById('result');
    if (!el || !el.value) return showToast('Nothing to copy', 1200);
    navigator.clipboard?.writeText(el.value)
      .then(() => showToast('Copied!'))
      .catch(() => {
        el.select();
        document.execCommand('copy');
        showToast('Copied!');
      });
  };
})();