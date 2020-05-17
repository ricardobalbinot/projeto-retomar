import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Centered from '../../components/Centered';
import {
  ContainerAutocomplete,
  Header,
  BlockItems,
  Title,
  Error,
  FormAutocomplete,
  Button,
} from './styles';

import Logo from '../../images/retomar-svg.svg';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function Home() {
  const [cidade, setCidade] = useState('');
  const [inputError, setInputError] = useState('');
  const history = useHistory();
  // const classes = useStyles();

  const cidadesEscalonadas = [{ idEstado: 1, dsCidade: 'Rio de Janeiro, RJ' }];

  function handleSelecionaCidade(event) {
    event.preventDefault();

    if (!cidade) {
      setInputError('Informe a cidade desejada');
    } else {
      setInputError('');
      history.push('/bairro');
    }
  }

  return (
    <>
      <Header>
        <img src={Logo} width="150" alt="Projeto Retomar" />
      </Header>

      <BlockItems>
        <div>
          <span className="circle">•</span>
          <span>
            Confira o horário de funcionamento dos estabelecimentos da sua
            cidade
          </span>
        </div>
      </BlockItems>

      <Centered column>
        <Title>Qual sua cidade?</Title>

        <FormAutocomplete>
          <ContainerAutocomplete>
            <ThemeProvider theme={darkTheme}>
              <Autocomplete
                options={cidadesEscalonadas}
                getOptionLabel={option => option.dsCidade}
                style={{ width: 400 }}
                id="cidade"
                autoHighlight
                value={cidade}
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
            </ThemeProvider>
          </ContainerAutocomplete>
        </FormAutocomplete>

        {inputError && <Error>{inputError}</Error>}

        <Button onClick={handleSelecionaCidade}>Próximo</Button>
      </Centered>
    </>
  );
}

export default Home;
