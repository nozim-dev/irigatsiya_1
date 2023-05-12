import React, { useContext, useState } from 'react';
import './Slider.scss'
import banner from "../../Images/i.jpg"
import banner1 from "../../Images/banner.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import AxiosCall from '../AxiosCall/AxiosCall';
import { ThemeContext } from "../../context/GlobalContext";
import { useEffect } from 'react';
const Slider = () => {
  const carouselRef = useRef(null)
  const [img, setImg] = useState()
  const [text, setText] = useState()
  const [slider, setSlider] = useState([{
    img: `https://tiiame.uz/sites/default/files/photo_2022-04-12_14-32-39.jpg`,
    text: "wehjfbwhjebfhjwbefhjwef"
  },


  ])
  const { lang, setLang } = useContext(ThemeContext);
  // useEffect(() => {
  //   getSlider();
  // }, [lang]);

  // const getSlider = () => {
  //   // all categories
  //   AxiosCall("get", `/slider/${lang}`).then((data) => {
  //     setSlider(data)
  //   });
  // };
  const handlePrevClick = () => {
    carouselRef.current.prev()
  };


  const handleNextClick = () => {
    carouselRef.current.next()
  };


  return (
    <>

      <Carousel interval={3500} className="carousel-slide" ref={carouselRef}>

        {
          slider.map(((item, index) => {
            return <CarouselItem key={index}>
              <div className="banner_item_img" style={{ backgroundImage: `url(${item.img})` }}>
              </div>
              <Carousel.Caption>
                <div className="container" >
                  <div className="textes">
                    <h1>{item.text}</h1>
                  </div>
                  <div className="buttons">
                    <button className='icon-container' onClick={handlePrevClick}>
                      <FontAwesomeIcon icon={faArrowLeft} className='icon' />
                    </button>
                    <button className='icon-container' onClick={handleNextClick}>
                      <FontAwesomeIcon icon={faArrowRight} className='icon' />
                    </button>
                  </div>
                </div>
              </Carousel.Caption>
            </CarouselItem>
          }))
        }



      </Carousel>
    </>
  );
};

export default Slider;