const CardCarousel = ({ images }) => (
  <div className="flex overflow-x-scroll gap-4">
    {images.map((image, index) => (
      <div
        key={index}
        className={`relative w-full md:w-1/3 lg:w-1/4 aspect-w-1 aspect-h-1`}
      >
        <img
          src={image.src}
          alt={image.alt}
          className={`object-cover w-full h-full rounded-lg ${image.imgClassName}`}
        />
        <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
          <h3 className="font-semibold">{image.title}</h3>
          <p>{image.description}</p>
        </div>
      </div>
    ))}
  </div>
);

export default CardCarousel;
