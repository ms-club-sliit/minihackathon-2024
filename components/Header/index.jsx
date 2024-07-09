"use client";
import { Link as Scroll } from "react-scroll";
import Link from "next/link";
import logomain from "../../public/logomain.png";
import menu from "../../public/menu.png";
import Facebook from "../../public/Facebook.png";
import Instagram from "../../public/Instagram.png";
import Twitter from "../../public/Twitter.png";
import GitHub from "../../public/GitHub.png";
import Image from "next/image";
//
// TODO: Create a header component that displays the header of the website.
export default function Header() {
  return (
    // * Example usage of the header component.
    // ! Change as needed.
    <main className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex flex-col items-center flex-wrap">
        <Link href="/">
          <Image
            src={logomain}
            alt="logo-main"
            className="cursor-pointer mt-4 w-[160px] h-[60px] sm:w-[250px] sm:h-[120px]"
            priority
          />
        </Link>
        <div className="flex justify-between items-center h-full w-full px-4 md:px-[120px] lg:px-[202px] my-5">
          {/* nav bar links */}
          <div className="hidden lg:flex">
            <ul className="flex justify-around gap-12 items-center">
              <li>
                <Link href="/" className="text-lg font-semibold">
                  Home
                </Link>
              </li>
              <li>
                <Scroll
                  className="text-lg font-semibold"
                  to="eligibility"
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={500}
                  delay={100}
                >
                  Eligibility
                </Scroll>
              </li>
              <li>
                <Scroll
                  className="text-lg font-semibold"
                  to="timeline"
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={500}
                  delay={100}
                >
                  Timeline
                </Scroll>
              </li>
              {/* Teams - no plans yet */}
              <li>
                <Scroll
                  className="text-lg font-semibold"
                  to="gallery"
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={500}
                  delay={100}
                >
                  Gallery
                </Scroll>
              </li>
              <li>
                <Link href="/rules" className="text-lg font-semibold">
                  Rules
                </Link>
              </li>
              {/* Contact - redirect to facebook page */}
            </ul>
          </div>
          {/* menu icon */}
          <div className="lg:hidden">
            <Image
              src={menu}
              alt="menu"
              className="cursor-pointer w-6 h-6 sm:w-8 sm:h-8"
            />
          </div>
          {/* social media */}
          <div className="flex items-center justify-center">
            <Link href="/">
              <Image
                src={Facebook}
                alt="Facebook"
                className="cursor-pointer mr-1 w-6 h-6 sm:w-8 sm:h-8 768px:w-10 768px:h-10"
              />
            </Link>
            <Link href="/">
              <Image
                src={Instagram}
                alt="Instagram"
                className="cursor-pointer mr-1 w-6 h-6 sm:w-8 sm:h-8 768px:w-10 768px:h-10"
              />
            </Link>
            <Link href="/">
              <Image
                src={Twitter}
                alt="Twitter"
                className="cursor-pointer mr-1 w-6 h-6 sm:w-8 sm:h-8 768px:w-10 768px:h-10"
              />
            </Link>
            <Link href="/">
              <Image
                src={GitHub}
                alt="GitHub"
                className="cursor-pointer mr-1 w-6 h-6 sm:w-8 sm:h-8 768px:w-10 768px:h-10"
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
