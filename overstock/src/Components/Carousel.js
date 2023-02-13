import React from "react";
import Slider from "react-slick";
import styles from "./Carousel.module.css"



export const  Carousel = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };


  
  return (
  
    
      <Slider {...settings}>
        
            
<div>
  <img src="https://ak1.ostkcdn.com/img/mxc/12292022-MOPS-WinterUpdate-Frame1.jpg?imwidth=1920"></img>
</div>


      </Slider>
    
);
}

