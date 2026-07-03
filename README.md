# CMA Score Up Test Series

Single-file CMA Foundation MCQ test system with student login, topic-wise tests, scheduled tests, admin question bank, student master, records, leaderboard, and Google Sheets cloud sync.

## Files

- `cma-mcq-test.html` - main app. Open this file in a browser.
- `google-sheets-cloud-sync.gs` - Google Apps Script code for cloud sync.

## Put This On GitHub

1. Create a new repository on GitHub, for example `cma-score-up-test-series`.
2. Upload these files:
   - `cma-mcq-test.html`
   - `google-sheets-cloud-sync.gs`
   - `README.md`
3. In the repository, open **Settings > Pages**.
4. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Save. GitHub will give a public link after a short time.

## Simple Terminal Method

Run these commands inside this folder after creating an empty GitHub repository:

```bash
git init
git add cma-mcq-test.html google-sheets-cloud-sync.gs README.md
git commit -m "Initial CMA test app"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

Then enable GitHub Pages from repository settings.

## Notes

The app currently runs as a browser-based prototype. Student records and admin data are saved locally and can sync to Google Sheets through the Apps Script URL configured in Admin > Cloud Sync.
