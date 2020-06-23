import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Image, ActivityIndicator } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';

import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin';

import {
  Container,
  Form,
  LoginButtonFacebook,
  LoginButtonGoogle,
  Logout,
  LogoutText,
} from './styles';

import Background from '~/components/Background';
import logo from '~/assets/logo/LOGO-OFFICIAL.png';

export default function SignIn() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const netInfo = useNetInfo();
  const [deviceIsConnectedInternet, setDeviceIsConnectedInternet] = useState();

  const getDataUSER = useSelector((state) => state.userReducer);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['profile', 'email'], // https://www.googleapis.com/auth/drive.readonly what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '519564303670-mtigjku5ko6pe8dbeg03f0fmjhgqqr29.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });

    async function verifyConnectionInternet() {
      const verifyIsWifiEnabled = await NetInfo.fetch().then((state) => {
        const { isConnectionExpensive } = state.details;
        setDeviceIsConnectedInternet(isConnectionExpensive);
      });
    }
    verifyConnectionInternet();
  }, []);

  function onAuthStateChanged(user) {
    if (!user) {
      console.tron.log('No data returned');
    }
    setLoading(false);

    if (user.idToken) {
      setLoading(false);

      dispatch({
        type: 'SET_NAME',
        payload: { name: user.user.name },
      });

      dispatch({
        type: 'SET_EMAIL',
        payload: { email: user.user.email },
      });

      dispatch({
        type: 'SET_PHOTOPROFILE',
        payload: { photoURL: user.user.photo },
      });

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: 'Home',
              params: {
                nameUser: user.user.name,
                photoUser: user.user.photo,
              },
            },
          ],
        })
      );
    } else {
      dispatch({
        type: 'SET_NAME',
        payload: { name: user.displayName },
      });

      dispatch({
        type: 'SET_EMAIL',
        payload: { email: user.email },
      });

      dispatch({
        type: 'SET_PHOTOPROFILE',
        payload: { photoURL: user.photoURL },
      });

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: 'Home',
              params: {
                nameUser: user.displayName,
                photoUser: user.photoURL,
              },
            },
          ],
        })
      );
    }
  }

  async function loginFacebook() {
    setLoading(true);

    const result = await LoginManager.logInWithPermissions(['public_profile']);

    if (result.isCancelled) {
      return console.log('User cancelled the login process');
    }

    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      return console.log('Something went wrong obtaining access token');
    }

    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken
    );

    const signIn = await auth().signInWithCredential(facebookCredential);

    return auth().onAuthStateChanged(onAuthStateChanged);
  }

  function continueLoginFacebook() {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: 'Home',
            params: {
              nameUser: getDataUSER.name,
              photoUser: getDataUSER.photoURL,
            },
          },
        ],
      })
    );
  }

  function logoutLoginFacebook() {
    try {
      dispatch({
        type: 'DEL_DATA',
        payload: {
          name: getDataUSER.name,
          email: getDataUSER.email,
          photoURL: getDataUSER.photoURL,
        },
      });
      return AsyncStorage.clear();
    } catch (error) {
      return console.tron.log(error);
    }
  }

  async function loginGoogle() {
    setLoading(true);

    const result = await GoogleSignin.signIn();

    const { idToken } = result;

    auth.GoogleAuthProvider.credential(idToken);

    return auth().onAuthStateChanged(onAuthStateChanged(result));
  }

  if (loading) {
    return (
      <ActivityIndicator
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      />
    );
  }

  if (deviceIsConnectedInternet === true) {
    return (
      <Background>
        <Container>
          <Image
            source={logo}
            resizeMode="contain"
            style={{ alignSelf: 'center', height: 220, width: 290 }}
          />

          <Form style={{ alignItems: 'center' }}>
            <LogoutText>Dispositivo sem conexão com internet! ):</LogoutText>
          </Form>
        </Container>
      </Background>
    );
  }

  return (
    <Background>
      <Container>
        <Image
          source={logo}
          resizeMode="contain"
          style={{ alignSelf: 'center', height: 220, width: 290 }}
        />
        {!getDataUSER.name ? (
          <Form>
            <LoginButtonFacebook
              icon="facebook-square"
              iconColor="rgba(255, 255, 255, 0.6)"
              onPress={loginFacebook}
            >
              Entrar com o Facebook
            </LoginButtonFacebook>
            <LoginButtonGoogle
              icon="google"
              marginText={-30}
              iconColor="rgba(1, 152, 117, 1)"
              colorText="#757575"
              onPress={loginGoogle}
            >
              Entrar com Google
            </LoginButtonGoogle>
          </Form>
        ) : (
          <>
            <Form>
              <LoginButtonFacebook
                icon="facebook-square"
                iconMargin={10}
                onPress={continueLoginFacebook}
              >
                Continuar com Facebook
              </LoginButtonFacebook>
            </Form>
            <Logout onPress={logoutLoginFacebook}>
              <LogoutText>Sair</LogoutText>
            </Logout>
          </>
        )}
      </Container>
    </Background>
  );
}
