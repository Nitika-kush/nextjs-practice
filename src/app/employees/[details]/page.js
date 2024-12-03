'use client'
import React, {use} from 'react'

const Employee = ({params}) => {
  const unwrappedParam=use(params);
  //console.log(params)
  return (
    <div>
      <h1>Employee's Details</h1>
      <h3>Employee Name: {unwrappedParam.details}</h3>
    </div>
  )
}

export default Employee