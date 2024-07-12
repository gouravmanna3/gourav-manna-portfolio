import Slider from "react-slick";
import Testimonial from "./Testimonial";
import { testimonialData } from "../../utils/utils";
import { TestimonialProps } from "./Testimonials.types";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    arrows: false,
  };
  return (
    <div className="container my-4 md:my-12 mx-auto md:px-6">
      <section className="text-white">
        <h2 className="md:mb-12 text-2xl md:text-5xl font-bold font-notoSerif tracking-wider text-center">
          What others say about me
        </h2>

        <div className="p-4 slider-container">
          <Slider {...settings}>
            {testimonialData.map((testimonial: TestimonialProps) => (
              <div key={testimonial.id}>
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
