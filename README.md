# Timothy Oladejo portfolio — recovered source

This project was recovered from the source maps in a Netlify deployment ZIP. The original React component source was embedded in the JavaScript source map, so the files below are readable/editable React source, not merely the compiled bundle.

## Structure
- `src/components/` — Navbar, Hero, About, Skills, Portfolio and Contact components
- `src/App.js`, `src/index.js`, `src/index.css` — application entry files
- `src/assets/` — profile and portfolio images
- `deployment-copy/` — copy of published deployment files for reference

## Run locally
1. Install Node.js on a computer.
2. Create `public/index.html` with a standard React root element (`<div id="root"></div>`) and a basic HTML document.
3. Run `npm install`, then `npm start`.
4. Run `npm run build` to create a production build.

Note: this recovery preserves the recovered source as closely as possible. Some project configuration from the original development folder (exact dependency versions, original public folder and build settings) was not present in the deployment ZIP; `package.json` and Tailwind configuration are reconstructed starter settings. Check the contact details and external links in `src/components/Contact.jsx` and `src/components/Hero.jsx` before publishing changes.
Website deployment test – November 2026
