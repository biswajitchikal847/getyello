import axios from 'axios'
import { useState, useEffect } from 'react'

export const SearchPlace = () => {
    
    const [mapData, setMapData] = useState(null)


 
const api_key = `AIzaSyA4dB2N3o7peARm--7BO6cLJP_rGO4ijlY`
 
   let url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=${api_key}`;
  

   useEffect(() => {
    axios.get(url).then((res) => {
        setMapData(JSON.stringify(res.data))
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
},[])

   console.log(mapData)
 

  


    return (
        <>
        <h1>Showing Results for Nearby Resturants</h1>
        <div>
           <p>{mapData}</p>
        </div>
        </>
    )
}