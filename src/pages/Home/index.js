import React, { useEffect, useState, useLayoutEffect } from 'react';
import { FlatList, ActivityIndicator, Linking } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import firestore from '@react-native-firebase/firestore';

import Icon from 'react-native-vector-icons/MaterialIcons';

import ImageProfile from '~/components/ImageProfile';
import ProductItem from '~/components/Product';

import {
  Container,
  ButtonProfilePhoto,
  BannerFeatured,
  BannerViewSelected,
  BannerSelected,
  TitleView,
  LineTitle,
  Title,
  TextInGeral,
  ProductScrollView,
  SessionsContact,
  SessionsIconsSocial,
  SocialButton,
  SocialImage,
} from './styles';

export default function Home() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const getDataUser = useSelector((state) => state.userReducer);

  // INFO PRODUCTS
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <ButtonProfilePhoto onPress={() => navigation.navigate('Profile')}>
          <ImageProfile image={getDataUser.photoURL} />
        </ButtonProfilePhoto>
      ),
      headerRight: () => (
        <ButtonProfilePhoto onPress={() => navigation.navigate('Cart')}>
          <Icon
            name="shopping-cart"
            size={25}
            color="rgba(255, 255, 255, 1)"
            style={{ marginRight: 20 }}
          />
        </ButtonProfilePhoto>
      ),
    });
  }, []);

  useEffect(() => {
    const getData = firestore()
      .collection('products')
      .onSnapshot((querySnapshot) => {
        const PRODUCTS_DB = [];

        querySnapshot.forEach((documentSnapshot) => {
          PRODUCTS_DB.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setProducts(PRODUCTS_DB);
        setLoading(false);
      });

    return () => getData();
  }, []);

  if (loading) {
    return (
      <ActivityIndicator
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      />
    );
  }

  function handleOpenProduct(index) {
    navigation.navigate('Product', {
      key: index,
    });
  }

  return (
    <Container>
      <ProductScrollView>
        <BannerFeatured
          source={{
            uri:
              'https://firebasestorage.googleapis.com/v0/b/mbbaby.appspot.com/o/bannersFeatured%2Fbanner-desconto-37p.png?alt=media&token=30ed099f-000d-477a-8ebb-b83dadb0702e',
          }}
        />
        <BannerViewSelected>
          <BannerSelected />
        </BannerViewSelected>

        <TitleView>
          <LineTitle />
          <Title>Coleção Standart</Title>
          <LineTitle />
        </TitleView>

        <FlatList
          data={products}
          renderItem={({ item, index }) => (
            <ProductItem
              data={item}
              index={item.key}
              onPress={handleOpenProduct}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />

        <TitleView>
          <LineTitle />
          <Title>Coleção Premium</Title>
          <LineTitle />
        </TitleView>

        <FlatList
          data={products}
          renderItem={({ item, index }) => (
            <ProductItem
              data={item}
              index={item.key}
              onPress={handleOpenProduct}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />

        <SessionsIconsSocial>
          <SocialButton
            marginRight="10px"
            underlayColor="transparent"
            onPress={() =>
              Linking.openURL('https://www.facebook.com/MBBabyOfficial/')
            }
          >
            <SocialImage
              source={require('../../assets/socials/facebook.png')}
            />
          </SocialButton>

          <SocialButton
            marginRight="10px"
            underlayColor="transparent"
            onPress={() =>
              Linking.openURL('https://www.instagram.com/mbbaby.official/')
            }
          >
            <SocialImage
              source={require('../../assets/socials/instagram.png')}
            />
          </SocialButton>

          <SocialButton
            underlayColor="transparent"
            onPress={() =>
              Linking.openURL(
                'https://api.whatsapp.com/send?phone=556297029178'
              )
            }
          >
            <SocialImage
              source={require('../../assets/socials/whatsapp.png')}
              width="30px"
              height="30px"
            />
          </SocialButton>
        </SessionsIconsSocial>
      </ProductScrollView>
    </Container>
  );
}
