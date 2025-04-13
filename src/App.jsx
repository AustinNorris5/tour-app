import { useState } from 'react'
import Gallery from './components/Gallery'

//Root componet of the app
function App() {
  const [tours, setTours] = useState([])

const removeTour = (id) => {
  setTours(tours.filter((tour) => tour.id !== id))
};

  return (
    <main>
      <h1>Tours</h1>
      <Gallery tours={tours} removeTour={removeTour} />
     {/* Button to fetch new tours */}
      <button className="btn" onClick={() => setTours([])}>
        Refresh Tours
      </button>
      {/* Display message if no tours are available */}
      {tours.length === 0 && <p>No tours available</p>}
    {/* Button to clear the list */}
      <button className="btn" onClick={() => setTours([])}>
        Clear List
      </button>
    </main>
  )
};
export default App;