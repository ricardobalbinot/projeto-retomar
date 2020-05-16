import styled from 'styled-components';
import { shade } from 'polished';

export const AnimationContainer = styled.div`
  animation: slideUp 0.8s cubic-bezier(0.25, 0.84, 0.83, 0.87);

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
  justify-content: space-between;

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

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const FormAutocomplete = styled.form`
  margin-top: 40px;
  max-width: 800px;

  display: flex;
  align-items: center;
`;

export const ContainerAutocomplete = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
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
  height: 35px;
  background: #1b76c1;
  border-radius: 5px;
  border: 0;
  color: #fff;
  margin-top: 30px;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#1B76C1')};
  }
`;
