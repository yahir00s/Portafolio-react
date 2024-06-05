import '../styles/SocialMedia.css'
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import useScreenSize from '../hooks/useScreenSize';
function SocialMedia() {
  const {width} = useScreenSize()
  const hiden = width > 900; 
  return (
    <div className='social-media'>
        {hiden && <div>
              <a href="https://github.com/yahir00s" target='_blank'>
                <AiFillGithub size={40}/>
              </a> 
              <a href="https://www.instagram.com/yayo.acv" target='_blank'>
                <AiFillInstagram size={40}/>
              </a>
              <a href="https://www.linkedin.com/in/yahir-acevedo-2519b5272/" target='_blank'>
                <AiFillLinkedin size={40}/>
              </a>
            </div>}
    </div>
  )
}

export default SocialMedia