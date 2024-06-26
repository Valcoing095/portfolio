import './main.css'
import Navbar from '../navbar/navbar';
import AboutMe from '../aboutMe/aboutMe';

function Main() {
  return (
    <div className="Main">
      <div className="Main-grid">
        <Navbar/>
        <AboutMe/>
      </div>
    </div>
  );
}

export default Main;
