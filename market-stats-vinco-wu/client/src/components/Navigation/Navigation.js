import React from 'react'
import logo from '../../assets/logo/Market-Stats-logo.png'
import './navigation.scss'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav className="nav-bar">
            <div className="logo">
                <img className="logo__image" src={logo} alt="MarketStats Logo" />
            </div>
            <div className="tabs">
                <Link className="tab-links">
                    <h3 className="tab-links__pages">Home</h3>
                </Link>
                <Link className="tab-links">
                    <h3 className="tab-links__pages">Profile</h3>
                </Link>
                <Link className="tab-links">
                    <h3 className="tab-links__pages">About Us</h3>
                </Link>
            </div>
        </nav>
    )
}

export default Navigation
