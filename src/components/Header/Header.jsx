import React from 'react';
import Logo from "../../assets/Logo.svg"
import "./Header.css"

const Header = () => {
    return (
        <div className='container'>
            <div>
                <img src={Logo} alt="Logo Image" />
            </div>
            <div>
                <button className='contactbtn'>Contact us</button>
            </div>
        </div>
    );
};

export default Header;