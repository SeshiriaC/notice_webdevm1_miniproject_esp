import Menu from "../component/Menu";
import PageFooter from "../component/PageFooter";
import contactImage from "../images/contact.jpg";
import ContactForm from "../component/ContactForm";

function Contact() {
  return (
    <div>
      <Menu />
      <div className="grid md:flex md:flex-wrap justify-content-center align-self-center">
        <div className="col-12 justify-self-center align-self-center sm:col-6 lg:col-12 xl:col-4 p-2">
          <img src={contactImage} width="70%" alt="Illustration contact" />
        </div>
        <div className="col-6 justify-self-center align-self-center sm:col-4 lg:col-12 xl:col-4">
          <ContactForm />
        </div>
      </div>
      <PageFooter />
    </div>
  );
}

export default Contact;
