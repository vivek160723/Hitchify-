import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
        "Join our carpooling community for a smarter, greener way to commute. Share rides, cut costs, and reduce your carbon footprint. Whether you're a driver looking to fill empty seats or a passenger seeking a convenient, eco-friendly travel option, our platform connects you with like-minded individuals. Experience the joy of a shared journey, where every mile contributes to a more sustainable future. Sign up now and embark on a hassle-free, cost-effective ride-sharing adventure!"
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Jhon Doe</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        "Join our carpooling community for a smarter, greener way to commute. Share rides, cut costs, and reduce your carbon footprint. Whether you're a driver looking to fill empty seats or a passenger seeking a convenient, eco-friendly travel option, our platform connects you with like-minded individuals. Experience the joy of a shared journey, where every mile contributes to a more sustainable future. Sign up now and embark on a hassle-free, cost-effective ride-sharing adventure!"
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Jhon Doe</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        "Join our carpooling community for a smarter, greener way to commute. Share rides, cut costs, and reduce your carbon footprint. Whether you're a driver looking to fill empty seats or a passenger seeking a convenient, eco-friendly travel option, our platform connects you with like-minded individuals. Experience the joy of a shared journey, where every mile contributes to a more sustainable future. Sign up now and embark on a hassle-free, cost-effective ride-sharing adventure!"
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Jhon Doe</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        "Join our carpooling community for a smarter, greener way to commute. Share rides, cut costs, and reduce your carbon footprint. Whether you're a driver looking to fill empty seats or a passenger seeking a convenient, eco-friendly travel option, our platform connects you with like-minded individuals. Experience the joy of a shared journey, where every mile contributes to a more sustainable future. Sign up now and embark on a hassle-free, cost-effective ride-sharing adventure!"
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Jhon Doe</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
