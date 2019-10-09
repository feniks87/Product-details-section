import React from 'react';
import Header from '../../components/Header/Header';
import ProductDescription from '../../components/ProductDescription/ProductDescription';
import styles from './Layout.module.css';

const Layout = () => (
    <div className={styles.Layout}>
        <Header />
        <ProductDescription
            name="Classic Tee"
            price={75}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            availableSizes={['S', 'M', 'L']} />
    </div>
);

export default Layout;