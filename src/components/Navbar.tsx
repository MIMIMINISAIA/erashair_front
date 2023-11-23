import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () =>{
    return(
        
       <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">ERAS House</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#conteudoNavbar"
                    aria-controls="conteudoNavbar" aria-expanded="false" aria-label="Toggle Navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="container">
                    <div className="collapse navbar-collapse" id="conteudoNavbar">
                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a href="#" className="nav-link active">home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link active">imoveis</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link active">contato</a>
                            </li>

                            <li className="nav-item dropdown">

                                <ul className="dropdown-menu" aria-labelledby="dropdownFor">
                                    <li><a href="" className="dropdown-item">home</a></li>
                                    <li><a href="" className="dropdown-item">imoveis</a></li>
                                    <li><a href="" className="dropdown-item">contato</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        </div>
    );
}

export default Navbar;