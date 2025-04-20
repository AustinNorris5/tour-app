import React, { useEffect, useState } from "react";
import TourCard from "./TourCard";

const Gallery = ({ setTours }) => {
    const [tours, setLocalTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [selectedDestination, setSelectedDestination] = useState("All Destinations");

    // Function to fetch tours from the API
    const fetchTours = async () => {
        try {
            const response = await fetch("https://course-api.com/react-tours-project");
            const data = await response.json();

            // Map the data to extract required fields
            const trimmed = data.map((tour) => ({
                id: tour.id,
                name: tour.name,
                info: tour.info,
                price: tour.price,
                image: tour.image,
            }));

            setTours(trimmed); // Update parent state if needed
            setLocalTours(trimmed); // Update local state
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

    // Extract unique destinations
    const uniqueDestinations = ["All Destinations", ...new Set(tours.map((tour) => tour.name))];

    // Handle dropdown change
    const handleDestinationChange = (event) => {
        setSelectedDestination(event.target.value);
    };

    // Filter tours based on selected destination
    const filteredTours = selectedDestination === "All Destinations"
        ? tours
        : tours.filter((tour) => tour.name === selectedDestination);

    // Render loading
    if (loading) {
        return <p>Loading...</p>;
    }

    // Render error
    if (error) {
        return <p>Something went wrong. Please try again later.</p>;
    }

    return (
        <div>
            {/* Dropdown menu */}
            <select value={selectedDestination} onChange={handleDestinationChange}>
                {uniqueDestinations.map((destination) => (
                    <option key={destination} value={destination}>
                        {destination}
                    </option>
                ))}
            </select>

            {/* Render tours */}
            <div className="gallery">
                {filteredTours.map((tour) => (
                    <TourCard key={tour.id} tour={tour} />
                ))}
            </div>
        </div>
    );
};

export default Gallery;