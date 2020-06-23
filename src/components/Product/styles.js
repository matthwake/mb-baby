import styled from 'styled-components/native';

import Button from '~/components/Button';

export const ContainerButton = styled.TouchableOpacity`
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  padding: 10px;
  background: #fff;
`;

export const ImageView = styled.View`
  flex: 1;
  align-items: center;
`;

export const Image = styled.Image`
  height: 150px;
  width: 150px;
`;

export const Info = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: column;
`;

export const Title = styled.Text`
  font-family: 'Ubuntu-Regular';
  text-transform: capitalize;
  font-size: 16px;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: 'Ubuntu-Regular';
  font-size: 12px;
  text-transform: uppercase;
  color: #bbb;
`;

export const Value = styled.Text`
  font-family: 'Ubuntu-Bold';
  font-size: 16px;
  color: #0ebff3;

  margin-top: 5px;
`;

export const SubmitButtonView = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const SubmitButton = styled(Button)`
  background: #0ebff3;
  margin-bottom: 10px;
`;
