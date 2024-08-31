"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'


interface WeatherData{
  temperature:number,
  humidity:number,
  wind_speed:number,
}
function page() {

    const {id}= useParams()
const [weather, setweather]=useState<WeatherData | null >(null)
    const fetchData = async()=>
    {
        const axios = require('axios').default;

const options = {
  method: 'GET',
  url: 'https://www.weatherunion.com/gw/weather/external/v0/get_locality_weather_data',
  params: {locality_id: id},
  headers: {'X-Zomato-Api-Key': process.env.NEXT_PUBLIC_WEATHER_API}
};

try {
  const { data } = await axios.request(options);
  console.log(data);
  setweather(data.locality_weather_data)
} catch (error) {
  console.error(error);
  alert("API limit reached, Try again in 24 hrs")
}
    }

    useEffect(()=>
    {
      if(id)
      {
        fetchData()
      }
      
    },[id])
   

  return (
    <>
    <div className="heading a lg:text-6xl sm:text-xl md:text-2xl font-bold lg:w-2/5 flex justify-center shadow-md shadow-white mt-5 ml-5 ">
    <span className="relative flex h-3 w-3">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
  <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"> </span>
</span>
Weather Report
</div>
    <div className=" information flex flex-col rounded-2xl border border-white shadow-md mx-4 mt-10 h-auto max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl   justify-around bg-white shadow-2xl shadow-white p-1 ml-10 space-y-6">
<div className="temperature flex flex-row rounded-lg  -ml-5 bg-blue-500 z-40 w-full  sm:w-3/4 lg:w-1/2 h-16 items-center shadow-md shadow-black p-4">
    <div className="text text-white font-bold pl-5 ">Temperature:</div>
    <div className="value text-black font-bold ml-5">{weather?.temperature}</div>
</div>
<div className="humidity flex flex-row rounded-lg  -ml-5 w-full  sm:w-3/4 lg:w-1/2 h-16 bg-blue-500 items-center shadow-md shadow-black p-4">
<div className="text text-white font-bold pl-5">Humidity:</div>
<div className="value text-black font-bold ml-5"> {weather?.humidity}</div>
</div>
<div className="wind flex flex-row rounded-lg  -ml-5 w-full  sm:w-3/4 lg:w-1/2 h-16 bg-blue-500 items-center shadow-md shadow-black p-4">
<div className="text text-white font-bold pl-5">Wind speed:</div>
<div className="value text-black font-bold ml-5"> {weather?.wind_speed}</div>
</div>
</div>

    </>

  )
}

export default page
