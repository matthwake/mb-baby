import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  margin-top: 10px;
  margin-bottom: 5px;
  padding: 10px 15px 10px 10px;
  border-radius: 5px;
  background: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ImageView = styled.View`
  flex: 1;
  align-self: stretch;
`;

export const Image = styled.Image`
  height: 100px;
`;

export const InfoView = styled.View`
  flex: 2;
  justify-content: center;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #333;
`;

export const Quantities = styled.Text`
  font-size: 13px;
  color: #999;
`;

export const Sizes = styled.Text`
  font-size: 13px;
  color: #999;
`;

export const ValueTotal = styled.Text`
  margin-top: 4px;

  font-size: 13px;
  font-weight: 700;
  color: #999;
`;

export const RemoveView = styled.View`
  flex: 1;
  justify-content: center;
`;

export const RemoveButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  margin-right: 10px;

  align-items: center;
  justify-content: center;
`;

export const RemoveIcon = styled.View``;
