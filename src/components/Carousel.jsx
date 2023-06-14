import React from 'react'
import banner1 from '../assets/banner1.webp'
import banner2 from '../assets/banner2.webp'
import banner3 from '../assets/banner3.jpg'
import banner4 from '../assets/banner4.jpg'
import banner5 from '../assets/banner5.jpg'
import banner6 from '../assets/banner6.webp'

import Carousel from 'react-bootstrap/Carousel';


export const Carouselpage = () => {
    return (

        <Carousel>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={banner6}
                    // alt="First slide"
                    
                />

            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={banner5}
                    // alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={banner4}
                    // alt="Third slide"
                />

            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={banner3}
                    // alt="Third slide"
                />

            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={banner2}
                    // alt="Third slide"
                />

            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={banner1}
                    // alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
    )
}
