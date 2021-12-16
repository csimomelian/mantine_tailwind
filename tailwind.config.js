module.exports = {

  content: [
    "./src/**/*.{js,jsx}",
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      maxWidth: {
        'form-content-max': '1025px'
      },
      colors: {
        brand: {
          'u-primary-color': 'var(--u-primary-color)',
          'u-primary-border-color': 'var(--u-primary-border-color)',
          'u-secondary-color': 'var(--u-secondary-color)',
          'u-secondary-border-color': 'var(--u-secondary-border-color)',
          'u-secondary-text-color': 'var(--u-secondary-text-color)',
          'u-tertiary-color': 'var(--u-tertiary-color)',
          'u-tertiary-border-color': 'var(--u-tertiary-border-color)',
          'u-disabled-color': 'var(--u-disabled-color)',
          'u-disabled-border-color': 'var(--u-disabled-border-color)',
          'u-active-color': 'var(--u-active-color)',
          'u-brand-color': 'var(--u-brand-color)',
          'u-brand-error': 'var(--u-brand-error)'
        },
        transparent: 'transparent',
        neutral: {
          black: '#000000',
          white: '#FFFFFF',
          dark: '#777777',
          dark2: '#828282',
          dark3: '#BDBDBD',
          light: "#F2F2F2"
        },
        red: {
          '1': '#DB384B',
          '2': '#EFB3B3',
          '3': '#FFE2E5'
        },
        blue: {
          '1': '#44C1DC',
          '2': '#4361FF',
          '3': '#0D8BFF',
          '4': '#115DF0',
          '5': '#86C5FF',
          '6': 'rgba(0, 117, 255, 0,7)',
          '7': '#B5EEF1',
        },
        green: {
          '1': '#BFE1BF',
        },
      },
    },
    fontSize: {
      sm: ['12px', '14px'],
      icon: ['36px', '36px'],
      base: ['16px', '19px'],
      lg: ['26px', '35px'],
      xl: ['34px', '44px'],
      '2xl': ['42px', '42px'],
      '3xl': ['60px', '80px'],
      '4xl': ['70px', '84px'],
    },
    fontFamily: {
      'barlow-regular': ['Barlow', 'regular'],
      'poppins-regular': ['Poppins', 'regular']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
