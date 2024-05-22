import React, { useEffect, useState } from 'react'
import instance from '../instance';
import './Row.css'

function Row({title, fetchUrl , isPoster}) {
    /* console.log(fetchUrl);
 */
const[allMovies,setAllMovies] = useState()
const base_url = "https://image.tmdb.org/t/p/original/";

    const fetchData = async()=>{
      const {data}= await instance.get(fetchUrl)
/*       const {results}=data
 */    
setAllMovies(data.results)
    }
/*     console.log(allMovies);
 */

    useEffect(()=>{
      fetchData()
    },[])
  return (
    
    <div className="row">
      <h1>{title}</h1>
      <div className="movie-row">
        {
          allMovies?.map(items=>(
            <img className={`movie ${isPoster && 'movie-poster'}`} src={`${base_url}${isPoster?items.poster_path:items.backdrop_path}`} alt="no image" />
          ))
        }
        
      </div>
    </div>

    
  )
}

export default Row