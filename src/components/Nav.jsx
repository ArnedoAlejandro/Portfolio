import menu from "../assets/menu.svg"

const Nav = () => {
  return (
    <nav className='nav'>
        <div className='nav_container'>
            <h1 className="nav_logo">ArnedoA</h1>

            <label className='nav_label' for="menu">
                <img  className="nav_img" src={menu}/>

            </label>

            <input type="checkbox" id="menu" className="nav_input"/> 

            <div className="nav_menu">
                <a href="#presentacion" className="nav_item">Introduction</a>
                <a href="#proyectos" className="nav_item">Proyects</a>
                <a href="#skill" className="nav_item">Skill</a>
                <a href="#footer" className="nav_item">Contact</a>
            </div>
        </div>
        
    </nav>
  )
}

export default Nav
