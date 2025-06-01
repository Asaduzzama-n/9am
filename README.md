Here is your formatted and cleaned-up `README.md` for the **Shop App Frontend (TypeScript)**:

---

# 🛍️ Shop App Frontend (TypeScript)

A React frontend built with **TypeScript**, **Vite**, and **Tailwind CSS** for a MERN stack application featuring user authentication and **subdomain-based shop dashboards**.

Supports:

* User signup & signin
* Dashboard with profile and shop links
* Shop-specific pages accessible via subdomains (e.g., `http://beautyhub.localhost:5173`)

---

## 🚀 Features

* **Signup**
  Register with a username, password (min 8 characters, includes number & special character), and 3–4 unique shop names. Input validation included.

* **Signin**
  Log in with username and password. Optionally enable "Remember Me":

  * ✅ Checked: session lasts **7 days**
  * ❌ Unchecked: session lasts **30 minutes**

* **Dashboard**

  * Profile modal with username and clickable shop subdomains
  * Logout button with confirmation

* **Shop Dashboard**

  * Access shop-specific pages via subdomain (e.g., `http://beautyhub.localhost:5173`)
  * Shows loading spinner while verifying authentication

* **Session Management**
  Uses JWT stored in **HTTP-only cookie** with `domain=.localhost` for subdomain persistence.

* **TypeScript**
  Strong type safety with interfaces for users, inputs, API responses.

* **Tailwind CSS**
  Responsive, modern UI.

---

## 🧰 Prerequisites

* Node.js v16+
* npm v8+
* Backend server (Node.js + Express + MongoDB) running at `http://localhost:5000`
* MongoDB instance (local or Atlas)

---

## 🛠️ Setup

```bash
# 1. Clone the repository
git clone <repository-url>
cd client

# 2. Install dependencies
npm install

# 3. Configure environment
cp .env.example .env
# Edit .env and set:
# VITE_API_URL=http://localhost:5000

# 4. Run development server
npm run dev
```

> App will be available at:
> 🔗 `http://localhost:5173`
> 🔗 Test subdomains with: `http://<shopName>.lvh.me:5173` (e.g., `http://beautyhub.lvh.me:5173`)

---

## 📁 Project Structure

```
client/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/         # Reusable UI components (Navbar, ProtectedRoute)
│   ├── pages/              # Route pages (Signup, Signin, Dashboard, ShopDashboard)
│   ├── types/              # TypeScript interfaces
│   ├── App.tsx             # App routes
│   ├── main.tsx            # App entry point
│   ├── index.css           # Tailwind styles
│   └── vite-env.d.ts       # Env types
├── .env.example
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

---

## 📦 Dependencies

* `react`, `react-dom` – React core
* `react-router-dom` – Routing & subdomain support
* `axios` – HTTP requests
* `react-spinners` – Loading spinner
* `tailwindcss`, `postcss`, `autoprefixer` – Styling
* `@types/react-router-dom`, `@types/node` – TypeScript definitions

---

## 🧪 Testing Locally

### ✅ Signup

* Validations:

  * Username required
  * Password must be strong (8+ chars, number, special char)
  * At least 3 unique shop names
* Test error messages & redirection to dashboard

### ✅ Signin

* Test with correct/incorrect credentials
* Toggle "Remember Me" and verify session behavior
* Test redirection to dashboard

### ✅ Dashboard

* Open profile modal
* Click subdomain shop links (e.g., `http://beautyhub.localhost:5173`)
* Test logout

### ✅ Shop Dashboard

* Access subdomain directly (e.g., `http://beautyhub.lvh.me:5173`)
* Verify spinner and shop page load
* If unauthenticated, should redirect to `/signin`

### ✅ TypeScript

```bash
npm run tsc  # Check for type errors
```

---

## 🌐 Subdomain Testing (Local)

Use `lvh.me` which maps to `127.0.0.1` (localhost) automatically:

```bash
http://<shopName>.lvh.me:5173
# Example:
http://beautyhub.lvh.me:5173
```

> ✅ No need to edit `/etc/hosts`

---

## 🚀 Deployment (Vercel)

### Client:

1. Push `client/` to GitHub

2. Import repo into Vercel

3. Add env variable:

   ```
   VITE_API_URL=https://your-backend.onrender.com
   ```

4. Enable wildcard subdomains:

   ```
   *.yourdomain.vercel.app
   ```

### Backend:

* Ensure JWT cookie is set with:

  ```
  domain=.yourdomain.vercel.app
  ```
* Allow CORS from:

  ```
  http://*.yourdomain.vercel.app
  ```

### Demo:

* Main app:

  ```
  https://yourdomain.vercel.app
  ```
* Shop subdomain:

  ```
  https://beautyhub.yourdomain.vercel.app
  ```

---

## ⚙️ Notes

* **JWT Cookie**: HTTP-only, with `domain=.localhost` (or `.yourdomain.vercel.app`)
* **ProtectedRoute**: Validates token & shows loader before rendering protected pages
* **Interfaces**: All data types in `src/types/index.ts`
* **Tailwind**: Used for all styling
* **Subdomain Routing**: `react-router-dom` with dynamic `:shopName` path

---

## 🧩 Troubleshooting

* **CORS**: Backend must allow both `http://localhost:5173` and `http://*.localhost:5173` with `credentials: true`
* **Subdomain Issues**: Ensure proper cookie domain and wildcard DNS/Vercel settings
* **Type Errors**: Run `npm run tsc` to find and fix issues

---

## 📦 Backend Setup

See Server README.md

---

