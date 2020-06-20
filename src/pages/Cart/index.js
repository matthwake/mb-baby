import React, { useEffect, useState } from 'react';
import { Dimensions, Alert, Modal } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';

import { apiCorreios } from '~/services/api';

import {
  Container,
  ModalView,
  CorreiosView,
  CorreiosInput,
  CorreiosSubmit,
  ModalSubmitButton,
  CartEmpty,
  CartEmptyText,
  ProductView,
  InfoView,
  ValueView,
  ValueText,
  ButtonsView,
  ContinueShop,
  FinishCart,
} from './styles';

import CartFlatList from '~/components/Cart';

const { height } = Dimensions.get('window');

export default function Cart() {
  /**
   * CRIAR VALOR NA TABELA PARA IDENTIFICAR SE É PADRÃO OU PREMIUM
   * SE FOR PADRÃO R$19,90
   * SE FOR PREMIUM R$25,90
   */
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // ENABLED/DISABLED SCROLLVIEW CART
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const [sizeContentCart, setSizeContentCart] = useState(false);

  // ENABLED MODAL CORREIOS
  const [correiosModalVisible, setCorreiosModalVisible] = useState(false);
  const [correiosCepUser, setCorreiosCepUser] = useState('');
  const [correiosResult, setCorreiosResult] = useState();

  const [totalCart, setTotalCart] = useState('');
  const [totalCartVerify, setTotalCartVerify] = useState(false);
  const [totalBoleto, setTotalBoleto] = useState('');

  const getDataUSER = useSelector((state) => state.userReducer);

  async function apiCorreiosTest() {
    if (correiosCepUser.length < 8) {
      alert('Digite um CEP válido');
    } else {
      const response = await apiCorreios
        .get(
          `nCdEmpresa=&sDsSenha=&sCepOrigem=74265220&sCepDestino=${correiosCepUser}&nVlPeso=${correiosUserKG}&nCdFormato=1&nVlComprimento=${correiosComprimento}&nVlAltura=${correiosAltura}&nVlLargura=${correiosLargura}&sCdMaoPropria=n&nVlValorDeclarado=0&sCdAvisoRecebimento=n&nCdServico=04510&nVlDiametro=0&StrRetorno=xml&nIndicaCalculo=3`
        )
        .then((result) => {
          const convert = require('xml-js');
          const xml = result.data;
          const responseJSON = convert.xml2json(xml, {
            compact: true,
            spaces: 4,
          });

          const resultCORREIOS = JSON.parse(responseJSON);
          const { Servicos } = resultCORREIOS;
          const { cServico } = Servicos;

          setCorreiosResult(cServico);
          setScrollEnabled(true);
          setCorreiosModalVisible(false);
          console.tron.log(cServico);
        })
        .catch((err) => console.tron.log(err));
    }
  }

  function closedCart() {
    if (getDataUSER.correios.verify) {
      // getDataUSER.correios.verify
      Alert.alert('Sucesso', 'Comprar realizada!', [{ text: 'Ok' }]);
      setCorreiosModalVisible(false);
    } else {
      setCorreiosModalVisible(true);
      console.tron.log(correiosModalVisible);
    }
  }

  useEffect(() => {
    function valueTotal(totalProducts) {
      setTotalCartVerify(true);
      return setTotalCart(
        parseFloat(19.9 * totalProducts)
          .toFixed(2)
          .replace('.', ',')
      );
    }

    valueTotal(getDataUSER.cart.length);
  }, []);

  useEffect(() => {
    function valueTotalBoleto(percent, totalProducts) {
      const total = totalProducts.replace(',', '.');

      if (totalCartVerify) {
        const calculation = (percent / 100) * total;
        const convertCalculationToFloat = calculation.toFixed(2);
        const subtraction = total - convertCalculationToFloat;
        setTotalBoleto(subtraction.toFixed(2).replace('.', ','));
      }
    }
    valueTotalBoleto(5, totalCart);
  }, [totalCart]);

  useEffect(() => {
    if (sizeContentCart > (25 / 100) * height) {
      setScrollEnabled(true);
    } else {
      setScrollEnabled(false);
    }
  }, [sizeContentCart]);

  if (getDataUSER.cart.length === 0) {
    return (
      <CartEmpty>
        <Icon name="shopping-cart" size={50} color="rgba(0, 0, 0, 0.5)" />
        <CartEmptyText>Carrinho vazio ):</CartEmptyText>
      </CartEmpty>
    );
  }

  function removeItemCart(item, id) {
    const getValueCart = totalCart.replace(',', '.');
    const subtrationValueCart = getValueCart - item.value;
    setTotalCart(subtrationValueCart.toFixed(2).replace('.', ','));

    dispatch({
      type: 'DEL_CART',
      payload: {
        key: id,
      },
    });
  }

  function onContentSizeChange(contentWidth, contentHeight) {
    setSizeContentCart(contentHeight);
  }

  return (
    <Container>
      <Modal
        visible={correiosModalVisible}
        animationType="fade"
        transparent
        onRequestClose={() => setCorreiosModalVisible(false)}
      >
        <ModalView>
          <CorreiosView>
            <CorreiosInput
              placeholder="Digite seu cep"
              returnKeyType="send"
              keyboardType="numeric"
              maxLength={8}
              value={correiosCepUser}
              onChangeText={setCorreiosCepUser}
            />
            <CorreiosSubmit icon="rocket" onPress={apiCorreiosTest} />
          </CorreiosView>
          <ModalSubmitButton
            title="Fechar"
            onPress={() => setCorreiosModalVisible(false)}
          />
        </ModalView>
      </Modal>

      <ProductView>
        <ScrollView
          scrollEnabled={scrollEnabled}
          onContentSizeChange={onContentSizeChange}
        >
          <FlatList
            data={getDataUSER.cart}
            renderItem={({ item, index }) => (
              <CartFlatList
                image={item.image}
                title={item.title}
                sizes={item.size}
                value={item.value}
                onPress={() => removeItemCart(item, index)}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
      </ProductView>

      <InfoView>
        <ValueView>
          <ValueText fontSize="16px">Total: R${totalCart}</ValueText>
          <ValueText>
            via Boleto Bancário por R${totalBoleto} com 5% de desconto
          </ValueText>
          <ValueText>ou em até 12x com acréscimo</ValueText>
        </ValueView>
        <ButtonsView>
          <ContinueShop onPress={() => navigation.navigate('Home')}>
            CONTINUAR COMPRANDO
          </ContinueShop>
          <FinishCart onPress={closedCart}>Finalizar compra</FinishCart>
        </ButtonsView>
      </InfoView>
    </Container>
  );
}
