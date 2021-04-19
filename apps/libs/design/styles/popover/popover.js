import { css } from 'styled-components';

export const _popover = css`
  position: relative;
  z-index: ${({ theme }) => theme.zindex.popover};
  width: 0;
  height: 0;
  transform: translate(
    ${({ $left, $top }) => `${$left || 0}px, ${$top || 0}px`}
  );
`;

export const popover_container = css`
  left: 50%;
  top: 50%;
`;
