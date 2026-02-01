import React from 'react'
import "./header.css"
import netflex  from "../../assets/image/image.png"
import { FaSearch } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiAccountBoxFill } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
//"1cf8c5f03f4304ae405dbc11c7e8a138"
function Header() {
  return (
    <div className="aouterraper">
      <div className='internaraper'>
        <ul className='leftimage'>
          <img src={netflex} alt="netflex"/> 
            <li>NETFLEX</li>
            <li>HOME</li>
            <li>TVSHOWS</li>
            <li>MOVES</li>
            <li>LATEST</li>
            <li>MYLIST</li>
            <li>BROTHER & LANGUGE</li>
        </ul>
      </div>
      <div className='rightimage'>
        <ul>
        <li><FaSearch/></li> 
        <li><IoIosNotificationsOutline /></li>
        <li><RiAccountBoxFill/></li>
        <li><MdOutlineKeyboardArrowDown /></li>
        </ul>
      </div>
    </div>
  )
}

export default Header

