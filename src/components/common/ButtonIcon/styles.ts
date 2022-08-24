import styled from 'styled-components/native';

import Bitcoin from '../../../assets/bitcoin.svg';
import Search from '../../../assets/search.svg';
import Sun from '../../../assets/sun.svg';
import Moon from '../../../assets/moon.svg';

export const ButtonIconWrapper = styled.TouchableOpacity`
  flex: 1;
  height: 42px;
  width: 42px;
  align-items: center;
  justify-content: center;
`;

export const BitcoinIcon = styled(Bitcoin)`
  width: ${({ theme }) => theme.sizes.lg};
  height: ${({ theme }) => theme.sizes.lg};
  color: ${({ theme }) => theme.colors.backgroundPrimary};
  z-index: 20;
`;

export const SearchIcon = styled(Search)`
  width: ${({ theme }) => theme.sizes.lg};
  height: ${({ theme }) => theme.sizes.lg};
  color: ${({ theme }) => theme.colors.backgroundPrimary};
`;

export const SunIcon = styled(Sun)`
  width: ${({ theme }) => theme.sizes.lg};
  height: ${({ theme }) => theme.sizes.lg};
  color: ${({ theme }) => theme.colors.backgroundPrimary};
`;

export const MoonIcon = styled(Moon)`
  width: ${({ theme }) => theme.sizes.lg};
  height: ${({ theme }) => theme.sizes.lg};
  color: ${({ theme }) => theme.colors.backgroundPrimary};
`;
