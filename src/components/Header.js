

function Header() {
    return(
        <header>
            <div className='container'>
                <nav className='navbar' id="navbar">     
                    <ul class="nav-links">        
                        <input type="checkbox" id="checkbox_toggle" />    
                        <label for="checkbox_toggle" class="hamburger">&#9776;</label>      
                        <div class="menu">    
                            <li><a className='option' href="#nosotros">SOBRE MI</a></li>
                            <li><a className='option' href="#nuestro-equipo">PROYECTOS</a></li> 
                        </div>    
                    </ul>    
                </nav>
            </div>
        </header>
    )
}  

export default Header;