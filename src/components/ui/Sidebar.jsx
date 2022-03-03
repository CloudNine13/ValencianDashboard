import React, { useState } from 'react';
import * as faIcons from 'react-icons/fa';
import * as aiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from '../../models/SidebarData';
import '../../css/Sidebar.css';
import { IconContext } from 'react-icons'


function Sidebar() {
    const [sidebar, setSidebar] = useState(false)
    const toggleSidebar = () => setSidebar(!sidebar)
    return(
        <IconContext.Provider value={{ color: '#ffa600', size: 25 }}>
            <div className='navbar'>
                <Link to='#' className="menu-bars">
                    <faIcons.FaBars onClick={toggleSidebar}/>
                </Link>
                <p><strong>Valencian Open Data</strong></p>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={toggleSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <aiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    { SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path} >
                                    <p> {item.icon} </p> 
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                    <img src={'svg/escudo.svg'} alt="Valencia Logo"></img>
                </ul>
            </nav>
        </IconContext.Provider>
    )
}


export default Sidebar;
