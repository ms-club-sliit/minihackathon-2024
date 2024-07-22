"use client";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const socialMedia = [
  { src: "/images/logos/Facebook.png", alt: "Facebook", link: "/" },
  { src: "/images/logos/Instagram.png", alt: "Instagram", link: "/" },
  { src: "/images/logos/Twitter.png", alt: "Twitter", link: "/" },
  { src: "/images/logos/GitHub.png", alt: "GitHub", link: "/" },
];

const navItems = [
  { name: "Home", link: "/" },
  { name: "Eligibility", link: "/#eligibility" },
  { name: "Timeline", link: "/#timeline" },
  { name: "Gallery", link: "/#gallery" },
  { name: "Rules", link: "/rules" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <main className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex flex-col items-center flex-wrap">
        <Link href="/">
          <Image
            src="/images/logos/logo-light.png"
            alt="logo-main"
            width={309}
            height={358}
            className="cursor-pointer mt-4 w-24 sm:w-32 md:w-40 lg:w-80"
            priority
          />
        </Link>
        <div className="flex justify-between items-center h-full w-full px-4 md:px-[120px] lg:px-[202px] my-5">
          <div className="hidden lg:flex">
            <ul className="flex justify-around gap-12 items-center">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="text-lg font-semibold cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:hidden">
            <Image
              src="/images/icons/menu.png"
              alt="menu"
              width={100}
              height={100}
              className="cursor-pointer w-6 h-6 sm:w-8 sm:h-8"
              onClick={handleNav}
            />
          </div>
          <div className="flex items-center justify-center">
            {socialMedia.map((social, index) => (
              <Link href={social.link} key={index}>
                <Image
                  src={social.src}
                  alt={social.alt}
                  width={100}
                  height={100}
                  className="cursor-pointer mr-1 w-6 h-6 sm:w-8 sm:h-8"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 p-10 bg-white rounded-lg lg:hidden ease-in duration-500 ${menuOpen
            ? "m-2 border border-slate-300 shadow-2xl"
            : "left-[-100%] w-full"
          }`}
      >
        <div className="flex w-full items-center justify-start">
          <div
            onClick={handleNav}
            className="cursor-pointer text-slate-600 border border-slate-600 p-1 rounded"
          >
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-8">
          <ul className="flex flex-col gap-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.link} className="text-lg font-semibold" onClick={closeMenu}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row justify-around items-center">
          {socialMedia.map((social, index) => (
            <Link href={social.link} key={index} onClick={closeMenu}>
              <Image
                src={social.src}
                alt={social.alt}
                width={100}
                height={100}
                className="cursor-pointer mr-1 w-8 h-8"
              />
            </Link>
          ))}
        </div>
        <div className="flex items-center w-full">
          <Link href="/">
            <Image
              src="/images/logos/logo-light.png"
              alt="logo-main"
              width={309}
              height={358}
              className="cursor-pointer mt-8 w-36 sm:w-32 md:w-40 lg:w-80 mx-auto"
              priority
            />
          </Link>
        </div>
      </div>
    </main>
  );
}