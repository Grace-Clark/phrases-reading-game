# Phrase Reading Game

Browser-based reading assessment for two-word phrases, adapted from a
PowerPoint deck. Companion to the [CVC Reading Game](https://github.com/Grace-Clark/cvc-reading-game).

- **2 practice items** first (point to the car / ball) — also checks for webcam mirroring.
- **15 questions**, each shown in three steps:
  1. Listen to 6 pictures (tap each or hear all)
  2. See the target phrase alone
  3. Pick the picture that matches

Audio uses recordings in `assets/audio/<phrase>.mp3` when available, and falls back
to the browser's built-in text-to-speech for missing phrases.

## Run locally

Just open `index.html` in a browser, or run the included server for cleaner asset paths:

```
powershell -NoProfile -ExecutionPolicy Bypass -File server.ps1
```
