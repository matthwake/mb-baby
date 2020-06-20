import styled from 'styled-components/native';

import Button from '~/components/Button';
import ButtonCorreios from '~/components/ButtonCorreios';
import Input from '~/components/Input';

export const Container = styled.View`
  flex: 1;
`;

export const ImageView = styled.View`
  flex: 1;
  width: auto;
  background: #fff; /** #e7e7e7 */
`;

export const Image = styled.Image`
  width: auto;
  height: 100%;
`;

export const Info = styled.View`
  flex: 1;
  padding: 10px;
`;

export const Title = styled.Text`
  margin-top: 20px;
`;

export const Description = styled.Text`
  font-size: 16px;
`;

export const SizeView = styled.View`
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  padding: 5px 0 5px 0;
`;

export const SizeTitle = styled.Text`
  font-size: 14px;
  margin-bottom: 10px;
`;

export const SizeButton = styled.TouchableOpacity`
  width: 35px;
  height: 35px;

  border-radius: 35px;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  margin-bottom: 5px;
  background: #0ebff3;
`;

export const SizeText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: #fff;
`;

export const TwoContentView = styled.View`
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  padding: 10px 0px 10px 0px;
  margin-top: 5px;
`;

export const TwoContentViewItems = styled.View`
  flex-direction: row;
`;

export const TwoContentViewValueCorreios = styled.View`
  flex-direction: column;
`;

export const TwoContentTextTextCorreios = styled.Text`
  font-size: 13px;
`;

export const ValueView = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ValueBold = styled.Text`
  font-weight: bold;
`;

export const Value = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const ValueTextTiny = styled.Text`
  font-size: 16px;
`;

export const ValueColor = styled.Text`
  font-size: 22px;
  font-weight: 700;
  color: #0ebff3;
`;

export const CorreiosView = styled.View`
  flex: 2;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
`;

export const CorreiosInput = styled(Input)`
  flex: 1;
  width: 100%;
  margin-left: 10px;
  margin-right: 10px;
`;

export const CorreiosSubmit = styled(ButtonCorreios)`
  margin-right: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 10px;
  background: #0ebff3;
`;

export const StockAvailableView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
  margin-top: 5px;
`;

export const StockAvailableText = styled.Text`
  font-size: 14px;
`;

export const StockAvailableTextVerify = styled.Text`
  font-size: 14px;
  color: ${(props) => props.color || '#0ebff3'};
`;
