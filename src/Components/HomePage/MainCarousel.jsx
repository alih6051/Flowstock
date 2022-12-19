import { Container, Heading } from "@chakra-ui/react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselCard from "./CarouselCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1251 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1250, min: 950 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 949, min: 591 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile_mini: {
    breakpoint: { max: 590, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const MainCarousel = ({ title, list }) => {
  return (
    <Container maxW="92%" paddingBottom="50px" textAlign="center">
      <Heading as="h3" size="lg" marginBottom="50px">
        {title}
      </Heading>
      <Carousel responsive={responsive}>
        {list.map((item, i) => (
          <CarouselCard key={i} {...item} />
        ))}
      </Carousel>
    </Container>
  );
};

export default MainCarousel;
