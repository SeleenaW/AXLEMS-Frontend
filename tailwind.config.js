/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    './admin-dashboard-service/src/**/*.{js,jsx,ts,tsx}',
    './user-login-service/src/**/*.{js,jsx,ts,tsx}',
    './booking-service/src/**/*.{js,jsx,ts,tsx}',
    './manager-control-service/src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
