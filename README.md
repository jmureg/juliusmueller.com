# Julius Mueller Photography

A minimal, responsive photography portfolio featuring a uniform image grid and full-screen lightbox.

## Requirements

- Node.js 22.13 or newer
- npm

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

## Project structure

- `app/page.tsx` — gallery content and lightbox behavior
- `app/globals.css` — layout and visual styling
- `public/photos/` — portfolio photographs
- `public/logo.png` — header logo
- `public/og.png` — social-sharing image

To add or remove photographs, update the `photographs` array in `app/page.tsx` and place the corresponding files in `public/photos/`.

## GitHub

Create an empty GitHub repository, then connect and push this existing local repository:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

The repository can then be connected to a compatible Node.js or Cloudflare hosting provider for deployment.
