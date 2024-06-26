import './sidebar.css'
import logo from '../../assets/img/profile.PNG';

function Sidebar() {
  return (
    <aside className='sidebar'>
      <div className='sidebar-info'>
        <figure>
          <img src={logo} className="App-logo" alt="logo" />
        </figure>
        <div class="info-content">
          <h1 class="name" title="Richard hanrick">Yeison Alexis Velasco Trejos</h1>
          <p class="title">Software developer</p>
        </div>
      </div>

      <br/>

      <div className='sidebar-info-more'>
        <ul>
          <li>
            
            <div className='list-more-info'>
              <h2>Email</h2>
              <p>yvelasco321@gmail.com</p>
            </div>
          </li>
          <li>
            <div className='list-more-info'>
              <h2>Número Telefonico</h2>
              <p>+57 3022475080</p>
            </div>
          </li>
          <li>
            <div className='list-more-info'>
              <h2>Email</h2>
              <p>yvelasco321@gmail.com</p>
            </div>
          </li>
          <li>
            <div className='list-more-info'>
              <h2>Fecha de nacimiento</h2>
              <p>May 11, 2002</p>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
