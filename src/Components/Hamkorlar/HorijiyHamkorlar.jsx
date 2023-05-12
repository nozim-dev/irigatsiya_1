import React, { useContext, useRef, useState } from "react";
import "./HorijiyHamkorlar.scss";
import gerb from "../../Images/gerb.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";
import { ThemeContext } from "../../context/GlobalContext";
import AliceCarousel from "react-alice-carousel";
import { useEffect } from "react";
import AxiosCall from "../AxiosCall/AxiosCall";
import { useNavigate, useParams } from "react-router-dom";
const HorijiyHamkorlar = () => {
  const carouselRef = useRef(null);
  const { lang } = useContext(ThemeContext);
  const navigate = useNavigate()
  const { id } = useParams();
  const [categoryId, setCategoryId] = useState("hbjhbjh");

  const [xorijiy, setXorijiy] = useState([
    {
      img: gerb,
      text: "qwertyu",
    },
    {
      img: gerb,
      text: "123123",
    },
    {
      img: gerb,
      text: "qwertyu",
    },
    {
      img: gerb,
      text: "123123124",
    },
    {
      img: gerb,
      text: "qwertyu",
    },
  ]);

  // useEffect(() => {
  //   AxiosCall("get", "/category" + categoryId).then((data) => {
  //     setXorijiy(data);
  //   });
  // });
  const responsive = {
    0: {
      items: 1,
    },
    568: {
      items: 2,
    },
    1024: {
      items: 4,
      itemsFit: "contain",
    },
  };
  const handleChangeSlide = (direction) => {
    if (direction === 'prev') {
      carouselRef.current.previous();
    } else if (direction === 'next') {
      carouselRef.current.next();
    }
  };
  return (
    <section className="horijiy-hamkorlar">
      <div className="boshqarmalar-header">
        <div className="title">
          <h1>
            {lang == "uz"
              ? "Xorijiy hamkorlar "
              : lang == "en"
                ? "Foreign Partners "
                : "Зарубежные партнеры "}
          </h1>
        </div>
        <div className="controllers">
          <button onClick={() => handleChangeSlide("prev")}>
            <FontAwesomeIcon icon={faArrowLeft} className="icon" />
          </button>
          <button onClick={() => handleChangeSlide("next")}>
            <FontAwesomeIcon icon={faArrowRight} className="icon" />
          </button>
        </div>
      </div>
      <div className="boshqarmalar-body">
        <AliceCarousel
          mouseTracking
          items={xorijiy.map((item) => {
            return (
              <div onClick={() =>
                navigate(
                  "/detailed/announcements/"
                )
              } className="card-col">
                <div className="image-container">
                  <img src={item.img} alt="" />
                </div>
                <div className="text-container">
                  <span>{item.text}</span>;
                </div>
              </div>
            );
          })}
          autoPlay
          responsive={responsive}
          ref={carouselRef}
        />
      </div>
    </section>
  );
};

export default HorijiyHamkorlar;
