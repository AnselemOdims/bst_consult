interface DetailsProp {
    heading1: string;
    heading2: string;
    para: string;
}

const Details = ({ heading1, heading2, para, }: DetailsProp) => {
    return ( 
        <div className="details">
            <h3>{heading1}</h3>
            <h4>{heading2}</h4>
            <p>{para}</p>
            <div>
                <a>READ MORE</a>
            </div>
        </div>
     );
}
 
export default Details;