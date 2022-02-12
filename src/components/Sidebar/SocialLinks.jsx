import * as Style from "./styles";
import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
} from 'react-bootstrap-icons';

const SocialLinks = () => {
  return(
    <Style.LinkWrapper>
      <p>Follow Me @</p>
      <Style.SocialWrapper>
        <a
          href="https://www.github.com/ACookson95"
          rel="noopener noreferrer"
          target="_blank"
          >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/aaron-cookson/"
          rel="noopener noreferrer"
          target="_blank"
          >
          <Linkedin />
        </a>
        <a
          href="https://www.facebook.com/Cookson.Aaron"
          rel="noopener noreferrer"
          target="_blank"
          >
          <Facebook />
        </a>
        <a
          href="https://www.instagram.com/aaron_cookson/"
          rel="noopener noreferrer"
          target="_blank"
          >
          <Instagram />
        </a>
        <a
          href="https://www.twitter.com/aaroncookson?lang=en"
          rel="noopener noreferrer"
          target="_blank"
          >
          <Twitter />
        </a>
      </Style.SocialWrapper>
    </Style.LinkWrapper>
  )
}

export default SocialLinks;