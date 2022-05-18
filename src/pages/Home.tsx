import TopHeader from '../components/header/TopHeader';
import BottomHeader from '../components/header/BottomHeader';
import Headline from '../components/Headline';
import About from '../components/About';
import Client from '../components/Clients';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Project from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
    return ( 
        <main>
            <TopHeader />
            <BottomHeader />
            <Headline />
            <About />
            <Client />
            <Services />
            <Testimonials />
            <Project />
            <Contact />
        </main>
     );
}
 
export default Home;