import { faClose, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AxiosCall from "../AxiosCall/AxiosCall";
import Loading from "../Loading/Loading";
import "./scss/Announcements.scss";
import { ThemeContext } from "../../context/GlobalContext";
import { useContext } from "react";

const Announcements = () => {
  const navigate = useNavigate();
  const [categoryId, setCategoryId] = useState("");
  const { lang } = useContext(ThemeContext);
  const [data, setData] = useState([]);
  const [demoData, setDemoData] = useState([1, 2, 3, 4, 5, 6]);
  useEffect(() => {
    get();
  }, []);
  function get() {
    AxiosCall(
      "get",
      "/content/announcements/" + lang
    ).then((res) => {
      setData(res.contents);
      console.log(res);
    });
  }
  function formatDateAndTime(dateTimeString) {
    const dateTime = new Date(dateTimeString);
    const formattedDate = dateTime.toLocaleDateString();
    const formattedTime = dateTime.toLocaleTimeString();
    return `${formattedDate} ${formattedTime}`;
  }
  return (
    <section className="Announcements">
      <div className="Announcements-header">
        {lang == "uz" ? (
          <>
            <h1>E'lonlar</h1>
            <span
              onClick={() =>
                navigate(
                  "/detailed/announcements/" +
                  "b28b0ead-4b9a-49a8-be94-08b7e2853df4" +
                  "/all"
                )
              }
            >
              Barcha E'lonlar
            </span>
          </>
        ) : lang == "en" ? (
          <>
            <h1> Announcement</h1>
            <span
              onClick={() =>
                navigate(
                  "/detailed/announcements/" +
                  "b28b0ead-4b9a-49a8-be94-08b7e2853df4" +
                  "/all"
                )
              }
            >
              {" "}
              All Announcement
            </span>
          </>
        ) : (
          <>
            <h1>Объявления</h1>
            <span
              onClick={() =>
                navigate(
                  "/detailed/announcements/" +
                  "b28b0ead-4b9a-49a8-be94-08b7e2853df4" +
                  "/all"
                )
              }
            >
              Все Объявления
            </span>
          </>
        )}
      </div>
      <div className="Announcements-body">
        {data.length > 0
          ? data?.map((item, index) => {
            return (
              <div className="card-col" key={index} onClick={() => navigate(`/detailed/${item.title.replace(/\s+/g, '-')}/${item.id}`)}
              >
                <div className="card-col-header">
                  <div className="time-container">
                    <span>{formatDateAndTime(item.created_at)}</span>
                  </div>
                  <div className="viwers">
                    <FontAwesomeIcon icon={faEye} />
                    <span>{item.views}</span>
                  </div>
                </div>

                <div className="card-col-body">
                  <div className="title">{item.title}</div>
                  {/* <img className="image" alt="image" src={item.url[0]} /> */}
                </div>
              </div>
            );
          })
          : // for loading
          demoData.map((item, index) => {
            return (
              <div className="card-col" key={index}>
                <div className="card-col-header"></div>

                <div className="card-col-body">
                  <Loading />
                </div>
              </div>
            );
          })}
      </div>
      <Outlet />
    </section>
  );
};

export default Announcements;
