import Image from "next/image";
import React from "react";
import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Avatar from "../../../public/images/webp/avatar.webp";

const Card = ({ item }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-center">
        <p className="text-default text-sm-15">{item.desc}</p>
      </div>
      <div className="mt-4 lg:mt-8">
        <Image alt="" height={60} src={item?.image || Avatar} width={60} />
      </div>
    </div>
  );
};

const TestimonySlider = () => {
  const data = [
    {
      id: 1,
      image: Avatar,
      desc: "Havanna helped me gain 100% ROI on my real estate investment. I would recommend them to anyone.",
    },
    {
      id: 2,
      image: Avatar,
      desc: "Havanna helped me gain 100% ROI on my real estate investment. I would recommend them to anyone.",
    },
  ];

  return (
    <div className="w-full md:w-8/12 mx-auto mt-6 lg:-mt-10">
      <OwlCarousel
        autoplay={true}
        autoplayHoverPause={true}
        autoplayTimeout={7000}
        dots={false}
        items={1}
        lazyLoad={true}
        loop={true}
        margin={20}
        nav={false}
        responsiveRefreshRate={0}
      >
        {data?.map((datum) => (
          <div key={datum.id}>
            <Card item={datum} />
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default TestimonySlider;
