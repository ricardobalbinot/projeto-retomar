import styled from 'styled-components';

export const AnimationContainer = styled.div`
  animation: slideUp 0.6s cubic-bezier(0.31, 0.77, 0.78, 0.95);

  @keyframes slideUp {
    from {
      transform: translateY(200px);
    }

    to {
      transform: translateY(0);
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 20px 0 30px;
  height: 100px;
`;

export const BlockItems = styled.div`
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    margin-right: 50px;

    span,
    strong {
      font-size: 18px;
    }

    a {
      font-size: 15px;
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #a8a8b3;
      transition: color 0.2s;

      &:hover {
        color: #666;
      }
    }
  }

  .circle-green {
    color: #2dff73;
    font-size: 25px;
    margin-right: 15px;
  }
`;

export const ContainerHorarios = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 960px;
  margin: 40px auto 0;
`;

export const TitleCategoria = styled.h3`
  max-width: 450px;
  line-height: 56px;
`;

export const ContainerAutocomplete = styled.div`
  margin: 10px;
`;

export const EstabelecimentosList = styled.div`
  margin-top: 20px;

  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;

  /* div {
    width: 450px;
    margin: 10px;
    height: 50px;
    background: #fff;
    border-radius: 10px;
  } */
`;

export const Estabelecimentos = styled.div`
  display: flex;
  width: 450px;
  margin: 10px;
  background: #fff;
  border-radius: 10px;
  transition: transform 0.2s;

  &:hover {
    transform: translateX(10px);
  }

  .iconeCategoria {
    padding: 20px;
  }

  .estabelecimento {
    padding: 15px;
    flex: 1;

    strong {
      font-size: 17px;
      color: #3d3d4d;
    }

    p {
      font-size: 14px;
      color: #a8a8b3;
      margin-top: 4px;
    }

    .funcionamento {
      margin-top: 20px;

      div {
        margin-top: 5px;
      }

      span {
        font-size: 14px;
        color: #05a200;
      }
    }
  }
`;
