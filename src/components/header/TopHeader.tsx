import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram, BsTwitter } from 'react-icons/bs';

const TopHeader = () => {
    return ( 
        <div className="top-header">
            <div>
                <p>Tel: +2348078601918  |  Email: bstconsults@gmail.com</p>
            </div>
            <div>
                <a className="icon" href="#">
                    <FaFacebookF />
                </a>
                <a className="icon" href="#">
                    <BsInstagram />
                </a>
                <a className="icon" href="#">
                    <BsTwitter />
                </a>
            </div>
        </div>
     );
}
 
export default TopHeader;