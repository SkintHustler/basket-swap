import styled from 'styled-components';
import { m } from 'framer-motion';

export const _basket_maker = styled(m.div)`
  ${({ theme }) => theme.styles.basket.basket}
`;

export const _wrapper = styled(m.div)`
  ${({ theme }) => theme.styles.basket.wrapper}
`;

export const _header = styled(m.div)`
  ${({ theme }) => theme.styles.basket.header}
`;

export const _content = styled(m.div)`
  ${({ theme }) => theme.styles.basket.content}
`;

export const _title = styled.div`
  ${({ theme }) => theme.styles.basket.title}
`;

export const _search = styled.div`
  ${({ theme }) => theme.styles.basket.title}
`;

export const _list = styled.div`
  ${({ theme }) => theme.styles.basket.list}
`;

export const _items = styled.div`
  ${({ theme }) => theme.styles.basket.items}
`;

export const _card = styled.div`
  ${({ theme }) => theme.styles.basket.card}
`;

export const _actions = styled.div`
  ${({ theme }) => theme.styles.basket.actions}
`;

export const _tokens = styled.div`
  ${({ theme }) => theme.styles.basket.tokens}
`;

export const _add = styled.div`
  ${({ theme }) => theme.styles.basket.add}
`;
