import React, { useEffect, useState, useLayoutEffect } from 'react';
import { ActivityIndicator, ScrollView, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { FlatList } from 'react-native-gesture-handler';

import { apiCorreios } from '~/services/api';

import {
  Container,
  ImageView,
  Image,
  Info,
  Title,
  Description,
  SizeView,
  SizeTitle,
  SizeButton,
  SizeText,
  TwoContentView,
  TwoContentViewItems,
  TwoContentViewValueCorreios,
  TwoContentTextTextCorreios,
  ValueView,
  Value,
  ValueTextTiny,
  ValueColor,
  CorreiosView,
  CorreiosInput,
  CorreiosSubmit,
  SubmitButton,
  StockAvailableView,
  StockAvailableText,
  StockAvailableTextVerify,
} from './styles';

function Size({ index, numberSize, selectedSize, onSelectSize }) {
  return (
    <SizeButton
      onPress={() => onSelectSize(index)}
      style={{
        backgroundColor: selectedSize ? '#0ef' : '#0ebff3',
      }}
    >
      <SizeText>{numberSize}</SizeText>
    </SizeButton>
  );
}

export default function Product() {
  const [selectedSize, setSelectedSize] = useState(new Map());

  const onSelectSize = React.useCallback(
    (index) => {
      const newSelectedSize = new Map(selectedSize);
      newSelectedSize.set(index, { selected: !selectedSize.get(index) });

      setSelectedSize(newSelectedSize);
    },
    [selectedSize]
  );

  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [product, setProducts] = useState([]);

  // GET SIZE WINDOW
  const [scrollEnabled, setScrollEnabled] = useState(false);

  // CORREIOS
  const [correiosResult, setCorreiosResult] = useState();
  const [correiosCepUser, setCorreiosCepUser] = useState('');
  const [correiosUserKG, setCepUserKG] = useState('2'); // VALOR PADRÃO
  const correiosComprimento = 20;
  const correiosAltura = 20;
  const correiosLargura = 20;

  useEffect(() => {
    navigation.setOptions({
      title: product.title ? product.title : 'Carregando',
    });

    async function getProduct() {
      const response = await firestore()
        .collection('products')
        .doc(route.params.key)
        .get()
        .then((documentSnapshot) => {
          if (documentSnapshot.exists) {
            setProducts(documentSnapshot.data());
          } else {
            console.log('Product does not exists');
            // THIS PRODUCT DOES NOT EXIST, REDIRECT TO HOME.
          }
        });
      setLoading(false);
    }

    getProduct();
  }, []);

  useEffect(() => {
    console.tron.log(selectedSize);
  }, [selectedSize]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: product.title,
    });
  }, [navigation, product.title]);

  function addCart() {
    if (!product.available) {
      Alert.alert('Atenção', 'Produto está indisponível no momento.', [
        { text: 'Ok' },
      ]);
    } else {
      dispatch({
        type: 'ADD_CART',
        payload: {
          image: product.image,
          title: product.title,
          size: product.sizes,
          value: product.value,
        },
      });

      navigation.navigate('Cart');
    }

    try {
      console.tron.log('ADICIONADO COM SUCESSO!');
    } catch (err) {
      console.tron.log('ERROR, IMPOSSÍVEL ADICIONAR ESTE PRODUTO');
    }
  }

  async function apiCorreiosTest() {
    // const { parseString } = require('react-native-xml2js');

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
          console.tron.log(cServico);
        })
        .catch((err) => console.tron.log(err));
    }
  }

  if (loading) {
    return (
      <ActivityIndicator
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      />
    );
  }

  // CONVERSÃO FLOAT ".", ","
  const getValueProduct = product.value;
  const productValue = parseFloat(getValueProduct).toFixed(2).replace('.', ',');

  return (
    <Container>
      <ImageView>
        <Image
          source={{ uri: product.image }}
          resizeMethod="resize"
          resizeMode="contain"
        />
      </ImageView>
      <ScrollView scrollEnabled={scrollEnabled} style={{ flex: 1 }}>
        <Info>
          <SizeView>
            <SizeTitle>Seleciona a opção de tamanho:</SizeTitle>
            <FlatList
              data={product.sizes}
              renderItem={({ item, index }) => (
                <Size
                  index={index}
                  numberSize={item}
                  selectedSize={!!selectedSize.get(index)}
                  onSelectSize={onSelectSize}
                />
              )}
              keyExtractor={(item) => item.id}
              extraData={selectedSize}
              numColumns={3}
            />
          </SizeView>

          <TwoContentView>
            <TwoContentViewItems>
              <ValueView>
                <Value>De R$25,98</Value>
                <ValueTextTiny>por</ValueTextTiny>
                <ValueColor>R$ {productValue}</ValueColor>
              </ValueView>

              <CorreiosView>
                <CorreiosInput
                  placeholder="Calcular frete..."
                  returnKeyType="send"
                  keyboardType="numeric"
                  maxLength={8}
                  value={correiosCepUser}
                  onChangeText={setCorreiosCepUser}
                />
                <CorreiosSubmit icon="rocket" onPress={apiCorreiosTest} />
              </CorreiosView>
            </TwoContentViewItems>

            {correiosResult && (
              <TwoContentViewValueCorreios>
                <TwoContentTextTextCorreios>
                  Envio express: R${correiosResult.Valor._text}
                </TwoContentTextTextCorreios>
                <TwoContentTextTextCorreios>
                  Prazo de entrega {correiosResult.PrazoEntrega._text} dias
                </TwoContentTextTextCorreios>
              </TwoContentViewValueCorreios>
            )}
          </TwoContentView>

          <SubmitButton
            onPress={addCart}
            style={{ backgroundColor: '#007EA7' }}
          >
            Adicionar no carrinho
          </SubmitButton>
          <SubmitButton onPress={() => {}}>Comprar</SubmitButton>

          <StockAvailableView>
            <StockAvailableText>Estoque: </StockAvailableText>
            {product.available ? (
              <StockAvailableTextVerify color="#0ebff3">
                Disponível
              </StockAvailableTextVerify>
            ) : (
              <StockAvailableTextVerify color="#ff0000">
                Esgotado
              </StockAvailableTextVerify>
            )}
          </StockAvailableView>
        </Info>
      </ScrollView>
    </Container>
  );
}
