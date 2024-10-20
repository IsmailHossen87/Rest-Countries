import React, { useEffect, useState } from 'react'
import Country from '../country/Country'
import './Countries.css'

export default function Countries() {
  const [countries,setCountries] = useState([])


  // child to parent data store
  const [visitedImage,setImage] = useState([])
  // const handleImage = (flag) =>{
  //   const newArray=[...visitedImage,flag]
  //   setImage(newArray)
  // }
  const [visited,setVisited]=useState([])
  const handleVisited =(country,img)=>{
    const newArray = [...visited,country]
    setVisited(newArray)
    const newArray1=[...visitedImage,img]
    setImage(newArray1)
  }


 
// child to parent data end


  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  })
  return (
    <div >
      <h1>All Countries : {countries.length}</h1>

      <div>
        <h5>Visited Countrys :{visited.length}</h5>
        <ul>
          {
            visited.map(showname => <li key={showname.cca3}>{showname.name.common}</li>)
          }
        </ul>
      </div>
          <div className='imageContainer'>
            {visitedImage.map((imagee,idx) => <img key={idx} src={imagee}></img>)}
          </div>
     <div className='country-Container'>
     {
        countries.map(cnty => <Country country={cnty}
          childtoParent={handleVisited}
          // childtoParentimage = {handleImage}
          key={cnty.cca3}></Country>)
      }
     </div>
     
    </div>
  )
}
