import { useState } from 'react'

const LocationInput = ({ submitLocation }) => {
  const [location, setLocation] = useState('')
  
  function handleSubmit(e) {
    e.preventDefault()
    submitLocation(location)

    setLocation('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Location</label>
      <input type='text' onChange={(e) => setLocation(e.target.value)} value={location}></input>
      <input type='submit'></input>
    </form>
  )
}

export default LocationInput
