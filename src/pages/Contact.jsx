import Menu from "../component/Menu";
import PageFooter from "../component/PageFooter";
import contactImage from "../images/contact.jpg";
import ContactForm from "../component/ContactForm";

function Contact() {
  return (
    <div>
    <Menu/>
    <div className="grid md:flex md:flex-wrap justify-content-center align-self-center">
        <div className="col md:flex m-0 p-0 justify-content-center align-self-center">
            <img src={contactImage} width="70%" alt="Illustration contact" />
        </div>
        <div className=" col m-0 p-0 justify-content-center align-self-center">
            <ContactForm/>
        </div>
    </div>
    <PageFooter/>
    </div>
  );
}

export default Contact;