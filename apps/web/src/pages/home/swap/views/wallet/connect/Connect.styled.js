import styled from 'styled-components';
import { m } from 'framer-motion';

export const _connect = styled(m.div)`
  ${({ theme }) => theme.styles.connect.connect}
`;

export const _container = styled.div`
  ${({ theme }) => theme.styles.connect.connect_container}
`;

export const _list = styled.div`
  ${({ theme }) => theme.styles.connect.connect_list}
`;

export const _walletconnect = styled.div`
  ${({ theme }) => theme.styles.connect.connect_walletconnect}
`;
