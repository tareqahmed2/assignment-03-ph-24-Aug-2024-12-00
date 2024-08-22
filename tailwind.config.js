/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit", // Explicitly enables Just-In-Time mode
    content: ["./src/**/*.{html,js}"], // Specifies where Tailwind should look for content to purge unused styles
    theme: {
        extend: {}, // Extend the default theme here
    },
    plugins: [], // Add plugins if needed
};