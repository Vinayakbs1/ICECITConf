// commonStyles.js
import { theme } from './theme';

export const commonStyles = {
  pageContainer: `
    min-h-screen 
    bg-gradient-to-br 
    from-[${theme.colors.background}] 
    to-[${theme.colors.lightBackground}] 
    py-12 
    px-4
  `,
  
  sectionContainer: `
    max-w-7xl 
    mx-auto 
    bg-white 
    rounded-2xl 
    shadow-lg 
    overflow-hidden 
    transition-all 
    duration-300 
    hover:shadow-xl
  `,
  
  cardHover: `
    transform 
    transition-all 
    duration-300 
    hover:-translate-y-2 
    hover:shadow-xl
  `,
  
  gradientText: `
    bg-clip-text 
    text-transparent 
    bg-gradient-to-r 
    from-[${theme.colors.primary}] 
    to-[${theme.colors.secondary}]
  `,
  
  buttonPrimary: `
    px-6 
    py-3 
    bg-gradient-to-r 
    from-[${theme.colors.primary}] 
    to-[${theme.colors.secondary}] 
    text-white 
    rounded-lg 
    font-semibold 
    transition-all 
    duration-300 
    hover:shadow-lg 
    hover:scale-105
  `,
  
  heading: {
    h1: `
      text-4xl 
      md:text-5xl 
      font-bold 
      ${theme.typography.fontFamily.primary}
    `,
    h2: `
      text-3xl 
      md:text-4xl 
      font-semibold 
      ${theme.typography.fontFamily.primary}
    `,
    h3: `
      text-2xl 
      md:text-3xl 
      font-medium 
      ${theme.typography.fontFamily.primary}
    `
  },
  
  flexCenter: `
    flex 
    items-center 
    justify-center
  `,
  
  gridLayout: `
    grid 
    grid-cols-1 
    md:grid-cols-2 
    lg:grid-cols-3 
    gap-6
  `,
  
  card: `
    bg-white 
    rounded-xl 
    shadow-md 
    p-6 
    transition-all 
    duration-300 
    hover:shadow-xl
  `,
  
  gradientBorder: `
    relative 
    before:absolute 
    before:inset-0 
    before:p-[2px] 
    before:bg-gradient-to-r 
    before:from-[${theme.colors.primary}] 
    before:to-[${theme.colors.secondary}] 
    before:rounded-xl 
    before:-z-10
  `,
  
  glassEffect: `
    backdrop-filter 
    backdrop-blur-lg 
    bg-opacity-50 
    bg-white
  `
};
