import React, { Component } from 'react';

import { FaReact, FaDatabase, FaHtml5, FaCss3 } from 'react-icons/fa'
import { DiJavascript1 } from 'react-icons/di'

// var sectionStyle = {
//     backgroundImage: `url(${slide})`
// }

export default class Sidebar extends Component {
    render() {
        return (
            <div className="d-flex flex-column">
                <div id="home" className="d-flex align-items-center justify-content-center home">
                    <div className="d-inline-flex flex-column text-center">
                        <span className="border border-dark text-white">Olá, sou Jânio Carvalho</span>
                        <br />
                        <span className="border border-dark text-white p-2">Sou um densenvolvedor Full-stack</span>
                    </div>
                </div>
                <section id="about">
                    <div className="">
                        <div>
                            <h4 className="subtitle m-2">Sobre mim</h4>
                            <h1 className="title m-2">Quem eu sou ?</h1>
                            <p className="text-justify m-3"> Sou um estudante de Ciência da Computação pela Universidade Estaudal de Santa Cruz (UESC), em processo de aprendizagem sobre tecnologias javascript com enfasê em Node JS, React e TypeScript.</p>
                            <p className="text-justify m-3"> Este é meu primeiro projeto complexo, feito com auxilío da documentação oficial das frameworks e o stackoverflow, minha inspiração partiu de um desafio intitulado 100DaysOfCode, aceito sugestôes e dicas a respeito desse portifolio, basta entrar em contato.</p>
                        </div>
                        <div>
                            <h1 className="subtitle m-2">O que eu faço ?</h1>
                            <h1 className="title m-2">Aqui estão algumas das minhas habilidades </h1>
                            <div className="container-fluid">
                                <div className="d-flex justify-content-between about">
                                    <div className="shadow p-5 mb-3 mr-3 rounded text-center habilidades">
                                        <h1 className="tech">Desenvolvimento com ReactJS</h1>
                                        <p className="text-white">Web, consumos de API's e aplicativos mobile.</p>
                                        <FaReact size={50} />
                                    </div>
                                    <div className="shadow p-5 mb-3 mr-3 rounded text-center habilidades">
                                        <h1 className="tech" >Banco de Dados</h1>
                                        <p className="text-white">Tratamento e Manipulação em SQL.</p>
                                        <FaDatabase size={50} />
                                    </div>
                                    <div className="shadow p-5 mb-3 mr-3 rounded text-center habilidades">
                                        <h1 className="tech" >WEB</h1>
                                        <p className="text-white">Programçao WEB com HTML5, CSS e Javascript.</p>
                                        <FaHtml5 size={50} />
                                        <FaCss3 size={50} />
                                        <DiJavascript1 size={50} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="timelineContent">
                    <div className="container mt-5 mb-5">
                        <div className="row">
                            <div className="mr-2 text-justify">
                                <h4>Experiências</h4>
                                <ul className="timeline mr-2">
                                    <li>
                                        <div className="d-flex flex-col justify-content-between" id="timelineLi">
                                            {/* <a>INVENTORYIOT (I2OT) - UMA PLATAFORMA DE GERENCIAMENTO AUTOMATIZADO DE INVENTÁRIO</a> */}
                                            <a>INVENTORYIOT (I2OT) - Uma plataforma de gerenciamento automatizado de invetário </a>
                                            <a className="btn disabled" id="timelineDate" href="#" >ago. de 2017 – jul. de 2018</a>
                                        </div>
                                        <p>Este projeto teve como foco a criação de um middleware com arquitetura REST que suporte diversas aplicações e abstraindo a complexidade e o hardware de sensores e atuadores voltados principalmente para IoT. </p>
                                        {/* <p>Orientador: Jauberth Weyll Abijaude </p> */}
                                    </li>
                                    <li>
                                        <div className="d-flex flex-col justify-content-between" id="timelineLi">
                                            <a>Uso do Blockchain como ferramente e-Gov</a>
                                            <a className="btn disabled" id="timelineDate">ago. de 2018 – jul. de 2019</a>
                                        </div>
                                        <p> Este projeto visou pesquisar e construir uma middleware que seja responsável por intermediar as requisições de sensores, utilizando conceitos já estabelecidos na IoT, de tal forma a ser possível no futuro fazer com que uma ferramenta blockchain através do middleware execute atividades e-Gov.</p>
                                        {/* <p>Orientador: Jauberth Weyll Abijaude </p> */}
                                    </li>
                                    <li>
                                        <div className="d-flex flex-col justify-content-between" id="timelineLi">
                                            <a>Desenvolvedor WEB</a>
                                            <a className="btn disabled" id="timelineDate">jan. de 2020 – mar. de 2020</a>
                                        </div>
                                        <p> Projeto para a implementação de uma plataforma de gerenciamento de bolsas de iniciação científica, pelo NIT.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="contact">

                    
                </section>
            </div>
        );
    }
}
