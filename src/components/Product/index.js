import React from 'react';
// import { Image } from 'react-native';

import {
  Container,
  ImageView,
  Image,
  Info,
  Title,
  Description,
  Value,
  SubmitButtonView,
  SubmitButton,
} from './styles';

import logo from '~/assets/logo/LOGO.png';

export default function Product({ data, index, onPress }) {
  const getValue = data.value;
  const valueProduct = parseFloat(getValue).toFixed(2).replace('.', ',');

  return (
    <Container>
      <ImageView>
        <Image
          source={{ uri: data.image }}
          resizeMethod="resize"
          resizeMode="contain"
          style={{ flex: 1 }}
        />
      </ImageView>

      <Info>
        <Title>{data.title}</Title>
        <Description>{data.description}</Description>
        <Value>R$ {valueProduct}</Value>
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
