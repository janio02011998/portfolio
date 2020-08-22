import React from 'react';

import { Container, SidebarLink } from './styles';

function Sidebar() {
    return (
        <Container>
            <div class="container my-4">
                <div class="row text-center">
                    <div class="col-md-6 mb-4 center">

                        <img class="rounded-circle" alt="100x100" src={require('../../images/about.jpg')} />

                    </div>
                </div>
            </div>
            <h2 class="my-5 h2">Jânio Carvalho </h2>
            <SidebarLink to="/">Inicio</SidebarLink>
            <SidebarLink to="/contact">Contato</SidebarLink>
        </Container>
    );
}

export default Sidebar;