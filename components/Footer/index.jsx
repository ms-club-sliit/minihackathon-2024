"use client";
import Image from "next/image";
import Link from "next/link";


const socialMedia = [
  { src: "/images/logos/Facebook.png", alt: "Facebook", link: "https://www.facebook.com/msclubsliit/" },
  { src: "/images/logos/Instagram.png", alt: "Instagram", link: "https://www.instagram.com/msclub.sliit/" },
  { src: "/images/logos/youtube.png", alt: "YT", link: "https://www.youtube.com/@msclubofsliit/" },
  { src: "/images/logos/linkedin.png", alt: "Linkedin", link: "https://www.linkedin.com/company/msclubsliit/" },
  { src: "/images/logos/GitHub.png", alt: "GitHub", link: "https://github.com/ms-club-sliit/" },
];

const MSLogs = [
  {
    src: "/images/logos/MSLogo.png",
    alt: "MS Club Of SLIIT",
    link: "https://msclubsliit.org",
    width: 120,
    height: 120,
  },
  {
    src: "/images/logos/FCSCLogo.png",
    alt: "FCSC LOGO",
    link: "https://www.facebook.com/sliit.fcsc",
    width: 120,
    height: 120,
  },
  {
    src: "/images/logos/MLSALogo.png",
    alt: "MLSA Logo",
    link: "https://studentambassadors.microsoft.com",
    width: 50,
    height: 50,
  },
];

export default function Footer() {
  return (
    <footer className="bg-white py-8 shadow-md">
      <hr className="my-6 border-gray-300" />
      <div className="container mx-auto px-4 flex flex-col lg:flex-row sm:gap-5 justify-between items-center">
        {/* MS Logos */}
        <div className="flex items-center space-x-4 sm:space-x-6 mb-4 sm:mb-0">
          {MSLogs.map((logo, index) => (
            <Link href={logo.link} key={index}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="cursor-pointer"
              />
            </Link>
          ))}
        </div>
        {/* Copyright text */}
        <div className="text-center text-sm text-gray-700 mb-4 sm:mb-0">
          Copyright &copy; 2024&nbsp;
          <a href="https://msclubsliit.org" className="hover:underline">
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