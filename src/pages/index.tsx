import React from 'react';
import Head from 'next/head';
import { Container, Nav, Social } from '../styles/pages/Home';
import Link from 'next/link';
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa';
import { useRouter } from 'next/router';

const Home: React.FC = () => {
  const router = useRouter();

  return (
    <Container className="page">
      <Head>
        <title>Amilton Santos Gomes | Portifólio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/">
        <h1>Amilton Santos Gomes</h1>
      </Link>
      <h2>
        <span>Developer | Javascript, Typescript, React, Angular</span>
      </h2>

      <Nav id="nav">
        <ul>
          <li>
            <Link href="/">Inicio</Link>
            <div id={`border${router.pathname === '/' ? 'Active' : ''}`}></div>
          </li>
          <li>
            <Link href="/Sobre">Sobre</Link>
            <div
              id={`border${router.pathname === '/Sobre' ? 'Active' : ''}`}
            ></div>
          </li>
          <li>
            <Link href="/Curriculo">Curriculo</Link>
            <div
              id={`border${router.pathname === '/Curriculo' ? 'Active' : ''}`}
            ></div>
          </li>
          <li>
            <Link href="/Projetos">Projetos</Link>
            <div
              id={`border${router.pathname === '/Projetos' ? 'Active' : ''}`}
            ></div>
          </li>
          <li>
            <Link href="/Contato">Contato</Link>
            <div
              id={`border${router.pathname === '/Contato' ? 'Active' : ''}`}
            ></div>
          </li>
        </ul>
      </Nav>

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
    </Container>
  );
};

export default Home;
