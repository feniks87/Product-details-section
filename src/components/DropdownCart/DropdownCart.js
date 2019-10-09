import React, {Component} from 'react';
import styles from './DropdownCart.module.css';
import CartItem from '../CartItem/CartItem';

class DropdownCart extends Component {

    constructor() {
        super();
        this.state = {
            isMobile: this.isMobile(),
            displayCart: false,
            products: [{name: 'Classic Tee', amount: 1, price: 75, size: 'S'},
                     {name: 'Classic Tee', amount: 3, price: 75, size: 'L'}]
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
        return (
            <div className={styles.Wrapper} >
                <div className={this.state.displayCart ? styles.CartLinkActive : styles.CartLink}
                    onClick={this.state.isMobile ? this.onMouseClick : null}
                    onMouseOver={ !this.state.isMobile ? this.showDropdownMenu : null}
                    onMouseOut={ !this.state.isMobile ? this.hideDropdownMenu : null}
                >Cart (4) </div>
                { this.state.displayCart ?
                    (<div className={styles.DropdownCart}>
                        {this.state.products.map(item =>
                            <CartItem name={item.name} amount={item.amount} price={item.price} size={item.size} />)}
                    </div>) :  null
                }
            </div>



        )
    }
}

export default DropdownCart;