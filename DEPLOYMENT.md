# GitHub Pages Deployment Setup

Your project is now configured for GitHub Pages deployment! 🎉

## Changes Made

1. **vite.config.ts**
   - Added `base: '/homepage/'` for correct asset paths on GitHub Pages
   - Changed output directory from `build` to `dist`

2. **GitHub Actions Workflow**
   - Created `.github/workflows/deploy.yml` for automatic deployment
   - Builds and deploys to GitHub Pages on every push to main branch

3. **Build Test**
   - Successfully built the project
   - Output is in `dist/` directory

## Next Steps

### 1. Configure GitHub Pages Settings

Go to your repository settings on GitHub:
- Navigate to **Settings** → **Pages**
- Under "Build and deployment":
  - **Source**: Select "GitHub Actions" (NOT "Deploy from a branch")
  
This is important because we're using GitHub Actions to build and deploy.

### 2. Push Your Changes

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push
```

### 3. Monitor Deployment

- Go to the **Actions** tab in your GitHub repository
- Watch the "Deploy to GitHub Pages" workflow run
- Once complete, your site will be live at: https://bxd-company.github.io/homepage/

## Local Development

- **Dev server**: `npm run dev` (runs on http://localhost:3000)
- **Build**: `npm run build` (outputs to `dist/`)
- **Preview build**: `npm run preview` (if you add this script)

## Troubleshooting

If the site doesn't load properly:
1. Make sure GitHub Pages is set to use "GitHub Actions" (not branch deployment)
2. Check the Actions tab for any build errors
3. Verify the base path in vite.config.ts matches your repo name

Your site will be available at: **https://bxd-company.github.io/homepage/**
