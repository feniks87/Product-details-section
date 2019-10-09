import React, {Component} from 'react';
import styles from './ProductDescription.module.css';
import ProductImage from '../../assets/classic-tee.jpg';
import ProductName from './ProductName/ProductName';
import ProductSize from './ProductSize/ProductSize';
import ProductPrice from './ProductPrice/ProductPrice';
import Button from '../Button/Button';

class ProductDescription extends Component {
    constructor() {
        super();
        this.state = {
            selectedSize: ''
        }
    }

    onSizeSelect = (size) => {
        this.setState({
            selectedSize: size
        })
    }

    render() {
        return (
        <section className={styles.ProductDescription}>
            <div className={styles.Image}>
                <img src={ProductImage} alt={this.props.name}/>
            </div>
            <div className={styles.DescriptionBox}>
                <ProductName name={this.props.name}/>
                <ProductPrice price={this.props.price}/>
                <p className={styles.description}>{this.props.description}</p>
                <div className={styles.Size}>size<span className={styles.Asterisk}>&#42;</span> <span className={styles.SelectedSize}>{this.state.selectedSize}</span></div>
                <ProductSize sizes={this.props.availableSizes} selectedSize={this.state.selectedSize} clicked={this.onSizeSelect}/>
                <Button>Add to cart</Button>
            </div>
        </section>
        )
    }
};

export default ProductDescription;