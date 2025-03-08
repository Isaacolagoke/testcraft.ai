/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontSize: {
        // Display sizes
        'display-lg': ['56px', {
          lineHeight: '100%',
          letterSpacing: '-0.04em',
        }],
        'display-sm': ['48px', {
          lineHeight: '100%',
          letterSpacing: '-0.04em',
        }],
        // Heading sizes
        'heading-1': ['40px', {
          lineHeight: '100%',
          letterSpacing: '-0.04em',
        }],
        'heading-2': ['36px', {
          lineHeight: '100%',
          letterSpacing: '-0.04em',
        }],
        // Paragraph sizes
        'paragraph-lg': ['18px', {
          lineHeight: '145%',
          letterSpacing: '0',
        }],
        'paragraph-md': ['16px', {
          lineHeight: '145%',
          letterSpacing: '0',
        }],
        // Caption sizes
        'caption-lg': ['14px', {
          lineHeight: '120%',
          letterSpacing: '0.12em',
        }],
        'caption-sm': ['12px', {
          lineHeight: '120%',
          letterSpacing: '0.12em',
        }],
        'caption-xs': ['10px', {
          lineHeight: '120%',
          letterSpacing: '0.18em',
        }],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        white: "#FFFFFF",
        black: "#000000",
        
        // Primary palette
        primary: {
          DEFAULT: "#06545E",
          50: "#E6F5F6",
          100: "#CCEBED",
          200: "#99D7DB",
          300: "#66C3C9",
          400: "#33AFB7",
          500: "#06545E",
          600: "#054851",
          700: "#043C44",
          800: "#033037",
          900: "#02242A",
        },
        
        // Neutral palette
        neutral: {
          50: '#F9FAFB',
          75: '#F7F9FC',
          100: '#F0F2F5',
          200: '#E4E7EC',
          300: '#D0D5DD',
          400: '#98A2B3',
          500: '#667185',
          600: '#475467',
          700: '#344054',
          800: '#1D2939',
          900: '#101928',
        },
        
        // Brown palette
        brown: {
          50: '#FBF1F1',
          75: '#F0E6E6',
          100: '#EAD8D8',
          200: '#CDC4C4',
          300: '#BCAFAF',
          400: '#A29999',
          500: '#8D8484',
          600: '#786F6F',
          700: '#645D5D',
          800: '#514A4A',
          900: '#3E3838',
        },
        
        // Slate palette
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['var(--font-manrope)'],
      },
      minWidth: {
        'mobile': '450px',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        "fade-out": {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        "zoom-in": {
          from: { transform: "scale(0.95)" },
          to: { transform: "scale(1)" },
        },
        "zoom-out": {
          from: { transform: "scale(1)" },
          to: { transform: "scale(0.95)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.2s ease-out",
        "fade-out": "fade-out 0.2s ease-out",
        "zoom-in": "zoom-in 0.2s ease-out",
        "zoom-out": "zoom-out 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} 