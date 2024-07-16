import Marquee from 'react-fast-marquee';
import galleryJson from '@/app/data/home/gallery.json';

// TODO: Create a Gallery component.
export default function Gallery() {
  return (
    <main>
      <h1 id="gallery" className="text-6xl font-bold text-center">
        Gallery
      </h1>

      <div className="gallery space-y-4 py-16 container block mx-auto overflow-x-hidden">
        <div className="flex overflow-x-hidden">
          <Marquee
            gradient={false}
            speed={40}
            direction="left"
            className="flex"
          >
            {galleryJson.row1.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="slider-img"
                className="w-[30rem] h-auto mr-4 rounded-3xl"
              />
            ))}
          </Marquee>
        </div>
        <div className="flex overflow-x-hidden">
          <Marquee
            gradient={false}
            speed={40}
            direction="right"
            className="flex"
          >
            {galleryJson.row2.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="slider-img"
                className="w-[30rem] h-auto mr-4 rounded-3xl"
              />
            ))}
          </Marquee>
        </div>

        <div className="flex overflow-x-hidden">
          <Marquee
            gradient={false}
            speed={40}
            direction="left"
            className="flex"
          >
            {galleryJson.row3.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="slider-img"
                className="w-[30rem] h-auto mr-4 rounded-3xl"
              />
            ))}
          </Marquee>
        </div>
      </div>
    </main>
  );
}
