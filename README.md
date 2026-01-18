# Iron Man Reveal Animation

An interactive hover effect that reveals an Iron Man suit overlay with a JARVIS-style HUD.

## Setup

1. Ensure images are in the `img/` folder: `rdj.png` (base) and `ironman.png` (reveal)
2. Open `index.html` in your browser

## How It Works

Hover over the image to reveal the Iron Man overlay through a circular mask that follows your cursor, with an animated HUD display showing system status.

## Customize

**Reveal Size** (script.js):

```javascript
const revealSize = 125; // Change circle size
```

**Colors** (style.css):

```css
background-color: #0d1117; /* Dark background */
box-shadow: 0 0 50px rgba(0, 255, 255, 0.3); /* Glow color */
```

**Animation Speed** (script.js):

```javascript
duration: 0.3; // Change animation speed
currentX += (mouseX - currentX) * 0.15; // Change cursor lag
```

## Tech Stack

HTML5, CSS3 (clip-path, variables), JavaScript, GSAP, Google Fonts
