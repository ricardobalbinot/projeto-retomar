import styled from 'styled-components';
import { shade } from 'polished';

export const AnimationContainer = styled.div`
  animation: slideDown 0.8s cubic-bezier(0.25, 0.84, 0.83, 0.87);

  @keyframes slideDown {
    from {
      transform: translateY(-200px);
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
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

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
`;

export const Title = styled.h1`
  font-size: 32px;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;

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
  display: flex;
  max-width: 800px;
`;

export const Button = styled.button`
  width: 210px;
  height: 60px;
  margin-top: 30px;
  background: #00c677;
  border-radius: 5px;
  border: 0;
  color: #fff;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#00C677')};
  }
`;
