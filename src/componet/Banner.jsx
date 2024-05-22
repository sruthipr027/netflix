import React, { useEffect, useState } from 'react'
import './Banner.css'
import instance from '../instance'
function Banner({fetchUrl}) {

     const [banner , setBanner]= useState()
     const base_url = "https://image.tmdb.org/t/p/original/";

   /*  console.log(fetchUrl); */

   const fetchdata=async()=>{
    const {data}=await instance.get(fetchUrl)
/*     console.log(data.results[Math.floor(Math.random()*data.results.length)]);
 */  
    setBanner(data.results[Math.floor(Math.random()*data.results.length)]);
   }
   console.log(banner);

  useEffect(()=>{
    fetchdata()
  },[])

  return (
    <div style={{height:'600px' , backgroundImage:`url(${base_url}${banner?.backdrop_path},)` , 
    backgroundPosition:'center' , backgroundSize:'cover' , backgroundAttachment:'fixed'}}>
        <div className='banner-content'>
            <h1>{banner?.name}</h1>
            <button type="button" class="btn btn-danger">Play<i class="fa-solid fa-play ms-2" style={{padding:'5px'}}></i></button>
            <button type="button" class="btn btn-outline-light ms-3" >More info<i class="fa-solid fa-caret-down ms-2"></i></button>
            <h2>{banner?.overview}</h2>

        </div>

    </div>
  )
}

export default Banner