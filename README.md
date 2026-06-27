# Lancaster Outdoor Carpentry

A polished, responsive React site for Lancaster Outdoor Carpentry, a Pennsylvania carpenter serving the Lancaster area since 2025. The site presents deck, pergola, and mini barn services around the core values of perseverance, integrity, and steadfastness.

## What This Site Includes

- Responsive navigation with mobile menu behavior
- Hero section with primary calls to action
- Services grid for decks, pergolas, and mini barns
- About section focused on perseverance, integrity, steadfastness, and craftsmanship
- Contact form wired through Netlify Functions, ALTCHA, and the Smoketown relay
- Scroll reveal animations through a reusable hook
- Footer navigation, contact details, and Instagram link

## Tech Stack

- React 19
- Vite 4
- Netlify Functions
- ALTCHA
- CSS modules by component file
- ESLint 9

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

The Vite config currently serves the app from:

```text
/
```

Locally, that usually means:

```text
http://127.0.0.1:5173/
```

On Windows PowerShell, if `npm run dev` is blocked by the execution policy, use:

```powershell
npm.cmd run dev
```

## Available Scripts

```bash
npm run dev
```

Runs the Vite development server with hot module replacement. This does not serve Netlify Functions.

```bash
npx netlify dev
```

Runs the site through Netlify's local dev server so `/api/altcha` and `/api/contact` are available.

```bash
npm run build
```

Creates a production build in `dist/`.

```bash
npm run preview
```

Serves the production build locally for final review.

```bash
npm run lint
```

Runs ESLint across the project.

## Project Structure

```text
.
|-- public/
|-- netlify/
|   `-- functions/
|       |-- _shared/
|       |-- altcha.ts
|       `-- contact.ts
|-- src/
|   |-- assets/
|   |-- components/
|   |   |-- About.jsx
|   |   |-- Contact.jsx
|   |   |-- Footer.jsx
|   |   |-- Hero.jsx
|   |   |-- Navbar.jsx
|   |   `-- Services.jsx
|   |-- hooks/
|   |   `-- useReveal.js
|   |-- App.jsx
|   |-- App.css
|   |-- index.css
|   `-- main.jsx
|-- index.html
|-- vite.config.js
|-- package.json
`-- package-lock.json
```

## Editing Content

Most site content lives directly in the React components:

- Navigation links: `src/components/Navbar.jsx`
- Hero headline and calls to action: `src/components/Hero.jsx`
- Service cards: `src/components/Services.jsx`
- Business story and values: `src/components/About.jsx`
- Contact details and form fields: `src/components/Contact.jsx`
- Footer links, contact details, and Instagram link: `src/components/Footer.jsx`

Business phone, email, and Instagram details are currently wired into the contact section and footer.

## Contact Form Notes

The contact form submits to this site's Netlify Function at `/api/contact`. That function validates the submission, verifies a site-local ALTCHA challenge from `/api/altcha`, checks the honeypot field, keeps the relay secret server-side, and forwards cleaned lead data to the Smoketown relay at `https://smoketownsoftware.com/api/relay`.

Leads are sent to:

```text
lancasteroutdoorcarpentry@gmail.com
```

Required Netlify environment variables:

```env
RELAY_SECRET_KEY=
SMOKETOWN_RELAY_URL=https://smoketownsoftware.com/api/relay
CLIENT_EMAIL=lancasteroutdoorcarpentry@gmail.com
CLIENT_ID=lancaster-outdoor-carpentry
CLIENT_SITE_NAME=Lancaster Outdoor Carpentry
EMAIL_SUBJECT=New Lancaster Outdoor Carpentry inquiry
ALTCHA_HMAC_SECRET=
ALTCHA_HMAC_KEY_SECRET=
```

`RELAY_SECRET_KEY`, `ALTCHA_HMAC_SECRET`, and `ALTCHA_HMAC_KEY_SECRET` must be configured in Netlify environment variables and must never be committed or exposed in frontend code.

## Deployment

Build the production files:

```bash
npm run build
```

Then deploy the generated `dist/` folder to Netlify. The included `netlify.toml` configures the build command, publish directory, Netlify Functions directory, and SPA fallback.

Important: `vite.config.js` currently sets:

```js
base: '/'
```

Keep that value for a Netlify site served from the root of its domain. Only use a subpath base if the site is intentionally hosted below a path such as `https://example.com/test-davon-site/`.

## Pre-Launch Checklist

- Confirm contact details and Instagram link
- Configure the required Netlify environment variables
- Test one successful production contact form submission
- Confirm the correct Vite `base` path
- Run `npm run lint`
- Run `npm run build`
- Preview the production build with `npm run preview`
- Test the page on desktop and mobile widths

## License

Private project. All rights reserved.
