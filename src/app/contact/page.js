'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'


const Contact = () => {
const router=  useRouter();
  return (
    <>
    <h1>Contact </h1>
    <Link href='/contact/employee'>Employee page</Link>
    <br />
    <br />
    <button onClick={()=>router.push('/contact/compony')}>Compony Page</button>
    <br />

    </>
  )
}

export default Contact