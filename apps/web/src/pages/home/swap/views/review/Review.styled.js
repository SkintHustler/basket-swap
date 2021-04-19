import styled from 'styled-components';
import { m } from 'framer-motion';

export const _review = styled(m.div)`
  ${({ theme }) => theme.styles.review.review}
`;

export const _title = styled.div`
  ${({ theme }) => theme.styles.review.title_review}
`;

export const _content = styled.div`
  ${({ theme }) => theme.styles.review.content_review}
`;

export const _container = styled.div`
  ${({ theme }) => theme.styles.review.container_review}
`;

export const _button = styled.button`
  ${({ theme }) => theme.styles.review.button_review}
`;
