import scrollNuevo from "../assets/img/scrollNuevo.png"
import fotoAleDiseñada from "../assets/img/fotoAleDiseñada.png"
import arne from "../assets/img/arne.png"


import curriculum from "../curriculum.pdf"

const Presentacion = () => {


  return (
    <>

    <div className="presentacion" id="presentacion" >
        <div className="contenedor-puesto">
            <div className="contenedor-titulo">
                <p className="presentacion-puesto">Arnedo Alejandro <br/></p>
                <span className="frontend">Developer Frontend</span>
            </div>

            <div className="contenedor-boton">
                <button className="learn-more" ><label className="btn" for="modal-1">Conoceme</label></button>
            </div>

            <div className="icono-scroll">
                <div className="p-scroll"><img className="scrrol-img" src={scrollNuevo}/></div>
            </div>
        </div>
        <div className="imagen-presentacion">
           <img  className="estilos-imagen-foto" src={arne}/>
        </div>
    </div>

{/* VENTANA MODAL */}
    <section>

            <input className="modal-state" id="modal-1" type="checkbox" />
            
            <div className="modal">
            
                <div class="modal__inner">
                    <label className="modal__close" for="modal-1">
        
                    </label>
                    <div className="contenedor-modal">
                        <div className="relato">
                            <h2>About me</h2>
                            <p className="relato-habilidades">I am a web developer, I started doing a diploma in Full stack web development at the National Technological University knowing the language of HTML, CSS, PHP and MYSQL, then I took courses taking knowledge of the language of JAVASCRIPT and also the React.Js framework making projects applying technologies and Next.js framework, Express, MongoDB, Postman, Socket.io, Tailwind CSS, Bootstrap and others. Currently I continue my learning with new technologies for the optimization of new projects and to have the corresponding skills for the IT sector. My personal goal is to gain experience and knowledge to grow as a profession</p>
                            
                            <div className="contenedor-descarga">
                                <a href={curriculum} download  className="modal-ancor"><button  className="boton-repo">Descargar cv</button></a>
                            </div>
                        </div>
                        
                        <div className="contenedor-imagen-modal">
                            <div className="imagen-modal"><img src={fotoAleDiseñada} /></div>
                        </div>

                    </div>
                </div>
            </div>

   
    </section>
</>
  )
}

export default Presentacion