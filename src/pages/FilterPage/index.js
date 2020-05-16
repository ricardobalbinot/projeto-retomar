import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Centered from '../../components/Centered';
import {
  AnimationContainer,
  Header,
  Title,
  FormAutocomplete,
  Input,
  Button,
  ContainerAutocomplete,
} from './styles';

function FilterPage() {
  const [estabelecimento, setEstabelecimento] = useState('');
  const [bairro, setBairro] = useState('');
  const [categoria, setCategoria] = useState('');

  const bairrosEscalonados = [{ id: 1, dsBairro: 'Centro' }];
  const categoriasEstabelecimentos = [
    { id: 1, dsCategoria: 'Essenciais' },
    { id: 2, dsCategoria: 'Alimentação' },
    { id: 3, dsCategoria: 'Saúde' },
    { id: 4, dsCategoria: 'Beleza e Corpo' },
    { id: 5, dsCategoria: 'Entretenimento' },
    { id: 6, dsCategoria: 'Lojas' },
    { id: 7, dsCategoria: 'Religioso' },
    { id: 8, dsCategoria: 'Serviços' },
  ];

  return (
    <>
      <AnimationContainer>
        <Header>
          <h2>(Logo)</h2>
          <Link to="/">Trocar cidade</Link>
        </Header>

        <Centered column>
          <Title>Projeto Retomar</Title>

          <FormAutocomplete>
            <ContainerAutocomplete>
              <Autocomplete
                options={bairrosEscalonados}
                getOptionLabel={option => option.dsBairro}
                style={{ width: 200 }}
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
            <ContainerAutocomplete>
              <Autocomplete
                options={categoriasEstabelecimentos}
                getOptionLabel={option => option.dsCategoria}
                style={{ width: 200 }}
                id="categorias"
                debug
                onChange={(event, newValue) => {
                  setCategoria(newValue);
                }}
                renderInput={params => (
                  <TextField {...params} label="Categoria" margin="normal" />
                )}
              />
            </ContainerAutocomplete>
          </FormAutocomplete>

          <Input
            value={estabelecimento}
            onChange={e => setEstabelecimento(e.target.value)}
            placeholder="Digite o nome do estabelecimento"
          />

          <Link to="/horarios">
            <Button type="submit">Consultar horários</Button>
          </Link>
        </Centered>
      </AnimationContainer>
    </>
  );
}

export default FilterPage;
