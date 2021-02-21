import './App.css';
import LocationInput from './components/LocationInput';
import Businesses from './components/Businesses'
import { useState } from 'react'

function App() {
  const [businesses, setBusinesses] = useState([])

  //on submit pass location and make http call to yelp api
  const submitLocation = async (location) => {
    const url = `http://localhost:8000/bad_parking/${location}`;
    const response = await fetch(url)
    const data = await response.json()

    setBusinesses(data.businesses)
  }

  return (
    <div className="App">
      <LocationInput submitLocation={submitLocation}/>
      <Businesses businesData={businesses}/>
    </div>
  );
}

export default App;
