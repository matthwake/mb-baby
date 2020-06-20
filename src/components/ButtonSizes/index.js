import React from 'react';
import { View } from 'react-native';

import { Container, Button, Text } from './styles';

export default function ButtonSizes({ id, size, selected }) {
  function onSelect() {
    selected = !true;
  }

  return (
    <Container>
      <Button
        style={{ backgroundColor: selected ? '#0b9ec9' : '#0ebff3' }}
        onPress={() => {
          onSelect();
        }}
      >
        <Text>{size}</Text>
      </Button>
    </Container>
  );
}
