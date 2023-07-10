const slides = [
  {
    id: "slide1",
    imageUrl: "https://assets.kompasiana.com/items/album/2019/12/03/efek-disrupsi-mungkinkah-kembali-ke-desa-trainer-leadership-indonesia-5de60271097f364c136b5d52.jpg?t=o&v=770",
    prevSlide: "#slide3",
    nextSlide: "#slide2"
  },
  {
    id: "slide2",
    imageUrl: "https://1.bp.blogspot.com/-kpeU1QtgpE4/V4rnWJAyMbI/AAAAAAAAADE/JS3EwgV0pJgJBdMZ0YlK6dIUt7M8s2dFACLcB/s320/slide2.jpg",
    prevSlide: "#slide1",
    nextSlide: "#slide3"
  },
  {
    id: "slide3",
    imageUrl: "https://payungi.org/wp-content/uploads/2021/05/desa.jpg",
    prevSlide: "#slide2",
    nextSlide: "#slide1"
  },

];

const Slider = () => {
  return (
    <div className="carousel w-full bg-cover h-[50vh]">
      {slides.map((slide) => (
        <div key={slide.id} id={slide.id} className="carousel-item relative w-full ">
          <img src={slide.imageUrl} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={slide.prevSlide} className="btn btn-circle">❮</a>
            <a href={slide.nextSlide} className="btn btn-circle">❯</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Slider;
