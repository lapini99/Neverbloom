import React, { useState } from 'react';
import {
  MDBCollapse,
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBRipple,
  MDBBtn
} from 'mdb-react-ui-kit';
import Form from './form';

function Footer() {
  const [showShow, setShowShow] = useState(false);

  const toggleShow = () => setShowShow(!showShow);

  return (
    <MDBFooter className="text-center" color='white' bgColor='dark' id='about-us'>
      <MDBContainer className='p-4'>
        <section className="text-center">
          <a class="btn btn-outline-light btn-floating m-1" href="https://twitter.com/NeverbloomP_" role="button"><i class="fab fa-twitter"></i></a>
          <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/neverbloomp/" role="button"><i class="fab fa-instagram"></i></a>
          <a class="btn btn-outline-light btn-floating m-1" role="button" onClick={toggleShow}><i class="fas fa-envelope"></i></a>
        </section>
        <br />
        <MDBCollapse show={showShow}>
          <Form/>
        </MDBCollapse>
        <section className='mb-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>
        <section className=''>
          <MDBRow>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'></MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay'
              >
                <img src="https://s26.q4cdn.com/977690160/files/design/U_Logo_White_RGB_1C.png" className='w-100' />

              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay'
              >
                <img src="https://www.reallusion.com/about/includes/image/press_resource_product/rl/reallusion-logo-horizontal-lightbg-grayscale_2000x443.png" className='w-100' />

              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay'
              >
                <img src='https://quixel.com/megascans_logo.png' className='w-100' />

              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay'
              >
                <img src='https://www.pngplay.com/wp-content/uploads/13/Steam-Logo-PNG-Clipart-Background.png' className='w-100' />

              </MDBRipple>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;