# Home Hero Background Video Integration & Title Text Reveal Animation Plan

An enhancement plan to upgrade the Home page Hero section with a serene background video and a poetic left-to-right animated reveal for the headline "Every morning is a new beginning."

## User Review & Critical Decisions

> [!IMPORTANT]
> The choices below reflect confirmed user preferences from interactive Phase 1 clarification:

- **Confirmed Decision 1 (Video & Performance)**: HTML5 background `<video>` with `autoPlay`, `loop`, `muted`, and `playsInline`. The existing Chicago dawn river landscape image (`overstream-therapy-chicago-dawn-river-landscape-hero.jpg`) will serve as the `poster` image to guarantee zero LCP delay and instant rendering on mobile / low bandwidth.
- **Confirmed Decision 2 (Title Animation)**: Left-to-right progressive slide-in with soft gradient fade reveal (`@keyframes revealFromLeft`) for "Every morning is a new beginning." / "每一个清晨，都是新的开始。".

---

## 1. Overview & Core Concept

- **What It Does**: Upgrades the Home Hero section into an atmospheric, soothing welcome experience. A ambient video background streams smoothly behind a soft contrast veil, while the central inspirational motto unfolds from left to right across the screen when loaded.
- **Performance Guarantee**: No layout shifts, no white flashes. The high-resolution poster image is displayed immediately until the video buffer is ready to play.
- **Target Audience**: Clients seeking therapy, counseling, and psychological evaluation in IL & MI who are greeted by a calm, welcoming aesthetic.

---

## 2. User Experience & Visual Design

- **Visual Theme & Atmosphere**:
  - Background: Soothing ambient nature/river dawn video with subtle overlay veil.
  - Video Poster: `assets/images/overstream-therapy-chicago-dawn-river-landscape-hero.jpg` ensures instantaneous initial paint.
  - Typography: Primary display headline in LXGW WenKai / Noto Serif SC (`font-display-hero`).
- **Motion & Interaction**:
  - Left-to-Right Text Reveal (`reveal-from-left` class):
    - Uses CSS `clip-path: polygon(0 0, 0 100%, 0 100%, 0 0)` to `clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)` with `transform: translateX(-15px)` to `translateX(0px)` and opacity `0` to `1`.
    - Settles within 1.2 seconds with a smooth `cubic-bezier(0.16, 1, 0.3, 1)` easing curve.
    - Honors `prefers-reduced-motion` for accessibility.

---

## 3. Technical Architecture & Component Details

```
┌────────────────────────────────────────────────────────────────────────┐
│                        Hero Component Architecture                     │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  [ Poster Image ] ──( Instant Paint )───► Poster Layer                 │
│                                                 │                      │
│  [ Video Stream ] ──( OnCanPlay )───────► HTML5 <video> Background     │
│                                                 │                      │
│  [ Contrast Veil ] ─────────────────────► Soft Gradient Overlay        │
│                                                 │                      │
│  [ Headline Text ] ──( Reveal Animation )► "Every morning is a new..." │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

- **Files to Modify**:
  - `/src/components/Hero.tsx`:
    - Add HTML5 `<video>` element with `poster`, `autoPlay`, `loop`, `muted`, `playsInline`.
    - Add video ready state handlers (`onCanPlay`, `onError`).
    - Apply `reveal-from-left` CSS animation to the headline element.
  - `/src/index.css`:
    - Add `@keyframes revealFromLeft` animation rules.

---

## 4. Implementation Steps

1. **CSS Animation Declaration (`src/index.css`)**:
   Define `@keyframes revealFromLeft` featuring horizontal clipping mask rollout and subtle fade-in translation.

2. **Hero Component Upgrade (`src/components/Hero.tsx`)**:
   Implement background video tag with poster image, proper fallbacks, and updated headline text container with the left-to-right animation class.

3. **Build & Lint Verification**:
   Execute `compile_applet` and `lint_applet` to confirm compilation integrity.
