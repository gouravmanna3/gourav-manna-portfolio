import Slider from "react-slick";
import Testimonial from "./Testimonial";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialData } from "../../utils/utils";
import { TestimonialProps } from "./Testimonials.types";

const Testimonials = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
  };
  return (
    <div className="container my-12 mx-auto md:px-6">
      <section className="text-white">
        <h2 className="mb-12 text-2xl md:text-5xl font-bold font-notoSerif tracking-wider text-center">
          What others say about me
        </h2>

        <div className="slider-container">
          <Slider {...settings}>
            {testimonialData.map((testimonial: TestimonialProps) => (
              <div>
                <Testimonial {...testimonial} />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
