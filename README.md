# Epoch19 - Global Data Archive Platform

Epoch19 is a secure data archiving platform built for researchers and institutes. It features a futuristic UI, role-based access control (User/Admin), and premium membership tiers.

## 🚀 Features
- **Authentication:** Secure Login/Signup with Firebase Auth.
- **Role Management:** Admin dashboard to manage users (Ban/Promote).
- **Global Config:** Dynamic settings for support contacts and payment details.
- **PWA Support:** Installable as a native-like app on mobile/desktop.
- **Premium Tier:** Locked content accessible only to premium users.

## 🛠 Tech Stack
- **Frontend:** HTML5, CSS3 (Glassmorphism), Vanilla JavaScript (ES6 Modules).
- **Backend:** Firebase (Authentication, Firestore Database).
- **Libraries:** SweetAlert2 (Popups), Boxicons (Icons).

## 📦 Setup & Installation
1. Clone the repository.
2. Update `firebase-config.js` with your own Firebase credentials.
3. Serve the files using a local server (e.g., Live Server in VS Code).
   *Note: Modules require a server context; opening `index.html` directly won't work.*

## 📂 Project Structure
- `/assets`: Images and icons.
- `firebase-config.js`: Centralized Firebase initialization.
- `service-worker.js`: PWA offline caching logic.
- `admin-*.html`: Administrative interfaces.

## 📄 License
Private / Proprietary
