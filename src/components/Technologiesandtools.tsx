import LiReutil from "./LiReutil"


const Technologiesandtools = () => {
  return (
    <main className='container-skills'>
        <h2>Technologies and tools</h2>
        <section>
                <LiReutil image="./public/tecnologies/Git.png" name="Git"/>
                <LiReutil image="./public/tecnologies/GitHub.png" name="GitHub"/>
                <LiReutil image="./public/tecnologies/Jira.png" name="Jira"/>
                <LiReutil image="./public/tecnologies/Jest.png" name="Jest"/>
                <LiReutil image="./public/tecnologies/NPM.png" name="npm"/>
                <LiReutil image="./public/tecnologies/Notion-logo.svg" name="Notion"/>
                <LiReutil image="./public/tecnologies/slack.png" name="slack"/>

        </section>
    </main>
  )
}

export default Technologiesandtools

