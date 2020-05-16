import React from 'react';
import { Link } from 'react-router-dom';

import { AnimationContainer, Header, Title } from './styles';

function Horarios() {
  return (
    <>
      <AnimationContainer>
        <Header>
          <h2>(Logo)</h2>
          <Link to="/">Trocar cidade</Link>
        </Header>

        <Title>Tabela de Horários</Title>
      </AnimationContainer>
    </>
  );
}

export default Horarios;
