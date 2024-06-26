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
            <div>
              <h5>Email</h5>
              <p>yvelasco321@gmail.com</p>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
