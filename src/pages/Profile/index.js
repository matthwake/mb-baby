import React, { useState, useEffect, useLayoutEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation, CommonActions } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import AsyncStorage from '@react-native-community/async-storage';

import {
  Container,
  ButtonGoBack,
  ButtonGoBackText,
  ProfileView,
  Image,
  InfoView,
  InfoName,
  InfoEmail,
  ContactView,
  SessionsContact,
  TextInGeral,
  OptionsView,
  ButtonLogout,
  ButtonLogoutText,
} from './styles';

import Background from '~/components/Background';

export default function Profile() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const getDataUser = useSelector((state) => state.userReducer);

  const [loading, setLoading] = useState(true);

  function logoutLoginFacebook() {
    setLoading(true);

    AsyncStorage.clear().then(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: 'SignIn',
            },
          ],
        })
      );

      setLoading(false);
    });
    dispatch({
      type: 'DEL_DATA',
      payload: { name: '', email: '', photoURL: '', cart: [] },
    });

    return null;
  }

  useEffect(() => {
    setLoading(false);
  }, []);

  useLayoutEffect(() => {
    /*
      TESTAR COM TEXT NO BUTTON GO BACK
      <Icon name="arrow_forward" size={20} color="#fff" />
    */
    navigation.setOptions({
      title: 'Perfil Facebook',
      headerTransparent: true,
      headerLeft: null,
      headerRight: () => (
        <ButtonGoBack
          onPress={() => navigation.dispatch(CommonActions.goBack())}
        >
          <ButtonGoBackText>Voltar</ButtonGoBackText>
        </ButtonGoBack>
      ),
    });
  }, []);

  if (loading) {
    return (
      <ActivityIndicator
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      />
    );
  }

  return (
    <Background>
      <Container>
        <ProfileView>
          <Image source={{ uri: getDataUser.photoURL }} />
          <InfoView>
            <InfoName>{getDataUser.name}</InfoName>
            <InfoEmail>{getDataUser.email}</InfoEmail>
          </InfoView>
        </ProfileView>
        <ContactView>
          <SessionsContact>
            <Icon
              name="mail"
              size={20}
              color="#111"
              style={{ marginBottom: 10 }}
            />
            <TextInGeral>mbbaby@suporte.com</TextInGeral>
          </SessionsContact>

          <SessionsContact>
            <Icon
              name="phone"
              size={20}
              color="#111"
              style={{ marginBottom: 10 }}
            />
            <TextInGeral>(62) 9 9702-9178</TextInGeral>
          </SessionsContact>

          <SessionsContact>
            <Icon
              name="room"
              size={20}
              color="#111"
              style={{ marginBottom: 10 }}
            />
            <TextInGeral>Rastreamento de pedido pelo WhatsApp</TextInGeral>
          </SessionsContact>
        </ContactView>
        <OptionsView>
          <ButtonLogout onPress={logoutLoginFacebook}>
            <ButtonLogoutText>Sair</ButtonLogoutText>
          </ButtonLogout>
        </OptionsView>
      </Container>
    </Background>
  );
}

/* FAZER O RASTREAMENTO DE PEDIDOS ATRAVÉS DO APLICATIVO */
