import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton).attrs({
  underlayColor: 'transparent',
})`
  width: 46px;
  height: 46px;
  border-radius: 4px;
  background: #ffaa00;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
