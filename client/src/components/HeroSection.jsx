import React from 'react';
import './styles/styles.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const HeroSection = ({ movies }) => {
    return (
        <Carousel
            centerMode
            autoPlaySpeed={3000}
            arrows={false}
            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            draggable={false}
            showDots={false}
            infinite={true}
        >
            {movies.map((data, index) =>
                <div key={index}>
                    <img className='hero_img' src={data?.thumbnails[`thumb-613x1536`]?.url} alt={data?.title} />
                </div>
            )}
        </Carousel>
    )
}

export default HeroSection