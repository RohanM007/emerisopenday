# Deployment Guide for Faculty Open Day

## GitHub Pages Deployment

This project is configured to deploy automatically to GitHub Pages using GitHub Actions.

### Automatic Deployment (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under "Build and deployment":
     - Source: Select **GitHub Actions**
   - The site will automatically deploy when you push to the main branch

3. **Access your site:**
   - Your site will be available at: `https://yourusername.github.io/FacultyOpenDay/`

### Manual Deployment (Alternative)

If you prefer manual deployment:

1. **Install gh-pages package:**
   ```bash
   npm install -D gh-pages
   ```

2. **Deploy:**
   ```bash
   npm run deploy
   ```

## Local Development

To run the project locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173/`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` folder.

## Important Notes

- The `base` path in `vite.config.js` is set to `/FacultyOpenDay/` to match the GitHub repository name
- If you rename your repository, update the `base` path in `vite.config.js`
- Make sure GitHub Pages is enabled in your repository settings
- The first deployment may take a few minutes to complete

## Adding PDF Files

To add downloadable PDF files:

1. Create a `public/downloads` folder
2. Add your PDF files:
   - `education-degree.pdf`
   - `education-certificate.pdf`
   - `education-fees.pdf`
   - `law-degree.pdf`
   - `law-certificate.pdf`
   - `law-fees.pdf`
   - `commerce-degree.pdf`
   - `commerce-certificate.pdf`
   - `commerce-fees.pdf`
   - `humanities-degree.pdf`
   - `humanities-certificate.pdf`
   - `humanities-fees.pdf`

These files will be automatically included in the build and available for download.

