import React, { Component } from 'react';
import { GrMail, GrGithub, GrFacebook, GrLinkedin, GrTwitter, GrInstagram, GrPhone } from 'react-icons/gr';
import { FaBeer, FaHeart, FaBootstrap } from 'react-icons/fa';
import { Navbar } from 'react-bootstrap';

export default class Menu extends Component {
  state = {
    classStyle: "sidebar"
  };

  // handleSidebar(value) {
  //   this.setState = ({ classStyle: value });
  // }

    handleSidebar = () => { 
     console.log("clicked");
     this.setState({ classStyle: "sidebarR" }); 
   }


  render() {
    return (

      <div className="sidebar">
      {/* <section className={this.state.classStyle}> */}
        <Navbar bg="light" variant="light" sticky="top" expand="lg" >
          <Navbar.Toggle aria-controls="navbarSupportedContent" onClick={() => this.handleSidebar()} />
          <Navbar.Collapse id="navbarSupportedContent">

            <div>
              <div className="mb-2 text-center">
                <img className="img-fluid img-thumbnail rounded-circle" alt="Responsive" src={require('../../images/about.jpg')} />
                <h1><a className="btn btn-lg font-weight-bold" href="/portfolio">Jânio Carvalho</a></h1>
                <div className="nav flex-column">
                  <span className="badge badge-light"><GrMail /> janiocarvalhojr@gmail.com</span>
                  <span className="badge badge-light"><GrPhone /> +55 73 99179-7661</span>
                </div>
              </div>
              <div className="text-center  mt-2">
                <ul className="nav flex-column">
                  <li className="nav-item"><a className="btn btn-lg-2" href="#home">Início</a></li>
                  <li className="nav-item"><a className="btn btn-lg-2" href="#about">Sobre</a></li>
                  <li className="nav-item"><a className="btn btn-lg-2" href="#timelineContent">Timeline</a></li>
                  <li className="nav-item"><a className="btn btn-lg-2" href="#contatc">Contato</a></li>
                </ul>
              </div>
              <div className="text-center  mt-2">
                <ul className="nav flex-column">
                  <div className="iconsmedia">
                    <li><a className="btn" href="https://www.facebook.com/Janio20/" target="_blank" rel="noopener noreferrer"><GrFacebook /></a></li>
                    <li><a className="btn" href="https://twitter.com/Janio29255550" target="_blank" rel="noopener noreferrer"><GrTwitter /></a></li>
                    <li><a className="btn" href="https://www.instagram.com/janiojunior_/" target="_blank" rel="noopener noreferrer"><GrInstagram /></a></li>
                    <li><a className="btn" href="https://www.linkedin.com/in/janio-carvalho-95966016b/" target="_blank" rel="noopener noreferrer"><GrLinkedin /></a></li>
                    <li><a className="btn" href="https://github.com/janio02011998" target="_blank" rel="noopener noreferrer"><GrGithub /></a></li>
                  </div>
                </ul>
              </div>
              <div className="text-center mt-2">
                <p><small>
                  Feito com <FaHeart /> and <FaBeer /> <br />
                                    Obrigado <FaBootstrap /> pela inspiração
                                </small></p>
              </div>
            </div>
          </Navbar.Collapse>
        </Navbar>
      {/* </section> */}
      </div>
    );
  }
}
