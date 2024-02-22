import React from "react";
import BuildingPic from "../../assets/images/main-slider-three-building.png";
import Car from "../../assets/images/main-slider-three-car.png";
import "./swiper.min.css";
import "./MainSlider.css";
import { Link } from "react-router-dom";
const MainSlider = () => {
  return (
    <section className="main-slider main-slider-three">
      <div
        className="swiper-container thm-swiper__slider"
        data-swiper-options='{"slidesPerView": 1, "loop": false,
                "effect": "fade",
                "pagination": {
                "el": "#main-slider-pagination",
                "type": "bullets",
                "clickable": true
                },
                "navigation": {
                "nextEl": "#main-slider__swiper-button-next",
                "prevEl": "#main-slider__swiper-button-prev"
                },
                "autoplay": {
                "delay": 5000
                }}'
      >
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="main-slider-three-bg bg-3"></div>
            <div className="main-slider-three-bg-two"></div>
            <div className="main-slider-three-building">
              <img src={BuildingPic} alt="Building" />
            </div>
            <div className="main-slider-three-car">
              <img src={Car} alt="Car" className="float-bob-y" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-7">
                  <div className="main-slider__content">
                    <h2>
                       Smart Trash Services
                    </h2>
                    <Link to={"/Trashes"} className="thm-btn">
                     Sign In
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSlider;
