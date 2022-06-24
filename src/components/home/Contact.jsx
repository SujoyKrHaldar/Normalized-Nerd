import Container from "../layout/Container";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

function Contact() {
  return (
    <>
      <div className="w-full h-[450px] bg-[#f2c744] py-16">
        <Container className="flex items-center text-center">
          <div className="max-w-lg mx-auto ">
            <h1>
              Lets discuss <span className="font-bold">Something cool</span>{" "}
              together.
            </h1>
            <a href="/" className="btn hover:underline">
              <p className="font-bold text-3xl">sujoy98@gmail.com</p>
            </a>

            <p>Connnect with socials</p>
            <div className=" mt-4 flex items-center justify-center gap-2">
              <div className="text-3xl">
                <AiFillFacebook />
              </div>
              <div className="text-3xl">
                <AiFillInstagram />
              </div>
              <div className="text-3xl">
                <AiFillTwitterSquare />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Contact;
