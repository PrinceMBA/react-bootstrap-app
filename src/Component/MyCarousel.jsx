import React from "react";
import { Carousel } from "react-bootstrap";

function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          style={{ height: "550px" }}
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1487370544/photo/children-eating-ice-cream-in-the-summer.webp?b=1&s=170667a&w=0&k=20&c=22Af4q7AvwqjtSbeePwZiO4jd8XUFdt3mlFN8OSzLgs="
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Slide</h3>
          <p>This is the caption for the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "550px" }}
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1392530850/photo/group-of-children-in-the-park-eating-cold-ice-cream.webp?b=1&s=170667a&w=0&k=20&c=RDHvd5U7ur0dDsTcVTl1n2W_Wrssp1hUd3dyZ-EAfUI="
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>This is the caption for the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "550px" }}
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1402496834/photo/toddler-enjoying-ice-cream.webp?b=1&s=170667a&w=0&k=20&c=8RPmHZ0baDVK2ySBF7XNj9oSCaB20uE6UNCQeND1P64="
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third Slide</h3>
          <p>This is the caption for the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
