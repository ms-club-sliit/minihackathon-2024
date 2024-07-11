"use client";
import MSLogo from "../../public/images/logos/MSLogo.png";
import FCSCLogo from "../../public/images/logos/FCSCLogo.png";
import MLSALogo from "../../public/images/logos/MLSALogo.png";
import Image from "next/image";
import Link from "next/link";

const socialMedia = [
  { src: "/images/logos/Facebook.png", alt: "Facebook", link: "/" },
  { src: "/images/logos/Instagram.png", alt: "Instagram", link: "/" },
  { src: "/images/logos/Twitter.png", alt: "Twitter", link: "/" },
  { src: "/images/logos/GitHub.png", alt: "GitHub", link: "/" },
];

const MSLogs = [
  { src: MSLogo, alt: "MS Club Of SLIIT", link: "https://msclubsliit.org/" },
  { src: FCSCLogo, alt: "FCSC LOGO", link: "https://msclubsliit.org/" },
  {
    src: MLSALogo,
    alt: "MLSA Logo",
    link: "https://studentambassadors.microsoft.com/",
  },
];

export default function Footer() {
  return (
    <footer className="bg-white py-8 shadow-md">
      <hr className="my-6 border-gray-300 dark:border-gray-700" />
      <div className="container mx-auto px-4 flex flex-col lg:flex-row sm:gap-5 justify-between items-center">
        {/* MS Logos */}
        <div className="flex items-center space-x-4 sm:space-x-6 mb-4 sm:mb-0">
          {MSLogs.map((logo, index) => (
            <Link href={logo.link} key={index}>
              <Image
                src={logo.src}
                alt={logo.alt}
                className="cursor-pointer "
              />
            </Link>
          ))}
        </div>
        {/* Copyright text */}
        <div className="text-center text-sm text-gray-700 mb-4 sm:mb-0">
          Copyright © 2024{" "}
          <a href="https://msclubsliit.org/" className="hover:underline">
            MS Club of SLIIT
          </a>
          . All Rights Reserved.
        </div>
        {/* Social Media Icons */}
        <div className="flex items-center space-x-4">
          {socialMedia.map((social, index) => (
            <Link href={social.link} key={index}>
              <Image
                src={social.src}
                alt={social.alt}
                width={100}
                height={100}
                className="cursor-pointer w-6 h-6 sm:w-8 sm:h-8"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}