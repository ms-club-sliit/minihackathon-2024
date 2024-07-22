"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import galleryJson from '@/app/data/home/gallery.json';

export default function Gallery() {
  const defaultWidth = 480;
  const defaultHeight = 320;

  const [imageSize, setImageSize] = useState({
    width: defaultWidth,
    height: defaultHeight
  });

  const updateImageSize = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth < 768) {
      setImageSize({ width: windowWidth * 0.8, height: (windowWidth * 0.8 * defaultHeight) / defaultWidth });
    } else if (windowWidth < 1024) {
      setImageSize({ width: windowWidth * 0.6, height: (windowWidth * 0.6 * defaultHeight) / defaultWidth });
    } else {
      setImageSize({ width: defaultWidth, height: defaultHeight });
    }
  };

  useEffect(() => {
    updateImageSize();
    window.addEventListener('resize', updateImageSize);

    return () => {
      window.removeEventListener('resize', updateImageSize);
    };
  }, []);

  return (
    <main>
      <h1 id="gallery" className="text-6xl font-bold text-center">
        Gallery
      </h1>

      <div className="gallery space-y-4 py-8 md:py-16 container block mx-auto overflow-x-hidden">
        <div className="flex overflow-x-hidden">
          <Marquee gradient={false} speed={40} direction="left">
            {galleryJson.row1 &&
              galleryJson.row1.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt="slider-img"
                  className="pr-4 rounded-3xl"
                  width={imageSize.width}
                  height={imageSize.height}
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
                  width={imageSize.width}
                  height={imageSize.height}
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
                  width={imageSize.width}
                  height={imageSize.height}
                />
              ))}
          </Marquee>
        </div>
      </div>
    </main>
  );
}