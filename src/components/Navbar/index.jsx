import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import { FaTimes } from 'react-icons/fa'
import { menu } from "../../data"
import { Link, animateScroll as scroll } from "react-scroll"
import { FaArrowUpRightFromSquare, FaBarsStaggered } from 'react-icons/fa6'
import { useState } from 'react'

const Navbar = () => {
  const[showSidebar,setShowSidebar] = useState(false);
  console.log("show Sidebar",showSidebar)
  return (
      <nav className="card flex__center navbar">
        {showSidebar && ( <div className="aside__overlay"
        onClick={()=> setShowSidebar(!showSidebar)}
        />
        )}
        <div className="flex__center logo" 
        onClick={()=> scroll.scrollToTop({ duration: 500})}>
        <img src={logo} alt="Logo" />
        </div>
        <aside className={`flex__center sidebar ${showSidebar ? "visible" : ""}`}
        >
          <div className="flex sidebar__top">
            <span className="icon__container close__btn"
            onClick={()=> setShowSidebar(!showSidebar)}
            >
              <FaTimes/>
            </span>
          </div>
          <div className="flex sidebar__middle">
            {
              menu.map((list,index)=>(
                <Link
                  to={list.name.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="tab"
                  activeClass="btn__shine"
                  key={index}
                >
                {list.name}
                </Link>
              ))
            }

          </div>
        </aside>
        <div className="flex__container buttons__wrapper">
          <Link to="contact" className="flex__center hire__btn">
          Hire Me 
          <div className="flex__center icon">
          <FaArrowUpRightFromSquare/>
          </div>
          </Link>

          <FaBarsStaggered
          className='menu'
          onClick={()=> setShowSidebar(!showSidebar)}
          />
        </div>
        
      </nav>
  )
}

export default Navbar