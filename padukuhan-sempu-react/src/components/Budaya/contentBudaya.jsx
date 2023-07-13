import React from "react";
import { Fade } from "react-awesome-reveal";

const ContentBudaya = ({ data }) => {
  return (
    <div className="">
      {data.map((item, index) => {
        const isEven = index % 2 === 0;
        const imageOrder = isEven ? "order-first" : "order-last";
        const textOrder = isEven ? "order-last" : "order-first";

        return (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center justify-center mt-8`}
          >
            <div
              className={`w-full p-4 m-2 lg:w-[100vh] flex flex-col justify-center items-center ${imageOrder === "order-first" ? "lg:order-2" : ""
                }`}
            >
              <Fade direction="left" delay={300}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.judul}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {item.deskripsi}
                </p>
              </Fade>
            </div>
            <Fade direction="right" delay={300}>
              <img
                className={`w-[50vh] object-cover mx-auto rounded-br-[40px] rounded-tl-[40px] lg:w-96 mb-5 ${imageOrder === "order-first" ? "lg:order-1" : ""
                  }`}
                src={item.gambar}
                alt=""
              />
            </Fade>
          </div>
        );
      })}
    </div>
  );
};

export default ContentBudaya;
