import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 46px;
  background: #4267b2;
  border-radius: 50px;

  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const Text = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 16px;
`;
