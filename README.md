# Dream Journey Travels

Dream Journey Travels is a full-stack travel agency platform with a React frontend, Express backend, and MongoDB data layer. The project ships with destination browsing, package management, bookings, authentication, and admin workflows.

## Project Structure

```
./frontend   # React UI
./backend    # Express API
```

## Features

- Responsive multi-page React experience (Home, Destinations, Packages, Booking, About, Contact, Admin).
- Booking flow with validation and confirmation screen.
- Search and filter for destinations and packages.
- REST APIs for destinations, packages, bookings, users, and messages.
- JWT authentication with role-based admin protections.
- MongoDB schemas with validation and secure password hashing.
- Privacy Policy and Terms & Conditions pages.
- Deployment-ready scripts for Vercel/Netlify (frontend) and Render/Heroku (backend).

## Requirements

- Node.js 18+
- MongoDB instance (local or hosted)

## Environment Variables

Create environment files from the examples:

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

Update the values with your MongoDB URI, JWT secret, and payment gateway keys.

## Install & Run (Development)

From the repo root:

```bash
npm install
npm run install:all
npm start
```

- Frontend: http://localhost:3000
- Backend: http://localhost:5000

You can also run each side independently:

```bash
npm install --prefix backend
npm run dev --prefix backend
```

```bash
npm install --prefix frontend
npm start --prefix frontend
```

## API Overview

Base URL: `http://localhost:5000/api`

- `POST /auth/signup` - Register user
- `POST /auth/login` - Login user
- `GET /destinations` - List destinations
- `GET /packages` - List packages (supports `search`, `category`, `maxPrice` query params)
- `POST /bookings` - Create booking
- `GET /bookings` - Admin: list bookings
- `POST /messages` - Contact form submission

## Deployment

### Frontend (Vercel/Netlify)

- Build command: `npm run build` (or `npm run vercel-build`/`npm run netlify-build`)
- Output directory: `frontend/build`
- Add `REACT_APP_API_URL` to environment variables in your hosting provider.

### Backend (Render/Heroku)

- Build command: `npm install`
- Start command: `npm start`
- Add environment variables from `backend/.env.example` in the hosting provider.

## Notes

- Admin routes require a JWT with `role=admin`.
- Payment gateways are placeholders. Integrate Stripe or Razorpay using their official SDKs.

Happy travels!
