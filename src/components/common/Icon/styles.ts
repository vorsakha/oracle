import styled from 'styled-components/native';

const Icon = styled.Image<{ active: boolean }>`
  margin-top: ${({ theme }) => theme.sizes.sm};
  width: ${({ theme }) => theme.sizes.lg};
  height: ${({ theme }) => theme.sizes.lg};
  color: ${({ active, theme: { colors } }) =>
    active ? colors.textPrimary : colors.backgroundPrimary};
`;

export default Icon;
