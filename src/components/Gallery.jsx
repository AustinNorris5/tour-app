//On mount, fetch data from: https://course-api.com/react-tours-project

import React, { useEffect, useState } from "react";
import TourCard from "./TourCard";

//Store data in useState
const Gallery = () => {
    const [tours, setTours] = useState([]);

    //Use useEffect to call the API
    useEffect(() => {
        const fetchTours = async () => {
            try {
                const response = await fetch('https://course-api.com/react-tours-project');
                const data = await response.json();
                setTours(data);
            } catch (error) {
                console.error('Error fetching tours:', error);
            }
        };

        fetchTours();
    }, []);

    //Render each tour using map() with a unique key prop
    return (
        <div>
            {tours.map((tour) => (
                <TourCard key={tour.id} {...tour} />
            ))}
        </div>
    );
};

export default Gallery;
