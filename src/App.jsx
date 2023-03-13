import './App.css'
import Footer from './components/Footer'
// import Navegacion from './components/Navegacion'
import Nav from './components/Nav'
import Presentacion from './components/Presentacion'
import Proyectos from './components/Proyectos'
import Skill from './components/Skill'

import "./index.css"


function App() {


  return (
    <>
    <div> 
    <Nav />
    {/* <Navegacion/> */}
      <body>
        <Presentacion />
        <Proyectos />
        <Skill />
      </body>
        <Footer />
      </div>
    </>
  )
}

export default App
