/* eslint-disable jsx-a11y/img-redundant-alt */
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AxiosCall from '../../../AxiosCall/AxiosCall';
import Loading from '../../../Loading/Loading';
const AllDetelied = () => {
    const ITEMS_PER_PAGE = 6;
    const [data, setData] = useState([
        {
            createdAt: "12:00",
            views: 201,
            title: "Djalilov Firdavs boshchiligida DSOG 3-kurs va DSOG 1-kurs talabalari bilan mini futboll turi bo’yicha o’rtoqliq uchrashuvi bo’lib o’tdi.",
            url: ["http://tiiamebb.uz/wp-content/uploads/2023/05/photo_2023-05-04_16-21-52.jpg"],
        },
        {
            createdAt: "12:00",
            views: 201,
            title: "“Yoshlar – kelajagimiz” jamg’armasi  Buxoro viloyati filiali hamda O’zbekiston yoshlar ittifoqi “TIQXMMI” MTU Buxoro tabiiy resurslarni boshqarish instituti yoshlar yetakchisi Bobojonov Saidjon O’tkirovich bilan hamkorlikda tadbirkorlikka qiziqadigan talaba yoshlar uchun o’quv – trening tashkil etildi.",
            url: ["http://tiiamebb.uz/wp-content/uploads/2023/05/photo_2023-05-03_15-39-57-2.jpg"],
        },
        {
            createdAt: "12:00",
            views: 201,
            title: "Tashkent shahrida 27-28-aprel kunlari bo‘lib o‘tgan Toshkent xalqaro investitsiyalar forumida institut rektori Imomov Shavkat Jahonovich va institutning Xalqaro aloqalar bo‘limi boshlig‘i v.v.b Xodjamov Odil Kuysinovichlar ishtirok etishdi.",
            url: ["http://tiiamebb.uz/wp-content/uploads/2023/04/photo_2023-04-28_20-55-00.jpg"],
        },
        {
            createdAt: "12:00",
            views: 201,
            title: "Djalilov Firdavs boshchiligida DSOG 3-kurs va DSOG 1-kurs talabalari bilan mini futboll turi bo’yicha o’rtoqliq uchrashuvi bo’lib o’tdi.",
            url: ["http://tiiamebb.uz/wp-content/uploads/2023/05/photo_2023-05-04_16-21-52.jpg"],
        },
        {
            createdAt: "12:00",
            views: 201,
            title: "“Yoshlar – kelajagimiz” jamg’armasi  Buxoro viloyati filiali hamda O’zbekiston yoshlar ittifoqi “TIQXMMI” MTU Buxoro tabiiy resurslarni boshqarish instituti yoshlar yetakchisi Bobojonov Saidjon O’tkirovich bilan hamkorlikda tadbirkorlikka qiziqadigan talaba yoshlar uchun o’quv – trening tashkil etildi.",
            url: ["http://tiiamebb.uz/wp-content/uploads/2023/05/photo_2023-05-03_15-39-57-2.jpg"],
        },
        {
            createdAt: "12:00",
            views: 201,
            title: "Tashkent shahrida 27-28-aprel kunlari bo‘lib o‘tgan Toshkent xalqaro investitsiyalar forumida institut rektori Imomov Shavkat Jahonovich va institutning Xalqaro aloqalar bo‘limi boshlig‘i v.v.b Xodjamov Odil Kuysinovichlar ishtirok etishdi.",
            url: ["http://tiiamebb.uz/wp-content/uploads/2023/04/photo_2023-04-28_20-55-00.jpg"],
        },


    ])
    const [demoData, setDemoData] = useState([1, 2, 3, 4, 5, 6])
    const { id } = useParams();
    useEffect(() => {
        get()
    }, [id])
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const itemsToShow = data.slice(startIndex, endIndex);

    function get() {
        // AxiosCall("get", '/content/all/' + id).then(res => {
        //     setData(res);
        // })
    }
    return (
        <section className='allDetelied'>
            <div className="Announcements-body">
                <div className="cards">
                    {
                        data &&
                            data.length > 0 ?
                            itemsToShow?.map(item => {
                                return (
                                    <div className="card-col">
                                        <div className="card-col-header">
                                            <div className="time-container">
                                                <span>{item.createdAt}</span>
                                            </div>
                                            <div className="viwers">
                                                <FontAwesomeIcon icon={faEye} />
                                                <span>{item.views}</span>
                                            </div>
                                        </div>

                                        <div className="card-col-body">
                                            <div className="title">
                                                {item.title}
                                            </div>
                                            <img className="image" alt="image" src={item.url[0]} />
                                        </div>

                                    </div>

                                )
                            }
                            )
                            :
                            itemsToShow.map(item => <div className="card-col">
                                <div className="card-col-header">
                                    <div className="time-container">
                                    </div>
                                </div>
                                <div className="card-col-body">
                                    <Loading />
                                    <div className="content">
                                    </div>
                                </div>
                                <div className="card-col-footer">
                                    <div className="div"></div>
                                    <div className="right-box">
                                    </div>
                                </div>
                            </div>)
                    }
                </div>

                <div className="pagenation">
                    <Pagination
                        count={Math.ceil(data.length / ITEMS_PER_PAGE)}
                        page={currentPage}
                        onChange={handlePageChange}
                    />
                </div>

            </div>
        </section >
    );
}

export default AllDetelied;
