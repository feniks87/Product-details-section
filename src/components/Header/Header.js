import React from 'react';
import styles from './Header.module.css';
import { DropdownCart } from '../../components/DropdownCart/DropdownCart';

const Header = () => (
    <header className={styles.Header}>
        <div className={styles.Wrapper}>
            <DropdownCart />
        </div>
    </header>
);

export default Header;
