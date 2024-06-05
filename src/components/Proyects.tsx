import ProyectsCard from "./ProyectsCard"

function Proyects() {
  return (
    <>
      <h2 className="h2-projects">Proyects</h2>
      <div className="projects">
        <ProyectsCard/>
        <ProyectsCard/>
        <ProyectsCard/>
      </div>
    </>
  )
}

Proyects.propTypes = {}

export default Proyects

