
const Card = ({ src, hide }: {src:string, hide:boolean}) => {
    return ( 
        <div className="about-card">
            {!hide && <div />}
            <div>
                <img src={src} alt="about-card"/>
            </div>
        </div>
     );
}
 
export default Card;