<div align="center">

# 🌿 The Wild Oasis

### Luxury Cabin Booking — Customer-Facing Website

A full-stack Next.js 14 application for browsing and booking luxury cabins in the Italian Dolomites. Built with the App Router, Supabase, and Google OAuth.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38BDF8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E?style=flat-square&logo=supabase)](https://supabase.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

</div>

---

## 📸 Preview

> The Wild Oasis is a luxury retreat nestled in the Italian Dolomites. Guests can browse cabins, create accounts via Google, make reservations, and manage their bookings — all from a responsive, mobile-first interface.

---

## ✨ Features

- 🏕️ **Browse Cabins** — Filter by capacity (small / medium / large), view pricing and details
- 📅 **Date-Based Booking** — Interactive calendar with blocked-out already-booked dates
- 🔐 **Google OAuth** — Seamless sign-in via NextAuth v5 (no passwords needed)
- 👤 **Guest Profile** — Update nationality, national ID, and personal details
- 📋 **Reservation Management** — View, edit, and delete upcoming reservations
- 📱 **Fully Responsive** — Mobile, tablet, and desktop layouts with Tailwind CSS
- ⚡ **Server Components** — Fast page loads using Next.js App Router and React Server Components
- 🔄 **Server Actions** — Form submissions handled without API routes

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| UI | [React 18](https://reactjs.org/) + [Tailwind CSS 3](https://tailwindcss.com/) |
| Database & Storage | [Supabase](https://supabase.com/) (PostgreSQL + image storage) |
| Authentication | [NextAuth.js v5](https://authjs.dev/) (Google Provider) |
| Date Handling | [date-fns](https://date-fns.org/) + [React Day Picker](https://react-day-picker.js.org/) |
| Icons | [@heroicons/react](https://heroicons.com/) |
| Notifications | [react-hot-toast](https://react-hot-toast.com/) |

---

## 📁 Project Structure

```
wild-oasis/
├── app/
│   ├── _lib/                        # Server utilities
│   │   ├── action.js                # Server Actions (create/update/delete)
│   │   ├── auth.js                  # NextAuth config + Google provider
│   │   ├── data-service.js          # Supabase query functions
│   │   └── supabase.js              # Supabase client
│   ├── _style/
│   │   └── globals.css              # Global styles + Tailwind directives
│   ├── compound/                    # Reusable UI components
│   │   ├── CabinCard.js
│   │   ├── DateSelector.js
│   │   ├── Filter.js
│   │   ├── Header.js
│   │   ├── Navigation.js
│   │   ├── Reservation.js
│   │   ├── ReservationCard.js
│   │   ├── ReservationForm.js
│   │   ├── SideNavigation.js
│   │   └── ...
│   ├── about/page.js                # About page
│   ├── cabins/
│   │   ├── page.js                  # Cabin listing
│   │   ├── [cabinid]/page.js        # Cabin detail + booking
│   │   └── thankyou/page.js         # Post-booking confirmation
│   ├── account/
│   │   ├── layout.js                # Account area layout with sidebar
│   │   ├── page.js                  # Dashboard welcome
│   │   ├── profile/page.js          # Guest profile editor
│   │   └── reservations/            # Reservation list + edit
│   ├── api/
│   │   ├── auth/[...nextauth]/      # NextAuth API route
│   │   └── cabins/[cabinId]/        # Cabin data REST endpoint
│   ├── layout.js                    # Root layout
│   ├── page.js                      # Home / landing page
│   ├── error.js                     # Error boundary
│   ├── loading.js                   # Loading UI
│   └── not-found.js                 # 404 page
├── public/                          # Static assets (images, logo)
├── .env.local                       # Environment variables (not committed)
├── next.config.mjs
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm** / **yarn** / **pnpm**
- A [Supabase](https://supabase.com/) project
- A [Google Cloud](https://console.cloud.google.com/) OAuth 2.0 app

---

### 1. Clone the repository

```bash
git clone https://github.com/deepan-codes/wild-oasis.git
cd wild-oasis
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root of the project:

```env
# Supabase
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_KEY=your-supabase-anon-key

# Google OAuth (via Google Cloud Console)
AUTH_GOOGLE_ID=your-google-client-id.apps.googleusercontent.com
AUTH_GOOGLE_SECRET=your-google-client-secret

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-random-secret-string
```

> See [Environment Variables](#-environment-variables) below for detailed setup instructions.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Environment Variables

### Supabase

1. Go to [supabase.com](https://supabase.com) → create a new project
2. Navigate to **Settings → API**
3. Copy the **Project URL** → `SUPABASE_URL`
4. Copy the **anon / public key** → `SUPABASE_KEY`

Your Supabase database should have the following tables:
- `cabins` — id, name, maxCapacity, regularPrice, discount, image, description
- `bookings` — id, startDate, endDate, numNights, numGuests, cabinPrice, totalPrice, cabinId, guestId, status, etc.
- `guests` — id, fullName, email, nationality, nationalID, countryFlag
- `settings` — minBookingLength, maxBookingLength, maxGuestsPerBooking, breakfastPrice

### Google OAuth

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create a new project (or select existing)
3. Navigate to **APIs & Services → Credentials**
4. Click **Create Credentials → OAuth 2.0 Client ID**
5. Set **Authorized redirect URIs** to:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://your-domain.com/api/auth/callback/google` (production)
6. Copy **Client ID** → `AUTH_GOOGLE_ID`
7. Copy **Client Secret** → `AUTH_GOOGLE_SECRET`

### NextAuth Secret

Generate a secure random string for `NEXTAUTH_SECRET`:

```bash
openssl rand -base64 32
```

---

## 📦 Available Scripts

```bash
npm run dev       # Start development server (http://localhost:3000)
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```

---

## 🌐 Deployment

### Deploy to Vercel (recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo
3. Add all environment variables from `.env.local` in the Vercel dashboard
4. Deploy — Vercel auto-detects Next.js and handles everything

> Update your Google OAuth **Authorized redirect URI** to your production domain after deploying.

### Other platforms

This is a standard Next.js app and can be deployed to any platform that supports Node.js — Railway, Render, Fly.io, AWS, etc. Run `npm run build` then `npm run start`.

---

## 🔒 Authentication Flow

1. User clicks **Sign in with Google**
2. NextAuth redirects to Google consent screen
3. On success, NextAuth checks if the guest exists in Supabase
4. If not, a new guest record is created automatically
5. The session is extended with the `guestId` from Supabase
6. Protected routes (`/account/*`) require an active session via the `authorized` callback

---

## 📱 Responsive Design

The UI is fully responsive across all screen sizes using Tailwind CSS breakpoints:

| Breakpoint | Prefix | Width |
|---|---|---|
| Mobile | _(default)_ | < 640px |
| Small | `sm:` | ≥ 640px |
| Medium | `md:` | ≥ 768px |
| Large | `lg:` | ≥ 1024px |
| XL | `xl:` | ≥ 1280px |

Key responsive changes:
- Header nav collapses on small screens, logo text hidden on mobile
- Multi-column grids stack to single column on mobile
- Account sidebar switches from vertical (desktop) to horizontal tab bar (mobile)
- Reservation calendar and form stack vertically on small screens
- Cabin detail heading transforms disabled on mobile to prevent overflow

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'feat: add your feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

Please follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgements

This project was developed as part of a learning experience in Next.js.

- UI design and project inspiration are derived from Jonas Schmedtmann’s React course 
- Cabin assets and project structure are used strictly for educational purposes from the same course  
- Image storage is handled via Supabase Storage  
- Country data is sourced from REST Countries API  
---

<div align="center">

Made with ❤️ and a love for mountains

⭐ Star this repo if you found it helpful!

</div>
