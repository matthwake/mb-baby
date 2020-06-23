import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TInput } from './styles';

const Input = ({ style, icon, iconColor, colorText, ...rest }, ref) => {
  const colorDark = 'rgba(255, 255, 255, 0.1)';
  const colorWhite = 'rgba(255, 255, 255, 1)';
  return (
    <Container style={style}>
      {icon && (
        <Icon
          name={icon}
          size={20}
          color={iconColor === 'colorWhite' ? colorWhite : colorDark}
        />
      )}
      <TInput {...rest} ref={ref} colorText={colorText} />
    </Container>
  );
};

Input.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  iconColor: PropTypes.string,
  colorText: PropTypes.string,
};

Input.defaultProps = {
  icon: null,
  style: {},
  iconColor: 'rgba(255, 255, 255, 1)',
  colorText: null,
};

export default forwardRef(Input);
