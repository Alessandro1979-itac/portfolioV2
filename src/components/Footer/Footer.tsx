import { Container } from './styles';

import reactIcon from '../../assets/react-icon.svg';
import linkedinIcon from '../../assets/linkedin.png';
import githubIcon from '../../assets/github.png';
import instagramIcon from '../../assets/instagram.png';
import discordIcon from '../../assets/discord.png';

export function Footer() {
  return (
    <Container className='footer'>
      <a href='/' className='logo'>
        <span>Alemcar</span>
        <span>.dev</span>
      </a>
      <div>
        <p>
          Este site foi feito com <img src={reactIcon} alt='React' /> e muito
          <span>❤️</span>
        </p>
      </div>

      <div className='social-media'>
        <a
          href='https://www.linkedin.com/in/alessandro-muniz-caranha/'
          target='_blank'
          rel='noreferrer'>
          <img src={linkedinIcon} alt='Linkedin' />
        </a>

        <a
          href='https://github.com/Alessandro1979-itac'
          target='_blank'
          rel='noreferrer'>
          <img src={githubIcon} alt='GitHub' />
        </a>

        <a
          href='https://www.instagram.com/alemcar.dev/'
          target='_blank'
          rel='noreferrer'>
          <img src={instagramIcon} alt='Instagram' />
        </a>

        <a
          href='https://discord.com/users/Alemcar#0466'
          target='_blank'
          rel='noreferrer'>
          <img src={discordIcon} alt='Discord' />
        </a>
      </div>
    </Container>
  );
}
