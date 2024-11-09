import React, { useState } from 'react'
import Heading from './Heading'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
    const [linkEle, setLinkEle] = useState([
        {
          id: 1,
          name: "Home",
          link: "/",
          active: true,
        },
        {
          id: 2,
          name: "About",
          link: "/about",
          active: false,
        },
        {
          id: 3,
          name: "Courses",
          link: "/courses",
          active: false,
        },
        {
          id: 4,
          name: "Shop",
          link: "/shop",
          active: false,
        },
        {
          id: 5,
          name: "Contact",
          link: "/contact",
          active: false,
        },
      ]);
  return (
    <div className='px-28 flex flex-col'>
        <Heading linkEle={linkEle} setLinkEle={setLinkEle}/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout