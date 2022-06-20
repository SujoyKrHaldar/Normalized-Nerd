import Link from "next/link";
import { useRouter } from "next/router";
import { NavLink } from "./NavLink";

function Navbar_Desktop({ navLinks }) {
  const router = useRouter();

  return (
    <>
      <div className="hidden md:flex items-center justify-between gap-2">
        <NavLink
          href="/"
          exact
          className="py-3 px-6 text-[0.9rem] font-medium hover:bg-[#ffd865]"
        >
          Home
        </NavLink>

        {navLinks.map((links, index) => (
          // <Link href={links.url} key={index}>
          //   <a
          //     className={`py-3 px-6 text-[0.9rem] font-medium hover:bg-[#ffd865]  ${
          //       // router.pathname == links.url ||
          //       router.pathname.startsWith(links.url)
          //         ? "bg-[#ffd865]"
          //         : "bg-transparent"
          //     }`}
          //   >
          //     {links.link}
          //   </a>
          // </Link>

          <NavLink
            href={links.url}
            key={index}
            className="py-3 px-6 text-[0.9rem] font-medium hover:bg-[#ffd865]"
          >
            {links.link}
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default Navbar_Desktop;
