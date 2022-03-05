import React, { useState } from 'react';
import * as faIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from '../../models/SidebarData';
import '../../css/Sidebar.css';
import { IconContext } from 'react-icons'


function Sidebar() {
    const [sidebar, setSidebar] = useState(false)
    const toggleSidebar = () => setSidebar(!sidebar)
    return(
        <IconContext.Provider value={{ color: '#ffa600', size: 25 }}>
            <div className='burger'>
                <faIcons.FaBars onClick={toggleSidebar}/>
            </div>
            <div className='container'>
                <nav className={sidebar ? 'sidebar-menu active' : 'sidebar-menu'}>
                    <div className='sidebar-menu-items' onClick={toggleSidebar}>
                        <p className='sidebar-toggle'> <strong>V O D</strong> </p>
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
                        <div className='sidebar-menu-wrapper'>
                            <img src={'svg/escudo.svg'} alt="Valencia Logo"></img>
                        </div>
                    </div>
                </nav>
            </div>
        </IconContext.Provider>
    )
}


export default Sidebar;
