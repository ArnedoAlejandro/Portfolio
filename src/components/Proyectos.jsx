import almacen from "../assets/img/almacen.png"
import presupuesto from "../assets/img/presupuesto.png"
import criptomonedas from "../assets/img/criptomonedas.png"
import gestion from "../assets/img/gestion.png"
import noticias from "../assets/img/noticias.png"
import reduxNuevo from "../assets/img/reduxNuevo.png"
import github from "../assets/img/github.png"


const Proyectos = () => {
  return (
    <>

        <h1  className="proyectos-titulo" >Personal Projects</h1>
    
            
        <div  className="nuevooo"  >

        <div className="nuevo-content"   id="proyectos"   >
                <div className="content-img" ><img src={almacen}  className="img-noticias"  /></div>
                
                <div className="content-redireccion">

                    <p className="tecnologias" >Food App</p>

                    <h5>Project created in next.js using Prisma, api calls using axios, styles integrated with TailwinCSS. Integrated development dependencies, react-dom, react-modal, </h5>


                    <div className="ver-proyect">
                        <a target="_blank" href="https://github.com/ArnedoAlejandro/kioscoApp" className="redireccion-proyect">
                            <button className="boton-repo">
                                Ver Proyecto
                                <div class="arrow-wrapper">
                                    <div class="arrow"></div>
                                </div>
                            </button>
                        </a>

                        <a href="https://github.com/ArnedoAlejandro/kioscoApp" target="_blank">
                            <div className="content-individual-proyecto"><img src={github} className="img-git"/></div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="nuevo-content" >
                <div className="content-img"><img src={gestion}  className="img-noticias"/></div>
                
                <div className="content-redireccion">

                    <p className="tecnologias" >Proyect MERN Stack</p>

                    <h5>FullStack project implementing in the backend MongoDB, dependencies such as Express, Mongoose, Nodemailer. In the Frontend, tailwinCss, react-router, and axios.</h5>

                    <div className="ver-proyect">
                        <a target="_blank" href="https://github.com/ArnedoAlejandro/upTasck_mern" className="redireccion-proyect">
                            <button className="boton-repo">
                                Ver Proyecto
                                <div class="arrow-wrapper">
                                    <div class="arrow"></div>
                                </div>
                            </button>
                        </a>

                        <a href="https://github.com/ArnedoAlejandro/upTasck_mern" target="_blank">
                            <div className="content-individual-proyecto"><img src={github} className="img-git"/></div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="nuevo-content">
                <div className="content-img"><img src={reduxNuevo}  className="img-noticias"/></div>
                
                <div className="content-redireccion">

                    <p className="tecnologias" >Proyect CRUD</p>

                    <h5>CRUD project using redux, creation of Rest API and call to it by axios.  </h5>

                    <div className="ver-proyect">
                        <a target="_blank" href="https://crud-neon.vercel.app/" className="redireccion-proyect">
                            <button className="boton-repo">
                                Ver Proyecto
                                <div class="arrow-wrapper">
                                    <div class="arrow"></div>
                                </div>
                            </button>
                        </a>

                        <a href="https://github.com/ArnedoAlejandro/CRUD-" target="_blank">
                            <div className="content-individual-proyecto"><img src={github} className="img-git"/></div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="nuevo-content">
                <div className="content-img"><img src={presupuesto}  className="img-noticias"/></div>
                
                <div className="content-redireccion">
                  
                    <p className="tecnologias" >JavaScript only project</p>
               
                    <h5>Budget management, developed only with javascript, has an expense form, modification and deletion of items, category filters. </h5>
                 

                    <div className="ver-proyect">
                        <a target="_blank" href="https://presupuesto-sandy.vercel.app/" className="redireccion-proyect">
                            <button className="boton-repo">
                                Ver Proyecto
                                <div class="arrow-wrapper">
                                    <div class="arrow"></div>
                                </div>
                            </button>
                        </a>

                        <a href="https://github.com/ArnedoAlejandro/Presupuesto" target="_blank">
                            <div className="content-individual-proyecto"><img src={github} className="img-git"/></div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="nuevo-content">
                <div className="content-img"><img src={criptomonedas}  className="img-noticias"/></div>
                
                <div className="content-redireccion">

                    <p className="tecnologias" >Cryptocurrency trader</p>

                    <h5>Real time cryptocurrency trading project. Using axios for API call, spinners for loading and style component for website styles. </h5>

                    <div className="ver-proyect">
                        <a target="_blank" href="https://cotizador-de-criptomonedas-ay9j.vercel.app/" className="redireccion-proyect">
                            <button className="boton-repo">
                                Ver Proyecto
                                <div class="arrow-wrapper">
                                    <div class="arrow"></div>
                                </div>
                            </button>
                        </a>

                        <a href="https://github.com/ArnedoAlejandro/Cotizador-de-criptomonedas" target="_blank">
                            <div className="content-individual-proyecto"><img src={github} className="img-git"/></div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="nuevo-content">
                <div className="content-img"><img src={noticias}  className="img-noticias"/></div>
                
                <div className="content-redireccion">
                  
                    <p className="tecnologias" >News search engine</p>
               
                    <h5>News search engine, using the information from an api, it has a filter of sections and categories.</h5>
                  

                    <div className="ver-proyect">
                        <a target="_blank" href="https://buscador-de-noticias-rho.vercel.app/" className="redireccion-proyect">
                            <button className="boton-repo">
                                Ver Proyecto
                                <div class="arrow-wrapper">
                                    <div class="arrow"></div>
                                </div>
                            </button>
                        </a>

                        <a href="https://github.com/ArnedoAlejandro/Cotizador-de-criptomonedas" target="_blank">
                            <div className="content-individual-proyecto"><img src={github} className="img-git"/></div>
                        </a>
                    </div>
                </div>
            </div>


        <a className="mas-proyectos" target="_blank" href="https://github.com/ArnedoAlejandro" ><p>See more projects...</p></a>

    </div>    
    
        <br/>
        <br/>
        <hr/>
    </>
  )
}

export default Proyectos