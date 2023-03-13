import whatsapp from "../assets/img/whatsapp.png"
import email from "../assets/img/email.png"
import github from "../assets/img/github.png"
import instagram from "../assets/img/instagram.png"
import linkedin from "../assets/img/linkedin.png"


const Footer = () => {
  return (
    <div className="footer" >
      <p className="proyectos-titulo">Contac</p>

      <div className="footer-container" id="footer">

        <div className="content-info-footer">

          
            <a href="https://www.linkedin.com/in/alejandro-augusto-arnedo-27a189240/" target="_blank">
              <div className="content-individual"><img src={linkedin} className="img-footer"/> <p className="p-footer">Ir a Linkedin</p></div>
              
            </a>

        </div>

        <div className="content-info-footer">

            <a href="https://github.com/ArnedoAlejandro" target="_blank">
              <div className="content-individual"><img src={github} className="img-footer"/> <p className="p-footer">Ir a Ghithub</p></div>
              
            </a>

        </div>

        <div className="content-info-footer">

            <a href="https://www.instagram.com/arnedoalejandro/?next=%2F" target="_blank">
              <div className="content-individual"><img src={instagram} className="img-footer"/> <p className="p-footer">Ir a Instagram</p></div>
              
            </a>

        </div>

      </div>
      <div className="footer-container">

        <div className="content-info-footer">
          <div className="content-individual"><img src={email} className="img-footer"/><p className="p-footer">arnedoaalejandro@gmail.com</p></div>
        </div>

        <div className="content-info-footer">
          <div className="content-individual"><img src={whatsapp} className="img-footer"/><p className="p-footer">+054 3548-15569580</p></div>
        </div>

      </div>

    </div>
  )
}

export default Footer
