import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import StoreIcon from '@material-ui/icons/Store';

import {
  AnimationContainer,
  Header,
  BlockItems,
  ContainerHorarios,
  TitleCategoria,
  ContainerAutocomplete,
  EstabelecimentosList,
  Estabelecimentos,
} from './styles';

import Logo from '../../images/retomar-svg.svg';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function Horarios() {
  const [categoria, setCategoria] = useState('');

  const categoriasEstabelecimentos = [
    { idCategoria: 1, dsCategoria: 'Essenciais' },
    { idCategoria: 2, dsCategoria: 'Saúde' },
    { idCategoria: 3, dsCategoria: 'Alimentação' },
    { idCategoria: 4, dsCategoria: 'Entretenimento' },
    { idCategoria: 5, dsCategoria: 'Beleza e Corpo' },
    { idCategoria: 6, dsCategoria: 'Loja' },
    { idCategoria: 7, dsCategoria: 'Serviços' },
    { idCategoria: 8, dsCategoria: 'Religioso' },
  ];

  function handleSelecionaCategoria(newValue) {
    setCategoria(newValue);
    console.log(`Escolheu ${categoria.dsCategoria}`);
    // Iterar JSON filtrando categoria
  }

  return (
    <>
      <Header>
        <Link to="/">
          <img src={Logo} width="150" alt="Projeto Retomar" />
        </Link>
      </Header>

      <AnimationContainer>
        <BlockItems>
          <span className="circle-green">∎</span>
          <div>
            <strong>Rio de Janeiro</strong>
            <Link to="/">Alterar cidade</Link>
          </div>
          <span className="circle-green">∎</span>
          <div>
            <strong>Bairro Catete</strong>
            <Link to="/bairro">Alterar bairro</Link>
          </div>
        </BlockItems>

        <ContainerHorarios>
          <TitleCategoria>Selecione uma categoria:</TitleCategoria>

          <ContainerAutocomplete>
            <ThemeProvider theme={darkTheme}>
              <Autocomplete
                options={categoriasEstabelecimentos}
                getOptionLabel={option => option.dsCategoria}
                style={{ width: 300 }}
                id="cidade"
                debug
                onChange={(event, newValue) => {
                  handleSelecionaCategoria(newValue);
                }}
                renderInput={params => (
                  <TextField {...params} label="Categoria" margin="normal" />
                )}
              />
            </ThemeProvider>
          </ContainerAutocomplete>

          <EstabelecimentosList>
            <Estabelecimentos>
              <div className="iconeCategoria">
                <Avatar>
                  <StoreIcon />
                </Avatar>
              </div>
              <div className="estabelecimento">
                <strong>No Ponto Supermercados</strong>
                <p>Alimentação</p>
                <div className="funcionamento">
                  <p>HORÁRIO DE FUNCIONAMENTO</p>
                  <div>
                    <p>Segunda-feira, quarta-feira, sexta-feira:</p>
                    <span>das 8:00 às 12:00</span>
                  </div>
                  <div>
                    <p>Terca-feira e quinta-feira:</p>
                    <span>das 13:30 às 18:00</span>
                  </div>
                  <div>
                    <p>Todos os dias:</p>
                    <span>das 18:00 às 23:59</span>
                  </div>
                </div>
              </div>
            </Estabelecimentos>
            <Estabelecimentos>
              <div className="iconeCategoria">
                <Avatar>
                  <StoreIcon />
                </Avatar>
              </div>
              <div className="estabelecimento">
                <strong>Altas Horas Bebidas</strong>
                <p>Essenciais</p>
                <div className="funcionamento">
                  <p>HORÁRIO DE FUNCIONAMENTO</p>
                  <div>
                    <p>Segunda-feira, quarta-feira, sexta-feira:</p>
                    <span>das 8:00 às 12:00</span>
                  </div>
                  <div>
                    <p>Terca-feira e quinta-feira:</p>
                    <span>das 13:30 às 18:00</span>
                  </div>
                  <div>
                    <p>Todos os dias:</p>
                    <span>das 18:00 às 23:59</span>
                  </div>
                </div>
              </div>
            </Estabelecimentos>
          </EstabelecimentosList>
        </ContainerHorarios>
      </AnimationContainer>
    </>
  );
}

export default Horarios;
