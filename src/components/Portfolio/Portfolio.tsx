import { Container } from './styles';
import githubIcon from '../../assets/github-icon.svg';
import externalLinkIcon from '../../assets/external-link-icon.svg';
import ScrollAnimation from 'react-animate-on-scroll';

export function Portfolio() {
  return (
    <Container id='portfolio'>
      <h2>Meu Portfólio</h2>

      <div className='projects'>
        <ScrollAnimation animateIn='flipInX'>
          <div className='project'>
            <header>
              <svg
                width='50'
                xmlns='http://www.w3.org/2000/svg'
                role='img'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#8257e5'
                stroke-width='1'
                stroke-linecap='round'
                stroke-linejoin='round'>
                <title>Folder</title>
                <path d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'></path>
              </svg>
              <div className='project-links'>
                <a
                  href='https://github.com/Alessandro1979-itac/nlw-return-impulse'
                  target='_blank'
                  rel='noreferrer'>
                  <img src={githubIcon} alt='GitHub' />
                </a>
              </div>
            </header>
            <div className='body'>
              <h3>nlw return</h3>
              <p>
                Uma aplicação completa [Front Back e Mobile] realizada
                durante o evento da Rocketseat. Neste projeto, podemos
                escolher um tipo de feedback, fazer uma captura de tela da
                página.
              </p>
            </div>
            <footer>
              <ul className='tech-list'>
                <li>Node</li>
                <li>Express</li>
                <li>Prisma</li>
                <li>Vite</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn='flipInX'>
          <div className='project'>
            <header>
              <svg
                width='50'
                xmlns='http://www.w3.org/2000/svg'
                role='img'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#8257e5'
                stroke-width='1'
                stroke-linecap='round'
                stroke-linejoin='round'>
                <title>Folder</title>
                <path d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'></path>
              </svg>
              <div className='project-links'>
                <a
                  href='https://github.com/Alessandro1979-itac/Be-The-Hero'
                  target='_blank'
                  rel='noreferrer'>
                  <img src={githubIcon} alt='GitHub' />
                </a>
              </div>
            </header>
            <div className='body'>
              <h3>Be-The-Hero</h3>
              <p>
                Durante a 11ª semana OmniStack da Rocketseat foi desenvolvida a
                aplicação Be The Hero, que visa ajudar Organizações não
                Governamentais – ONGs a encontrar pessoas que estejam dispostas
                a contribuir com algum valor.
              </p>
            </div>
            <footer>
              <ul className='tech-list'>
                <li>React</li>
                <li>Typescript</li>
                <li>Styled Components</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn='flipInX'>
          <div className='project'>
            <header>
              <svg
                width='50'
                xmlns='http://www.w3.org/2000/svg'
                role='img'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#8257e5 '
                stroke-width='1'
                stroke-linecap='round'
                stroke-linejoin='round'>
                <title>Folder</title>
                <path d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'></path>
              </svg>
              <div className='project-links'>
                <a
                  href='https://github.com/Alessandro1979-itac/adminPro'
                  target='_blank'
                  rel='noreferrer'>
                  <img src={githubIcon} alt='GitHub' />
                </a>
              </div>
            </header>
            <div className='body'>
              <h3>AdminPro</h3>
              <p>
                Projeto desenvolvido no Curso de Angular Avançado. Elaborar um
                sistema de hospitais - para controlar Médicos, Hospitais e
                Usuários.
              </p>
            </div>
            <footer>
              <ul className='tech-list'>
                <li>MongoDB</li>
                <li>Express</li>
                <li>Angular</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn='flipInX'>
          <div className='project'>
            <header>
              <svg
                width='50'
                xmlns='http://www.w3.org/2000/svg'
                role='img'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#8257e5'
                stroke-width='1'
                stroke-linecap='round'
                stroke-linejoin='round'>
                <title>Folder</title>
                <path d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'></path>
              </svg>
              <div className='project-links'>
                <a
                  href='https://github.com/Alessandro1979-itac/loja-online-pokestore'
                  target='_blank'
                  rel='noreferrer'>
                  <img src={githubIcon} alt='GitHub' />
                </a>
              </div>
            </header>
            <div className='body'>
              <h3>Loja Online Pokestore</h3>
              <p>
                Projeto para aprendizagem, construção de uma pokeapi, uma api
                com dados de todos os Pokémon (ou quase todos).
              </p>
            </div>
            <footer>
              <ul className='tech-list'>
                <li>NodeJS</li>
                <li>React</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn='flipInX'>
          <div className='project'>
            <header>
              <svg
                width='50'
                xmlns='http://www.w3.org/2000/svg'
                role='img'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#8257e5'
                stroke-width='1'
                stroke-linecap='round'
                stroke-linejoin='round'>
                <title>Folder</title>
                <path d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'></path>
              </svg>
              <div className='project-links'>
                <a
                  href='https://github.com/Alessandro1979-itac/os-front'
                  target='_blank'
                  rel='noreferrer'>
                  <img src={githubIcon} alt='Visitar site' />
                </a>
              </div>
            </header>
            <div className='body'>
              <h3>Help Desk</h3>
              <p>
                Aplicação web completa de um sistema simples de Gerenciamento de
                Ordens de Serviço.
              </p>
            </div>
            <footer>
              <ul className='tech-list'>
                <li>Spring</li>
                <li>Mysql</li>
                <li>Angular</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn='flipInX'>
          <div className='project'>
            <header>
              <svg
                width='50'
                xmlns='http://www.w3.org/2000/svg'
                role='img'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#8257e5'
                stroke-width='1'
                stroke-linecap='round'
                stroke-linejoin='round'>
                <title>Folder</title>
                <path d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'></path>
              </svg>
              <div className='project-links'>
                <a
                  href='https://github.com/Alessandro1979-itac/lista-filmes-angular'
                  target='_blank'
                  rel='noreferrer'>
                  <img src={githubIcon} alt='Visitar site' />
                </a>
              </div>
            </header>
            <div className='body'>
              <h3>List Filmes</h3>
              <p>
                Aplicação Web Sistema de listagem de filmes, com a possibilidade
                de cadastros, edições, listagem e visualização dos filmes.
              </p>
            </div>
            <footer>
              <ul className='tech-list'>
                <li>Angular</li>
                <li>Json Server</li>
                <li>Typescript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
