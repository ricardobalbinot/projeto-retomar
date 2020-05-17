import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Centered from '../../components/Centered';
import {
  Header,
  BlockItems,
  Title,
  Error,
  FormAutocomplete,
  Button,
  LinkVoltar,
  ContainerAutocomplete,
} from './styles';

import Logo from '../../images/retomar-svg.svg';

const darkTheme = createMuiTheme({
  overrides: {
    MuiFormLabel: {
      focused: true,
      root: {
        '&$focused': {
          color: '#00c677',
          borderBottom: '#00c677'
        }
      }
    },
    MuiInput: {
      underline: {
        '&$focused': {
          borderBottom: '1px solid #00c677'
        }
      }
    }
  },
  palette: {
    type: 'dark',
  },
});

function Bairro() {
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
        <Link to="/">
          <img src={Logo} width="150" alt="Projeto Retomar" />
        </Link>
      </Header>

      <BlockItems>
        <div>
          <span className="circle">•</span>
          <span>
            Confira o horário de funcionamento dos estabelecimentos da sua
            cidade
          </span>
        </div>
        <div>
          <span className="circle-green">•</span>
          <div>
            <strong>Rio de Janeiro</strong>
            <Link to="/">Alterar cidade</Link>
          </div>
        </div>
      </BlockItems>

      <Centered column>
        <Title>Qual bairro deseja pesquisar?</Title>

        <FormAutocomplete>
          <ContainerAutocomplete>
            <ThemeProvider theme={darkTheme}>
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
                  <TextField
                    {...params}
                    label="Selecione o bairro"
                    margin="normal"
                  />
                )}
              />
            </ThemeProvider>
          </ContainerAutocomplete>
        </FormAutocomplete>

        {inputError && <Error>{inputError}</Error>}

        <Button onClick={handleSelecionaBairro}>Próximo</Button>

        <LinkVoltar>
          <Link to="/">Voltar</Link>
        </LinkVoltar>
      </Centered>
    </>
  );
}

export default Bairro;
