import styled from 'styled-components/native';

import Input from '~/components/Input';
import ButtonSocial from '~/components/ButtonFacebook';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const TitlePage = styled.Text`
  margin-bottom: 20px;

  text-align: center;
  font-weight: bold;
  font-size: 16px;
  color: #fff;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const LoginButtonFacebook = styled(ButtonSocial)``;

export const LoginButtonGoogle = styled(ButtonSocial)`
  background: #efefef;
`;

export const Logout = styled.TouchableOpacity.attrs({
  underlayColor: 'transparent',
})`
  width: 60px;
  align-items: center;
  justify-content: center;
  background: transparent;
  margin-top: 20px;
`;

export const LogoutText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #fff;
`;
