import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <h1>Blog App</h1>
            <Link to="/">Home</Link>
        </nav>
    );
};

export default Header;