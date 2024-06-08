import React from 'react'
import Link from 'next/link'
const NotFound = () => {
  return (
    <div className='container h-screen flex flex-col gap-5 justify-center items-center'>
    <h2>NotFound</h2>  
    <p>could not find requested resource</p>
    <Link href="/">return home</Link>
    </div>
  )
}

export default NotFound
