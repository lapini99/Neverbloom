import Carousel from 'react-bootstrap/Carousel';
import "../../src/custom.css";
import Carousel1 from "../assets/images/carousel1.png";
import Carousel2 from "../assets/images/carousel2.png";
import Carousel3 from "../assets/images/carousel3.png";

function UncontrolledCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Carousel1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Carousel2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Carousel3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

  );
}

export default UncontrolledCarousel;