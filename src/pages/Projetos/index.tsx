import Head from 'next/head';
import React from 'react';
import { BsCardHeading } from 'react-icons/bs';
import { Container } from '../../styles/pages/Projetos/style';

const Projetos: React.FC = () => {
  const projects = [
    {
      nome: 'StuddyHub - Frontend',
      type: 'Web App',
      link: 'https://',
      tecnology: [
        'Nextjs',
        'ReactJs',
        'TypeScript',
        'Material UI',
        'Styled Components',
        'Firebase'
      ]
    },
    {
      nome: 'BUSATO PCM',
      type: 'Mobile App',
      link: '',
      tecnology: ['Kodular', 'Firebase']
    },
    {
      nome: 'Clone Nubank',
      type: 'Mobile Ionic 5',
      link: 'https://stackblitz.com/github/AmiltonSantos/nubank-com-ionic5',
      tecnology: ['Ionic', 'Typescript']
    },
    {
      nome: 'Meu Portifólio',
      type: 'Web App',
      link: 'https://github.com/AmiltonSantos/nextjs',
      tecnology: [
        'Nextjs',
        'ReactJs',
        'TypeScript',
        'Material UI',
        'Styled Components'
      ]
    }
  ];
  return (
    <Container className="page">
      <Head>
        <title>Projetos | Amilton Santos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="card">
        <div id="head">
          <h3>PROJETOS</h3>
          <div id="bar" />
        </div>

        <h1>MEUS PROJETOS</h1>

        <div id="projetos">
          {projects.map((project, index) => (
            <div id="item" key={index}>
              <div id="icon">
                <BsCardHeading />
              </div>
              <a href={project.link} rel="noreferrer" target="_blank">
                <span id="nome"> {project.nome}</span>
              </a>
              <span id="type">{project.type}</span>
              <span id="tecnology">
                {project.tecnology.map((item, intemKey) => {
                  if (intemKey !== project.tecnology.length - 1) {
                    return item + ' | ';
                  } else {
                    return item;
                  }
                })}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Projetos;
