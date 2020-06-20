import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';
// marginRight: iconMargin,

export default function ButtonFacebook({
  children,
  icon,
  marginText,
  iconColor,
  colorText,
  ...rest
}) {
  return (
    <Container {...rest}>
      {icon && (
        <Icon
          name={icon}
          size={25}
          color={iconColor}
          style={{
            marginLeft: 30,
          }}
        />
      )}
      <Text style={{ marginLeft: marginText, color: colorText, flex: 1 }}>
        {children}
      </Text>
    </Container>
  );
}

ButtonFacebook.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.string,
  marginText: PropTypes.number,
  iconColor: PropTypes.string,
  colorText: PropTypes.string,
};

ButtonFacebook.defaultProps = {
  icon: null,
  marginText: 0,
  iconColor: 'rgba(255, 255, 255, 0.6)',
  colorText: '#ffffff',
};
