import { useState, useEffect } from 'react';
import Gallery from './components/Gallery';

// Root component of the app
function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filtering, setFiltering] = useState(false);

  // Fetch tours from API
  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://api.example.com/tours'); // Replace with actual API URL
        if (!response.ok) {
          throw new Error('Failed to fetch tours');
        }
        const data = await response.json();
        setTours(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  return (
    <main>
      <h1>Tours</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <Gallery
          tours={tours}
          removeTour={removeTour}
          filtering={filtering}
          setFiltering={setFiltering}
        />
      )}
      {/* Button to fetch new tours */}
      <button className="btn" onClick={() => setTours([])}>
        Refresh Tours
      </button>
      {/* Display message if no tours are available */}
      {!loading && !error && tours.length === 0 && <p>No tours available</p>}
    </main>
  );
}

export default App;