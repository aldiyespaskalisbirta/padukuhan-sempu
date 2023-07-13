import React from "react";

const ContentBudaya = ({ judul, gambar, deskripsi }) => {
  return (
    <div className="bg-white flex flex-col lg:flex-row p-8">
      {/* {data.map((item, index) => (
    <div
      key={index}
      className={`w-full p-4 m-2 ${
        index % 2 === 0 ? 'order-last' : 'order-first'
      }`}
    >
      <h2 className="text-lg font-bold text-center">{item.judul}</h2>
      <p className="mt-2 text-gray-600 p-4 text-justify">{item.deskripsi}</p>
    </div>
    <img
      key={index}
      className={`w-[50vh] object-cover mx-auto rounded-br-[60px] rounded-tl-[60px] ${
        index % 2 === 0 ? 'lg:order-first' : 'lg:order-last'
      }`}
      src={item.gambar}
      alt="Gambar"
    />
      ))} */}
    </div>



  );
};

export default ContentBudaya;
