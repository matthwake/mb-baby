import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function ButtonCorreios({ icon, iconMargin, ...rest }) {
  return (
    <Container {...rest}>
      {icon && (
        <Icon
          name={icon}
          size={25}
          color="rgba(255, 255, 255, 0.6)"
          style={{ marginRight: iconMargin }}
        />
      )}
    </Container>
  );
}

ButtonCorreios.propTypes = {
  icon: PropTypes.string.isRequired,
  iconMargin: PropTypes.number,
};

ButtonCorreios.defaultProps = {
  iconMargin: 0,
};
