import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../Images/logo.png';
import './style.css';

const Header = () => {
    return (
        <div className="Header">
            <div className="HeaderGroup">
                <img src={img} alt="no se ve"/>

                <div className="Links">
                    <Link to="/" className="Link"><h3>Search</h3></Link>
                    <Link to="/mylist" className="Link"><h3>My List</h3></Link>
                </div>
                
            </div>
        </div>
    )
}

export default Header