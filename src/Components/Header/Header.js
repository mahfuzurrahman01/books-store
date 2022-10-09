import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <ul>
                <Link to='/home'>Home</Link>
                <Link to='/order'>Order</Link>
                <Link to='/about'>About</Link>
            </ul>

        </div>
    );
};

export default Header;