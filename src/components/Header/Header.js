import React from 'react';
import img from '../../Images/logo.png';
import './style.css';

const Header = () => {
    return (
        <div className="Header">
            <div className="HeaderGroup">
                <h3>MovieApp</h3>
                <img src={img} alt="no se ve"/>
            </div>
        </div>
    )
}

export default Header