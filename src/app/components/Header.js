import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <div className="container">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to="/" className="navbar-brand">engTrainer</Link>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/articles" className="nav-link">Articles</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dictionary" className="nav-link">Dictionary</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;