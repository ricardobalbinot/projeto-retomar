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
import scheduleJSON from '../../schedule/schedule.json';

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

  function formatStoreName(storeName) {
    return storeName
    .toLowerCase()
    .split(' ')
    .map(storeName => storeName.charAt(0).toUpperCase() + storeName.slice(1))
    .join(' ');
  }

  function formatDaysSchedule(store, turno) {
    const openDays = [];

    store.map((scheduleDay) => {
      if (scheduleDay.monday[turno] === 1) {
        openDays.push('Segunda-feira');
      }
      if (scheduleDay.tuesday[turno] === 1) {
        openDays.push('terça-feira');
      }
      if (scheduleDay.wednesday[turno] === 1) {
        openDays.push('quarta-feira');
      }
      if (scheduleDay.thursday[turno] === 1) {
        openDays.push('quinta-feira');
      }
      if (scheduleDay.friday[turno] === 1) {
        openDays.push('sexta-feira');
      }
      return openDays;
    });
    let strDays = '';

    if (openDays.length === 5) {
      return 'Todos os dias';
    }
    if (openDays.length > 1) {
      openDays[openDays.length - 1] = `e ${openDays[openDays.length - 1]}`;
    }
    if (openDays.length === 2) {
      openDays.map(d => {
        strDays += `${d} `;
        return strDays;
      });
      return strDays.charAt(0).toUpperCase() + strDays.slice(1);
    }
    openDays.map((d, index) => {
      strDays += index !== openDays.length - 1 ? `${d}, ` : d;
      return strDays;
    });
    return strDays.charAt(0).toUpperCase() + strDays.slice(1);
  }

  function buildEstabelecimentosList() {
    return (
      scheduleJSON.map((store) => (
        <Estabelecimentos key={store.storeId}>
          <div className="iconeCategoria">
            <Avatar>
              <StoreIcon />
            </Avatar>
          </div>
          <div className="estabelecimento">
            <strong>{formatStoreName(store.store)}</strong>
            {/* TO-DO: Dado estático. Necessário buscar do schedule.json. <p>Alimentação</p> */}
            <div className="funcionamento">
              <p>HORÁRIO DE FUNCIONAMENTO</p>
              <div>
                <p>
                  {formatDaysSchedule(store.schedule, 0)}
                  :
                </p>
                <span>das 8:00 às 12:00</span>
              </div>
              <div>
                <p>
                  {formatDaysSchedule(store.schedule, 1)}
                  :
                </p>
                <span>das 13:30 às 18:00</span>
              </div>
              {/* <div>
              <p>Todos os dias:</p>
              <span>das 18:00 às 23:59</span>
            </div> */}
            </div>
          </div>
        </Estabelecimentos>
      ))
    );
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
            {buildEstabelecimentosList()}

          </EstabelecimentosList>
        </ContainerHorarios>
      </AnimationContainer>
    </>
  );
}

export default Horarios;
