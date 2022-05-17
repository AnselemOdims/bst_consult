import TopHeader from '../components/header/TopHeader';
import BottomHeader from '../components/header/BottomHeader';
import Headline from '../components/Headline';
import About from '../components/About';
import Client from '../components/Clients';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

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
        </main>
     );
}
 
export default Home;