import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Centered from '../../components/Centered';
import {
  AnimationContainer,
  Header,
  Title,
  Error,
  FormAutocomplete,
  Button,
  ContainerAutocomplete,
} from './styles';

function FilterPage() {
  const [bairro, setBairro] = useState('');
  const [inputError, setInputError] = useState('');
  const history = useHistory();

  const bairrosEscalonados = [{ id: 1, dsBairro: 'Catete' }];

  function handleSelecionaBairro(event) {
    event.preventDefault();

    if (!bairro) {
      setInputError('Informe o bairro desejado');
    } else {
      setInputError('');
      history.push('/horarios');
    }
  }

  return (
    <>
      <Header>
        <h2>(Logo)</h2>
        <Link to="/">Trocar cidade</Link>
      </Header>

      <AnimationContainer>
        <Centered column>
          <Title>Projeto Retomar</Title>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <FormAutocomplete>
            <ContainerAutocomplete>
              <Autocomplete
                options={bairrosEscalonados}
                getOptionLabel={option => option.dsBairro}
                style={{ width: 400 }}
                id="bairro"
                debug
                onChange={(event, newValue) => {
                  setBairro(newValue);
                }}
                renderInput={params => (
                  <TextField {...params} label="Bairro" margin="normal" />
                )}
              />
            </ContainerAutocomplete>
          </FormAutocomplete>

          {inputError && <Error>{inputError}</Error>}

          <Button onClick={handleSelecionaBairro}>Próximo</Button>
        </Centered>
      </AnimationContainer>
    </>
  );
}

export default FilterPage;
