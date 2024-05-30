import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel } from 'react-responsive-carousel';

const  MyCarousel  = () => {
    return (
        <Carousel>
        <div>
            <img src="https://smktibazma.sch.id/static/media/hero-1.2803f83852406277b6cd.jpg" alt="Image 1"/>
        </div>
        <div>
            <img src="https://smktibazma.sch.id/static/media/r_kelas.b550b814ba15f4fff81a.jpg" alt="Image 2"/>
        </div>
        <div>
            <img src="https://smktibazma.sch.id/static/media/asrama.d1fa6eec69bfc5732828.jpg" alt="Image 3"/>
        </div>
    </Carousel>
    );
};

export default MyCarousel;