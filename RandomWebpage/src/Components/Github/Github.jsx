import React, { useEffect, useState } from 'react'

const Github = () => {

    const [data,setData] = useState([])
 
    useEffect(()=>{
        fetch(`https://api.github.com/users/BubaiShil`)
        .then((res)=> res.json())
        .then((data)=> {setData(data)})
    },[])

  return (
    <div className='text-color m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="" className='p-5'/>
      <div className='mt-3 p-5' >
      Name : {data.name}
      </div>
      <div className=' p-5'>
      Loacation : {data.location}
      </div>
    </div>
  )
}

export default Github
