import styled from 'styled-components/native';

const Icon = styled.Image<{ active: boolean; size: 'small' | 'regular' }>`
  margin-top: ${({ theme }) => theme.sizes.sm};
  width: ${({ theme, size }) =>
    size === 'small' ? theme.sizes.lg : theme.sizes.xl};
  height: ${({ theme, size }) =>
    size === 'small' ? theme.sizes.lg : theme.sizes.xl};
  color: ${({ active, theme: { colors } }) =>
    active ? colors.textPrimary : colors.backgroundPrimary};
`;

export default Icon;
