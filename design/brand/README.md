# Fan/Friction brand kit (logo A, "The Slash")

> Note (Sep 30, 2026): Kylie's naming rule overrides the "Rules" section below. Show the name as **Fan/Friction** everywhere a slash is possible, not just in the logo. See `CLAUDE.md`.

## Files
Drop everything in `public/` into the app's public/static folder.

| File | Use |
|---|---|
| `icon.svg` | Browser tab icon (modern browsers), in-app logo tile |
| `favicon.ico` | Browser tab fallback (16, 32, 48 px inside) |
| `favicon-16.png`, `favicon-32.png`, `favicon-48.png` | Individual favicon sizes if needed |
| `apple-touch-icon.png` | iPhone "Add to Home Screen" (180 px, square; iOS rounds the corners) |
| `icon-192.png`, `icon-512.png` | Installable web app icons (rounded tile) |
| `icon-maskable-192.png`, `icon-maskable-512.png` | Android adaptive icons (full-bleed, logo inside the safe zone) |
| `icon-square.svg`, `icon-maskable.svg` | Sources for the square and maskable versions |

`wordmark.html` holds the header wordmark as HTML + CSS (copy the marked block). It uses Barlow Condensed ExtraBold Italic from Google Fonts, so it stays sharp and needs no image.

## Head tags
```html
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" href="/icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/manifest.webmanifest">
<meta name="theme-color" content="#005A9C">
```

## Web app manifest (icons + colors)
```json
{
  "name": "FanFriction",
  "short_name": "FanFriction",
  "theme_color": "#005A9C",
  "background_color": "#F7F8FA",
  "display": "standalone",
  "icons": [
    { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any" },
    { "src": "/icon-maskable-192.png", "sizes": "192x192", "type": "image/png", "purpose": "maskable" },
    { "src": "/icon-maskable-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable" }
  ]
}
```

## Colors
| Name | Hex | Role |
|---|---|---|
| Dodger blue | #005A9C | Icon tile, FRICTION, scores, selected states, links |
| UCLA blue | #2774AE | Secondary |
| UCLA gold | #FFD100 | The slash, primary button, hottest heat. Never text on white. |
| Ink | #0F1B2D | FAN, body text |
| Background | #F7F8FA | App background |

## Rules
- The name is spoken and shown in-app as FanFriction; Fan/Friction is the stylized logo.
- On light backgrounds, the gold slash keeps its thin Dodger blue edge. On Dodger blue, drop the edge and make both words white.
