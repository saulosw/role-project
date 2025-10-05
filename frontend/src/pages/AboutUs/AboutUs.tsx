import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import '../AboutUs/AboutUs.css';
import { FaExternalLinkAlt } from 'react-icons/fa';


function AboutUs() {
    return (
        <div className='about-page'>
            <Header />
            <div className='about-content'>
                <div className='main-title-container'>
                    <h1 className='main-title'>Sobre Nós</h1>
                </div>
                <div className='content-text-container'>
                    <p className='content-text'>
                        O Rolê é uma plataforma desenvolvida para facilitar encontros e promover
                        experiências inesquecíveis de forma simplificada. Nosso objetivo é conectar
                        pessoas que compartilham interesses em comum, tornando a descoberta e participação
                        em eventos algo rápido, intuitivo e prazeroso.
                    </p>
                    <p className='content-text'>
                        Este projeto foi desenvolvido por estudantes do curso de Ciência da Computação
                        da FECAP (Fundação Escola de Comércio Álvares Penteado), como parte de nossa
                        jornada acadêmica. Combinamos conhecimento técnico e criatividade para criar
                        uma solução que realmente faz a diferença na vida das pessoas.
                    </p>
                </div>
                <div className='github-button-container'>
                    <button
                        onClick={() => window.location.href = 'https://github.com/saulosw/role-project'}
                        className='github-button'
                    >
                        Visite nosso Github
                        <FaExternalLinkAlt className='external-icon' />
                    </button>
                </div>
            </div>
            <Footer />
        </div>
  )
}

export default AboutUs
