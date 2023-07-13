import React from "react";
import ContentBudaya from "../components/Budaya/contentBudaya";

const Budaya = () => {
  const data = [
    {
      judul: "Gumbregan",
      gambar:
        "https://assets.kompasiana.com/items/album/2019/12/03/efek-disrupsi-mungkinkah-kembali-ke-desa-trainer-leadership-indonesia-5de60271097f364c136b5d52.jpg?t=o&v=770",
      deskripsi: `Sand typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
    },
    {
      judul: "Gumbregan",
      gambar:
        "https://assets.kompasiana.com/items/album/2019/12/03/efek-disrupsi-mungkinkah-kembali-ke-desa-trainer-leadership-indonesia-5de60271097f364c136b5d52.jpg?t=o&v=770",
      deskripsi: `Sand typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
    },
    {
      judul: "Gumbregan",
      gambar:
        "https://assets.kompasiana.com/items/album/2019/12/03/efek-disrupsi-mungkinkah-kembali-ke-desa-trainer-leadership-indonesia-5de60271097f364c136b5d52.jpg?t=o&v=770",
      deskripsi: `Sand typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
    },
  ];

  return (
    <>
      <main>
        <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
          <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <p className="mb-8 text-lg font-black text-gray-100 lg:text-xl sm:px-16 lg:px-48 uppercase">
              Kegiatan masyarakat sempu
            </p>
          </div>
        </section>
        {/* KONTEN */}

        {/* kenduri */}
        <div className="m-2">
          <ContentBudaya data={data} />
        </div>
      </main>
    </>
  );
};

export default Budaya;
