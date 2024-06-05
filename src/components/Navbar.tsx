import '../styles/Navbar.css'


function Navbar() {
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
        </section>
      </main>
    </header>
  );
}

export default Navbar;
