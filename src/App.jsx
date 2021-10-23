import './App.css';
import About from './component/About.jsx';
import Project from './component/Project.jsx';
import AchievementAwards from './component/AchievementAwards.jsx';
import Footer from './component/Footer.jsx'
import ProgSkill from './component/ProgSkill.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

const TITLE = 'Jason Sebastian Kusuma'


function App() {
  return (
    <div className="App" id='about'>
      <div className="top-0 z-50 h-16 flex flex-row bg-black text-white font-bold pt-4 pb-4 item-center 
      justify-evenly sticky">
          <a href="#about">About</a>
          <a href='#projects'>Projects</a>
          <a href="#award">Achievements</a>
          <a href="#skill">Skill</a>
      </div>
      <div className="flex items-center justify-center py-24 flex-col">
        <About />
        <a href="https://www.linkedin.com/in/jason-sebastian-kusuma-822935212/" className="pt-4">
            <div className="flex flex-row p-5 bg-white rounded-lg filter drop-shadow-lg
            flex flex-row items-center bg-gray-200
            transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <FontAwesomeIcon icon={faLinkedin} className='fa-5x'/>
                <div className='pl-8 pr-8'>
                    <div className='font-semibold'>
                        Check out my LinkedIn
                    </div>
                    <div className='font-bold underline'>Jason Sebastian Kusuma</div> 
                </div>
            </div>
        </a>
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
