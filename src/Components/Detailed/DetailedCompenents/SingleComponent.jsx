import React, { useContext, useEffect, useState } from "react";
import "./scss/SingleComponent.scss";
import AxiosCall, { BASE_URL } from "../../AxiosCall/AxiosCall";
import Comments from "../../Comments/Comments";
import banner from "../../../Images/banner.png";
import { useRef } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { Carousel, CarouselItem } from "react-bootstrap";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { ThemeContext } from "../../../context/GlobalContext";
import Loading2 from "../../Loading/Loading2";
const SingleComponent = () => {
  const [data, setData] = useState("");
  const [news, setNews] = useState([


    {
      date: "20.20.23 20:22",
      text: `  Buxoro viloyatiBuxoro viloyatiBuxoro viloyatiBuxoro
        viloyatiBuxoro viloyati Buxoro viloyati`,
      image: banner,
    },
    {
      date: "20.20.23 20:22",
      text: `  Buxoro viloyatiBuxoro viloyatiBuxoro viloyatiBuxoro
        viloyatiBuxoro viloyati Buxoro viloyati`,
      image: banner,
    },
    {
      date: "20.20.23 20:22",
      text: `  Buxoro viloyatiBuxoro viloyatiBuxoro viloyatiBuxoro
        viloyatiBuxoro viloyati Buxoro viloyati`,
      image: banner,
    },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const { id, name } = useParams();
  const { lang } = useContext(ThemeContext);
  const [flagInfo, setFlagInfo] = useState({
    name: "O‘zbekiston Respublikasining davlat bayrog‘i",
    image1: "http://archive.uz/source/images/GetPDF-(2).gif",
    content: `
            Davlat bayrog‘i O‘zbekiston Respublikasining 1991 yil 18 noyabrdagi 407­XII­sonli «O‘zbekiston Respublikasining Davlat bayrog‘i to‘g‘risida»gi Qonuni bilan tasdiqlangan. O‘zbekiston Respublikasining Davlat bayrog‘i — bayroqning butun uzunligi bo‘ylab o‘tgan to‘q moviy rang, oq rang va to‘q yashil rangli uchta endan tarkib topgan to‘g‘ri to‘rtburchak shaklidagi matodir. O‘zbekiston Respublikasi Davlat bayrog‘ining uzunligi 250 santimetrga, kengligi 125 santimetrga teng. Moviy rang, oq rang  va  yashil  rangli  enlarning  kengligi  bir  xil.  Har  bir  en  40  santimetrga  tengdir.  O‘zbekiston  Respublikasi  Davlat bayrog‘ining o‘rtasidagi oq rangli enning chetlaridan kengligi 2,5 santimetrga teng qizil hoshiyalar o‘tkazilgan.
            O‘zbekiston Respublikasi Davlat bayrog‘ining yuqori qismidagi moviy rangli enning yuz tomoni va orqa tomonida dastaga yaqin joyida oq rangli yangi oy va uning yonida o‘n ikkita oq rangdagi besh qirrali yulduz tasvirlangan. Oq  rangli  yangi  oy  va  o‘n  ikkita  oq  rangli  besh  qirrali  yulduzning  tasviri  moviy  rangli  yuqori enning  o‘rtasidan  70x30 santimetrga teng to‘g‘ri to‘rtburchakka sig‘adigan qilib joylashtirilgan. Oq  rangli  yangi oy  vertikal  holatda  do‘ng  tomoni  dastaga  qaratilgan,  dastadan  20  santimetr  masofada  joylashtirilgan bo‘lib, diametri 30 santimetrli doiraga sig‘adi.
       O‘n  ikkita  oq  rangli  besh  qirrali  yulduz  diametri  6  santimetrli  doiraga  sig‘adi.  Doiralar  orasidagi masofa  6  santimetr. Yulduzlar uzunasiga va tikkasiga quyidagi tartibda joylashadi: yuqori qatorda uchta, o‘rta qatorda to‘rtta va quyi qatorda beshta yulduz. Quyi qatordagi yulduzlar yangi oyning pastki uchidan 3,5 santimetr masofada joylashadi.
            `,
    front: `Oldi tomon`,
    image2: `http://archive.uz/source/images/GetPDF-(2).gif`,
    back: `Orqa tomoni`,
    image3: `http://archive.uz/source/images/GetPDF-(4).gif`,
    scheme: "Sxematik rasmi",
    image4: `http://archive.uz/source/images/GetPDF.gif`,
  });
  const [emblemInfo, setEmblemInfo] = useState({
    name: "O'zbekiston Respublikasi davlat gerbi",
    image1: "http://archive.uz/source/images/Gerb.png",
    image2: "http://archive.uz/source/images/GetPDF-(1).gif",
    content: `
            Davlat  gerbi  O‘zbekiston  Respublikasining  1992  yil  2  iyuldagi  616­ XII ­sonli  «O‘zbekiston Respublikasi Davlat gerbi to‘g‘risida»gi Qonuni bilan tasdiqlangan. O‘zbekiston Respublikasi Davlat gerbi quyidagi ko‘rinishga ega: tog‘lar, daryolar va so‘l tomoni bug‘doy boshoqlaridan, o‘ng tomoni esa chanoqlari ochilgan g‘o‘za shoxlaridan iborat chambarga o‘ralgan gullagan vodiy uzra quyosh zarrin nurlarini sochib turadi. Gerbning yuqori qismida Respublika hurligining ramzi sifatida sakkizburchak tasvirlangan bo‘lib, uning ichki qismida yarim oy va yulduz tasvirlangan. Gerbning markazida baxt va erksevarlik ramzi — qanotlarini yozgan Humo qushi tasvirlangan. Gerbning pastki qismida O‘zbekiston Respublikasi Davlat bayrog‘ini ifoda etuvchi chambar lentasining bantida «O‘zbekiston» deb yozib qo‘yilgan. O‘zbekiston  Respublikasi  Davlat  gerbining rangli  ko‘rinishida:  Humo  qushi  va  daryolar  —  kumush  rangida;  quyosh,boshoqlar, paxta chanoqlari va «O‘zbekiston» yozuvi — oltin rangida; g‘o‘za shoxlari va barglari, tog‘lar va vodiy — yashil rangda;  chanoqlardagi  paxta  —  oq  rangda;  lenta  —  O‘zbekiston  Respublikasi  Davlat  bayrog‘ining ranglarini  aks ettiruvchi uch xil rangda; sakkizburchak — oltin zarhal bilan hoshiyalangan holda havo rangda; yarim oy va yulduzlar — oq rangida tasvirlangan.
            `,
  });

  const carouselRef = useRef(null);
  const handlePrevClick = () => {
    carouselRef.current.onClickPrev();
  };

  const handleNextClick = () => {
    carouselRef.current.onClickNext();
  };
  const closeCommentModal = () => {
    setModalVisible(false);
  };


  useEffect(() => { getContent() }, [id])
  const getContent = () => {
    AxiosCall("get", `/content/${lang}/${id}`).then(data => {
      setData(data)
      console.log(data);
    })
  }
  return (
    <>
      <Comments
        content={{ contentId: id }}
        closeCommentModal={closeCommentModal}
        visible={modalVisible}
      />

      <section className="sigleComponent">
        {

          <>
            {name == "flag" ? (
              <div className="flag-container">
                <h1>{flagInfo.name}</h1>
                <div className="image-container">
                  <img src={flagInfo.image1} alt="flag" />
                </div>
                <p>{flagInfo.content}</p>
              </div>
            ) : name == "emblem" ? (
              <section className="emblem">
                <h1>{emblemInfo.name}</h1>
                <div className="images">
                  <div className="image-container">
                    <img src={emblemInfo.image1} alt="flag" />
                  </div>
                </div>

                <p>{emblemInfo.content}</p>
              </section>
            ) : (
              Object.keys(data).length == 0 ? <Loading2 /> : <div className="content-container">
                <div className="content">
                  <h1>{data?.title}</h1>
                  <Carousel ref={carouselRef} className="carousel">
                    {
                      data?.url?.map((images, index) => <CarouselItem key={index}>
                        <div className="banner_item" style={{ backgroundImage: `url(${BASE_URL + images})` }}></div>
                      </CarouselItem>)
                    }
                  </Carousel>
                  <div className="text-container">
                    <div className="date-author">
                      <div className="author">
                        <FontAwesomeIcon icon={faUser} />
                        <span>Abdurakhmonov Sharif</span>
                      </div>
                      <div className="date">20.12.2023 12:13</div>
                    </div>
                    <div className="text" dangerouslySetInnerHTML={{ __html: data?.body }}></div>
                  </div>
                  <div className="comment-btn">
                    <button onClick={() => setModalVisible(true)}>
                      Izoh qoldirish
                    </button>
                  </div>
                </div>


                <div className="cards-container">

                  <div className="cards1-container">
                    <span>Hamkorlar</span>
                    <span>Yangiliklar</span>
                    <span>Kadrlar</span>
                    <span>E'lonlar</span>
                    <span>Xorijiy Hamkorlar</span>
                    <span>O'zbek Hamkorlari</span>
                    <span>Dars jadvallari</span>
                    <span>Kafedralar</span>
                    <span>To'lov kontraktlari</span>
                    <span>Talabalar</span>
                    <span>So'rovlar</span>
                    <span>Ommaviy tadbirlar</span>
                    <span>Hisobotlar</span>

                  </div>


                  <div className="cards2-container">
                    <h6>Yangiliklar</h6>
                    <div className="cards">
                      {news.map((item, index) => (
                        <div key={index} className="my-card">
                          <div className="textes">
                            <span className="time">{item.date}</span>
                            <span className="text">{item.text}</span>
                          </div>
                          <div className="image">
                            <img src={item.image} alt="" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>



              </div>
            )}
          </>

        }

      </section >
    </>
  );
};

export default SingleComponent;

