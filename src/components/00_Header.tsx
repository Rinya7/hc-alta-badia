import Link from "next/link";
//import { NAV_LINKS } from "@/utils/constants";
import Image from "next/image";
import { NAV_LINKS } from "@/utils/constants";


function Header() {
  return (
    <header className=" container  text-black">
      <nav className="p-[10px]  rounded-[4px] flex">
        <Link href="/" className="flex    mb-[10px]">
          <Image
            src="/logo.png"
            alt="Логотип"
            priority={true}
            width={60}
            height={50}
            className="w-[60px] h-[50px] md:w-[100px] md:h-[100px] cursor-pointer duration-300 ease-in-out hover:scale-95"
          />
        </Link>
        <ul className="hidden md:flexCenter md:w-full">
            {NAV_LINKS.map((link) => (
              <li
                key={link.key}
                className="flexCenter xl:mr-[24px] cursor-pointer pb-[6px] transition duration-300 ease-in-out transform hover:shadow-lg hover:text-hover-90 hover:underline"
              >
                <Link href={`/${link.href}`}>{link.label}!</Link>
              </li>
            ))}
          </ul>
        
      </nav>
    </header>
  );
}

export default Header;
