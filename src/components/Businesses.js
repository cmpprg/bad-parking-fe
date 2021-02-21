import React from 'react'

//calculate parking lot score
const pkScore = (revCount, rating) => {
  const score = (revCount * rating) / (revCount + 1)

  return score
}

const Businesses = ({ businesData }) => {
  return (
    <div>
      {
        businesData.map((busines) => ([
          <img src={ busines.image_url }></img>,
          <h3>{ busines.location.address1 }</h3>,
          <h3>{`${busines.location.city}, ${busines.location.state} ${busines.location.zip_code}`}</h3>,
          <p>{`Star Rating: ${busines.rating}`}</p>,
          <p>{`Review Count: ${busines.review_count}`}</p>,
          <a href={busines.url}>-Yelp Link-</a>,
          <p>{`Parking Lot Score: ${pkScore(busines.review_count, busines.rating)}`}</p>
        ]))
      }
    </div>
  )
}

export default Businesses
