import React from 'react';

import {
  Container,
  ImageView,
  Image,
  Info,
  Title,
  Size,
  Value,
  SubmitButtonView,
  SubmitButton,
} from './styles';

export default function ProductCart({ data, index, onPress }) {
  return (
    <Container>
      <ImageView>
        <Image source={{ uri: data.image }} resizeMode="contain" />
      </ImageView>

      <Info>
        <Title>{data.title}</Title>
        <Size>{data.sizeselected}</Size>
        <Value>R$ {data.value}0</Value>
        <SubmitButtonView>
          <SubmitButton
            onPress={() => {
              onPress(index);
            }}
          >
            VISUALIZAR
          </SubmitButton>
        </SubmitButtonView>
      </Info>
    </Container>
  );
}
