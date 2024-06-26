import './navbar.css'

function Navbar() {
  return (
    <div className="Navbar">
        <ul>
          <li><a href="default.asp">Acerca de mí</a></li>
          <li><a href="news.asp">Contactame</a></li>
          <li><a href="contact.asp">Proyectos</a></li>
          <li><a href="about.asp">Resumen</a></li>
        </ul>
    </div>
  );
}

export default Navbar;
