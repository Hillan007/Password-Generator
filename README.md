# Password Generator 🔐

A clean, friendly password generator for quickly creating strong, memorable, or passphrase-style passwords — built with HTML, CSS and plain JavaScript.

Quick highlights
- ✅ Lightweight, no dependencies
- 🎨 Light / Dark themes
- 🔒 Strength meter & copy-to-clipboard with toast feedback
- ⚙️ Options: uppercase, lowercase, numbers, symbols, length
- ♻️ Small footprint — ideal for demos, teaching or personal use

Demo / Quick start
1. Open the project folder in VS Code:
   cd "d:\Moringa Studies\Final Project\Password Generator"
2. Open `index.html` in your browser (or use the Live Server extension).
3. Configure options (length, character sets) and click **Generate**. Click **Copy** to copy the output.

Files
- `index.html` — UI and feature table
- `style.css` — visual styling and dark mode rules
- `script.js` — generator logic: exposes generatePassword(), copyPassword(), toggleDarkMode()

Features (Smart & Secure Features)
- 🔋 Password Strength Meter — visual + textual feedback
- 🚫 Avoid Ambiguous Characters — reduce confusion (e.g., O vs 0)
- 🔤 Pronounceable Passwords — easier to remember
- 🧩 Passphrase Mode — generate 3–5 random words (diceware-like)
- ⏳ Auto-Expire Timer — clear password after X seconds
- 🌓 Dark Mode Toggle — accessible theme switching
- 📋 Copy with Feedback — non-blocking toast message
- 💾 Save to LocalStorage (encrypted recommended) — revisit recent passwords
- 🕘 Password History (session) — last 5 generated entries
- 🔲 QR Code Export — export password as QR (useful for Wi‑Fi)

Developer notes
- Exposed window functions for inline handlers: `generatePassword()`, `copyPassword()`, `toggleDarkMode()`.
- Strength logic: `assessStrength()` in `script.js` — change thresholds as needed.
- Dark mode persistence stored under key `pw_dark` in localStorage.
- To add features like passphrase mode or ambiguous-character filtering, extend `script.js` and add UI controls in `index.html`.

Git / push (Windows)
- Initialize & push to your GitHub repo:
  git init
  git add .
  git commit -m "Add password generator"
  git remote add origin https://github.com/Hillan007/Password-Generator.git
  git branch -M main
  git push -u origin main

Contributing
- Fork, implement a feature branch, and open a PR. Keep changes small and include notes for reviewers.

License
- MIT — feel free to reuse and adapt (include attribution if shared).

Enjoy — generate securely and share feedback if you want features scaffolded (e.g., passphrase mode, ambiguous-char toggle, encrypted local storage) 🚀