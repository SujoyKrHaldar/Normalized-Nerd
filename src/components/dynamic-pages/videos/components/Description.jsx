import Container from "../../../layout/Container";
import RichTextEditor from "../../../tools/text-editor/RichTextEditor";

function Description({ data }) {
  return (
    <>
      <Container>
        <div className="mx-auto max-w-3xl my-16">
          <RichTextEditor value={data.body} />
        </div>
      </Container>
    </>
  );
}

export default Description;
