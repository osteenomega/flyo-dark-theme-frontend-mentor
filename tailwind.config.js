/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px',
    },
    extend: {
      colors: {
        darkBlueIntro: 'hsl(217, 28%, 15%)', // Dark Blue (intro and email sign up background)
        darkBlueMain: 'hsl(218, 28%, 13%)', // Dark Blue (main background)
        darkBlueFooter: 'hsl(216, 53%, 9%)', // Dark Blue (footer background)
        darkBlueTestimonials: 'hsl(219, 30%, 18%)', // Dark Blue (testimonials background)
        cyanCta: 'hsl(176, 68%, 64%)', // Cyan (inside call-to-action gradient)
        blueCta: 'hsl(198, 60%, 50%)', // Blue (inside call-to-action gradient)
        lightRedError: 'hsl(0, 100%, 63%)', // Light Red (error)
        white: 'hsl(0, 0%, 100%)', // White
      },
      fontFamily: {
        body: ['Open Sans', 'sans-serif'], // Body
        fontHeading: ['Raleway', 'sans-serif'], // Headings, Call-to-actions, Header Navigation
      },
    },
  },
  plugins: [],
}
