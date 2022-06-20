import Accordion from "../../designs/cards/Accordion";
import Container from "../../layout/Container";

function Faqs({ data }) {
  return (
    <>
      <div className="py-8">
        <Container>
          {data.map((faq) => (
            <Accordion key={faq.id} faq={faq} />
          ))}
        </Container>
      </div>
    </>
  );
}

export default Faqs;
