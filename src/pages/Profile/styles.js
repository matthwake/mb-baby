import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 0 30px;
`;

export const ButtonGoBack = styled(RectButton).attrs({
  underlayColor: 'transparent',
})`
  height: 46px;

  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export const ButtonGoBackText = styled.Text`
  font-size: 14px;
  color: #fff;
`;

export const ProfileView = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 60px;
`;

export const Image = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 75px;
`;

export const InfoView = styled.View`
  justify-content: center;
  margin-left: 10px;
`;

export const InfoName = styled.Text`
  font-size: 16px;
`;

export const InfoEmail = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
`;

export const ContactView = styled.View`
  flex: 1;
  margin-top: 20px;
`;

export const SessionsContact = styled.View`
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  margin-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.2);
`;

export const TextInGeral = styled.Text`
  font-size: 14px;
  margin-left: 5px;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.6);
`;

export const OptionsView = styled.View`
  flex: 1;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export const ButtonLogout = styled(RectButton)`
  height: 46px;
  background: #14c3f6;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ButtonLogoutText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
