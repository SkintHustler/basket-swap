import { css } from 'styled-components';

export const _proxy = css`
  position: absolute;
  z-index: ${({ theme }) => theme.zindex['proxy']};
`;
