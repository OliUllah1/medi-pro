import ContactForm from "../../../components/Contact/ContactForm";
import TitleBanner from "../../../components/TitleBanner";


const ContactPage = () => {
    return (
        <div>
            <TitleBanner title={'Contact Us'}></TitleBanner>
            <ContactForm></ContactForm>
        </div>
    );
};

export default ContactPage;