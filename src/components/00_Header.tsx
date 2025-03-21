import Link from "next/link";
//import { NAV_LINKS } from "@/utils/constants";
import Image from "next/image";


function Header() {
  return (
    <header className=" container  ">
      <nav className="p-[10px]  rounded-[4px] ">
        <Link href="/" className="    mb-[10px]">
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
    </header>
  );
}

export default Header;
