'use client'
import React,{use} from 'react'

const Posts = ({params}) => {
       const unwrappedParams=use(params)
       console.log(unwrappedParams);
  return (
   <>
   <h2>Blog:{unwrappedParams.posts[0]}</h2>
   <h2>Posts :{unwrappedParams.posts[1]}</h2>
   </>
  )
}

export default Posts