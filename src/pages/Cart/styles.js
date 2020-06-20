import styled from 'styled-components/native';

import Button from '~/components/Button';
import Input from '~/components/Input';
import ButtonCorreios from '~/components/ButtonCorreios';

export const Container = styled.View`
  flex: 1;
  margin-left: 10px;
  margin-right: 10px;
`;

export const ModalView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.3);
  padding: 0 10px 0 10px;
`;

export const CorreiosView = styled.View`
  width: 100%;
  height: 150px;
  flex-direction: row;

  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 0 10px 0 10px;
  border-radius: 4px;
`;

export const CorreiosInput = styled(Input)`
  flex: 1;
  margin-right: 10px;
`;

export const CorreiosSubmit = styled(ButtonCorreios).attrs({
  underlayColor: 'transparent',
})``; // UNDERLAYCOLOR SEM EFEITO

export const ModalSubmitButton = styled.Button.attrs({
  underlayColor: 'transparent',
})`
  background: transparent;
`;

export const CartEmpty = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const CartEmptyText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.5);
`;

export const ProductView = styled.View`
  flex: 2;
`;

export const InfoView = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ValueView = styled.View`
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ValueText = styled.Text`
  font-size: ${(props) => props.fontSize || '14px'};
  font-weight: bold;
  color: rgba(0, 0, 0, 0.7);
`;

export const ButtonsView = styled.View`
  align-self: stretch;
  margin-top: 20px;
`;

export const ContinueShop = styled(Button)`
  background: #64d1f0;
  margin-bottom: 10px;
`;

export const FinishCart = styled(Button)`
  background: #0ebff3;
  margin-bottom: 20px;
`;
