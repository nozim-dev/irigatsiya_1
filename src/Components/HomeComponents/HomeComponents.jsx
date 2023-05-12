import React from 'react';
const Announcements = React.lazy(() => import('../Announcements/Announcements'))
const Map = React.lazy(() => import('../Map/Map'));
const News = React.lazy(() => import('../News/News'));
const Professors = React.lazy(() => import('../Professors/Professors'));
const Corusel = React.lazy(() => import('../Slider/Slider'));
const Tanlovlar = React.lazy(() => import('../Tanlovlar/Tanlovlar'));
const Videos = React.lazy(() => import('../Videos/Videos'));
const HorijiyHamkorlar = React.lazy(() => import('../Hamkorlar/HorijiyHamkorlar'));
const OzbekHamkorlar = React.lazy(() => import('../Hamkorlar/OzbekHamkorlar'));
const HomeComponents = () => {
    return (
        <>
            <Corusel />
            <HorijiyHamkorlar />
            <News />
            <Announcements />
            <Videos />
            <Tanlovlar />
            <OzbekHamkorlar />
            <Map />
        </>

    );
}

export default HomeComponents;
