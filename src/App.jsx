import React from "react";
import Container from 'react-bootstrap/Container';
import CollapseNavbar from "./components/header.jsx";
import NumbOfJoy from "./components/numbOfJoy.jsx"
import WhatIs from "./components/info.jsx";
import YouTubeEmbed from "./components/youtube.jsx";
import UncontrolledCarousel from "./components/carousel.jsx"
import Footer from "./components/footer.jsx"; 
import { MDBContainer } from "mdb-react-ui-kit";

function App() {
  return (
    <>
    <CollapseNavbar/>
    <YouTubeEmbed/>
    <Container>
    <NumbOfJoy/>
    <WhatIs/>
    <UncontrolledCarousel/>
    </Container>
    <Footer/>
    </>
  );
}

export default App;