"use client";
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import React, { useEffect, useState } from "react";
import { getallLocalities } from '@/app/action/locality';
import { useAppDispatch, useAppSelector } from '@/app/lib/hooks';
import { useRouter } from 'next/navigation';  

interface locality{
  localityname: string;
  localityId: string;
}
export default function Home() {
  const router=useRouter();
const dispatch=useAppDispatch()
  const [query, setquery]= useState("")
  const [suggestions, setsuggestions]= useState<string[]>([])
  const [showSuggestion, setshowSuggestion]=useState(false)
  const localities = useAppSelector((state: { localityReducer: { data: locality[] } }) => state.localityReducer.data);
  useEffect(()=>
  {
    dispatch(getallLocalities())
  }, [dispatch])
// const localities =
// [
//   "Greater Kailash, Jammu",
//  " Barnai, Jammu ", 
//  " OLD JAMMU, Jammu ",
//   "Channi Himmat, Jammu ",
//  " Shankar Nagar",
//   "Purena, Raipur",
//   "Mowa, Raipur" ,
//   "Mahaveer Nagar" ,
//   "Samta Colony", 
//   "Civil Lines", 
//   "Devendra Nagar" ,
//   "Moudhapara, Raipur" 
// ]

const handlePress=(e:React.KeyboardEvent<HTMLInputElement>)=>
{
  if(e.key==='Enter')
  {
const selectedLocality = localities.find(locality=> locality.localityname.toLowerCase()===query.toLowerCase())
console.log(selectedLocality)
if(selectedLocality)
{
  router.push(`/localityname/${selectedLocality.localityId}`)
}
  }
}
  const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>
  {
    const value= e.target.value
    setquery(value)

    if(value.length>0)
      {
        const filter =localities.filter(locality=> locality.localityname.toLowerCase().includes(value.toLowerCase())) .map(locality => locality.localityname)
        
        setsuggestions(filter)
        setshowSuggestion(true)
      }

      else 
      {
        setsuggestions([])
          setshowSuggestion(false)
        
      }
  }

 const automataticFill =(suggestion:string)=>
 {
  setquery(suggestion)
  setsuggestions([])
  setshowSuggestion(false)
 }
  return (

<>
    <main className=" flex-col min-h-screen  items-center justify-center p-24  ">
    <div className="heading-container text-center mb-8 ">
      <header className="lg:text-6xl md:text-4xl sm:text-2xl font-bold ">
        <span className="text-blue-600">W</span>
        <span className="text-yellow-500">e</span>
        <span className="text-grey-600">a</span>
        <span className="text-orange-500">t</span>
        <span className="text-green-600">h</span>
        <span className="text-purple-500">e</span>
        <span className="text-red-500">r</span>&nbsp;&nbsp;
        <span>A</span>
        <span>p</span>
        <span>p</span>
    
      </header>
       </div>
<div className="w-full flex item-center justify-center  rounded-full bg-white ">
      
      
        <div className="icon  h-20 w-10 bg-white text-black pt-7 pl-4 ml-4 rounded-full">
            <MagnifyingGlassIcon/> 
    
      </div>
      
      <div className="flex w-full justify-center  ">
      <input type='text' 
      className="w-full text-black rounded-full pl-6 focus:outline-none lg:text-2xl sm:text-xl" 
      placeholder="Search for the city here to know the weather"
       value={query}
       onChange={handleChange}
       onKeyDown={handlePress}
       />

     
      </div>
    
      
      </div>
      {showSuggestion && suggestions.length>0 && (
        <ul className=' relative  bg-white border border-gray-300 w-xl ml-8 mr-8 z-10'>
          {suggestions.map((suggestion, index)=>
          (
            <li key={index} 
            className='p-2 cursor-pointer hover:bg-gray-200 text-black'
            onClick={()=>automataticFill(suggestion)}>{suggestion}</li>
          ))}
        </ul>
       )

       }
    </main>
    </>
    
  );
}
