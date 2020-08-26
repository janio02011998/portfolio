import React, { Component } from 'react';
import { GrMail, GrGithub, GrFacebook, GrLinkedin, GrTwitter, GrInstagram, GrPhone } from 'react-icons/gr';
import { FaBeer, FaHeart, FaBootstrap } from 'react-icons/fa';

// import { Container, SidebarLink } from './styles';

// function Sidebar() {
export default class Sidebar extends Component {
    render() {
        return (
            <div className="bg-light">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>

                <div className="" id="navbarSupportedContent">
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
            </div>
            // <Container>
            //     <div class="container my-4">
            //         <div class="row text-center">
            //             <div class="col-md-6 mb-4 center">

            //                 <img class="rounded-circle" alt="100x100" src={require('../../images/about.jpg')} />

            //             </div>
            //         </div>
            //     </div>
            //     <h2 class="my-5 h2">Jânio Carvalho </h2>
            //     <SidebarLink to="/">INTRODUCTION</SidebarLink>
            //     <SidebarLink to="/">ABOUT</SidebarLink>
            //     <SidebarLink to="/contact">TIMELINE</SidebarLink>
            // </Container>
        );
    }
}
