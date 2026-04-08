import { useRef, useState } from 'react';
import './App.css';
import About from './comp/About';
import Cards from './comp/Cards';
import Contact from './comp/Contact';
import Skills from './comp/Skills';
import Works from './comp/Works';
import { MdMenu, MdClose } from 'react-icons/md';


function App() {
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const worksRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <div>
      {/* <header>
        <img src="/imgs/star.svg"></img>
      </header> */}
      <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <MdClose /> : <MdMenu />}
      </div>
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}
      <div className={`mobile_menu ${menuOpen ? 'open' : ''}`}>
        <div onClick={() => { scrollToSection(aboutRef); setMenuOpen(false); }}></div>
        <div onClick={() => { scrollToSection(skillsRef); setMenuOpen(false); }}></div>
        <div onClick={() => { scrollToSection(worksRef); setMenuOpen(false); }}></div>
        <div onClick={() => { scrollToSection(contactRef); setMenuOpen(false); }}></div>
      </div>
      <div className='box'>
        <div className='boxTxt'>
          <div className='title'>
            <h2>PORT <br /> FOLIO</h2>
            {/* <p className="subtitle">FRONTEND DEVELOPER</p> */}
            <p className="subtitle"> “지속적인 개선을 통해 성장하는 개발자 <br /> 김나영입니다.”</p>
          </div>
          <div className='btn'>
            <button onClick={() => window.open("https://github.com/duajd3-lab?tab=repositories")}>
              GITHUB
            </button>
            <button onClick={() => scrollToSection(worksRef)}>
              PROJECT
            </button>
          </div>
        </div>
        <Cards />
      </div>

      <div className='sticky_menu'>
        <div div className={`sticky_text ${menuOpen ? 'on' : ''}`}>
          <div onClick={() => scrollToSection(aboutRef)}>
            <span className="gradient">ABOUT</span>
          </div>
          <div onClick={() => scrollToSection(skillsRef)}>
            <span className="gradient">SKILLS</span>
          </div>
          <div onClick={() => scrollToSection(worksRef)}>
            <span className="gradient">WORKS</span>
          </div>
          <div onClick={() => scrollToSection(contactRef)}>
            <span className="gradient">CONTACT</span>
          </div>
        </div>

        <div className='section'>
          {/* About 부분 */}
          <div ref={aboutRef}><About /></div>

          {/* 스킬 부분 */}
          <div ref={skillsRef}><Skills /></div>

          {/* Works 부분 */}
          <div ref={worksRef}><Works /></div>

          {/* contact 부분 */}
          <div ref={contactRef}><Contact /></div>


        </div>


      </div>


      <footer>
        <div className='bottom'></div>
      </footer>


    </div >




  );
}

export default App;
