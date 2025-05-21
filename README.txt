# BA12 Automotive Site with CMS and Dynamic Showroom

## Setup Steps

1. Push to GitHub
2. Link repo to Netlify
3. Enable Identity + Git Gateway in Netlify
4. Visit /admin to log in and manage stock
5. Cars are saved as markdown in /cars/
6. Run `node scripts/generate-json.js` during build to create /cars/index.json
7. Showroom updates automatically from this JSON

## Required Dependencies for Build
- gray-matter: For parsing frontmatter in markdown
  Run: npm install gray-matter
