'use client'
import Script from 'next/script'
import React from 'react'

const ScriptComponent = () => {
  return (
    <div>
      <h2>Sript Component</h2>
      <Script
      src='/feature.js'
      onLoad={()=>{
        console.log("feature excuted");
      }}
      />
    </div>

  )
}

export default ScriptComponent