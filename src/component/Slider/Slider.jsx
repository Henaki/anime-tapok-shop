import React, { Component } from "react";
import Slider from "react-slick";
import style from './Slider.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import state from '../../state'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      className: "slides",
      pauseOnDotsHover: true
    };

    return (
      <div className={style.slider_main_border_costil}>
        <Slider {...settings}>
          {state.photos.map((slide) => {
            return (
              <div className={style.slider_main}>
              <img src={slide.url} className={style.photo_slider} width="1300px"/>
              </div>
            );
          }
          )}
        </Slider>
      </div>
    );
  }
}