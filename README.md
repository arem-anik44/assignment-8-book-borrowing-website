# BiblioLoom — Online Book Borrowing Platform

A modern web application for browsing, searching, and borrowing books online. Built with Next.js, BetterAuth, MongoDB, Tailwind CSS, and DaisyUI.

## Live URL

https://assignment-8-book-borrowing-website.vercel.app

## Key Features

- Responsive navbar with logo, navigation links, and conditional login/logout
- Custom footer with social media links and contact section
- Home page with hero banner, scrolling marquee, featured books, reader benefits, and Swiper testimonials
- 12-book dataset across Story, Tech, and Science categories
- All Books page with title search and category sidebar filter
- Private book details page with borrow functionality
- My Profile page showing user info and borrowed books with timestamps
- Login and Register with email/password, Google OAuth, and GitHub OAuth
- BetterAuth authentication with MongoDB adapter
- Fully responsive on mobile, tablet, and desktop

## NPM Packages Used

- next (16.2.4) — React framework with App Router
- react (19.2.4) — UI library
- better-auth — Authentication with email, Google, and GitHub
- @better-auth/mongo-adapter — MongoDB adapter for BetterAuth
- mongodb — Database driver
- tailwindcss (v4) — Utility-first CSS
- daisyui — Tailwind CSS component library
- react-icons — Icon library
- react-hot-toast — Toast notifications
- react-fast-marquee — Scrolling marquee text
- swiper — Touch slider/carousel for reader stories

## Setup

1. Clone the repository
2. Run `npm install`
3. Copy `.env.example` to `.env` and fill in your credentials
4. Run `npm run dev`
5. Open http://localhost:3000

## Deployment

Deployed on Vercel. Set all environment variables in Vercel dashboard with production URL for `BETTER_AUTH_URL` and `NEXT_PUBLIC_BETTER_AUTH_URL`. Update Google and GitHub OAuth callback URLs to match the Vercel domain.
