import styled from 'styled-components';
import { shade } from 'polished';

export const AnimationContainer = styled.div`
  animation: slideUp 1s cubic-bezier(0.29, 0.71, 0.73, 0.76);

  @keyframes slideUp {
    from {
      transform: translateY(500px);
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

export const Form = styled.form`
  margin-top: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 500px;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0px 0px 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    &::placeholder {
      color: #3a3a3a;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;
