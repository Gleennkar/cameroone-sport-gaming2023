import pic3 from '../../../images/Group-6667.png';
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h1>Les anciennes éditions en image</h1>
      <button className="btn1" type="button">Voir Plus</button>
      <img className="photo" src={pic3} alt="people" />
    </div>
  );
}
export default Contact;
