import RichTextEditor from "../../text-editor/RichTextEditor";

function BlogTexts({ data, others }) {
  return (
    <div className="mx-auto max-w-3xl my-16">
      <RichTextEditor value={data.body} />
    </div>
  );
}

export default BlogTexts;
