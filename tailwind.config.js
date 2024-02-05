/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          25: "var(--primary-25)",
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
          950: "var(--primary-950)",
        },
        gray: {
          25: "var(--gray-25)",
          50: "var(--gray-50)",
          100: "var(--gray-100)",
          200: "var(--gray-200)",
          300: "var(--gray-300)",
          400: "var(--gray-400)",
          500: "var(--gray-500)",
          600: "var(--gray-600)",
          700: "var(--gray-700)",
          800: "var(--gray-800)",
          900: "var(--gray-900)",
          950: "var(--gray-950)",
        },
        "gray-dark": {
          25: "var(--gray-dark-25)",
          50: "var(--gray-dark-50)",
          100: "var(--gray-dark-100)",
          200: "var(--gray-dark-200)",
          300: "var(--gray-dark-300)",
          400: "var(--gray-dark-400)",
          500: "var(--gray-dark-500)",
          600: "var(--gray-dark-600)",
          700: "var(--gray-dark-700)",
          800: "var(--gray-dark-800)",
          900: "var(--gray-dark-900)",
          950: "var(--gray-dark-950)",
        },
        danger: {
          25: "var(--danger-25)",
          50: "var(--danger-50)",
          100: "var(--danger-100)",
          200: "var(--danger-200)",
          300: "var(--danger-300)",
          400: "var(--danger-400)",
          500: "var(--danger-500)",
          600: "var(--danger-600)",
          700: "var(--danger-700)",
          800: "var(--danger-800)",
          900: "var(--danger-900)",
          950: "var(--danger-950)",
        },
        warning: {
          25: "var(--warning-25)",
          50: "var(--warning-50)",
          100: "var(--warning-100)",
          200: "var(--warning-200)",
          300: "var(--warning-300)",
          400: "var(--warning-400)",
          500: "var(--warning-500)",
          600: "var(--warning-600)",
          700: "var(--warning-700)",
          800: "var(--warning-800)",
          900: "var(--warning-900)",
          950: "var(--warning-950)",
        },
        success: {
          25: "var(--success-25)",
          50: "var(--success-50)",
          100: "var(--success-100)",
          200: "var(--success-200)",
          300: "var(--success-300)",
          400: "var(--success-400)",
          500: "var(--success-500)",
          600: "var(--success-600)",
          700: "var(--success-700)",
          800: "var(--success-800)",
          900: "var(--success-900)",
          950: "var(--success-950)",
        },
        teal: {
          25: "var(--teal-25)",
          50: "var(--teal-50)",
          100: "var(--teal-100)",
          200: "var(--teal-200)",
          300: "var(--teal-300)",
          400: "var(--teal-400)",
          500: "var(--teal-500)",
          600: "var(--teal-600)",
          700: "var(--teal-700)",
          800: "var(--teal-800)",
          900: "var(--teal-900)",
          950: "var(--teal-950)",
        },
        cyan: {
          25: "var(--cyan-25)",
          50: "var(--cyan-50)",
          100: "var(--cyan-100)",
          200: "var(--cyan-200)",
          300: "var(--cyan-300)",
          400: "var(--cyan-400)",
          500: "var(--cyan-500)",
          600: "var(--cyan-600)",
          700: "var(--cyan-700)",
          800: "var(--cyan-800)",
          900: "var(--cyan-900)",
          950: "var(--cyan-950)",
        },
        fuchia: {
          25: "var(--fuchia-25)",
          50: "var(--fuchia-50)",
          100: "var(--fuchia-100)",
          200: "var(--fuchia-200)",
          300: "var(--fuchia-300)",
          400: "var(--fuchia-400)",
          500: "var(--fuchia-500)",
          600: "var(--fuchia-600)",
          700: "var(--fuchia-700)",
          800: "var(--fuchia-800)",
          900: "var(--fuchia-900)",
          950: "var(--fuchia-950)",
        },
        rose: {
          25: "var(--rose-25)",
          50: "var(--rose-50)",
          100: "var(--rose-100)",
          200: "var(--rose-200)",
          300: "var(--rose-300)",
          400: "var(--rose-400)",
          500: "var(--rose-500)",
          600: "var(--rose-600)",
          700: "var(--rose-700)",
          800: "var(--rose-800)",
          900: "var(--rose-900)",
          950: "var(--rose-950)",
        },
        investment: {
          25: "var(--investment-25)",
          50: "var(--investment-50)",
          100: "var(--investment-100)",
          200: "var(--investment-200)",
          300: "var(--investment-300)",
          400: "var(--investment-400)",
          500: "var(--investment-500)",
          600: "var(--investment-600)",
          700: "var(--investment-700)",
          800: "var(--investment-800)",
        },
        expense: {
          25: "var(--expense-25)",
          50: "var(--expense-50)",
          100: "var(--expense-100)",
          200: "var(--expense-200)",
          300: "var(--expense-300)",
          400: "var(--expense-400)",
          500: "var(--expense-500)",
          600: "var(--expense-600)",
          700: "var(--expense-700)",
          800: "var(--expense-800)",
        },
        subscription: {
          25: "var(--subscription-25)",
          50: "var(--subscription-50)",
          100: "var(--subscription-100)",
          200: "var(--subscription-200)",
          300: "var(--subscription-300)",
          400: "var(--subscription-400)",
          500: "var(--subscription-500)",
          600: "var(--subscription-600)",
          700: "var(--subscription-700)",
          800: "var(--subscription-800)",
        },
        income: {
          25: "var(--income-25)",
          50: "var(--income-50)",
          100: "var(--income-100)",
          200: "var(--income-200)",
          300: "var(--income-300)",
          400: "var(--income-400)",
          500: "var(--income-500)",
          600: "var(--income-600)",
          700: "var(--income-700)",
          800: "var(--income-800)",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: [
          "0.75rem", // 12px
          {
            lineHeight: "1.125rem", //18px
            letterSpacing: "0.02em",
          },
        ],
        sm: [
          "0.875rem", // 14px
          {
            lineHeight: "1.25rem", //20px
            letterSpacing: "0.02em",
          },
        ],
        base: [
          "1rem", //16px
          {
            lineHeight: "1.5rem", //24 px
            letterSpacing: "0",
          },
        ],
        lg: [
          "1.125rem", //18px
          {
            lineHeight: "1.75rem", // 28px
            letterSpacing: "0",
          },
        ],
        xl: [
          "1.25rem", //20px
          {
            lineHeight: "1.875rem", // 30px
            letterSpacing: "-0.01em",
          },
        ],
        "2xl": [
          "1.5rem", //24px
          {
            lineHeight: "2rem", //32 px
            letterSpacing: "-0.01em",
          },
        ],
        "3xl": [
          "1.875rem", // 30px
          {
            lineHeight: "2.575rem", // 38px
            letterSpacing: "-0.01em",
          },
        ],
        "4xl": [
          "2.25rem", // 36 px
          {
            lineHeight: "2.75rem", //44px
            letterSpacing: "-0.02em",
          },
        ],
        "5xl": [
          "3rem", // 48 px
          {
            lineHeight: "3.75rem", //60px
            letterSpacing: "-0.02em",
          },
        ],
      },
      spacing: {
        0: "0rem", // 0px
        0.5: "0.125rem", // 2px
        1: "0.25rem", // 4px
        1.5: "0.375rem", // 6px
        2: "0.5rem", // 8px
        3: "0.75rem", // 12px
        4: "1rem", // 16px
        5: "1.25rem", // 20px
        6: "1.5rem", // 24px
        8: "2rem", // 32px
        10: "2.5rem", // 40px
        12: "3rem", // 48px
        16: "4rem", // 64px
        20: "5rem", // 80px
        24: "6rem", // 96px
        32: "8rem", // 128px
        40: "10rem", // 160px
        48: "12rem", // 192px
        56: "14rem", // 224px
        64: "16rem", // 256px
        80: "20rem", // 320px
        96: "24rem", // 384px
        120: "30rem", // 480px
        140: "35rem", // 560px
        160: "40rem", // 640px
        180: "45rem", // 720px
        192: "48rem", // 768px
        256: "64rem", // 1024px
        320: "80rem", // 1280px
        360: "90rem", // 1440px
        400: "100rem", // 1600px
        480: "120rem", // 1920px
      },
    },
  },
  plugins: [],
};
