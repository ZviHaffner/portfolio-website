import Slider from "react-slick";

export default function GalleryCarousel({ gallery }) {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {gallery.map((image) => (
        <div key={image}>
          <img
            src={image}
            alt=""
            className="aspect-video object-contain mx-auto"
          />
        </div>
      ))}
    </Slider>
  );
}
