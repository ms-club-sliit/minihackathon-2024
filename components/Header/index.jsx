"use client";
import { Link as Scroll } from "react-scroll";
import Link from "next/link";
//
// TODO: Create a header component that displays the header of the website.
export default function Header() {
  return (
    // * Example usage of the header component.
    // ! Change as needed.
    <main className="sticky top-0 z-50 bg-white shadow-md">
      <ul className="flex justify-around py-4 mb-5">
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
    </main>
  );
}