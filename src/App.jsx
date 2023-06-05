import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import CollapseNavbar from "./components/header.jsx";
import NumbOfJoy from "./components/numbOfJoy.jsx"
import WhatIs from "./components/info.jsx";
import WhatIsMobile from "./components/infoMobile.jsx";
import YouTubeEmbed from "./components/youtube.jsx";
import UncontrolledCarousel from "./components/carousel.jsx"
import Footer from "./components/footer.jsx"; 
import { MDBContainer } from "mdb-react-ui-kit";

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    <CollapseNavbar/>
    <YouTubeEmbed/>
    <Container>
    <NumbOfJoy/>
    {isDesktop ? (
      <WhatIs/>
    ):(
      <WhatIsMobile/>
    )}
    <UncontrolledCarousel/>
    </Container>
    <Footer/>
    </>
  );
}

export default App;