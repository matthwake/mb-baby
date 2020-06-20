import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 15px;
  border-radius: 4px;
  background: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ImageView = styled.View`
  flex: 1;
`;

export const Image = styled.Image`
  height: 170px;
  width: 100%;
`;

export const Info = styled.View`
  flex: 1;
  height: 100%;
  flex-direction: column;
  margin-right: 20px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;

  margin-top: 10px;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 13px;
  text-transform: uppercase;
  color: #bbb;
`;

export const Value = styled.Text`
  text-align: right;
  margin-top: 10px;
`;

export const SubmitButtonView = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const SubmitButton = styled(Button)`
  background: #0ebff3;
  margin-bottom: 10px;
`;
