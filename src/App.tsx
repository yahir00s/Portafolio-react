import '../src/styles/App.css'
import Me from './components/Me'
import Navbar from './components/Navbar'
import Proyects from './components/Proyects'
import Skills from './components/Skills'
import SocialMedia from './components/SocialMedia'
import Technologiesandtools from './components/Technologiesandtools'


function App() {
  return (
    <>
      <SocialMedia/>
      <Navbar/>
      <Me/>
      <Skills/>
      <Technologiesandtools/>
      <Proyects/>
    </>
  )
}

export default App
