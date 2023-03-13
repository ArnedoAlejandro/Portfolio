import React from 'react'

const Navegacion = () => {
  return (
    <nav className="navbar">
      <div >
       <p className="insignia">AAA</p>
      </div>

      <div className="container-navegacion">
        <ul className="ul-nav">
          <a href="#presentacion" className="a-nav">Introduction</a>
          <a href="#proyectos" className="a-nav">Proyects</a>
          <a href="#skill" className="a-nav">Skill</a>
          <a href="#footer" className="a-nav">Contact</a>
        </ul>
      </div>
    </nav>
  )
}

export default Navegacion
