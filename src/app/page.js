'use client'
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const [name,setName]=useState("Ram");
  const apple=(item)=>{
   setName(item);
  }
  const InnerComp=(item)=>{
    return(
      <h1>{`Welcome to the world ${item.name }`}</h1>
    )
  }
  return (
     <>
      <main className={styles.main}>
      <h1>Home {name}</h1>
      <button onClick={()=>apple("sita")}>click me!!!</button>
      <InnerComp name={"ram"}/>
      {/* {InnerComp("ram")} */}
      <Link href="/home">Go to next page</Link> 
      </main>
     </>

   );
}

// it is just like a function 
 /* const User=(props)=>{
  return (
    <div>
      my name is {props.name}
    </div>
  )
 } */