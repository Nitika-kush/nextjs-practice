import React from 'react'
import page from '../page.module.css'
import custom from '../custom.module.css'

const CSSModules = () => {
  return (
    <>
    <h2 className='main' style={{textAlign:"center"}} >CSSModules</h2>
    <h3 className={page.main}> Page modules css used</h3>
    <h1 className={custom.main}>Custom css</h1>

    </>
  )
}

export default CSSModules