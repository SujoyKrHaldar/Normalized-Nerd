import Link from "next/link";
import { useRouter } from "next/router";

function Navbar_Desktop({ navLinks }) {
  const router = useRouter();

  return (
    <>
      <div className="hidden md:flex items-center justify-between gap-2">
        {navLinks.map((links, index) => (
          <Link href={links.url} key={index}>
            <a
              className={`py-3 px-6 text-[0.9rem] font-medium hover:bg-[#ffd865]  ${
                router.pathname == links.url ? "bg-[#ffd865]" : "bg-transparent"
              }`}
            >
              {links.link}
            </a>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Navbar_Desktop;
