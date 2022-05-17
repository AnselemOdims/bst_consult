import Card from './Card';
import Details from './Details';

const About = () => {
    return ( 
        <section className="about-container">
            <Details 
                heading1="ABOUT US" 
                heading2="We are a full-service 
                Real Estate consulting
                company" 
                para="BST Consults offers full services and expertise in real estate consulting and contracting. We provide services to clients in the entire value chain of the real estate sector."
            />
            <Card />
        </section>
     );
}
 
export default About;