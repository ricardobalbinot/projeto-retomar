import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Centered from '../../components/Centered';
import {
  AnimationContainer,
  ContainerAutocomplete,
  Header,
  Title,
  Error,
  FormAutocomplete,
  Button,
} from './styles';

function Home() {
  const [cidade, setCidade] = useState('');
  const [inputError, setInputError] = useState('');
  const history = useHistory();

  const cidadesEscalonadas = [{ idEstado: 1, dsCidade: 'Rio de Janeiro, RJ' }];

  function handleSelecionaCidade(event) {
    event.preventDefault();

    if (!cidade) {
      setInputError('Informe a cidade desejada');
    } else {
      setInputError('');
      history.push('/filter');
    }
  }

  return (
    <>
      <Header>
        <h2>(Logo)</h2>
      </Header>

      <AnimationContainer>
        <Centered column>
          <Title>Projeto Retomar</Title>

          <p>In est ante in nibh mauris cursus mattis.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <FormAutocomplete>
            <ContainerAutocomplete>
              <Autocomplete
                options={cidadesEscalonadas}
                getOptionLabel={option => option.dsCidade}
                style={{ width: 400 }}
                id="cidade"
                debug
                onChange={(event, newValue) => {
                  setCidade(newValue);
                }}
                renderInput={params => (
                  <TextField
                    {...params}
                    label="Digite sua cidade"
                    margin="normal"
                  />
                )}
              />
            </ContainerAutocomplete>
          </FormAutocomplete>

          {inputError && <Error>{inputError}</Error>}

          <Button onClick={handleSelecionaCidade}>Próximo</Button>
        </Centered>
      </AnimationContainer>
    </>
  );
}

export default Home;
