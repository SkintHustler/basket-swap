import { css } from 'styled-components';

export const _connect = css`
  width: 100%;
  min-height: 100%;
  height: 100%;
  padding-top: 16px;
  > h3 {
    width: 100%;
    padding: 8px 24px;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-shadow: 1px 1px 4px ${({ theme }) => theme.text['shadow']};
    color: ${({ theme }) => theme.text['active']};
    text-align: center;
  }
`;

export const connect_container = css`
  width: 100%;
  min-height: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const connect_list = css`
  padding: 0 24px;
`;

export const connect_walletconnect = css`
  min-width: 60%;
  width: 60%;
  height: 100%;
  padding-top: 12px;
`;
