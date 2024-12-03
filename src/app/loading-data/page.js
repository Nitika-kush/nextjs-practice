'use client'
import React, { useEffect, useState } from 'react'
import styles from '../page.module.css'
import Loader from './loader';
import Link from 'next/link';

async function myList() {
  let data= await fetch('https://jsonplaceholder.typicode.com/users');
  data= await data.json();
  console.log(data);
  return data;
}


const LoadingData = () => {
  const [users,setUsers]=useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    const fetchData=async()=>{
      let fetchDataUsers=await myList();
      setUsers(fetchDataUsers);
      setLoading(false);
    }
    fetchData();
  },[])
  return (
    <div className={styles.main}>
      <h2>Loading - data</h2>
{
  loading?<Loader/>: (users.map((user,i)=>(
   <h3 key={i}>Name:{user.username}</h3> 
  )))
}
<Link href='/static-assets'>Static Assets example</Link>
    </div>
  )
}

export default LoadingData