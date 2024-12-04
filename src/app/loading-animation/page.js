import React from 'react'
import Loader from '../loading-data/loader'
import styles from '../style.css'
import Link from 'next/link'

const LoadingAnimation = () => {
  return (
    <div style={{textAlign:"center"}}>
      <h2>Loading Animation</h2>
    
      <Loader/>
      <br />
      <br />
    <Link href='/home'>back to</Link>
  
    </div>
  )
}

export default LoadingAnimation