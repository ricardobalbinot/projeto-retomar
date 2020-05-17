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
    { idCategoria: 1, dsCategoria: 'Essenciais', correspondingTypes: ['atm', 'bank', 'hospital', 'pharmacy', 'supermarket'] },
    { idCategoria: 2, dsCategoria: 'Saúde', correspondingTypes: ['physiotherapist', 'hospital', 'doctor', 'dentist', 'drugstore', 'pharmacy'] },
    { idCategoria: 3, dsCategoria: 'Alimentação', correspondingTypes: ['supermarket', 'restaurant', 'meal_takeaway', 'meal_delivery', 'bakery', 'bar', 'cafe'] },
    { idCategoria: 4, dsCategoria: 'Entretenimento', correspondingTypes: ['zoo', 'tourist_attraction', 'stadium', 'rv_park', 'park', 'night_club', 'museum', 'movie_theater', 'movie_rental', 'library', 'casino', 'campground', 'bowling_alley', 'bar', 'amusement_park', 'aquarium', 'art_gallery'] },
    { idCategoria: 5, dsCategoria: 'Beleza e Corpo', correspondingTypes: ['hair_care', 'spa', 'gym', 'beauty_salon'] },
    { idCategoria: 6, dsCategoria: 'Loja', correspondingTypes: ['store', 'pet_store', 'shopping_mall', 'shoe_store', 'liquor_store', 'jewelry_store', 'home_goods_store', 'hardware_store', 'furniture_store', 'gas_station', 'florist', 'electronics_store', 'department_store', 'convenience_store', 'clothing_store', 'car_dealer', 'book_store', 'bicycle_store'] },
    { idCategoria: 7, dsCategoria: 'Serviços', correspondingTypes: ['veterinary_care', 'university', 'travel_agency', 'transit_station', 'storage', 'school', 'secondary_school', 'roofing_contractor', 'real_estate_agency', 'primary_school', 'post_office', 'police', 'plumber', 'parking', 'painter', 'moving_company', 'movie_rental', 'atm', 'bank', 'lodging', 'locksmith', 'local_government_office', 'lawyer', 'laundry', 'insurance_agency', 'funeral_home', 'fire_station', 'embassy', 'electrician', 'courthouse', 'city_hall', 'cemetery', 'accounting', 'car_rental', 'car_repair', 'car_wash'] },
    { idCategoria: 8, dsCategoria: 'Religioso', correspondingTypes: ['synagogue', 'church', 'hindu_temple', 'mosque'] },
    { idCategoria: 9, dsCategoria: 'Transporte', correspondingTypes: ['train_station', 'taxi_stand', 'subway_station', 'light_rail_station', 'airport', 'bus_station'] },

  ];

  function handleSelecionaCategoria(newValue) {
    setCategoria(newValue);
    // Iterar JSON filtrando categoria
  }

  function formatStoreName(storeName) {
    return storeName
      .toLowerCase()
      .split(' ')
      .map(storeNames => storeNames.charAt(0).toUpperCase() + storeNames.slice(1))
      .join(' ');
  }

  function translateCategorias(types) {
    const categorias = [];

    categoriasEstabelecimentos.map((categoriaActual) => {
      categoriaActual.correspondingTypes.map((correspondingType) => {
        if (types.includes(correspondingType) && !categorias.includes(categoriaActual)) {
          categorias.push(categoriaActual);
          return categorias;
        }
        return categorias;
      });
      return categorias;
    });

    return categorias;
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
      scheduleJSON.map((store) => {
        const categoriasStore = translateCategorias(store.types);
        const categoriasText = categoriasStore.map((m, index) => (categoriasStore.length - 1 !== index ? `${m.dsCategoria}, ` : m.dsCategoria));
        let inFilter = false;
        if (categoria === undefined || categoria === null || categoria === '') {
          inFilter = true;
        } else {
          categoriasStore.map((cat) => {
            if (cat.idCategoria === categoria.idCategoria) {
              inFilter = true;
              return true;
            }
            return false;
          });
        }

        if (inFilter) {
          return (
            <Estabelecimentos key={store.storeId}>
              <div className="iconeCategoria">
                <Avatar>
                  <StoreIcon />
                </Avatar>
              </div>
              <div className="estabelecimento">
                <strong>{formatStoreName(store.store)}</strong>
                <p>{store.vicinity}</p>
                <p>{categoriasText}</p>
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
          );
        }
        return <div />;
      })
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
          <TitleCategoria>Filtre por uma categoria:</TitleCategoria>

          <ContainerAutocomplete>
            <ThemeProvider theme={darkTheme}>
              <Autocomplete
                options={categoriasEstabelecimentos}
                getOptionLabel={option => option.dsCategoria}
                getOptionSelected={option => option.dsCategoria}
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
