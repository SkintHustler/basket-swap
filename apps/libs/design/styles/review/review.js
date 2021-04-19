import { css } from 'styled-components';

export const _review = css`
  min-width: 100%;
  width: 100%;
  min-height: 80px;
  height: 80px;
  padding-top: 20px;
  position: relative;
  border-radius: 0 0 ${({ theme }) => theme.border_radius['roundest']};
  ${({ theme }) => theme.border_radius['roundest']};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const _title_review = css`
  position: relative;
  z-index: ${({ theme }) => theme.zindex.swap.center};
  min-width: 100%;
  width: 100%;
  height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const _content_review = css`
  position: relative;
  top: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  > h3 {
    color: ${({ theme }) => theme.text['active']};
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-shadow: 1px 1px 4px ${({ theme }) => theme.text['shadow']};
    padding: 0 24px;
  }
  > svg {
    min-width: 16px;
    width: 16px;
    min-height: 16px;
    height: 16px;
    fill: rgba(255, 255, 255, 0.55);
    filter: drop-shadow(1px 1px 4px ${({ theme }) => theme.text['shadow']});
    transform: rotate(-90deg);
  }
`;

export const _container_review = css`
  min-width: 100%;
  width: 100%;
  min-height: 100%;
  height: 100%;
  background: ${({ theme }) => theme.background['low']};
  box-shadow: 1px 1px 16px 2px rgba(0, 0, 0, 0.12),
    inset 0 0 23px 0 rgba(255, 255, 255, 0.12);
  border-radius: ${({ theme }) => theme.border_radius['rounder_outside']};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const _button_review = css`
  min-width: 120px;
  width: 120px;
  min-height: 54px;
  height: 54px;
  border-radius: ${({ theme }) => theme.border_radius['button']};
  background: black;
  cursor: pointer;
`;
