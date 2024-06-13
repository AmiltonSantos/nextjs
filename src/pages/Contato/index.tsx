import Head from 'next/head';
import React from 'react';
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaRegEnvelope,
  FaAngleRight
} from 'react-icons/fa';
import { Container } from '../../styles/pages/Contato/style';
import { Social } from '../../styles/pages/Home';
import ContatoSVG from '../../assets/contato.png';

const Contato: React.FC = () => {
  return (
    <Container className="page">
      <Head>
        <title>Contato | Amilton Santos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="card">
        <div id="head">
          <h3>CONTATO</h3>
          <div id="bar" />
        </div>

        <h1>ENTRE EM CONTATO</h1>

        <div id="contatos">
          <div id="email">
            <div id="title">
              <FaRegEnvelope />
              <h3>E-mail</h3>
            </div>

            <a id="link" href={'mailto:a1000ton1000ton@gmail.com'}>
              <FaAngleRight />
              a1000ton1000ton@gmail.com
            </a>
          </div>
          <div id="telefone">
            <div id="title">
              <FaPhone />
              <h3>Telefone</h3>
            </div>

            <a id="link" href={'tel:+5562000000000'}>
              <FaAngleRight />
              (62) 00000-0000
            </a>
          </div>
          <div id="social">
            <div id="title">
              <h3>Minhas Redes Sociais</h3>
            </div>

            <Social>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/amilton-santos-gomes/"
              >
                <div>
                  <FaLinkedinIn />
                </div>
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.facebook.com/"
              >
                <div>
                  <FaFacebookF />
                </div>
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.instagram.com/_amiltonsantos/"
              >
                <div>
                  <FaInstagram />
                </div>
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/AmiltonSantos"
              >
                <div>
                  <FaGithub />
                </div>
              </a>
            </Social>
          </div>
        </div>

        <div id="imagem">
          <img src={ContatoSVG} alt="Imagem de contato" />
        </div>
      </div>
    </Container>
  );
};

export default Contato;
