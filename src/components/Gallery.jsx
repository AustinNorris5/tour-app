import React, { useEffect, useState } from "react";
import TourCard from "./TourCard";

const Gallery = ({ setTours }) => {
    const [tours, setLocalTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Function to fetch tours from the API
    const fetchTours = async () => {
        try {
            const response = await fetch("https://www.course-api.com/react-tours-project");
            
            // Map the data to extract required fields
            const trimmed = data.map((tour) => ({
                id: tour.id,
                name: tour.name,
                info: tour.info,
                price: tour.price,
                image: tour.image,
            }));

            setTours(trimmed); // Update parent state if needed
            setLoading(false);
        } 
        catch (error) {
            setError(true);
            setLoading(false);
        }
    };

    // Fetch tours when the component mounts
    useEffect(() => {
        fetchTours();
    }, []);

    //Render loading
    if (loading) {
        return <div>Loading...</div>;
    }
    //Render error
    if (error) {
        return <div>Error, please try again later.</div>;
    }
    //Render if no tours are available
    if (tours.length === 0) {
        return (
            <div>
                <h2>No tours available</h2>
                <button onClick={fetchTours}> Refresh</button>
            </div>
        );
    }
    
    //Render list of TourCards
   return (
        <section tourName="Gallery">
            {tours.map((tour) => (
                <TourCard
                    key={tour.id}
                    {...tour}
                    onRemove={() => setTours((prevTours) => prevTours.filter((t) => t.id !== tour.id))}
                />
            ))}

        </section>

    );
};


export default Gallery;