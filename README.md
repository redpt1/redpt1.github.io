# Academic Homepage

Personal academic homepage with bilingual (EN/CN) support.

## 🚀 Live Demo

Visit: `https://<your-github-username>.github.io/<repo-name>/`

## ✏️ How to Edit Content

All website content is stored in **`content.js`**. Simply edit this file to update:

- Personal information (name, title, email, links)
- Research interests
- Education background
- Work experience
- Publications
- Competitions & awards

Each text field supports bilingual content:
```js
{
  en: "English text",
  zh: "中文文本"
}
```

## 📁 Project Structure

```
├── index.html    — Page structure (rarely needs editing)
├── style.css     — Stylesheet (customize colors/fonts here)
├── script.js     — Renderer & language switcher
└── content.js    — ⭐ ALL content lives here — edit this file!
```

## 🎨 Customize Appearance

Edit CSS variables in `style.css`:
```css
:root {
  --color-accent:   #1a3a5c;  /* Primary color */
  --color-accent-l: #2563eb;  /* Link/highlight color */
  --font-sans:      "Inter", ...;  /* Body font */
}
```

## 🌐 Deploy to GitHub Pages

1. Create a new repository on GitHub
2. Push this folder to the repository
3. Go to **Settings → Pages**
4. Under **Source**, select the branch (e.g., `main`) and folder (`/ (root)`)
5. Your site will be live at `https://<username>.github.io/<repo-name>/`

## License

MIT
