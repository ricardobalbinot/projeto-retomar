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

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const ContainerAutocomplete = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
`;

export const FormAutocomplete = styled.form`
  margin: 40px 0;
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
