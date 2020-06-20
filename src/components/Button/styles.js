import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 36px; /** 46 default */
  background: #3b9eff;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #fff;
`;
