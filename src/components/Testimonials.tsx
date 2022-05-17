
const Testimonials = () => {
    return ( 
        <section className="testimonials">
            <div>
                <h2>TESTIMONIALS</h2>
            </div>
            <div id="carouselExampleDark" className="carousel carousel-dark slide test-carousel" data-bs-ride="carousel">
                <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item test-item active" data-bs-interval="10000">
                        <div className="carousel-caption d-none d-md-block ">
                            <h5>"I've made money in real estate, hotel, and restaurant investments..."</h5>
                            <p>Femi Awolowo</p>
                        </div>
                    </div>
                    <div className="carousel-item test-item" data-bs-interval="2000">
                        <div className="carousel-caption d-none d-md-block">
                            <h5>"I've made money in real estate, hotel, and restaurant investments..."</h5>
                            <p>Adamu Bulus</p>
                        </div>
                    </div>
                    <div className="carousel-item test-item">
                        <div className="carousel-caption d-none d-md-block">
                            <h5>"I've made money in real estate, hotel, and restaurant investments..."</h5>
                            <p>Chinedu Cambodia</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Testimonials;