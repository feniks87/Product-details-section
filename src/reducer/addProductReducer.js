import { ADD_PRODUCT } from '../actions/actionTypes';

const addProductReducer = (state = {products: []}, action) => {
    switch (action.type) {
      case ADD_PRODUCT:
        let product = state.products.find(p => p.name === action.product.name && p.size === action.product.size);
        if (product) {
            let otherProducts = state.products.filter(p => p !== product);
            product.amount += 1;
            return {...state, products: [...otherProducts, product]}
        } else {
            return {...state, products: [...state.products, action.product]};
        }
        default:
            return state;
    }
  }

  export default addProductReducer;