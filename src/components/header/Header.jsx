import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="main-header">
            <div className="container header-content">
                <h1 className="logo">
                    Gas<span className="logo--primary">Connect</span>
                </h1>
                <nav className="main-nav">
                    <ul className="nav-menu">
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#nosotros">Nosotros</a></li>
                        <li><a href="#servicios">Servicios</a></li>
                        <li><a href="#app">App</a></li>
                        <li><a href="#galeria">Galería</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                        <li><a href="#" className="btn btn--primary">Login</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;