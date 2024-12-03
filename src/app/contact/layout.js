'use client'
import { usePathname } from "next/navigation"

export default function Layout({children}){
  const currentPathName=usePathname();
  console.log(currentPathName);
  return(
    <>
   {
     currentPathName!=='/contact/compony'? <h1>Common layout for contact</h1>: null
   }
    {children}
    </>
  )
 
}