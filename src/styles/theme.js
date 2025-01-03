// theme.js
export const theme = {
  colors: {
    primary: '#2E3B55',      // Deep navy blue
    secondary: '#4A90E2',    // Bright blue
    accent1: '#F6B352',      // Warm orange
    accent2: '#50C878',      // Emerald green
    accent3: '#FF6B6B',      // Coral red
    background: '#F8FAFC',   // Light gray background
    white: '#FFFFFF',
    lightBackground: '#EEF2F7',
    darkText: '#1A202C',
    lightText: '#4A5568',
    gradient: {
      primary: 'linear-gradient(135deg, #2E3B55 0%, #4A90E2 100%)',
      secondary: 'linear-gradient(135deg, #4A90E2 0%, #50C878 100%)',
      accent: 'linear-gradient(135deg, #F6B352 0%, #FF6B6B 100%)'
    }
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
  },
  typography: {
    fontFamily: {
      primary: '"Inter", system-ui, -apple-system, sans-serif',
      secondary: '"Poppins", sans-serif'
    },
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem'
    }
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem'
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px'
  },
  animations: {
    transition: {
      fast: 'all 0.2s ease',
      medium: 'all 0.3s ease',
      slow: 'all 0.5s ease'
    },
    keyframes: {
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 }
      },
      slideUp: {
        from: { transform: 'translateY(20px)', opacity: 0 },
        to: { transform: 'translateY(0)', opacity: 1 }
      },
      pulse: {
        '0%': { transform: 'scale(1)' },
        '50%': { transform: 'scale(1.05)' },
        '100%': { transform: 'scale(1)' }
      }
    }
  }
};
