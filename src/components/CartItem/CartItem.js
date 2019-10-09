import React from 'react';
import styles from './CartItem.module.css';
import ProductImage from '../../assets/classic-tee.jpg';

const CartItem = (props) => (
    <div className={styles.CartItem}>
        <div className={styles.Image}>
            <img src={ProductImage} alt={props.imageName}/>
        </div>
        <div className={styles.Details}>
            <div>{props.name}</div>
            <div>{props.amount} x <b>${props.price}.00</b> </div>
            <div>Size: {props.size}</div>
        </div>

    </div>
);

export default CartItem;
