import React from 'react'
import { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  // const data= useLoaderData()
 const [data,setData]=useState([])
  useEffect(() => {
    fetch('https//api.github.com/users/AnandKumarSinha07')
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        setData(data);
    })
  
  }, [])
  
  return (
    <div className='text-center m-4  bg-gray-600  text-white  p-4  text-3xl'>Github Followers:{data.name}
    <img src={data.avatar_url} alt='Git-picture'  width={300}/>
    </div>
    
  )
}

export default Github

// export const GithubLoader=async ()=>{
//     const respone=await fetch('https//api.github.com/users/hiteshchoudhary')
//     return respone.json()

// }