import React from 'react';

import { Container, SidebarLink } from './styles';

function Sidebar() {
    return (
        <div>
            <nav class="navbar" href="#navbar" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="true">
                <aside>
                    <div className="text-center">
                        <img className="rounded-circle" alt="250x250" src={require('../../images/about.jpg')} />
                        <h1><a className="btn btn-lg font-weight-bold" href="index.html" >Jânio Carvalho</a></h1>
                        <span><i class="fas fa-envelope"></i>janiocarvalhojr@gmail.com</span>
                    </div>
                    <nav role="navigation">
                        <div className="text-center">
                            <ul className="nav flex-column">
                                <li className="nav-item"><a className="nav-link">INTRODUCTION</a></li>
                                <li className="nav-item"><a className="nav-link">ABOUT</a></li>
                                <li className="nav-item"><a className="nav-link">TIMELINE</a></li>
                            </ul>
                        </div>
                    </nav>
                </aside>
            </nav>
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