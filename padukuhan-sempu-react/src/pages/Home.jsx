'use client';
import { Fade, Slide } from "react-awesome-reveal";
import line from "../image/Line.png";
import Card from "../components/Home/CardKegiatanTahunan";
import MapLink from "../components/Home/MapLink";
import { Carousel } from "flowbite-react";
const Home = () => {
  return (
    <main>
      {/* slide */}
      <div className='md:h-[70vh] h-[60vh]'>
        <Carousel slideInterval={3000}>
          <img src='https://flowbite.com/docs/images/carousel/carousel-1.svg' />
          <img src='https://scontent.fsub8-2.fna.fbcdn.net/v/t1.6435-9/53669241_421008108673265_2629978221038272512_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=19026a&_nc_eui2=AeEfudU-8cISRZeHIkJJ3woVtghMJobXKoK2CEwmhtcqggTR_iMilDaXL96KJ2D_ITW4Vzrh4mCEINPQVZp8HyMl&_nc_ohc=2d777bsSG5IAX8Dh4Op&_nc_ht=scontent.fsub8-2.fna&oh=00_AfAzM250xqkF0c8CWmPnFTrNBS7RD-lWhCrImIU3jRBwBw&oe=64D79093' />
          <img src='https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg' />
        </Carousel>
      </div>

      <Fade cascade>
        {/* tentang padukuhan */}
        <div className="flex flex-col sm:flex-row items-center justify-center h-auto p-4">
          <div className=" text-center w-[30%]">
            <Fade direction="left" delay={300}>
              <div className="font-sans font-black md:text-2xl text-base">
                <p > TENTANG PADUKUHAN </p>
                <hr />
                <p>SEMPU KALURAHAN</p>
                <hr />
                <p>PRINGOMBO</p>
              </div>

            </Fade>
          </div>
          <hr className="w-80 h-1 mx-auto m-4 bg-gray-900 block sm:hidden"></hr>
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
                  "https://flowbite.com/docs/images/carousel/carousel-1.svg"
                }
                judul={"Gumbregan"}
                deskripsi={
                  "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries...."
                }
              />
              <Card
                url={
                  "https://flowbite.com/docs/images/carousel/carousel-1.svg"
                }
                judul={"Gumbregan"}
                deskripsi={
                  "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries...."
                }
              />
              <Card
                url={
                  "https://flowbite.com/docs/images/carousel/carousel-1.svg"
                }
                judul={"Gumbregan"}
                deskripsi={
                  "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries...."
                }
              />
              <Card
                url={
                  "https://flowbite.com/docs/images/carousel/carousel-1.svg"
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
  );
};

export default Home;
