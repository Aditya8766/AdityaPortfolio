import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

import CodeIcon from '@mui/icons-material/Code';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { renderToStaticMarkup } from 'react-dom/server';

function App() {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = '🙏 Thank you! Please come again!';
        updateFavicon(<VolunteerActivismIcon />);
      } else {
        document.title = `Aditya's Portfolio`;
        updateFavicon(<CodeIcon />);
      }
    };

    const updateFavicon = (iconComponent) => {
      const svgString = renderToStaticMarkup(iconComponent);
      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
          ${svgString}
        </svg>
      `;
      const svgBlob = new Blob([svg], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(svgBlob);

      let link = document.querySelector("link[rel='icon']");
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      link.type = 'image/svg+xml';
      link.href = url;
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    document.title = `Aditya's Portfolio`;
    updateFavicon(<CodeIcon />);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <Box>
      <Header />
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
