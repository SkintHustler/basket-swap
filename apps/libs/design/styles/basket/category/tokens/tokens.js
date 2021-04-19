import { css } from 'styled-components';

export const token_tokens = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: -2px -2px 4px 0 rgba(255, 255, 255, 0.2),
    2px 2px 4px 0 rgba(0, 0, 0, 0.16);
  border-radius: ${({ theme }) => theme.border_radius['round']};
  cursor: pointer;
  height: 48px;
  padding: 0 8px;
  white-space: nowrap;
`;

export const tokens_icon = css`
  min-width: 32px;
  width: 32px;
  min-height: 32px;
  height: 32px;
`;

export const tokens_name = css`
  color: ${({ theme }) => theme.text['burn']};
  font-size: 18px;
  font-weight: 700;
  margin-left: 6px;
  white-space: nowrap;
`;
