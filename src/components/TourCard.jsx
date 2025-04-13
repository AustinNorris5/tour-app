import React, { useState } from "react";

// TourCard renders individual tour details
const TourCard = ({ id, name, info, price, image, onRemove }) => {
    // Toggle Read More / Show Less
    const [readMore, setReadMore] = useState(false);

    return (
        <article className="tour-card">
            {/* Tour Image */}
            <img src={image} alt={name} className="tour-card-image" />

            {/* Tour Details */}
            <div className="tour-card-content">
                <h3 className="tour-card-title">{name}</h3>
                <p className="tour-card-price">${price}</p>

                {/* Tour Info with Read More / Show Less */}
                <p className="tour-card-info">
                    {readMore ? info : `${info.slice(0, 80)}...`}
                    <button
                        className="btn-toggle"
                        onClick={() => setReadMore(!readMore)}
                    >
                        {readMore ? "Show Less" : "Read More"}
                    </button>
                </p>

                {/* Button to remove tour */}
                <button
                    className="btn-remove"
                    onClick={() => onRemove(id)}
                >
                    Not Interested
                </button>
            </div>
        </article>
    );
};

export default TourCard;