import React, { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import Slider from "../components/Home/slider";
import line from "../image/Line.png";
import Card from "../components/Home/CardKegiatanTahunan";
import MapLink from "../components/Home/MapLink";

const Home = () => {
  const slides = [
    {
      url: "https://assets.kompasiana.com/items/album/2019/12/03/efek-disrupsi-mungkinkah-kembali-ke-desa-trainer-leadership-indonesia-5de60271097f364c136b5d52.jpg?t=o&v=770",
    },
    {
      url: "https://1.bp.blogspot.com/-kpeU1QtgpE4/V4rnWJAyMbI/AAAAAAAAADE/JS3EwgV0pJgJBdMZ0YlK6dIUt7M8s2dFACLcB/s320/slide2.jpg",
    },
    { url: "https://payungi.org/wp-content/uploads/2021/05/desa.jpg" },
  ];

  return (
    <div className="">
      <main>
        {/* slide */}
        <div className="">
          <Slider>{slides}</Slider>
        </div>
        <Fade cascade>
          {/* tentang padukuhan */}

          <div className="flex flex-col sm:flex-row items-center justify-center h-auto p-4">
            <div className=" text-center w-[30%]">
              <Fade direction="left" delay={300}>
                <p className="font-sans font-black md:text-2xl text-base">
                  TENTANG PADUKUHAN <hr /> SEMPU KALURAHAN <hr /> PRINGOMBO
                </p>
              </Fade>
            </div>
            <hr class="w-80 h-1 mx-auto m-4 bg-gray-900 block sm:hidden"></hr>
            <div className="mr-10 ml-12 hidden sm:block">
              <img className="" src={line} />
            </div>
            <div className="text-center w-[50%]">
              <Fade direction="right" delay={300}>
                <p className="font-sans ">
                  Land typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries....
                  dolor sit, amet consectetur adipisicing elit. Modi repudiandae
                  maxime accusantium ea non asperiores perferendis dolorem totam
                  hic corporis, dolore aliquid, earum possimus obcaecati ad
                  quidem nostrum, fuand typesetting industry. Lorem Ipsum has
                  been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries.....
                </p>
              </Fade>
            </div>
          </div>
          {/* Kegiatan Masyarakat */}
        </Fade>
        <div className="bg-[#B4B8AE] pt-16 pb-16">
          <Fade delay={300}>
            <div className="text-center">
              <p className="uppercase ont-sans font-black md:text-2xl text-base mb-10">
                Kegiatan masyarakat sempu
              </p>
            </div>
          </Fade>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <Fade direction="down" delay={800}>
                <Card
                  url={
                    "https://assets.kompasiana.com/items/album/2019/12/03/efek-disrupsi-mungkinkah-kembali-ke-desa-trainer-leadership-indonesia-5de60271097f364c136b5d52.jpg?t=o&v=770"
                  }
                  judul={"Gumbregan"}
                  deskripsi={
                    "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries...."
                  }
                />
                <Card
                  url={
                    "https://assets.kompasiana.com/items/album/2019/12/03/efek-disrupsi-mungkinkah-kembali-ke-desa-trainer-leadership-indonesia-5de60271097f364c136b5d52.jpg?t=o&v=770"
                  }
                  judul={"Gumbregan"}
                  deskripsi={
                    "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries...."
                  }
                />
                <Card
                  url={
                    "https://assets.kompasiana.com/items/album/2019/12/03/efek-disrupsi-mungkinkah-kembali-ke-desa-trainer-leadership-indonesia-5de60271097f364c136b5d52.jpg?t=o&v=770"
                  }
                  judul={"Gumbregan"}
                  deskripsi={
                    "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries...."
                  }
                />
                <Card
                  url={
                    "https://assets.kompasiana.com/items/album/2019/12/03/efek-disrupsi-mungkinkah-kembali-ke-desa-trainer-leadership-indonesia-5de60271097f364c136b5d52.jpg?t=o&v=770"
                  }
                  judul={"Gumbregan"}
                  deskripsi={
                    "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries...."
                  }
                />
              </Fade>
            </div>
          </div>
        </div>
        {/* Google Maps */}
        <div className="text-center mt-16 mr-16 ">
          <div>
            <Slide>
              <p className="font-sans font-black md:text-2xl text-base mb-10 uppercase">
                lokasi dan kontak
              </p>
            </Slide>
          </div>

          <div>
            <MapLink
              destination={
                "Kadus Sempu Eko, VPGQ+24V, Sempu, Pringombo, Kec. Rongkop, Kabupaten Gunung Kidul, Daerah Istimewa Yogyakarta 55883"
              }
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
