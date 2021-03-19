import React from 'react';
import '../../assets/styles/carousel.css';
import 'jquery';
import 'popper.js';
import 'bootstrap';

const Carousel = ({mass, carouselId}) => {

    const handleClikImage = (id) => {
        document.getElementById(id).classList.toggle("fullScreen");
        document.getElementById(id).classList.toggle("c_image");
    }

    const renderLi = () => {

        return mass.map(m => {

            return(
                <li dataTarget={"#" + carouselId} dataSlideTo={(m.id - 1)} class={m.id === 1 ? ("active") : null}></li>
            )
        })
    }

    const renderCarouselItem = () => {


        return mass.map(m => {

            return(
                <div class={m.id === 1 ? ("carousel-item active") : ("carousel-item")}>
                    <div id={carouselId + m.id} className="cursor" onClick={() => handleClikImage(carouselId + m.id)} >
                        <img className="rounded c_image" src={m.imgSrc} alt={m.imgAlt}/>
                    </div>
					
				</div>
            )
        })
    }


	return(
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
		</div>
	)
}

export default Carousel;