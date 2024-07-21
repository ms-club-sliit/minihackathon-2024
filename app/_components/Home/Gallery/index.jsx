import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import galleryJson from '@/app/data/home/gallery.json';

export default function Gallery() {
  return (
    <main>
      <h1 id="gallery" className="text-6xl font-bold text-center">
        Gallery
      </h1>

      <div className="gallery space-y-4 py-16 container block mx-auto overflow-x-hidden">
        <div className="flex overflow-x-hidden">
          <Marquee gradient={false} speed={40} direction="left">
            {galleryJson.row1 &&
              galleryJson.row1.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt="slider-img"
                  className="pr-4 rounded-3xl"
                  width="480"
                  height="320"
                />
              ))}
          </Marquee>
        </div>
        <div className="flex overflow-x-hidden">
          <Marquee gradient={false} speed={40} direction="right">
            {galleryJson.row2 &&
              galleryJson.row2.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt="slider-img"
                  className="pr-4 rounded-3xl"
                  width="480"
                  height="320"
                />
              ))}
          </Marquee>
        </div>

        <div className="flex overflow-x-hidden">
          <Marquee gradient={false} speed={40} direction="left">
            {galleryJson.row3 &&
              galleryJson.row3.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt="slider-img"
                  className="pr-4 rounded-3xl"
                  width="480"
                  height="320"
                />
              ))}
          </Marquee>
        </div>
      </div>
    </main>
  );
}
