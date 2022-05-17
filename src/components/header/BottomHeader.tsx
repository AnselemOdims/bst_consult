import Logo from "../../assets/images/logo.svg";

const BottomHeader = () => {
    return ( 
        <header className="bottom-header">
            <div>
                <img src={Logo} alt="site logo" />
            </div>
            <nav>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>OUR SERVICES</li>
                    <li>PROJECTS</li>
                    <li>CONTACT US</li>
                </ul>
            </nav>
        </header>
     );
}
 
export default BottomHeader;