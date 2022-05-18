import { FiPhoneCall } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import { GoMail } from 'react-icons/go';

const Contact = () => {
    return (
        <section className="contact-section">
            <h2>CONTACT US</h2>
            <h3>Say Hello!</h3>
            <p>Feel free to reach out by leaving us a message below. We promise to get back to you as soon as possible.</p>
            <div>
                <div className="form-container">
                    <form>
                        <div>
                            <input type="text" placeholder="NAME" />
                            <input type="email" placeholder="EMAIL" />
                        </div>
                        <div>
                            <textarea placeholder="TYPE YOUR MESSAGE" />
                        </div>
                        <div>
                            <button type="submit">SEND YOUR MESSAGE</button>
                        </div>
                    </form>
                </div>
                <div>
                    <div>
                        <FiPhoneCall size="35px"/>
                        <p>+2348078601918</p>
                    </div>
                    <div>
                        <IoLocationOutline size="40px"/>
                        <p>1st Floor, 16b Aliu Animashaun Street, Lekki Phase 1, Lagos</p>
                    </div>
                    <div>
                        <GoMail size="35px"/>
                        <p>bstconsults@gmail.com</p>
                    </div>
                </div>
            </div>
        </section>
      );
}
 
export default Contact;