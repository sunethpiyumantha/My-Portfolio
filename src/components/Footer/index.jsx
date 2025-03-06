import React from 'react'
import "./Footer.css"
import { Link } from 'react-scroll'
import SocialHandles from "../../ui/SocialHandles"
import { menu } from "../../data"

const Footer = () => {
  return (
    <footer>
    <div className="section__wrapper">
      <ul className="flex__center nav">
        {menu.map((list, index)=>(
          <Link
          to={list.name.toLowerCase()}
          smooth={true}
          duration={500}
          className="nav__item"
          key={index}
          >
            {list.name}
          </Link>
        ))}
      </ul>
      <SocialHandles/>
      <div className="copyright">
        <h3>Copyright &copy; All right reserved - | 2025</h3>
        <p className="text__muted">Build with love by Suneth Piyumantha</p>
      </div>
      <div className="base__logo">
        <h1 className="full__name shine">Suneth Piyumantha</h1>
      </div>
    </div>
    </footer>
  )
}

export default Footer