# Git instructions for saving evidence 🔧

Save git history to docs/git-log.txt:

Windows (PowerShell / cmd):
git -C "d:\Moringa Studies\Final Project\Password Generator" log --oneline > docs\git-log.txt

Then stage and commit:
git add docs/*
git commit -m "Add docs placeholders and test report"
git push

Include docs/git-log.txt in your submission package as evidence of commits.
