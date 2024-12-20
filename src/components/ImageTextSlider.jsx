import React from 'react';
import Slider from 'react-slick';
import { SliderData } from '../Data';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ImageTextSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,            
    autoplaySpeed: 1000,       
  };

  return (
    <Slider {...settings}>
      {SliderData.map((slide) => (
        <div className="container p-5" key={slide.id} style={{ padding: '20px' }}>
          <div className="row align-items-center">
            <div className="col-md-6" style={{ textAlign: 'left' }}>
              <h2 style={{ marginBottom: '10px' }}>{slide.title}</h2>
              <p>{slide.desc}</p>
              <button className="btn btn-sm btn" style={{ width: '150px', textAlign: 'center', borderRadius: '50px' }}>View Collection</button>
            </div>

            <div className="col-md-6" style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={slide.imgUrl}
                alt={slide.title}
                style={{ width: '100%', height: 'auto', maxHeight: '300px', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ImageTextSlider;
