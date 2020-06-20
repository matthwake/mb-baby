import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  ImageView,
  Image,
  InfoView,
  Title,
  Sizes,
  ValueTotal,
  RemoveButton,
} from './styles';

export default function Cart({ image, title, sizes, value, onPress }) {
  const valuePasseToFloat = parseFloat(value).toFixed(2).replace('.', ',');

  return (
    <Container>
      <ImageView>
        <Image source={{ uri: image }} />
      </ImageView>
      <InfoView>
        <Title>{title}</Title>
        <Sizes>Tamanho(s): {sizes}</Sizes>
        <ValueTotal>R${valuePasseToFloat}</ValueTotal>
      </InfoView>
      <RemoveButton onPress={onPress}>
        <Icon name="times" size={20} color="#ff0000" />
      </RemoveButton>
    </Container>
  );
}
