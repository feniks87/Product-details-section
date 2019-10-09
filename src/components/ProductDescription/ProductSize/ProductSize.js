import React from 'react';
import styles from './ProductSize.module.css';

const ProductSize = (props) => (
    <div className={styles.ProductSize}>
        {props.sizes.map(size =>
            <div
                className={size === props.selectedSize ? [styles.SizeBox, styles.SelectedSizeBox].join(' ') : styles.SizeBox}
                key={size}
                onClick={() => props.clicked(size)}
            >{size}</div>)}
    </div>
);

export default ProductSize;