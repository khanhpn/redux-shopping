import * as types from '../constants/ActionType';
var data = JSON.parse(localStorage.getItem('CART'));
// var initialState = data ? data : [];
var initialState = [
  {
    product: {
      id: 1,
      name: "Samsung galaxy",
      image: "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleI" +
        "nc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_shar" +
        "pen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
      description: "Made in korea",
      price: 400,
      inventory: 10,
      rating: 4
    },
    quantity: 5
  },
  {
    product: {
      id: 2,
      name: "Macbook pro",
      image: "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleI" +
        "nc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_shar" +
        "pen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
      description: "Made in us",
      price: 900,
      inventory: 6,
      rating: 3
    },
    quantity: 6
  }
];

const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      console.log("action", action);
      return [...state];
    default: return [...state];
  }
}

export default cart;
