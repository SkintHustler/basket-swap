import { css } from 'styled-components';

export const _category_item = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const _category_title = css`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.text['burn']};
  border-bottom: 2px dashed ${({ theme }) => theme.text['burn']};
  padding: 2px 20px;
`;

export const _category_list = css`
  margin-top: 16px;
  padding: 8px;
`;
