import styled from 'styled-components';
import { m } from 'framer-motion';

export const _qr = styled(m.div)`
  ${({ theme }) => theme.styles.QR.qr}
`;

export const _container = styled.div`
  ${({ theme }) => theme.styles.QR.qr_container}
`;

export const _code = styled.div`
  ${({ theme }) => theme.styles.QR.qr_code}
`;

export const _name = styled.div`
  ${({ theme }) => theme.styles.QR.qr_name}
`;

export const _title = styled.span`
  ${({ theme }) => theme.styles.QR.qr_title}
`;

export const _float = styled.div`
  ${({ theme }) => theme.styles.QR.qr_float}
`;

export const _logo = styled.div`
  ${({ theme }) => theme.styles.QR.qr_logo}
`;
