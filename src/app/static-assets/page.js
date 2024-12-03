'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const StaticAssets = () => {
 const router= useRouter();
  return (
    <div>
      <h2>Static Assets</h2>
      <img src="/pic1.jpeg" alt="image" width={500} height={500} />
      <br />
      <button onClick={()=>router.push("/loading-data")} >back to loading-data</button>
    </div>
  )
}

export default StaticAssets