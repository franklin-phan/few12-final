import React from 'react'
import './Heading.css'
import data from './metal.json'
import BandList from './BandList';
import BandCount from './BandCount';
// import CountryCount from './CountryCount';
function Heading() {
    return(
    <div className = "Heading">
        <header>
            <h1>FEW 1.2 Final Assessment</h1>
            <div className = "Heading-Subtitle">Franklin Phan</div>
            <BandCount />
            {/* <CountryCount /> */}
        </header>
    </div>
    
    )
}

export default Heading