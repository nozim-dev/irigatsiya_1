import React, { useContext, useRef, useState } from "react";
import "./OzbekHamkorlar.scss";
import gerb from "../../Images/gerb.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";
import { ThemeContext } from "../../context/GlobalContext";
import AliceCarousel from "react-alice-carousel";
import { useEffect } from "react";
import AxiosCall from "../AxiosCall/AxiosCall";
import { useNavigate, useParams } from "react-router-dom";
const OzbekHamkorlar = () => {
  const carouselRef = useRef(null);
  const navigate = useNavigate()
  const { lang } = useContext(ThemeContext);
  const { id } = useParams();
  const [categoryId, setCategoryId] = useState("hbjhbjh");

  const [ozbek, setOzbek] = useState([
    {
      img: gerb,
      text: "Oʻzbekiston (rasman: Oʻzbekiston Respublikasi, Ўзбекистон Республикаси) — Markaziy Osiyoning markaziy qismida joylashgan mamlakat.",
    },
    {
      img: gerb,
      text: "Oʻzbekiston (rasman: Oʻzbekiston Respublikasi, Ўзбекистон Республикаси) — Markaziy Osiyoning markaziy qismida joylashgan mamlakat.",
    },
    {
      img: gerb,
      text: "Oʻzbekiston (rasman: Oʻzbekiston Respublikasi, Ўзбекистон Республикаси) — Markaziy Osiyoning markaziy qismida joylashgan mamlakat.",
    },
    {
      img: gerb,
      text: "Oʻzbekiston (rasman: Oʻzbekiston Respublikasi, Ўзбекистон Республикаси) — Markaziy Osiyoning markaziy qismida joylashgan mamlakat.",
    },
    {
      img: gerb,
      text: "Oʻzbekiston (rasman: Oʻzbekiston Respublikasi, Ўзбекистон Республикаси) — Markaziy Osiyoning markaziy qismida joylashgan mamlakat.",
    },
  ]);

  // useEffect(() => {
  //   AxiosCall("get", "/category/" + categoryId).then((data) => {
  //       setOzbek(data);
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
  const handlePreviousClick = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };
  return (
    <section className="ozbek-hamkorlar">
      <div className="boshqarmalar-header">
        <div className="title">
          <h1>
            {lang == "uz"
              ? "O'zbek  hamkorlar "
              : lang == "en"
                ? "Uzbek partners "
                : "узбекские партнеры "}
          </h1>
        </div>
        <div className="controllers">
          <button onClick={handlePreviousClick}>
            <FontAwesomeIcon icon={faArrowLeft} className="icon" />
          </button>
          <button onClick={handleNextClick}>
            <FontAwesomeIcon icon={faArrowRight} className="icon" />
          </button>
        </div>
      </div>
      <div className="boshqarmalar-body">
        <AliceCarousel
          mouseTracking
          items={ozbek.map((item) => {
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

export default OzbekHamkorlar;
