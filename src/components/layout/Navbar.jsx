import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Navbar_Desktop from "./components/navbar/Navbar_Desktop";
import Navbar_Mobile from "./components/navbar/Navbar_Mobile";

const navLinks = [
  {
    link: "Home",
    url: "/",
  },
  {
    link: "Video",
    url: "/videos",
  },
  {
    link: "Project",
    url: "/projects",
  },
  {
    link: "Blog",
    url: "/blogs",
  },

  {
    link: "Faq",
    url: "/faqs",
  },
  {
    link: "About",
    url: "/about",
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const openModel = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="absolute  w-full top-0 z-[10]">
        <div className="container flex items-center justify-between gap-4 ">
          <Link href="/" passHref>
            <div className="w-20 h-full py-6 px-3 bg-white cursor-pointer ">
              <Image
                layout="responsive"
                loading="eager"
                width={200}
                height={100}
                objectFit="cover"
                objectPosition="center"
                src="/logo.png"
                alt="Normalized Nerd logo - home"
              />
            </div>
          </Link>
          <Navbar_Desktop navLinks={navLinks} />
          <div className="flex items-center justify-between gap-8">
            <div onClick={openModel} className=" flex text-3xl cursor-pointer">
              <FiMenu />
            </div>
          </div>
        </div>
      </div>

      <Navbar_Mobile navLinks={navLinks} open={open} setOpen={setOpen} />
    </>
  );
}

export default Navbar;
