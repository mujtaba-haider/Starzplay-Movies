import React from 'react';
import './styles/styles.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 10,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 6,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const SubSection = ({ index, title, movies }) => {
  return (
    <div>
      <h4 className='categories'>
        {title}
      </h4>

      <Carousel
        autoPlaySpeed={3000}
        arrows={false}
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={false}
        showDots={false}
        infinite={true}
        partialVisible={true}
      >
        {
          movies && movies.map((data, i) =>
            <div className="carousel_img" key={i}>
              <img style={{ width: "125px", height: "180px" }} src={data?.thumbnails[`thumb-677x474`]?.url} alt={data?.title} />
            </div>
          )
        }
      </Carousel>
    </div>
  )
}

export default SubSection