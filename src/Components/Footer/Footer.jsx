import React, { useState } from "react";
import "../Footer/Footer.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTelegram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import Rodal from 'rodal';
import { toast, ToastContainer } from 'react-toastify';
import { ThemeContext } from "../../context/GlobalContext";
import { useContext } from "react";
import AxiosCall from "../AxiosCall/AxiosCall";


const Footer = () => {
  const { lang } = useContext(ThemeContext);
  const [telOrEmail, setTelOrEmail] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [body, setBody] = useState("")
  const [modalvisible, setModalvisible] = useState(false)



  function sendComment() {
    setModalvisible(false)
    AxiosCall("post","/comments").then(data=>{

    })

  };


  
  return (
    <footer className="footer">
      <div className="footer_contact">
        <div className="footer_contact_title">
          {
            lang == "uz" ? <>
              <h1>Bog'lanish
              </h1>

            </> : lang == 'en' ? <>
              <h1>Connection</h1>

            </> : <>
              <h1>Связь</h1>

            </>
          }
        </div>
        <div className="footer_contact_row">
          <div className="footer_contact_row_col">
            {lang == "uz" ? <><h5>Mo'ljal:</h5></> : lang == 'en' ? <> <h5>Target:</h5></> : <><h5> Цель:</h5></>}
            {lang == "uz" ? <><p>«Sherbudin» Savdo majmuasi.</p></> : lang == 'en' ? <> <p>Trade Complex "Sherbudin".</p></> : <><p> Торговый Комплекс "Шербудин".</p></>}
            {lang == "uz" ? <><h4>Transportlar: 72, 236-avtobuslar yo`nalish taksilari.</h4></> : lang == 'en' ? <> <h4>Transport: buses 72, 236, taxis.</h4></> : <><h4> Транспорт: автобусы 72, 236, такси.</h4></>}
          </div>
          <div className="footer_contact_row_col">
            {lang == "uz" ? <><h5>Telefon:</h5></> : lang == 'en' ? <> <h5>Telephone:</h5></> : <><h5> телефон:</h5></>}
            <p>0(365) 228-94-24, 228-94-19</p>
          </div>
          <div className="footer_contact_row_col">
            {lang == "uz" ? <><h5>Faks:</h5></> : lang == 'en' ? <> <h5>Fax:</h5></> : <><h5> Факс:</h5></>}

            <p>Fax:0(365) 228-94-24</p>
          </div>
          <div className="footer_contact_row_col">
            <h5>Email:</h5>
            <a className="email" target={"_blank"} href="https://umail.uz/">tiimbfuz@umail.uz, buxtimi@mail.ru</a>
          </div>
          <div className="footer_contact_row_col">
            {lang == "uz" ? <><h5>Ijtimoiy tarmoqlar:</h5></> : lang == 'en' ? <> <h5>Social networks:</h5></> : <><h5> Социальные сети:</h5></>}

            <div className="footer_contact_row_col_social">
              <a href="https://www.facebook.com/tiiame.uz/" target={"_blank"} className="footer_contact_row_col_social_item">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://twitter.com/tiiameofficial?lang=en" target={"_blank"} className="footer_contact_row_col_social_item">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://t.me/TIQXMMIBuxoro" target={"_blank"} className="footer_contact_row_col_social_item">
                <FontAwesomeIcon icon={faTelegram} />
              </a>
              <a href="https://www.youtube.com/channel/UCR2v5fa2y7-fjoDWyEMU0Sg" target={"_blank"} className="footer_contact_row_col_social_item">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer_contact_row2">
          <div className="footer_contact_row2_col">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6133.057335824391!2d64.4581287!3d39.7726897!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f500593eb541ad1%3A0xba79947337de01c8!2sBukharskiy%20Filial%20Tashkentskogo%20Instituta%20injinerov%20Irrigatsiy%20i%20mexanizatsiy%20sellskogo%20xozaystvo!5e0!3m2!1sen!2s!4v1677563769836!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              title="mapUniversity"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="footer_contact_row2_col">
            {lang == "uz" ? <><h3>Ish kunlari:</h3></> : lang == 'en' ? <> <h3>Working days:</h3></> : <><h3> Рабочие дни:</h3></>}

            <div className="footer_contact_row2_col_item">
              {lang == "uz" ? <><span>Ish kunlari:</span></> : lang == 'en' ? <> <span>Working days:</span></> : <><span> Рабочие дни:</span></>}

              <h6>9:00 - 18:00</h6>
            </div>
            <div className="footer_contact_row2_col_item">
              {lang == "uz" ? <><span>Tushlik:</span></> : lang == 'en' ? <> <span>Lunch:</span></> : <><span> Обед:</span></>}

              <h6>13:00 - 14:00</h6>
            </div>
            {lang == "uz" ? <><h3>Ishonch telefoni</h3></> : lang == 'en' ? <> <h3>Trust phone</h3></> : <><h3>Доверенный телефон</h3></>}

            <span className="footer_contact_row2_col_item">
              +998 (71) 228-94-24
            </span>
            <span onClick={() => setModalvisible(true)} className="footer_contact_row2_col_item">
              {lang == "uz" ? <><span >Rektorga xat yozish</span></> : lang == 'en' ? <> <span> Writing a letter to the rector:</span></> : <><span>Написать письмо ректору:</span></>}
            </span>
          </div>
        </div>
        <div className="footer_contact_row3">
          {lang == "uz" ? <><p>© 2023 Barcha huquqlar himoyalangan</p></> : lang == 'en' ? <> <p>© 2023 All rights reserved</p></> : <><p> © 2023 Все права защищены</p></>}

          <p>
            {lang == "uz" ? <><span>Sayt yaratuvchisi:</span></> : lang == 'en' ? <> <span>site creator:</span></> : <><span> Создатель сайта:</span></>}


            UNIPOINT SOFTWARE DEVELOPMENT
          </p>
        </div>
        <Rodal className="my_rodal" visible={modalvisible} onClose={() => setModalvisible(false)} height={450} width={600}>
          <div className="email-box">
            <ToastContainer />
            <div className="header">
              <h5>Izoh qoldirish</h5>
            </div>
            <div className="body">
              <form onSubmit={sendComment}>
                <div className="inputs">
                  <input required placeholder='Ism' onChange={(e) => setFirstname(e.target.value)} value={firstname} />
                  <input required placeholder='Familya' onChange={(e) => setLastname(e.target.value)} value={lastname} />
                  <input required placeholder='Elektron pochta yoki telefon raqam' onChange={(e) => setTelOrEmail(e.target.value)} value={telOrEmail} />
                  <textarea required placeholder='Izoh'  onChange={(e) => setBody(e.target.value)} value={body} />
                </div>
                <div className="btns">
                  <button type='submit'>Jo'natish</button>
                </div>
              </form>
            </div>
          </div>

        </Rodal>
      </div>

    </footer>
  );
};

export default Footer;
