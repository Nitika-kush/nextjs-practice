import Link from 'next/link'
import React from 'react'

const Employee = () => {
  return (
    <>
    <div>Employee</div>
    <ul>
      <li>
      <Link href='/employees/Nik'>Nik</Link>
      </li>
      <li>
      <Link href='/employees/Ami'>Ami</Link>
      </li>
      <li>
      <Link href='/employees/Rik'>Rik</Link>
      </li>
    </ul>
   
    </>
  )
}

export default Employee