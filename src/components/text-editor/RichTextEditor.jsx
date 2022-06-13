import { PortableText } from "@portabletext/react";
import BlockComponent from "./components/BlockComponent";
import CodeComponent from "./components/CodeComponent";
import ImageComponent from "./components/ImageComponent";
import YoutubeComponent from "./components/YoutubeComponent";

const components = {
  types: {
    externalImgUrl: ImageComponent,
    image: ImageComponent,
    youtube: YoutubeComponent,
    code: CodeComponent,
  },
  block: BlockComponent,
};

function RichTextEditor({ value }) {
  return (
    <div className="w-full h-auto">
      <PortableText value={value} components={components} />
    </div>
  );
}

export default RichTextEditor;
