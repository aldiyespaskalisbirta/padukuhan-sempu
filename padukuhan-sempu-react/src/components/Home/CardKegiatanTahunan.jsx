import React from "react";

const CardKegiatanTahunan = ({ url, judul, deskripsi }) => {
    return (
        <>
            <div className="card w-80 bg-base-100 shadow-xl ">
                <figure><img src={url} alt="kegiatan tahunan" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{judul}</h2>
                    <p className="text-justify">{deskripsi}</p>
                    <div className="card-actions">
                        <button className="btn bg-[#80A08D]">Baca Selengkapnya</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardKegiatanTahunan