import styled from 'styled-components';

const Button = styled.button`
  font-family: var(--font-family);
  background-color: var(--primary);
  color: var(--bancoppel);
  padding: var(--s-unit-2) var(--s-unit-4);
  border: none;
  border-radius: var(--rounded-full);
  font-size: var(--body);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: var(--shadow-default);

  &:hover {
    background-color: var(--primary-hover);
    transform: translateY(-1px);
    box-shadow: var(--shadow-hover);
  }

  &:active {
    background-color: var(--primary-press);
    transform: translateY(0);
  }

  &:disabled {
    background-color: var(--text-neutral);
    cursor: not-allowed;
    transform: none;
  }
`;

export default Button; 