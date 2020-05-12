import React from 'react'
import data from './metal.json'

function BandCount(props) {
    const BandCount = data.map((item, i) => {
        return <li key={i}>{item}</li>
      })
    return (
      <div >
          <p>Bands: {BandCount.length}</p>
      </div>
    )
  }
export default BandCount