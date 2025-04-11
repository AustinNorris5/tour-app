import React, {useState} from "react";

//TourCard renders individual tour details
const TourCard = ({id, name, info, price, image, onRemove}) => {
    //Toggle Reade More / Show Less
    const [readMore, setReadMore] = useState(false);
    
    return (
        <article className="tour-card">
           <h3>{TourName}</h3> 
           <h3>{Price}</h3>
           <h3>{Image}</h3>
           <p>
                {/* Show full description if readMorne is true, other a slice */}
                {readMore ? info : `${info.substring(0, 80)}...`}
                <button onClick={() => setReadMore(!readMore)}>
                    {/* Toggle button text */}
                    {readMore ? 'Show Less' : 'Read More'}

                </button>
           </p>

            {/*Button to remove tour */}
           <button className="btn-remove" onClick={() => {
                onRemove(id)
           }}>Remove Tour</button>

        </article>
    )

}

export default TourCard;