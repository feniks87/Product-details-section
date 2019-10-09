import React from 'react';
import styles from './ProductPrice.module.css';

const ProductPrice = (props) => (
    <div className={styles.Price}>${props.price}</div>
);

export default ProductPrice;