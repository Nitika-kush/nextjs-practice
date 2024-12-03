'use client'
import React, { useState } from 'react'

const StyleWithNextJS = () => {
  const [style,setStyle]=useState({backgroundColor: 'aqua'})
  return (
    <>
    <h1>Style with next Js 14</h1>
    <h3 style={style}>Hello</h3>
    <button onClick={()=>setStyle({backgroundColor:'yellow'})}>color change</button>
    </>
  )
}

export default StyleWithNextJS