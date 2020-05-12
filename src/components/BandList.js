import React from 'react'
import './BandList.css'
import Counter from './Counter'
import data from './metal.json'

function BandList() {
    const bands = data.map(({ band_name, fans, formed, origin, split, style}, i) => {
        // if (split != "-") {
        //     <Counter />
        // } else {
        //     <p>Split in { split }</p>

        // }
        return (
            
        <div className="Band">
            <h1>{ band_name }</h1>
            <p>{ style }</p>
            <p>Formed { formed } in { origin }</p>
            <p> { fans } Fans</p>
            {/* <p>Split in { split }</p>
            <Counter /> */}
            <div>
        {(() => {
            if (split != "-") {
            return (
                <p>Split in { split }</p>
            )
        
            } else {
            return (
                <Counter />
            )
            }
        })()}
    </div>
        </div>
        )
    })
    return (
        <div className="BandList">
          { bands }
        </div>
      )
}

export default BandList