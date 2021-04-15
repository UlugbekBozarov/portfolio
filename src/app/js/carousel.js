import React from 'react';
import '../../assets/styles/carousel.css';
import useModal from 'react-hooks-use-modal';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import { useState } from 'react';

const Carousel = ({ mass, carouselId }) => {

    const [Img, openImg, closeImg, isModalOpen] = useModal('root', {
        preventScroll: true
    });

    const [getImages, setImages] = useState({});

    const handleClikImage = (images) => {
        setImages(images)
        openImg();
    }

    const renderImgModal = () => {

        return (
            <Img className="bg-dark">
                <div style={{ width: "100%", height: "100%", cursor: "zoom-out"}} onClick={closeImg}>
                    <img className="rounded c_image" src={getImages.imgSrc} alt={getImages.imgAlt} />
                </div>
            </Img>
        )
    }

    const renderLi = () => {

        return mass.map(m => {

            return (
                <li dataTarget={"#" + carouselId} dataSlideTo={(m.id - 1)} class={m.id === 1 ? ("active") : null}></li>
            )
        })
    }

    const renderCarouselItem = () => {

        return mass.map(m => {

            return (
                <div class={m.id === 1 ? ("carousel-item active") : ("carousel-item")}>
                    <div id={carouselId + m.id} className="cursor" onClick={() => handleClikImage(m)} >
                        <img className="rounded c_image" src={m.imgSrc} alt={m.imgAlt} />
                    </div>
                </div>
            )
        })
    }


    return (
        <div id={carouselId} className="carousel slide" dataRide="carousel">
            <ul class="carousel-indicators">
                {renderLi()}
            </ul>
            <div class="carousel-inner">

                {renderCarouselItem()}
                <a class="carousel-control-prev" href={"#" + carouselId} data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href={"#" + carouselId} data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>
            {renderImgModal()}
        </div>
    )
}

export default Carousel;