import styled from 'styled-components/native';

const CustomText = styled.Text<{ active: boolean }>`
  color: ${({ active, theme: { colors } }) =>
    active ? colors.textPrimary : colors.backgroundPrimary};
  margin-bottom: 15px;
  font-family: ${({
    theme: {
      fonts: { primaryBold, primary },
    },
    active,
  }) => (active ? primaryBold : primary)};
`;

export default CustomText;
