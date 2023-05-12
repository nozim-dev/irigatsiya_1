import React, { useContext, useEffect, useState } from "react";
import "./scss/Header.scss";
import logo from "../../Images/logo.png";
import gerb from "../../Images/gerb.png";
import flag from "../../Images/flag.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faBars,
  faChevronDown,
  faClose,
  faEarth,
  faEye,
  faFont,
  faImage,
  faRefresh,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import AxiosCall from "../AxiosCall/AxiosCall";
import { ThemeContext } from "../../context/GlobalContext";
import { Drawer } from "@mui/material";
import Loading2 from "../Loading/Loading2";
const Header = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  const navigate = useNavigate();
  const [headerCategory, setHeaderCategory] = useState([]);
  const [navbar, setNavbar] = useState([]);

  const { id } = useParams();
  const [biv, setBiv] = useState(false);
  const [state, setState] = React.useState({
    top: false,
  });
  // lang
  const { lang, setLang } = useContext(ThemeContext);

  useEffect(() => {
    getCategories();
    getInnerCategories();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollHeight(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [id]);

  function getCategories() {
    // header categories
    AxiosCall("get", `/navbar_categories/header/${lang}`).then((data) => {
      setHeaderCategory(data);
    });
  }

  function getInnerCategories() {
    // all categories
    AxiosCall("get", `/navbar_categories/all/${lang}`).then((data) => {
      setNavbar(data);
    });
  }
  useEffect(() => {
    getCategories();
    getInnerCategories();
    // getInnerCategoriesChild()
  }, [lang]);

  let withOutColorImageIcon = (
    <FontAwesomeIcon
      icon={faImage}
      color="#797878"
      className="icon"
      onClick={() => changer("blackImage")}
    />
  );
  let greenFonts = (
    <FontAwesomeIcon
      icon={faFont}
      color="green"
      className="icon"
      onClick={() => changer("greenFont")}
    />
  );
  const changer = (param) => {
    const images = document.querySelectorAll("img");
    const greenTags = document.querySelectorAll(
      "p, h1, h2, h3, h4, h5,h6,span,button"
    );
    const header = document.querySelector("nav");
    const input = document.querySelector("input");
    const ul = document.querySelector("ul");
    const li = document.querySelector("li");
    const bannerItemImg = document.querySelector(".banner_item_img");
    switch (param) {
      case "defaultImage":
        images.forEach((image) => {
          image.style.filter = "grayscale(0%)";
          bannerItemImg.style.filter = "brightness(80%)";
        });
        break;
      case "blackImage":
        images.forEach((image) => {
          image.style.filter = "grayscale(100%)";
        });
        break;
      case "greenFont":
        greenTags.forEach((tag) => {
          tag.style.color = "green";
        });
        ul.style.color = "green";
        li.style.color = "green";
        input.style.color = "green";
        break;
      case "defaultFont":
        greenTags.forEach((tag) => {
          tag.style.color = "#FFF";
        });
        header.style.color = "#000";
        ul.style.color = "#000";
        li.style.color = "#000";
        input.style.color = "#000";
        break;
      case "refresh":
        greenTags.forEach((tag) => {
          tag.style.color = "#FFF";
        });
        header.style.color = "#000";
        ul.style.color = "#000";
        li.style.color = "#000";
        input.style.color = "#000";
        images.forEach((image) => {
          image.style.filter = "none";
        });
        break;
      default:
        break;
    }
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = () => (
    <div className="top-header-menu">
      <FontAwesomeIcon
        icon={faClose}
        className="close-icon"
        onClick={() => setState({ top: false })}
      />
      {
        navbar.length == 0 ? <div className="loading-div">
          <Loading2 />
        </div> :
          <div className="menues">
            <div className="list">
              <ul>
                <li>
                  {navbar.map((item2, index2) => {
                    return (
                      <li key={index2}>
                        <h6>{item2.name} <svg className="down-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z" fill="rgba(251,248,248,1)"></path></svg></h6>
                        <ul>
                          {item2.innerCategories.map((item3, index3) => {
                            return (
                              <li key={index3}>
                                <a href="">{item3.name}</a>
                                <ul>
                                  {item3.innerCategories.map((item4) => {
                                    return (
                                      <li>
                                        <a href="">{item4.name}</a>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </li>

                            );
                          })}
                        </ul>
                      </li>
                    );
                  })}
                </li>
              </ul>
            </div>
          </div>
      }

    </div>
  );

  return (
    <>
      {" "}
      <div className="test-mode">
        <span> Sayt test rejimida ishlamoqda</span>
      </div>
      <header>
        {biv && (
          <div className="fixed-side">
            <div className="images">{withOutColorImageIcon}</div>
            <FontAwesomeIcon
              icon={faRefresh}
              className="icon"
              onClick={() => changer("refresh")}
            />
            <div className="fonts">{greenFonts}</div>
          </div>
        )}
        <React.Fragment>
          <Drawer
            anchor={"bottom"}
            open={state["top"]}
            sx={{
              backdropFilter: "blur(30px)",
              background: "#000",
            }}
          >
            {list("top")}
          </Drawer>
        </React.Fragment>
        <div className="logo">
          <div className="logo_img" onClick={() => navigate("/")}>
            <img src={logo} alt="Logo" />
          </div>
        </div>
        <nav>
          <div className="nav_contact">
            <div className="box1" style={{ border: "none" }}>
              <div className="social-media">
                <div
                  className="icon-container"
                  onClick={() => navigate("/detailed/flag")}
                >
                  <img src={flag} alt="flag" />
                </div>
                <div
                  className="icon-container"
                  onClick={() => navigate("/detailed/emblem")}
                >
                  <img src={gerb} alt="embelem" />
                </div>
                <div className="icon-container">
                  {biv ? (
                    <FontAwesomeIcon
                      icon={faClose}
                      className="icon"
                      onClick={() => setBiv(!biv)}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faEye}
                      className="icon"
                      onClick={() => setBiv(!biv)}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="top-box">
              {lang == "uz" ? "Qabul " : lang == "en" ? "Admission " : "Прием "}
              2023
            </div>
            <div className="box3">
              <button>
                <a
                  target="_blank"
                  href="https://student.tiiamebb.uz/dashboard/login"
                  style={{ textDecoration: "none" }}
                >
                  Hemis
                </a>
              </button>
            </div>
            <div className="box4">
              <div className="language-container">
                <div className="container">
                  <FontAwesomeIcon icon={faEarth} />
                  <select
                    value={lang}
                    onChange={(e) => {
                      localStorage.setItem("ws_l", e.target.value);
                      setLang(e.target.value);
                    }}
                  >
                    <option value="uz">Uzb</option>
                    <option value="en">Eng</option>
                    <option value="ru">Рус</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="bottom-side">
            <nav role='navigation' class="menu">
              <label for="menu">Menu <i class="fa fa-bars"></i></label>
              <input type="checkbox" id="menu" />
              <ul>
                {
                  headerCategory.map(item => <li className="menu-hasdropdown">
                    <a href="#">{item.name}
                      <label title="toggle menu" for="about">
                        <i class="fa fa-caret-down"></i>
                      </label>
                    </a>

                    <ul class="menu-dropdown">
                      {
                        item.innerCategories.map(item2 => <li className={item2.innerCategories.length > 0 ? "menu-hasdropdown menu-hasflyout" : ""}>
                          <a href="">{item2.name}
                          </a>
                          <ul class="menu-dropdown">
                            {
                              item2.innerCategories.map(item3 => <li><a href="">{item3.name}</a>

                              </li>
                              )
                            }
                          </ul>

                        </li>)
                      }

                    </ul>
                  </li>)
                }

              </ul>
            </nav>
            < div className="d-flex gap-4 justify-content-center align-items-center" >
              <div className="menu-icon" onClick={toggleDrawer("top", true)}>
                <FontAwesomeIcon icon={faBars} className="icon" />
              </div>
              <div className="search-container">
                <FontAwesomeIcon icon={faSearch} className="icon" />
                <div className="input-container">
                  <input
                    type="text"
                    placeholder={
                      lang == "uz"
                        ? "Qidiruv"
                        : lang == "en"
                          ? "Search"
                          : "Поиск"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </nav >
        {scrollHeight != 0 && (
          <div
            data-aos="fade-bottom"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            style={{
              cursor: "pointer",
              position: "fixed",
              bottom: 36,
              right: 16,
              zIndex: 7,
              width: "58px",
              height: "58px",
              background: "#007aff",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon icon={faArrowUp} color="#FFF" />
          </div>
        )
        }
      </header >
    </>
  );
};

export default Header;
