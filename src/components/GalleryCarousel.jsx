import Slider from "react-slick";

export default function GalleryCarousel({gallery}) {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full max-w-2xl mx-auto m-10">
      <Slider {...settings}>
        {gallery.map((image)=> {
          return (
            <div key={image}>
              <img src={image} alt="" />
            </div>
          )
        })}
      </Slider>
    </div>
  );
}