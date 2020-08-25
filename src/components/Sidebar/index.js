import React from 'react';
import { GrMail, GrGithub, GrFacebook, GrLinkedin, GrTwitter, GrInstagram } from 'react-icons/gr';
import { FaBeer, FaHeart, FaBootstrap } from 'react-icons/fa';

// import { Container, SidebarLink } from './styles';

function Sidebar() {
    return (
        <div>
            <nav href="#navbar" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar" aria-label="Toggle navigation"><i /></nav>
            <aside>
                <div className="text-center">
                    <img alt="100X100" className="img-fluid img-thumbnail rounded-circle" src={require('../../images/about.jpg')} />
                    <h1><a className="btn btn-lg font-weight-bold" href="index.html" >Jânio Carvalho</a></h1>
                    <span><GrMail /> janiocarvalhojr@gmail.com</span>
                </div>
                <nav className="nav justify-content-center" role="navigation">
                    <div id="navbar" className="text-center">
                        <ul className="nav flex-column">
                            <li className="nav-item"><a href="#INTRODUCTION" className="nav-link">INTRODUCTION</a></li>
                            <li className="nav-item"><a href="#ABOUT" className="nav-link">ABOUT</a></li>
                            <li className="nav-item"><a href="#TIMELINE" className="nav-link">TIMELINE</a></li>
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
            </aside>
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

export default Sidebar;