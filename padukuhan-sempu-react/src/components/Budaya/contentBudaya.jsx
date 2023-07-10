import React from "react";

const ContentBudaya = ({ judul, gambar, deskripsi }) => {
  return (
    <>
      <div className="flex ">
        <p className="text-black">{judul}</p>
        <img src={gambar} alt="budaya" />
        <p>{deskripsi}</p>
      </div>
    </>
  );
};

export default ContentBudaya;
