import React, { Component } from 'react';
import { GrMail, GrGithub, GrFacebook, GrLinkedin, GrTwitter, GrInstagram, GrPhone } from 'react-icons/gr';
import { FaBeer, FaHeart, FaBootstrap } from 'react-icons/fa';
import { Navbar } from 'react-bootstrap';

export default class Sidebar extends Component {
    render() {
        return (
            <div className="bg-light">
                <Navbar expand="lg" variant="light" bg="light">
                    <Navbar.Toggle aria-controls="navbarSupportedContent" />
                    <Navbar.Collapse id="navbarSupportedContent">

                        <div>
                            <div className="mb-2 text-center">
                                <img className="img-fluid img-thumbnail rounded-circle" alt="Responsive" src={require('../../images/about.jpg')} />
                                <h1><a className="btn btn-lg font-weight-bold" href="/">Jânio Carvalho</a></h1>
                                <span className="badge badge-light"><GrMail /> janiocarvalhojr@gmail.com</span>
                                <span className="badge badge-light"><GrPhone /> +55 73 99179-7661</span>
                            </div>
                            <nav className="nav justify-content-center" role="navigation">
                                <div className="text-center">
                                    <ul className="nav flex-column">
                                        <li className="nav-item"><a className="btn btn-lg-2" href="/">INTRODUCTION</a></li>
                                        <li className="nav-item"><a className="btn btn-lg-2" href="/about">ABOUT</a></li>
                                        <li className="nav-item"><a className="btn btn-lg-2" href="/timeline">TIMELINE</a></li>
                                        <li className="nav-item"><a className="btn btn-lg-2" href="/contact">CONTACT</a></li>
                                    </ul>
                                </div>
                            </nav>
                            <nav className="nav justify-content-center">
                                <ul className="nav flex-column">
                                    <li><a className="btn" href="https://www.facebook.com/Janio20/" target="_blank" rel="noopener noreferrer"><GrFacebook /></a></li>
                                    <li><a className="btn" href="https://twitter.com/Janio29255550" target="_blank" rel="noopener noreferrer"><GrTwitter /></a></li>
                                    <li><a className="btn" href="https://www.instagram.com/janiojunior_/" target="_blank" rel="noopener noreferrer"><GrInstagram /></a></li>
                                    <li><a className="btn" href="https://www.linkedin.com/in/janio-carvalho-95966016b/" target="_blank" rel="noopener noreferrer"><GrLinkedin /></a></li>
                                    <li><a className="btn" href="https://github.com/janio02011998" target="_blank" rel="noopener noreferrer"><GrGithub /></a></li>
                                </ul>
                            </nav>
                            <div className="text-center">
                                <p><small>
                                    Feito com <FaHeart /> and <FaBeer /> <br />
                                    Obrigado <FaBootstrap /> pela inspiração
                                </small></p>
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
