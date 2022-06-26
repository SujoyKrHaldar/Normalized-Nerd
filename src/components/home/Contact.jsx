import Container from "../layout/Container";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

function Contact() {
  return (
    <>
      <div className="w-full h-[450px] py-16">
        <Container className="flex items-center text-center">
          <div className="max-w-xl mx-auto ">
            <h2>Thats all about me,</h2>

            <h1 className="font-bold"> Feel free to say hi!</h1>
            <p>
              Lets discuss <span className="font-bold">Something cool</span>{" "}
              together.
            </p>

            <a
              href="mailto:sujan99dutta@gmail.com"
              className="btn inline-block bg-[#f2c744] text-black mt-4 border-2 border-transparent hover:border-black mb-8"
            >
              <p className="font-bold"> sujan99dutta@gmail.com</p>
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
