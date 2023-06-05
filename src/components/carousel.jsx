import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import "../../src/custom.css";
import Carousel1 from "../assets/images/carousel1.png";
import Carousel2 from "../assets/images/carousel2.png";
import Carousel3 from "../assets/images/carousel3.png";

function UncontrolledCarousel() {
  return (
    <MDBCarousel>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={Carousel1}
        alt='First Slide'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={Carousel2}
        alt='Second Slide'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={Carousel3}
        alt='Third Slide'
      />
    </MDBCarousel>

  );
}

export default UncontrolledCarousel;