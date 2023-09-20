import React, { useContext } from 'react'
import {FaLaptop,FaTableTennis,FaMobileAlt} from "react-icons/fa";
import DataContext from './context/DataContext';

const Header = ({title}) => {
  const{width} = useContext(DataContext)
  return (
    <header className="Header">
        <h1>
           {title}
        </h1>
        {width < 600 ? <FaMobileAlt /> : width < 800 ? <FaTableTennis /> :<FaLaptop />}
    </header>
  )
}

export default Header