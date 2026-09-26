/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#050508',
        surface: '#0c0c14',
        'surface-2': '#11111c',
        border: '#1a1a2e',
        'border-light': '#252540',
        primary: '#3B82F6',
        'primary-light': '#60A5FA',
        'primary-dark': '#1D4ED8',
        accent: '#8B5CF6',
        'accent-light': '#A78BFA',
        cyan: '#06B6D4',
        'text-primary': '#F8F8FF',
        'text-secondary': '#A0A0B8',
        'text-muted': '#60607A',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #050508 0%, #0a0a18 50%, #050508 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(59,130,246,0.05) 0%, rgba(139,92,246,0.05) 100%)',
        'glow-blue': 'radial-gradient(ellipse at center, rgba(59,130,246,0.15) 0%, transparent 70%)',
        'glow-purple': 'radial-gradient(ellipse at center, rgba(139,92,246,0.15) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient': 'gradient 8s ease infinite',
        'slide-up': 'slideUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.8s ease forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'flow': 'flow 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        glow: {
          from: { boxShadow: '0 0 20px rgba(59,130,246,0.3)' },
          to: { boxShadow: '0 0 40px rgba(59,130,246,0.6)' },
        },
        flow: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 30px rgba(59,130,246,0.3)',
        'glow-purple': '0 0 30px rgba(139,92,246,0.3)',
        'glow-cyan': '0 0 30px rgba(6,182,212,0.3)',
        'card': '0 4px 40px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 60px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
}
