import Navy from '../assets/images/navy.png';
import Forte from '../assets/images/forte.png';
import Army from '../assets/images/army.png';
import Cmb from '../assets/images/cmb.png';
import UK from '../assets/images/ukeas.png';

const Clients = () => {
    return ( 
        <section className="clients">
            <h2>OUR CLIENTS</h2>
            <h3>Brands that Trust our expertise</h3>
            <div>
                <img src={Navy} alt="navy" />
                <img src={Forte} alt="forte" />
                <img src={Army} alt="army" />
                <img src={Cmb} alt="cmb" />
                <img src={UK} alt="uk" />
            </div>
        </section>
     );
}
 
export default Clients;