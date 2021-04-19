import styled from 'styled-components';
import { m } from 'framer-motion';

export const _discord = styled.div`
  ${({ theme }) => theme.styles.discord.discord}
`;

export const _overlay = styled(m.div)`
  ${({ theme }) => theme.styles.discord.discord_overlay}
`;

export const _chat = styled(m.div)`
  ${({ theme }) => theme.styles.discord.discord_chat}
`;

export const _button = styled(m.div)`
  ${({ theme }) => theme.styles.discord.discord_button}
`;
