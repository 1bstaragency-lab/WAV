# .WAV

Music, Sneakers, Style, Sports & Pop Culture.

The .WAV culture website: editorial home page, curated music previews, original series, branded cursor, search and a minimizable playlist player.

## Netlify continuous deployment

Connect this repository to the existing Netlify project **sunny-crepe-62c5e9** to retain https://sunny-crepe-62c5e9.netlify.app.

- Production branch: `main`
- Build command: `node scripts/check-site.mjs`
- Publish directory: `public`
- Base directory: repository root (leave blank)
- No API keys, installation or external build dependencies are required.

`netlify.toml` sets these build settings. The build command validates the finished static site before deployment.

Once connected, a push to `main` triggers a new Netlify deployment. GitHub alone does not configure that connection.

## Editing

- `public/index.html`: content and page metadata
- `public/style.css`: responsive visual styling
- `public/app.js`: search, popups, player, cursor and intro behaviour
- `public/assets/`: photographs and header logo
- `public/favicon.png`: browser-tab icon
- `public/site.webmanifest`: application metadata

The opening screen uses the circular .WAV icon, slowly rotating on black before fading into the homepage. Reduced-motion preferences disable its animation.

Run `node scripts/check-site.mjs` to verify changes. For local preview, serve `public/` through a static HTTP server.

## External media

YouTube provides the embedded music and the vibes. playlist. Google Fonts and Instagram links require an internet connection. Browser autoplay restrictions may require pressing play inside the video. Minimizing preserves the existing video; closing the player stops it.

The main website is static and has no private sign-in gate. Review your Netlify access settings before sharing.
