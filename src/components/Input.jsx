import styled from 'styled-components';

const Input = styled.input`
  font-family: var(--font-family);
  background: var(--background-box);
  color: var(--text);
  padding: var(--s-unit-2);
  border: 1px solid var(--border-neutral);
  border-radius: var(--rounded-md);
  font-size: var(--body);
  width: 100%;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: var(--shadow-default);
  }

  &::placeholder {
    color: var(--text-soft);
  }
`;

export default Input; 