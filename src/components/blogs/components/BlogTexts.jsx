import Container from "../../layout/Container";
import RichTextEditor from "../../text-editor/RichTextEditor";

function BlogTexts({ data }) {
  return (
    <>
      <Container>
        <div className="mx-auto max-w-3xl my-16">
          <RichTextEditor value={data.body} />
          <p className="mt-8">The end.</p>
        </div>
      </Container>
    </>
  );
}

export default BlogTexts;
