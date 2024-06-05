import '../styles/Skills.css'
import LiReutil from './LiReutil'
const Skills = () => {
  return (
    <main className='container-skills'>
        <h2>Principal Skills</h2>
        <section>
            <LiReutil image="/src/assets/react.svg" name="React Native"/>
            <LiReutil image="/src/assets/mongoDB.png" name="MongoDB"/>
            <LiReutil image="/src/assets/ExpressE.png" name="Express"/>
            <LiReutil image="/src/assets/TypeScript.png" name="TypeScript"/>
        </section>
    </main>
  )
}

export default Skills