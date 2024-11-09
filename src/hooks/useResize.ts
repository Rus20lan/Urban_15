import { useEffect, useState } from 'react';

enum BP {
  DESKTOP = 1920,
  LAPTOP = 1440,
  TABLET = 1024,
  MOBILE = 480,
}

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event: UIEvent) => {
      const win = event.target as Window;
      setWidth(win.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isDesktop: width >= BP.DESKTOP,
    isLaptop: width < BP.DESKTOP && width >= BP.LAPTOP,
    isTablet: width < BP.LAPTOP && width >= BP.TABLET,
    isMobile: width < BP.TABLET,
  };
};
