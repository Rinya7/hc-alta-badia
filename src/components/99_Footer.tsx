"use client";
import Image from "next/image";
 

//import { SOCIAL } from "@/utils/constants";

function Footer() {
  const smoothScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="container h-60 bg-dark-100 text-white py-[16px]">
      <div className="">
        <div className="flexCenter  mb-[16px]   " onClick={smoothScrollToTop}>
          <Image
            src="/logo.jpg"
            alt="Логотип"
            priority={true}
            width={100}
            height={100}
            className="   cursor-pointer    duration-300 ease-in-out   hover:scale-105 max-w-[166px]  max-h-[22px] mb-[8px]"
          />
        </div>

        {/*<ul className="flexCenter mb-[16px] ">
          {SOCIAL.map((link) => (
            <li
              key={link.key}
              className="flexCenter  mx-[10px] w-[35px] h-[35px] rounded-full bg-light hover:bg-primary cursor-pointer transition-colors duration-300 ease-in-out   hover:scale-y-105"
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className=" transition-all    "
              >
                <Image
                  src={link.icon}
                  alt={link.key}
                  priority={true}
                  width={20}
                  height={20}
                  className=""
                />
              </a>
            </li>
          ))}
        </ul>*/}

        <a
          href="https://github.com/Rinya7"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center capitalize  text-sm text-gray-80  hover_links_white"
        >
          <p>Copyright © 2024 by Rinya</p>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
