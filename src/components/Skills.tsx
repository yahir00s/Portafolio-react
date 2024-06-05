import '../styles/Skills.css'
import LiReutil from './LiReutil'
const Skills = () => {
  return (
    <main className='container-skills'>
        <h2>Principal Skills</h2>
        <section>
            <LiReutil image="./public/react.svg" name="React Native"/>
            <LiReutil image="./public/mongoDB.png" name="MongoDB"/>
            <LiReutil image="./public/ExpressE.png" name="Express"/>
            <LiReutil image="./public/TypeScript.png" name="TypeScript"/>
        </section>
    </main>
  )
}

export default Skills