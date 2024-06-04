import '../styles/Navbar.css'
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import useScreenSize from '../hooks/useScreenSize';


function NavbarBootstrap() {
  const {width} = useScreenSize()
  const hiden = width > 900; 
  return (
    <header className='nav_container'>
      <main className='nav_content'>
        <h2>Yahir Acevedo |<span>Software developer</span></h2>
        <section className='nav-section'>
          <ul className='nav-list'>
            <a>Contact</a>
            <a>Projects</a>
            <a>Abaout</a>
          </ul>
            {hiden && <div className='nav-social-media'>
              <a href="https://github.com/yahir00s" target='_blank'>
                <AiFillGithub size={35}/>
              </a>
              <AiFillInstagram size={35}/>
              <AiFillLinkedin size={35}/>
            </div>}
        </section>
      </main>
    </header>
  );
}

export default NavbarBootstrap;
