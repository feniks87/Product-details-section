import React from 'react';
import styles from './ProductName.module.css';

const ProductName = (props) => (
    <h1 className={styles.Name}>{props.name}</h1>
);

export default ProductName;