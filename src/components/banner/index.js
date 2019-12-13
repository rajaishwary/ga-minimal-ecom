import React from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Image, BannerPlaceholder } from "./styles";

const Banners = ({ banners = [] }) => {
  return (
    <Carousel showThumbs={false} infiniteLoop={true}>
        {Array.isArray(banners) && banners.length > 0 ? banners.map((banner, index) => {
            return (
                <Image key={index} src={banner} />
            );
        }) :   <BannerPlaceholder />}
    </Carousel>
  );
};

export default Banners;
