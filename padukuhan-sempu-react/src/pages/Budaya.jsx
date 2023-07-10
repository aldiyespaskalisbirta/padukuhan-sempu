import React from "react";
import ContentBudaya from "../components/Budaya/ContentBudaya";

const Budaya = () => {
  return (
    <>
      <main>
        <section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
          <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <p class="mb-8 text-lg font-blgitack text-gray-100 lg:text-xl sm:px-16 lg:px-48 uppercase">
              Kegiatan masyarakat sempu
            </p>
          </div>
        </section>
        {/* KONTEN */}

        {/* kenduri */}
        <div className="">
          <ContentBudaya />
        </div>
      </main>
    </>
  );
};

export default Budaya;
