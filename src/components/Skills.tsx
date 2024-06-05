import '../styles/Skills.css'
import LiReutil from './LiReutil'
const Skills = () => {
  return (
    <main className='container-skills'>
        <h2>Principal Skills</h2>
        <section>
            <LiReutil image="https://i.postimg.cc/bwX620s9/React.png" name="React Native"/>
            <LiReutil image="https://i.postimg.cc/nrpFz9qF/Mongo-DB-Logomark-Forest-Green.png" name="MongoDB"/>
            <LiReutil image="https://i.postimg.cc/zDxZWQrS/ExpressE.png" name="Express"/>
            <LiReutil image="https://i.postimg.cc/NGJSLr6d/Type-Script.png" name="TypeScript"/>
        </section>
    </main>
  )
}

export default Skills