import Head from 'next/head';
import React from 'react';
import { Container } from '../../styles/pages/Curriculo/style';

const Curriculo: React.FC = () => {
  return (
    <Container className="page">
      <Head>
        <title>Currículo | Amilton Santos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="card">
        <div id="head">
          <h3>CURRÍCULO</h3>
          <div id="bar" />
        </div>

        <h1>VEJA MEU CURRÍCULO</h1>

        <div id="experiencias">
          <div id="educacao">
            <h3>Educação</h3>
            <ul>
              <li className="listMain">
                <span id="curso">TÉCNICO EM ELETRÔNICA</span>
                <span id="periodo">2013 - 2014</span>
                <span id="local">IPS - MARABÁ - PA</span>
              </li>
              <li className="listMain">
                <span id="curso">DESIGN GRÁFICO E WEB DESIGN</span>
                <span id="periodo">2011 - 2012</span>
                <span id="local">MICROLINS - MARABÁ - PA</span>
              </li>
              <li className="listMain">
                <span id="curso">ENSINO MÉDIO</span>
                <span id="periodo">2005 - 2007</span>
                <span id="local">E.E.E.M LUIZ GUALBERTO PIMENTEL - DOM ELISEU - PA</span>
              </li>
            </ul>
          </div>
          <div id="profissional">
            <h3>Experiência Profissional</h3>
            <ul>
              <li className="listMain">
                <span id="curso">DESENVOLVERDOR JAVA JÚNIOR</span>
                <span id="periodo">2019 - Atualmente</span>
                <span id="local">Artnew Técnologia - Goiânia - GO</span>
                <ul>
                  <li>
                    Desenvolvimento Mobile (Ionic, Angular, TypeScript)
                  </li>
                  <li>
                    Front End do aplicativo (ArtVendas)
                  </li>
                  <li>
                    Acompanhamento de indicadores de manutenção e operação
                  </li>
                  <li>Análise de falhas no aplicativo</li>
                  <li>Programação de manutenção</li>
                </ul>
              </li>
              <li className="listMain">
                <span id="curso">ESPECIALISTA EM SUPORTE DE TI</span>
                <span id="periodo">2018 - 2019</span>
                <span id="local">Franquia - CASA DO NOTEBOOK - GOIÂNIA - GO</span>
                <ul>
                  <li>Instalação e manutenção de Notobooks Desktops</li>
                  <li>Recuperação de Placas Mãe</li>
                  <li>Recuperação de Carcaças</li>
                  <li>Eletrônica em geral em Notebooks</li>
                </ul>
              </li>
              <li className="listMain">
                <span id="curso">ARTFINALISTA - DESIGN GRÁFICO</span>
                <span id="periodo">2013 - 2018</span>
                <span id="local">DENIS BRINDES LTDA</span>
                <ul>
                  <li>Criação de artes vetorias e gráficos</li>
                  <li>Materias personalizados para brindes</li>
                  <li>Artes para canetas, canecas, camisas e outros</li>
                  <li>Gravação em chaveiros, carteiras, calendários e outros</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Curriculo;
