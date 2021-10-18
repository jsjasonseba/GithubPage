import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar.jsx';
import About from './component/About.jsx';
import Project from './component/Project.jsx';
import AchievementAwards from './component/AchievementAwards.jsx';
import Footer from './component/Footer.jsx'
import ProgSkill from './component/ProgSkill.jsx';

function App() {
  return (
    <div className="App" id='about'>
      <div className="top-0 z-50 h-16 flex flex-row bg-black text-white font-bold pt-4 pb-4 item-center 
      justify-evenly sticky">
          <a href="#about">About</a>
          <a href='#projects'>Projects</a>
          <a href="#award">Achievements and Awards</a>
          <a href="#skill">Programming Skill</a>
      </div>
      <div className="flex items-center justify-center py-24">
        <About />
      </div>
      <div className='bg-gray-100 pt-2 pb-12'> 
        <div id="projects" className="-top-12 h-2 w-2 relative"></div>
        <Project className='md-12'/>
      </div>
      <div className="bg-gray-200 pt-2">
      <div id="award" className="-top-12 h-2 w-2 relative"></div>
        <AchievementAwards />
      </div>
      <div className="bg-gray-300 pt-2 pb-20">
      <div id="skill" className="-top-12 h-2 w-2 relative"></div>
        <ProgSkill />
      </div>
      <Footer />
    </div>
  );
}

export default App;
