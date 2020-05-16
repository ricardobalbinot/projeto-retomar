import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Centered from '../../components/Centered';
import {
  AnimationContainer,
  ContainerAutocomplete,
  Title,
  FormAutocomplete,
  Button,
} from './styles';

function Home() {
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');

  const estadosEscalonados = [{ id: 1, dsEstado: 'Paraná' }];
  const cidadesEscalonadas = [
    { id: 1, dsCidade: 'Curitiba' },
    { id: 2, dsCidade: 'Dois Vizinhos' },
  ];

  return (
    <>
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
                options={estadosEscalonados}
                getOptionLabel={option => option.dsEstado}
                style={{ width: 200 }}
                id="estado"
                debug
                onChange={(event, newValue) => {
                  setEstado(newValue);
                }}
                renderInput={params => (
                  <TextField {...params} label="Estado" margin="normal" />
                )}
              />
            </ContainerAutocomplete>

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
                  <TextField {...params} label="Cidade" margin="normal" />
                )}
              />
            </ContainerAutocomplete>
          </FormAutocomplete>

          <Link to="/filter">
            <Button type="submit">Continuar</Button>
          </Link>
        </Centered>
      </AnimationContainer>
    </>
  );
}

export default Home;
