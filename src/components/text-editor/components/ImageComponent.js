import { urlFor } from "../../../../api/sanity";
import Img from "../../designs/others/Img";

function ImageComponent({ value }) {
  return (
    <div className="my-8 text-left w-full h-auto">
      <div className="mb-2 w-full h-auto bg-[#faebd7] border-[1px] border-black">
        {value?.asset && (
          <Img
            src={urlFor(value?.asset).url()}
            alt={value.caption}
            layout="responsive"
            width={1920}
            height={1080}
            objectFit="cover"
          />
        )}

        {value?.url && (
          <img src={value.url} alt={value.caption} width={1920} height={1080} />
        )}
      </div>

      <p className="text-base bg-[#faebd7] px-4 py-1.5 border-l-4 border-black inline-block">
        {value.caption}
      </p>
    </div>
  );
}

export default ImageComponent;
