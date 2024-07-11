"use client";
import MSLogo from "../../public/images/logos/MSLogo.png";
import FCSCLogo from "../../public/images/logos/FCSCLogo.png";
import MLSALogo from "../../public/images/logos/MLSALogo.png";
import Facebook from "../../public/images/logos/Facebook.png";
import Instagram from "../../public/images/logos/Instagram.png";
import Twitter from "../../public/images/logos/Twitter.png";
import GitHub from "../../public/images/logos/GitHub.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const socialMedia = [
  { src: Facebook, alt: "Facebook", link: "/" },
  { src: Instagram, alt: "Instagram", link: "/" },
  { src: Twitter, alt: "Twitter", link: "/" },
  { src: GitHub, alt: "GitHub", link: "/" },
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

// TODO: Create a footer component that displays the footer of the website.
export default function Footer() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    // ! Change as needed.
    <footer className="p-4 bg-white shadow md:px-20 md:py-8">
      <hr className="my-6 border-gray-700 sm:mx-auto dark:border-gray-800 lg:my-8" />
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        {/* MS Logos */}
        <div className="flex items-center space-x-4 sm:space-x-8 sm:order-1">
          {MSLogs.map((MSLogo, index) => (
            <Link href={MSLogo.link} key={index}>
              <Image
                src={MSLogo.src}
                alt={MSLogo.alt}
                className="cursor-pointer mr-5 w-35 h-35 sm:w-25 sm:h-25 sm:ml-75"
              />
            </Link>
          ))}
        </div>
        {/*Copy right text*/}
        <span className="block text-sm text-black-800 text-center font-medium  my-4 sm:order-2 sm:my-0 sm:ml-4">
          Copyright © 2022{" "}
          <a href="https://msclubsliit.org/" className="hover:underline">
            MS Club of SLIIT
          </a>
          . All Rights Reserved.
        </span>

        {/* social media */}
        <div className="flex items-center justify-center sm:space-x-4 sm:order-3 sm:mr-80">
          {socialMedia.map((social, index) => (
            <Link href={social.link} key={index}>
              <Image
                src={social.src}
                alt={social.alt}
                className="cursor-pointer mr-1 w-6 h-6 sm:w-8 sm:h-8"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
