export const authReducer = (prevState, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...prevState,
        isSignout: false,
        userToken: action.token,
      };
    case 'UPDATE_CARD_DATA':
      return {
        ...prevState,
        cardData: {
          cardHolderName: action.cardHolderName,
          cardNumber: action.cardNumber,
          validThrough: action.validThrough,
          cardCvv: action.cardCvv,
        },
      };
    default:
      return prevState;
  }
};
