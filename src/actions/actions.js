import { ADD_PRODUCT } from './actionTypes';

export function addProduct(product) {
    return { type: ADD_PRODUCT, product };
};
