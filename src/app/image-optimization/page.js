import React from 'react'
import Image from 'next/image'
import Img from '/public/next.svg'

const ImageOptimization = () => {
  console.log(Img)
  return (
    <>
     <h2>Image Optimization in Next Js</h2>
     {/* Image component ka use */}
     {/* <Image src={Img} alt='Image'/>
     <img src={Img.src} alt="Img" /> */}
     {/* include an external image */}
     <Image src='https://www.freepik.com/free-photo/chocolate-brownie-cake-with-scoop-ice-cream_6606953.htm#fromView=keyword&page=1&position=0&uuid=12a644c1-a3dd-45e6-a20d-e5c520620cef'
     alt='pixel image'
     height={400}
     width={400}/>
    </>
  )
}

export default ImageOptimization