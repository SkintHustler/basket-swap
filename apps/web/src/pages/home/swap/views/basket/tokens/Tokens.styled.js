import styled from 'styled-components';

export const _tokens = styled.div`
  ${({ theme }) => theme.styles.tokens.tokens}
`;

export const _icon = styled.div`
  ${({ theme }) => theme.styles.tokens.tokens_icon}
`;

export const _name = styled.span`
  ${({ theme }) => theme.styles.tokens.tokens_name}
`;
