import React from 'react';

import { Container, Image } from './styles';

export default function ImageProfile({ image }) {
  return (
    <Container>
      <Image source={{ uri: image }} />
    </Container>
  );
}
