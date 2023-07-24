'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

import './carousel.styles.scss';

const Carousel = ({ name, description, images }) => {
  const [emblaRef] = useEmblaCarousel({ loop: false });

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map((image, index) => (
          <div className="embla__slide" key={index}>
            <Image src={image} alt={image} width={1920} height={1080} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
