"use client";
import Image from "next/image";
import Link from "next/link";
 

 

function Footer() {
  const smoothScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="container    bg-dark-100 text-white py-[16px]">
      <nav className="p-[10px]  rounded-[4px] flexCenter">
        <Link href="/" className="    mb-[10px]" onClick={smoothScrollToTop}>
          <Image
            src="/logo.png"
            alt="Логотип"
            priority={true}
            width={60}
            height={50}
            className="w-[60px] h-[50px] md:w-[100px] md:h-[100px] cursor-pointer duration-300 ease-in-out hover:scale-95"
          />
        </Link>
        
      </nav>
    </footer>
  );
}

export default Footer;
