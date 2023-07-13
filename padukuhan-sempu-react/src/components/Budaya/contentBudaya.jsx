import React from "react";

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
            className={`flex flex-col lg:flex-row items-center justify-center m-4`}
          >
            <div
              className={`w-full p-4 m-2 lg:w-[100vh] flex flex-col justify-center items-center  ${textOrder}`}
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.judul}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.deskripsi}
              </p>
            </div>
            <img
              className={`w-[50vh] object-cover mx-auto rounded-br-[60px] rounded-tl-[60px] lg:w-96 mb-5 ${imageOrder}`}
              src={item.gambar}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default ContentBudaya;
