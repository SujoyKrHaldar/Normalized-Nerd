import Image from "next/image";
import { useState } from "react";

function Img({ src, alt, className, position, objectFit, layout }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        objectFit={objectFit || "cover"}
        objectPosition={position || "center"}
        layout={layout || "fill"}
        loading="lazy"
        className={`${className} duration-1000
              ${isLoading ? "opacity-0" : " scale-100 "}`}
        onLoadingComplete={() => setLoading(false)}
      />
    </>
  );
}

export default Img;
