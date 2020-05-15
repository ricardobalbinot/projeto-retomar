import styled from 'styled-components';
import { shade } from 'polished';

export const AnimationContainer = styled.div`
  animation: slideDown 0.9s cubic-bezier(0.24, 0.92, 0.81, 1.01);

  @keyframes slideDown {
    from {
      transform: translateY(-200px);
    }

    to {
      transform: translateY(0);
    }
  }
`;

export const ContainerAutocomplete = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 70px;

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

  svg {
    margin-right: 4px;
  }
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 800px;

  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  width: 210px;
  height: 35px;
  background: #1b76c1;
  border-radius: 5px;
  border: 0;
  color: #fff;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#1B76C1')};
  }
`;
