/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"], // Pastikan jalur file sesuai proyek Anda
  darkMode: 'class', // Menambahkan dark mode dengan class
  theme: {
    extend: {
      colors: {
        primary: '#8B4513', // SaddleBrown - sebagai warna utama
        secondary: '#D2B48C', // Tan - sebagai warna aksen
        accent: '#A0522D', // Sienna - untuk elemen tambahan
        background: '#F5DEB3', // Wheat - untuk latar belakang terang
        dark: '#3E2723', // Dark color untuk mode gelap
      },
      fontFamily: {
        custom: ['Sour Gummy', 'sans-serif'], // Menggunakan font Sour Gummy
      },
    },
  },
  plugins: [],
};

