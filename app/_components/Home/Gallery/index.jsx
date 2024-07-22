"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import galleryJson from "@/app/data/home/gallery.json";

export default function Gallery() {
  // Default dimensions
  const defaultWidth = 480;
  const defaultHeight = 320;

  // State to store image dimensions
  const [imageSize, setImageSize] = useState({
    width: defaultWidth,
    height: defaultHeight,
  });

  // Function to update image size based on viewport width
  const updateImageSize = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth < 768) {
      // For mobile view
      setImageSize({
        width: windowWidth * 0.5,
        height: (windowWidth * 0.5 * defaultHeight) / defaultWidth,
      });
    } else if (windowWidth < 1024) {
      // For tablet view
      setImageSize({
        width: windowWidth * 0.6,
        height: (windowWidth * 0.6 * defaultHeight) / defaultWidth,
      });
    } else {
      // For desktop view
      setImageSize({ width: defaultWidth, height: defaultHeight });
    }
  };

  // Set initial image size and add resize event listener
  useEffect(() => {
    updateImageSize();
    window.addEventListener("resize", updateImageSize);

    return () => {
      window.removeEventListener("resize", updateImageSize);
    };
  }, []);

  return (
    <main>
      <h1 id="gallery" className="text-3xl lg:text-5xl font-bold text-center">
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
