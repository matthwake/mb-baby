/* eslint-disable no-unreachable */
/* eslint-disable no-const-assign */
const initialState = {
  name: '',
  email: '',
  photoURL: '',
  socialLogged: '',
  cart: [],
  correios: { verify: false, value: '' },
};

export default (state = initialState, action) => {
  let newCart = [...state.cart];

  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload.name };
      break;
    case 'SET_EMAIL':
      return { ...state, email: action.payload.email };
      break;

    case 'SET_PHOTOPROFILE':
      return { ...state, photoURL: action.payload.photoURL };
      break;
    case 'SET_SOCIALLOGGED':
      return { ...state, socialLogged: action.payload.socialLogged };
      break;
    case 'ADD_CART':
      newCart.push({
        image: action.payload.image,
        title: action.payload.title,
        size: action.payload.size,
        value: action.payload.value,
      });
      break;
    case 'DEL_CART':
      newCart = newCart.filter((item, index) => index !== action.payload.key);
      break;
    case 'CORREIOS_ADD':
      return {
        ...state,
        correios: {
          verify: action.payload.verify,
          value: action.payload.value,
        },
      };
      break;
    case 'DEL_DATA':
      return {
        ...state,
        name: null,
        email: null,
        photoURL: null,
        cart: [],
      };
      break;
    default:
  }

  return { ...state, cart: newCart };
};
