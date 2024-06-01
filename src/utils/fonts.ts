import localFont from 'next/font/local';

const fontPrimary = localFont({
  src: [
    {
      path: '../../public/fonts/primary/OpenSans-Bold.ttf',
      weight: '700',
    },
    {
      path: '../../public/fonts/primary/OpenSans-Medium.ttf',
      weight: '500',
    },
    {
      path: '../../public/fonts/primary/OpenSans-Regular.ttf',
      weight: '400',
    },
    {
      path: '../../public/fonts/primary/OpenSans-Light.ttf',
      weight: '300',
    },
  ],
  variable: '--font-primary',
});

const fontSecondary = localFont({
  src: [
    {
      path: '../../public/fonts/secondary/RobotoSlab-Bold.ttf',
      weight: '700',
    },
    {
      path: '../../public/fonts/secondary/RobotoSlab-Medium.ttf',
      weight: '500',
    },
    {
      path: '../../public/fonts/secondary/RobotoSlab-Regular.ttf',
      weight: '400',
    },
    {
      path: '../../public/fonts/secondary/RobotoSlab-Light.ttf',
      weight: '300',
    },
  ],
  variable: '--font-secondary',
});

export { fontPrimary, fontSecondary };