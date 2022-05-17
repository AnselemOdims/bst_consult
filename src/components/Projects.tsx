import Card from './Card';
import Details from './Details';
import Image from '../assets/images/house2.png';

const Project = () => {
    return ( 
        <section className="about-container">
            <Details 
                heading1="PROJECTS" 
                heading2="We are a full-service 
                Real Estate consulting
                company" 
                para="BST Consults offers full services and expertise in real estate consulting and contracting. We provide services to clients in the entire value chain of the real estate sector."
            />
            <Card src={Image} hide={true}/>
        </section>
     );
}
 
export default Project;