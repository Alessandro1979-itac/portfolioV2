import ScrollAnimation from 'react-animate-on-scroll';

import { Container } from './styles';

import cssIcon from '../../assets/css-icon.svg';
import htmlIcon from '../../assets/html-icon.svg';
import jsIcon from '../../assets/js-icon.svg';
import nodeIcon from '../../assets/node-icon.svg';
import reactIcon from '../../assets/react-icon.svg';
import typescriptIcon from '../../assets/typescript-icon.svg';
import Perfil from '../../assets/Perfil_Alemcar.jpg';

export function About() {
  return (
    <Container id='sobre'>
      <div className='about-text'>
        <ScrollAnimation animateIn='fadeInLeft'>
          <h2>Sobre mim</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInLeft' delay={0.2 * 1000}>
          <p>
            Me chamo Alessandro Muniz, sou Desenvolvedor FullStack Jr. Sou
            apaixonado por entregar soluções que agregam na vida das pessoas e
            ao mesmo tempo me desafiam.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn='fadeInLeft'
          delay={0.4 * 1000}
          style={{ marginTop: '2rem', marginBottom: '2rem' }}>
          <p>
            Desenvolvo sites e aplicações utilizando HTML, CSS, e JavaScript.
            Tenho familiaridade em desenvolver layouts. Estou sempre me
            aprimorando a cada projeto que colocam em minhas mãos.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInLeft' delay={0.6 * 1000}>
          <p>
            Sou uma pessoa dedicada que corre atrás de realizar seus sonhos,
            trabalha com foco nos resultados e sempre busco alcançar minha
            melhor versão.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn='fadeInLeft' delay={0.7 * 1000}>
          <h3>Aqui estão as minhas principais habilidades:</h3>
        </ScrollAnimation>
        <div className='hard-skills'>
          <div className='hability'>
            <ScrollAnimation animateIn='fadeInUp' delay={0.1 * 1000}>
              <img src={reactIcon} alt='React' />
            </ScrollAnimation>
          </div>

          <div className='hability'>
            <ScrollAnimation animateIn='fadeInUp' delay={0.3 * 1000}>
              <img src={jsIcon} alt='JavaScript' />
            </ScrollAnimation>
          </div>

          <div className='hability'>
            <ScrollAnimation animateIn='fadeInUp' delay={0.4 * 1000}>
              <img src={htmlIcon} alt='Html' />
            </ScrollAnimation>
          </div>

          <div className='hability'>
            <ScrollAnimation animateIn='fadeInUp' delay={0.5 * 1000}>
              <img src={cssIcon} alt='Css' />
            </ScrollAnimation>
          </div>
          <div className='hability'>
            <ScrollAnimation animateIn='fadeInUp' delay={0.6 * 1000}>
              <img src={nodeIcon} alt='Node' />
            </ScrollAnimation>
          </div>

          <div className='hability'>
            <ScrollAnimation animateIn='fadeInUp' delay={0.7 * 1000}>
              <img src={typescriptIcon} alt='Typescript' />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className='about-image'>
        <ScrollAnimation animateIn='fadeInRight' delay={0.6 * 1000}>
          <img src={Perfil} alt='Imagem de perfil' />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
