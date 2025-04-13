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
                if (!response.ok) {
                    throw new Error('Failed to fetch tours');
                }
                const data = await response.json();
                setTours(data);
            } catch (error) {
                setError(error.message); // Set error message
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchTours();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Display loading message
    }

    if (error) {
        return <div>Error: {error}</div>; // Display error message
    }

    return (
        <div>
            {tours.map((tour) => (
                <TourCard key={tour.id} {...tour} />
            ))}
        </div>
    );
};

export default Gallery;
