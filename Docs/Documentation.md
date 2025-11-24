# Password Generator — Documentation 🔐

## 1. Title & Objective
Title: Password Generator — Client-side password creation tool

Objective
- Create a simple, secure, client-side password generator with a friendly UI.
- Tech chosen: HTML, CSS, vanilla JavaScript.
- Why: No build step, minimal dependencies, easy to host and audit — ideal for teaching and small deployments.
- End goal: Render a styled UI that lets users configure options (length, character sets), generate passwords, view strength feedback, copy results, and toggle dark mode.

---

## 2. Quick Summary of the Technology
What is it?
- Plain HTML for structure, CSS for visuals (light/dark themes), and JavaScript for logic and interactivity.

Where is it used?
- Static sites, frontend demos, local utilities, student projects, or embedded tools in documentation pages.

Real-world example
- A conference or ministry registration page that provides a secure Wi‑Fi password generator for volunteers without sending data to a server.

---

## 3. System Requirements
- OS: Windows / macOS / Linux
- Tools: VS Code (recommended), any modern browser (Chrome, Edge, Firefox)
- Optional: Live Server extension (VS Code) for quick testing
- No npm packages required for core functionality (pure client-side). If you add features (QR generation, tests) you may add small packages later.

---

## 4. Installation & Setup Instructions (Step-by-step)
1. Clone or copy the repo to your machine:
   - Open PowerShell / Terminal:
     git clone https://github.com/Hillan007/Password-Generator.git
     cd "D:\Moringa Studies\Final Project\Password Generator"

2. Open in VS Code:
   - code .

3. Run locally:
   - Option A: Open index.html in browser (double-click)
   - Option B (recommended): Use Live Server in VS Code → "Open with Live Server"

4. Quick checks
   - Ensure script.js and style.css are in the same folder as index.html
   - Open DevTools (F12) → Console to see runtime errors if any

Screenshot: add these files to docs/ (placeholders)
- docs/screenshot-home.png (light theme)

Command examples (Windows PowerShell)
```bash
# from project root
git -C "D:\Moringa Studies\Final Project\Password Generator" log --oneline > docs\git-log.txt
git add docs/*
git commit -m "Add documentation assets and test report"
git push
```

---

## 5. Minimal Working Example
Description: Basic generator uses selected character pools to produce a random password and updates a strength meter.

index.html (snippet)
```html
<!-- Minimal UI -->
<input type="number" id="length" min="4" max="32" value="12" />
<label><input type="checkbox" id="uppercase" checked /> Uppercase</label>
<label><input type="checkbox" id="lowercase" checked /> Lowercase</label>
<label><input type="checkbox" id="numbers" checked /> Numbers</label>
<label><input type="checkbox" id="symbols" /> Symbols</label>
<button onclick="generatePassword()">Generate</button>
<input type="text" id="result" readonly />
<meter id="strength" min="0" max="4" value="0"></meter>
```

script.js (core function)
```javascript
// generatePassword: simple example using Math.random (replace with crypto for production)
function getRandomChar(s) { return s[Math.floor(Math.random()*s.length)]; }

function generatePassword() {
  const length = Number(document.getElementById('length').value) || 12;
  const pools = [
    document.getElementById('uppercase').checked ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '',
    document.getElementById('lowercase').checked ? 'abcdefghijklmnopqrstuvwxyz' : '',
    document.getElementById('numbers').checked ? '0123456789' : '',
    document.getElementById('symbols').checked ? '!@#$%^&*()[]{}<>?/|;:.,' : ''
  ].join('');
  if (!pools) { showToast('Select at least one character type'); return; }
  let pw = '';
  for (let i=0;i<length;i++) pw += getRandomChar(pools);
  document.getElementById('result').value = pw;
  updateStrengthUI(pw);
}
```

Expected output: A random password in the result field and the strength meter updated.

Tip (better randomness)
- Use Web Crypto API: select random indices with crypto.getRandomValues for production-grade randomness.

---

## 6. AI Prompt Journal
Record of prompts used and short evaluation.

Prompt: "the ouput is a pure white screen help me correct this code"  
AI response summary: Found CSS/html mismatch and provided a corrected style.css + script.js examples.  
Evaluation: Helpful — identified file-content mismatch and suggested fixes.

Prompt: "nothing is being generated"  
AI response summary: Provided a clean script.js self-contained IIFE exposing window.generatePassword and copyPassword.  
Evaluation: Helpful — resolved function definition and inline handler issues.

Prompt: "i want to push to this repo, https://github.com/Hillan007/Password-Generator"  
AI response summary: Provided git commands and authentication guidance.  
Evaluation: Useful for basic git push steps and troubleshooting push failures.

(Keep adding prompts & short notes here as you iterate.)

---

## 7. Common Issues & Fixes
Issue: Blank white screen
- Cause: style.css accidentally contained HTML or syntax errors.
- Fix: Ensure style.css contains only CSS; index.html remains the entry file.

Issue: Generate button does nothing
- Cause: script.js missing or functions not attached to window for inline onclick handlers.
- Fix: Wrap logic in an IIFE and assign window.generatePassword = function(...) { ... }.

Issue: Syntax errors in script.js (unterminated blocks)
- Fix: Check DevTools Console, open script.js and fix missing braces, returns, or accidental ellipses "…".

Issue: Git push error "orgin" or "src refspec push does not match any"
- Cause: Typo in remote name or wrong push command.
- Fix:
  git remote rename orgin origin
  git push -u origin main
- If remote contains history: git pull --rebase origin main then push.

Useful links
- DevTools Console (F12) for errors
- Git docs: https://git-scm.com/docs

---

## 8. References
- HTML5 spec: https://developer.mozilla.org/en-US/docs/Web/HTML
- CSS basics: https://developer.mozilla.org/en-US/docs/Web/CSS
- Web Crypto API: https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API
- Git basics: https://git-scm.com/docs
- Stack Overflow — search runtime error messages for targeted fixes

---

