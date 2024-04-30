import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid}=useParams()
  return (
    <div className='bg-gray-700 text-white text-2xl p-4 '>User: {userid}
     Welcome to the Use params Hokks
    </div>
    
  )
}

export default User