import Link from "next/link";
import Image from "next/image";

function CardblogBox() {
  return (
    <>
      <div className="flex-1 flex items-end  duration-300 h-[320px] group hover:scale-105 hover:shadow-xl">
        <div className="absolute inset-0 -z-20 w-full h-full flex items-center justify-center">
          <Image
            layout="fill"
            src="/assets/images/course.jpg"
            alt="blog"
            objectFit="center"
          />
        </div>
        <div className="max-w-[270px] bg-white p-4 mb-4 -translate-x-2 shadow-lg group-hover:shadow-2xl group-hover:-translate-x-1 ">
          <p className="font-bold mb-2 text-xl">All about machine learning.</p>
          <Link href="/blogs/[slug]" as="/blogs/machine-learning">
            <a className="inline-block">Read more</a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CardblogBox;
