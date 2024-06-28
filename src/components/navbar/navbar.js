import './navbar.css'

function Navbar() {
  return (
    <div className="Navbar">
        <div className='Navbar-title'>
          <h2>Acerca de mí</h2>
          <hr></hr>
        </div>
        <div className='Navbar-ul'>
          <ul>
            <li><a href="default.asp">Acerca de mí</a></li>
            <li><a href="news.asp">Contactame</a></li>
            <li><a href="contact.asp">Proyectos</a></li>
            <li><a href="about.asp">Resumen</a></li>
          </ul>
        </div>
    </div>
  );
}

export default Navbar;
