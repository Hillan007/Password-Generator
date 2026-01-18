# Password Generator 🔐

Create strong, secure, and memorable passwords effortlessly with our lightweight and feature-rich password generator. Built with **HTML**, **CSS**, and **JavaScript**, this tool is perfect for demos, learning, and personal use.

## 🚀 Key Features
- **Lightweight & Dependency-Free:** No external libraries or frameworks required.
- **Customizable Options:** Adjust password length, character sets (uppercase, lowercase, numbers, symbols).
- **Strength Visualization:** Password strength meter with real-time textual feedback.
- **Light & Dark Themes:** Toggle between themes for improved accessibility.
- **Convenient Tools:**
  - 🔒 Copy to Clipboard with toast confirmation.
  - 🧩 Passphrase Mode: Generate memorable diceware-style passwords.
  - 🚫 Avoid Ambiguous Characters: Reduce confusion (e.g., O vs 0).
  - ⏳ Auto-Expiration: Automatically clear generated passwords after a set time.
  - 💾 Save Passwords Securely: Optional LocalStorage support for encrypted storage.
  - 🕘 Session History: Access your last five generated passwords.
  - 🔲 QR Code Export: Export passwords as scannable QR codes for quick access (e.g., Wi-Fi sharing).

---

## 🌐 Demo / Quick Start
1. Clone the repository and open the project folder in your editor:
   ```
   git clone https://github.com/Hillan007/Password-Generator.git
   cd Password-Generator
   ```
2. Open `index.html` in your browser or use the **Live Server** extension in VS Code.
3. Adjust the password settings as needed, then click **Generate** to create a password.
4. Use the **Copy** button to copy the generated password to your clipboard.

---

## 📂 File Structure
- **`index.html`** - Handles UI elements and application layout.
- **`style.css`** - Controls the design, including light/dark mode themes.
- **`script.js`** - Manages core generation logic, includes methods such as:
  - `generatePassword()`
  - `copyPassword()`
  - `toggleDarkMode()`

---

## ℹ️ Developer Notes
- Password Strength Logic: Defined in `assessStrength()` inside `script.js`. You can modify thresholds as needed.
- Persistent Dark Mode: Stored under the `pw_dark` key in `LocalStorage`.
- Extendable Platform: Add new features such as additional password options or modes by modifying `script.js` and `index.html`.

---

## 🌟 Contribution Guidelines
We welcome your contributions!
- Fork this repository and create a feature branch.
- Keep changes focused and well-documented.
- Open a pull request for review.

---

## 📋 License
This project is licensed under the [MIT License](LICENSE). Feel free to reuse and adapt it — we only ask for attribution where required.

---

## 🔗 Links
- Live Demo: [Insert Live Link Here]
- Report Issues: [GitHub Issues](https://github.com/Hillan007/Password-Generator/issues)

---

Feel free to explore, customize, and share feedback to help us make this tool even better! Happy password generating! 💻
