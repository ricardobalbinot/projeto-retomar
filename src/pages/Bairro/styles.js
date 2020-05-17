import styled from 'styled-components';
import { shade } from 'polished';

export const AnimationContainer = styled.div`
  animation: slideUp 1s cubic-bezier(0.25, 0.84, 0.83, 0.87);

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

export const BlockItems = styled.ul`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;

    span,
    strong {
      font-size: 20px;
    }

    .circle {
      color: #fff;
      font-size: 45px;
      margin-right: 15px;
    }
  }

  div:first-child {
    align-items: center;
  }

  div + div {
    animation: slideDown 0.3s cubic-bezier(0.25, 0.84, 0.83, 0.87);
    margin-top: 10px;

    div {
      display: flex;
      flex-direction: column;
    }

    .circle-green {
      color: #2dff73;
      font-size: 45px;
      margin-right: 15px;
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

  @keyframes slideDown {
    from {
      transform: translateY(20px);
    }

    to {
      transform: translateY(0);
    }
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  max-width: 450px;
  line-height: 56px;

  margin-top: 17px;

  animation: slideDown 0.3s cubic-bezier(0.25, 0.84, 0.83, 0.87);

  @keyframes slideDown {
    from {
      transform: translateY(20px);
    }

    to {
      transform: translateY(0);
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const ContainerAutocomplete = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
`;

export const FormAutocomplete = styled.form`
  max-width: 800px;

  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 500px;
  height: 50px;
  border: 0;
  border-radius: 5px;
  color: #3a3a3a;
  border: 2px solid #fff;
  padding: 0 24px;

  &::placeholder {
    color: #3a3a3a;
  }
`;

export const Button = styled.button`
  width: 210px;
  height: 60px;
  background: #00c677;
  border-radius: 5px;
  border: 0;
  color: #fff;
  margin-top: 30px;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#00C677')};
  }
`;

export const LinkVoltar = styled.div`
  margin-top: 10px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }
  }
`;
