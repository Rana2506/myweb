# GitHub Pages Deployment Instructions

## Issues Fixed:

1. **Configuration Issues:**
   - Updated `_config.yml` with proper GitHub Pages settings
   - Added necessary Jekyll plugins for GitHub Pages compatibility
   - Fixed asset path references using `{{ site.baseurl }}`

2. **Asset Path Issues:**
   - Fixed all asset references to use CDN or proper baseurl
   - Updated background image paths in CSS
   - Fixed JavaScript and CSS file paths

3. **Navigation Issues:**
   - Fixed broken internal links (removed non-existent `/products/` paths)
   - Updated all relative links to use `{{ site.baseurl }}`

4. **Added Missing Files:**
   - Created robots.txt with proper sitemap reference
   - Added GitHub Actions workflow for automated deployment
   - Updated Gemfile for GitHub Pages compatibility

## Steps to Deploy to GitHub Pages:

### 1. Update Configuration
Before pushing to GitHub, you MUST update these values in `_config.yml`:

```yaml
baseurl: "/your-repository-name"  # Replace with your actual repository name
url: "https://your-username.github.io"  # Replace with your GitHub username
```

### 2. Repository Setup
1. Create a new repository on GitHub
2. Push your local files to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repository-name.git
   git push -u origin main
   ```

### 3. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "GitHub Actions"
5. The site will automatically deploy using the workflow

### 4. Access Your Site
Your site will be available at:
`https://your-username.github.io/your-repository-name`

## Important Notes:

- The first deployment might take 5-10 minutes
- Check the "Actions" tab in your repository to monitor build status
- If you get 404 errors, verify the `baseurl` in `_config.yml` matches your repository name exactly
- All internal links now use `{{ site.baseurl }}` prefix for proper routing
- External libraries are now loaded from CDN for better reliability

## Troubleshooting:

1. **404 on main page:** Check if `baseurl` in `_config.yml` matches repository name
2. **Broken images/CSS:** Ensure all assets are in the `assets/` directory and referenced correctly
3. **Build fails:** Check the Actions tab for error details
4. **Links not working:** Verify all internal links use `{{ site.baseurl }}` prefix

Your website should now work properly on GitHub Pages with all pages accessible!
