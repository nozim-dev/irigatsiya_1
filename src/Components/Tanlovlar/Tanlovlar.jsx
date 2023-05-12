import { faBookJournalWhills } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Rodal from "rodal";
import "../Tanlovlar/Tanlovlar.scss"
import { ThemeContext } from "../../context/GlobalContext";
import { useContext } from "react";
import AxiosCall from "../AxiosCall/AxiosCall";

const Tanlovlar = () => {
  const { lang } = useContext(ThemeContext);
  const navigate = useNavigate()
  const [img, setImg] = useState("");
  const [selectionText, setSeletionText] = useState("")
  const [tanlovlar, setTanlovlar] = useState([
    {
    img:  <FontAwesomeIcon icon={faBookJournalWhills} />,
    selectionText:"Talbalar uchcun"
     },
     {
      img:  <FontAwesomeIcon icon={faBookJournalWhills} />,
      selectionText:"Talbalar uchcun"
      },
      {
        img:  <FontAwesomeIcon icon={faBookJournalWhills} />,
        selectionText:"Talbalar uchcun"
         },
         {
          img:  <FontAwesomeIcon icon={faBookJournalWhills} />,
          selectionText:"Talbalar uchcun"
           },
           {
            img:  <FontAwesomeIcon icon={faBookJournalWhills} />,
            selectionText:"Talbalar uchcun"
             },
             {
              img:  <FontAwesomeIcon icon={faBookJournalWhills} />,
              selectionText:"Talbalar uchcun"
               },

]);

  const [categoryId, setCategoryId] = useState("2")

  const [visible, setVisible] = useState(false)
  useEffect(()=>{
    AxiosCall("get","/").then((res)=>{
      setTanlovlar(res.data)
    })
  },[])
  return (
    <section className="tanlovlar" id="structure">
      <div className="service">
        <div className="service_title">
          {
            lang == "uz" ? <>
              <h1>Fakultetlar
              </h1>
              <span
                onClick={() => navigate("/detailed/personnal/" + categoryId + "/all")}
              >
                Barcha Fakultetlar
              </span>
            </> : lang == 'en' ? <>
              <h1>Faculties</h1>
              <span
                onClick={() => navigate("/detailed/personnal/" + categoryId + "/all")}
              >   All Faculties
              </span>
            </> : <>
              <h1>факультеты</h1>
              <span
                onClick={() => navigate("/detailed/personnal/" + categoryId + "/all")}
              >
               Все факультеты
              </span>
            </>
          }
        </div>
    
        <div className="service_rows">
          {
            tanlovlar.length > 0 ?
              tanlovlar.map((item,index) => (
                <div onClick={()=>setVisible(true)} key={index} className="service-col" data-aos="zoom-in-up">
                  <div className="service-card">
                    <span>{item.selectionText}</span>
                  </div>
                  <div className="icon-container">
                    {item.img}
                  </div>
                </div>
              ))
              : tanlovlar?.map(item => {

              })
          }
        </div>
        <Rodal height={450} width={750} visible={visible} onClose={() => setVisible(false)}>
          <img className="rodal-img" src="https://cdn2.hubspot.net/hubfs/53/best-free-stock-photo-sites.jpg" alt="" />
          <span className="rodal-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates quibusdam sapiente facere quia? Fugiat quo incidunt at sint, nihil saepe earum aperiam natus velit commodi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum repudiandae quidem possimus ex atque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa suscipit quae earum libero asperiores amet consequuntur incidunt voluptatibus fugit!</span>
        </Rodal>
      </div>
    </section>
  );
};

export default Tanlovlar;

