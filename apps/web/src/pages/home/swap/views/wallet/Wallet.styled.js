import styled from 'styled-components';
import { m } from 'framer-motion';

export const _wallet = styled.div`
  ${({ theme }) => theme.styles.wallet.wallet}
`;

export const _action = styled.div`
  ${({ theme }) => theme.styles.wallet.wallet_action}
`;

export const _content = styled.div`
  ${({ theme }) => theme.styles.wallet.wallet_content}
`;

export const _button = styled(m.div)`
  ${({ theme }) => theme.styles.wallet.wallet_button}
`;

export const _container = styled.div`
  ${({ theme }) => theme.styles.wallet.wallet_container}
`;
