import React from 'react'

export default function Footer() {
  const year= new Date().getFullYear()
  return (
   <>
 <div className="container bg-white p-1 text-center">
    <div className="row">
        <div className="col mb-0">&copy; CopyRight {year} All Right Reserved | Develop By Mian Ateeq</div>
    </div>
 </div>
   </>
  )
}
