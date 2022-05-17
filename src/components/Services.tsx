import Details from './Details';
import ImageCarousel from './ImageCarousel';

const Services = () => {
    return ( 
        <section className="about-container services">
            <ImageCarousel />
            <Details 
                heading1="OUR SERVICES" 
                heading2="We are an industry
                leader and have over
                40 years of experience" 
                para="BST Consults offers full services and expertise in real estate consulting and contracting. We provide services to clients in the entire value chain of the real estate sector."
            />
        </section>
     );
}
 
export default Services;