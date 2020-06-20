import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  background: #f1f1f1; /*#7159c1*/
`;

export const BannerFeatured = styled.Image`
  height: 180px;
  width: 100%;
`;

export const BannerViewSelected = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const BannerSelected = styled.View`
  width: 7px;
  height: 7px;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  background: #08b2e4; /* */
`;

export const TitleView = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const LineTitle = styled.View`
  width: 10%;
  height: 2px;
  background: #0ebff3;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  /*align-self: flex-start;
  margin-top: 20px;*/
  margin-left: 10px;
  margin-right: 10px;
  color: #08b2e4;
`;

export const ProductScrollView = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
})``;

export const ProductContainer = styled.View`
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 15px;
  background: #fff;

  border-left-width: 1px;
  border-left-color: #ddd;
  border-right-width: 1px;
  border-right-color: #ddd;

  border-bottom-width: 5px;
  border-bottom-color: #ddd;
  border-radius: 4px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonProfilePhoto = styled.TouchableOpacity.attrs({
  underlayColor: 'transparent',
})`
  background: transparent;
`;

export const Image = styled.Image`
  flex: 1;
  height: 170px;
  width: 240px;
  padding: 10px; /* PARA REMOVER O COVER DA IMAGE */
`;

export const Info = styled.View`
  flex: 2;
  flex-direction: column;
  justify-content: center;
  margin-right: 10px;
  margin-left: 10px;
`;

export const TitleProduct = styled.Text`
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 13px;
  text-transform: uppercase;
  color: #444444;
`;

export const Value = styled.Text`
  text-align: right;
  margin-top: 5px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
  background: #0ebff3;
`;

export const SessionsContact = styled.View`
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;

  margin-left: 10px;
`;

export const TextInGeral = styled.Text`
  font-size: 14px;
  margin-left: 5px;
`;

export const SessionsIconsSocial = styled.View`
  justify-content: center;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const SocialButton = styled.TouchableHighlight`
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  margin-right: ${(props) => props.marginRight || '0px'};
`;

export const SocialImage = styled.Image`
  width: ${(props) => props.width || '25px'};
  height: ${(props) => props.height || '25px'};
`;
