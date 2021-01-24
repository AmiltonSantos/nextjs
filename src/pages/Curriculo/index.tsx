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
                <span id="periodo">2014 - Atualmente</span>
                <span id="local">IPS - MARABÁ - PA</span>
              </li>
              <li className="listMain">
                <span id="curso">DESIGN GRÁFICO E WEB DESIGN</span>
                <span id="periodo">2011 - Atualmente</span>
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
                <span id="curso">ESTÁGIARIO DE ENGENHARIA</span>
                <span id="periodo">2019 - Atualmente</span>
                <span id="local">VALE S/A</span>
                <ul>
                  <li>
                    Automatização de processos (Microssoft Flow + PowerApps +
                    SharePoint)
                  </li>
                  <li>
                    Criação de robôs para modificações em massa no sistema da
                    empresa (SAP + HP LoadHunner)
                  </li>
                  <li>
                    Acompanhamento de indicadores de manutenção e operação
                  </li>
                  <li>Análise de falhas de equipamentos</li>
                  <li>Programação de manutenção</li>
                </ul>
              </li>
              <li className="listMain">
                <span id="curso">AUXILIAR ADMINISTRATIVO</span>
                <span id="periodo">2016 - 2019</span>
                <span id="local">R.P.F. Auto Peças</span>
                <ul>
                  <li>Contas a receber</li>
                  <li>Faturamento</li>
                  <li>Controle de garantia</li>
                  <li>Atendimento ao cliente</li>
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
