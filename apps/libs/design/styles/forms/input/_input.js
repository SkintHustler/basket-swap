import { css } from 'styled-components';

export const _input = css`
  min-width: 100%;
  width: 100%;
  height: 42px;
  border-radius: 4px;
  background: ${({ theme }) => theme.background.lowest};
  box-shadow: inset 1px 1px 4px 0 rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: row;
  align-items: center;
  > input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 4px 16px;
    line-height: 1;
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.text.input};
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.08);
    letter-spacing: 0.5px;
    &::placeholder {
      color: ${({ theme }) => theme.text.placeholder};
      text-shadow: none;
    }
  }
`;
export const input_float = css`
  width: 0;
  height: 0;
  display: flex;
  flex-direction: column;
  align-items: ${({ $left }) => ($left ? 'flex-end' : 'flex-start')};
  justify-content: ${({ $left }) => ($left ? 'flex-start' : 'flex-end')};
`;

export const input_arrow = css`
  > svg {
    fill: ${({ theme }) => theme.background['higher']};
    stroke: ${({ theme }) => theme.background['base']};
    transform: ${({ $left }) =>
      $left
        ? 'translate(-16px, 35%) rotate(175deg)'
        : 'translate(16px, -25%) rotate(-5deg)'};
    min-width: 20px;
    width: 20px;
    min-height: 56px;
    height: 56px;
    cursor: pointer;
    transition: transform ease-out 100ms;
    &:hover {
      transform: ${({ $left }) =>
        $left
          ? 'translate(-16px, 34%) rotate(175deg) scale(1.16)'
          : 'translate(16px, -22%) rotate(-5deg) scale(1.16)'};
    }
  }
`;

export const input_ticker = css`
  width: 0;
  height: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 16px;
`;

export const input_symbol = css`
  color: ${({ theme }) => theme.text.placeholder};
  text-shadow: none;
  line-height: 1;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;
`;
