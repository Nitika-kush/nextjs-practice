'use client'
import { useRouter } from 'next/navigation';
import styles from "../page.module.css";
import React from 'react'


const Home = () => {
  const router=useRouter();
  const handleNavigation=(routerName)=>{
    router.push(routerName)
  }
  return (
   <>
   <div className={styles.main}>
   <h1>Home Page</h1>
   <button onClick={()=>handleNavigation("/about")}>About</button>
   <button onClick={()=>handleNavigation("/contact")}>Contact</button>
  {/*  <h1>Home Page</h1>
   <Link href="/about">About</Link>
   <br />
   <Link href="/contact">contact</Link> */}
   </div>
   </>
  )
}

export default Home