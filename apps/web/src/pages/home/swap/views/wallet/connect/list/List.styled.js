import styled from 'styled-components';
import { colors } from 'design';

export const _list = styled.div`
  ${({ theme }) => theme.styles.list.list}
`;

export const _item = styled.div`
  ${({ theme }) => theme.styles.list.list_item}
`;

export const _bubble = styled.div`
  ${({ theme }) => theme.styles.list.list_bubble}
`;

export const _icon = styled.div`
  ${({ theme }) => theme.styles.list.list_icon}
`;

export const _name = styled.div`
  ${({ theme }) => theme.styles.list.list_name}
`;
