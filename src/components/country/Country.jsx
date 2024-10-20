import React, { useState } from 'react'
import './Country.css'

export default function Country({country,childtoParent,childtoParentimage}) {
    const {name,flags,population,area,cca3} = country

    // use condition for state
    const [visited,setVisited]= useState(false)
    const handleVisited = () =>{
        setVisited(!visited)
    }
  return (
    <div className={`cardStyle ${visited?'visited':'nonVisited'}`}>
        <p style={{fontSize:visited?'25px':'15px'}}>Country : {name.common}</p>
        <img src={flags.png} alt="" />
      <p>Population : {population}</p>
      <p>Area : {area}</p>
      <p><small>Code : {cca3}</small></p>

      {/* <button onClick={()=>childtoParentimage(country.flags.png)}>Mark Image</button><br /> */}
      <button onClick={()=>childtoParent(country,country.flags.png)}>Mark Visited</button><br />
      
      <button onClick={handleVisited}>{visited?'Visited':'Going'}</button>
      {visited?'I have visited this Country':'I want to visit'}
    </div>
  )
}