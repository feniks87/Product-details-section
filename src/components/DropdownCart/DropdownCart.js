import React, {Component} from 'react';
import styles from './DropdownCart.module.css';
import CartItem from '../CartItem/CartItem';
import { connect } from 'react-redux';

class DropdownCart extends Component {

    constructor() {
        super();
        this.state = {
            isMobile: this.isMobile(),
            displayCart: false
        }
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            if (this.isMobile() !== this.state.isMobile)
            {
                this.setState({ isMobile: this.isMobile() })
            }
        });
    }

    isMobile = () => { return window.innerWidth < 900; }

    onMouseClick = () => {
        this.setState((prevState) => ({displayCart: !prevState.displayCart}))
    }

    showDropdownMenu = () => {
        this.setState({ displayCart: true });
    }

    hideDropdownMenu = () => {
        this.setState({ displayCart: false });
    }

    render() {
        let itemsAmmount = this.props.products.length === 0 ? 0 : this.props.products.map(item => item.amount).reduce((prev, next) => prev + next)
        return (
            <div className={styles.Wrapper} >
                <div className={this.state.displayCart ? styles.CartLinkActive : styles.CartLink}
                    onClick={this.state.isMobile ? this.onMouseClick : null}
                    onMouseOver={ !this.state.isMobile ? this.showDropdownMenu : null}
                    onMouseOut={ !this.state.isMobile ? this.hideDropdownMenu : null}
                >Cart ({itemsAmmount}) </div>
                { this.state.displayCart ?
                    (<div className={styles.DropdownCart}>
                        {this.props.products.map(item =>
                            <CartItem name={item.name} amount={item.amount} price={item.price} size={item.size} />)}
                    </div>) :  null
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const connectedDropdownCart = connect(mapStateToProps)(DropdownCart);

export { connectedDropdownCart as DropdownCart };