import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { AnimationContainer, Header, Form } from './styles';

function FilterPage() {
  const [estabelecimento, setEstabelecimento] = useState('');

  return (
    <>
      <AnimationContainer>
        <Header>
          <h2>Projeto Retomar</h2>
          <Link to="/">Voltar</Link>
        </Header>

        <Form>
          <input
            value={estabelecimento}
            onChange={e => setEstabelecimento(e.target.value)}
            placeholder="Estabelecimento"
          />
          <button type="submit">Pesquisar</button>
        </Form>
      </AnimationContainer>
    </>
  );
}

export default FilterPage;
