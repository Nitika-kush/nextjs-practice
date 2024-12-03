'use client'
import React, { useState } from 'react'
import style from '../conditionalStyling.module.css'

const ConditionalStyling = () => {
  const [color,setColor]=useState('red')
  const {green}=style;
  return (
    <>
    <h2 className={style.heading}>Conditional Styling</h2>
    {/* Conditional style */}
    {/* <h3 className={color==='red'? style.green:style.pink}>Hello</h3>
    <button onClick={()=>setColor('yellow')}>click me</button> */}
    {/* conditional styling using inline style */}
     {/* <h3 style={{backgroundColor:color==='red'?'green':'yellow'}}>Hello</h3>
     <button onClick={()=>setColor('yellow')}>click me</button> */}
     {/* using id */}
     <h2 id={style.my}>Hello</h2>
     {/* using multiple tags */}
     <h3 className={green}>hello sir</h3>
     <h2 className={style.green}>hello ma'am</h2>
    </>
  )
}

export default ConditionalStyling