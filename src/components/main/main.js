import './main.css'
import Navbar from '../navbar/navbar';
import AboutMe from '../aboutMe/aboutMe';

function Main() {
  return (
    <div className="Main">
      <Navbar/>
      <AboutMe/>
      {/* 
      <div className="Main-grid">
      </div> */}
    </div>
  );
}

export default Main;
