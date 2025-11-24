# Password Generator — Documentation 🔐

Brief
A lightweight client-side password generator built with HTML, CSS and vanilla JavaScript. Generate strong or passphrase-style passwords, view strength feedback, toggle Dark Mode, and copy results with non-blocking toasts.

Quick start
1. Open project in VS Code:
   cd "d:\Moringa Studies\Final Project\Password Generator"
2. Open index.html in a browser or use Live Server.
3. Configure options and click Generate → Copy as needed.

Screenshots & Evidence
Additions you uploaded to docs/ are embedded below. Replace captions if desired.

![Main (light theme)](docs/screenshot-home.png)  
*Figure 1 — Main screen (light theme)*

![Main (dark theme)](docs/screenshot-dark.png)  
*Figure 2 — Main screen (dark theme)*

![After Generate](docs/screenshot-generate.png)  
*Figure 3 — Password generated (result visible)*

![Copy Toast](docs/screenshot-toast.png)  
*Figure 4 — "Copied!" toast feedback*

![Strength Meter](docs/screenshot-strength.png)  
*Figure 5 — Strength meter example*

Optional demo
- demo video: docs/demo.mp4 (recommended 20–40s showing Generate, Copy, Dark Mode)

Test checklist (manual)
- [ ] Generate with default options — password appears; strength updates  
- [ ] Generate with symbols only — output contains only symbols  
- [ ] No character sets selected — shows toast "Select at least one character type"  
- [ ] Copy — clipboard updated; toast shown  
- [ ] Dark Mode persists after reload  
- [ ] (Optional) Auto-expire clears password after configured time

Evidence files to include (already present / upload)
- docs/screenshot-home.png
- docs/screenshot-dark.png
- docs/screenshot-generate.png
- docs/screenshot-toast.png
- docs/screenshot-strength.png
- docs/demo.mp4 (optional)
- docs/test-report.md (fill results)
- docs/git-log.txt (generate below)

Generate git-log for submission (Windows)
Open terminal in project root and run:
```
git -C "d:\Moringa Studies\Final Project\Password Generator" log --oneline > docs\git-log.txt
```
Then commit and push:
```
git add docs/*
git commit -m "Add documentation assets and test report"
git push
```

Implementation notes (short)
- Files: index.html, style.css, script.js  
- Exposed functions for UI: generatePassword(), copyPassword(), toggleDarkMode()  
- Strength logic in assessStrength() — tweak thresholds as needed  
- For production-grade randomness, replace Math.random selection with Web Crypto API (crypto.getRandomValues)

Security reminder
- This tool is client-side. Do not paste production secrets into untrusted environments. If adding storage, encrypt before saving.

If you want I will:
- Insert these image embeds into README.md as well.
- Convert generator to use Web Crypto API.
- Add a short demo GIF and update DOCUMENTATION.md with timestamps/notes.
