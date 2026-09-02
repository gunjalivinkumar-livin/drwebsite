# Dr. Ananya Reddy — Doctor Website (Next.js + React)

A warm, pastel pink/beige themed gynaecologist website built with Next.js 14
(App Router) and TypeScript. Structure mirrors a typical doctor/clinic site:
hero, about, stats, specializations, services, doctor profile, testimonials,
FAQ, locations, contact form and footer.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Project structure

```
app/
  layout.tsx      -> fonts (Fraunces + Manrope) + metadata
  page.tsx        -> composes all sections
  globals.css     -> design tokens + all styles
components/
  Header.tsx
  Hero.tsx
  Divider.tsx
  About.tsx
  Stats.tsx
  Specializations.tsx
  Services.tsx
  DoctorProfile.tsx
  Testimonials.tsx
  FAQ.tsx         -> client component (accordion state)
  Location.tsx
  Contact.tsx     -> client component (form state)
  Footer.tsx
```

## Customizing

- **Content**: all copy lives directly inside each component — edit the
  arrays/JSX (doctor name, clinic addresses, services, FAQs, testimonials).
- **Colors**: all design tokens are CSS variables at the top of
  `app/globals.css` (`--rose`, `--plum`, `--sage`, `--gold`, etc).
- **Doctor photo**: `DoctorProfile.tsx` and `Hero.tsx` currently use an SVG/
  gradient placeholder inside a petal-shaped `clip-path`. Swap in a real photo
  with `next/image` inside the `.petal` / `.petal-sm` divs.
- **Map**: `Location.tsx` has a placeholder `.map-frame` div — replace with a
  real Google Maps `<iframe>` embed.
- **Contact form**: `Contact.tsx` currently just shows a success message on
  submit — wire the `handleSubmit` function to your backend or a form
  service (Formspree, Resend, etc).

## Build for production

```bash
npm run build
npm run start
```
