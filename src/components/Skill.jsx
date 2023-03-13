import React from 'react'
import colegio from "../assets/img/colegio.png"
import uncnuevo from "../assets/img/uncnuevo.png"
import udemy from "../assets/img/udemy.png"
import utn from "../assets/img/utn.jpg"
import html from "../assets/img/html.png"
import css from "../assets/img/css.png"
import js from "../assets/img/js.png"
import reakct from "../assets/img/reakct.png"
import nodejs from "../assets/img/nodejs.png"
import nextt from "../assets/img/nextt.png"
import bootstrap from "../assets/img/bootstrap.png"
import tailwincss from "../assets/img/tailwincss.png"
import socket from "../assets/img/socket.png"
import mongo from "../assets/img/mongo.png"
import mysql from "../assets/img/mysql.png"
import git from "../assets/img/git.png"


const Skill = () => {
  return (
    <>    
    <h1 className="proyectos-titulo"  id="skill">Academic institutions and expertise</h1>
    <div className="skill" >
      <div className="educacion">
        <p className="educacion-habilidades">Education</p> 
        <div className="contenedor-educacion">
          <ul className="listaSkill">
            <div className="logo-educacion"><img src={colegio} className="img-educacion"/><p className="p-educacion">Private Technical Institute</p></div>
            <div className="logo-educacion"><img src={uncnuevo} className="img-educacion"/><p className="p-educacion">National University of Córdoba</p></div>
            <div className="logo-educacion"><img src={utn} className="img-educacion"/><p className="p-educacion">National Technological University</p></div>
            <div className="logo-educacion"><img src={udemy} className="img-educacion"/><p className="p-educacion">Udemy</p></div>
          </ul>
        </div>
      </div>
      
      <div className="habilidades">
        <p className="educacion-habilidades">Technical skills</p>  
        <div className='columna-habilidades'>         
          <div>
            <ul className="listaSkill">
              <div className="habilidades-blandas"><img src={html} className="imagen-skill"/></div>
              <div className="habilidades-blandas"><img src={css} className="imagen-skill"/></div>
              <div className="habilidades-blandas"><img src={js} className="imagen-skill"/></div>
              <div className="habilidades-blandas"><img src={reakct} className="imagen-skill"/></div>           
            </ul>
          </div>
          <div>
            <ul className="listaSkill">
              <div className="habilidades-blandas"><img src={nodejs} className="imagen-skill"></img></div>
              <div className="habilidades-blandas"><img src={nextt} className="imagen-skill"/></div>
              <div className="habilidades-blandas"><img src={mongo} className="imagen-skill"/></div>
              <div className="habilidades-blandas"><img src={mysql} className="imagen-skill"/></div>            
            </ul>
          </div>
          <div>
            <ul className="listaSkill">
              <div className="habilidades-blandas"><img src={bootstrap} className="imagen-skill"/></div>
              <div className="habilidades-blandas"><img src={tailwincss} className="imagen-skill"/></div>
              <div className="habilidades-blandas"><img src={socket} className="imagen-skill"/></div>
              <div className="habilidades-blandas"><img src={git} className="imagen-skill"/></div>
            </ul>
          </div> 
        </div>
      </div>
    </div>
    </>

  )
}

export default Skill