import React, { useRef } from 'react';
import Carousel from 'react-multi-carousel';
import './scss/Videos.scss'
import AxiosCall from '../AxiosCall/AxiosCall';
import { useEffect, useState } from 'react';
import { ThemeContext } from "../../context/GlobalContext";
import { useContext } from "react";
import AliceCarousel from 'react-alice-carousel';

const Videos = () => {
    const { lang } = useContext(ThemeContext);

    const [data, setData] = useState([
        {
            id: 0,
            link: "https://www.youtube.com/embed/XsV0p4sC1ZE",
        },
        {
            id: 1,
            link: "https://www.youtube.com/embed/HwXJjzBq5GA",
        },
        {
            id: 2,
            link: "https://www.youtube.com/embed/zoD49Z2EtGY",
        },
        {
            id: 3,
            link: "https://www.youtube.com/embed/TDwjuLxpDMY",
        },
        {
            id: 4,
            link: "https://www.youtube.com/embed/4K8FCubBg28",
        },
        {
            id: 5,
            link: "https://www.youtube.com/embed/6hgI1SYlou8",
        },
    ])

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
    useEffect(() => {
        get()
    }, [])
    function get() {
        AxiosCall("get", '/video').then(data => {
            // setData(data)
        })
    }
    return (
        <section className='videos'>
            <div className="videos-header">
                {
                    lang == "uz" ? <>
                        <h1>Videolar
                        </h1>

                    </> : lang == 'en' ? <>
                        <h1> Videos</h1>

                    </> : <>
                        <h1>Видео</h1>

                    </>
                }
            </div>

            <AliceCarousel responsive={responsive}
                mouseTracking
                items={data.map(item => <div className='my-video-container' key={item.id}>
                    <iframe
                        src={item.link}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>)}
            >

            </AliceCarousel>


        </section>
    );
}

export default Videos;
