import React from 'react';
import { NavOptions } from '../NavOptions';
import { getImage } from '../../../assets/images';
import styles from './index.css';


export const HeaderBar = () => (
    <nav
        className={`columns is-mobile ${styles['header-padding']}`}
    >
        {/* <div className="columns is-mobile"> */}
        <div className="column is-narrow">
            <img
                src={getImage('logo')}
                alt="Alamo Drafthouse Logo"
                className={styles['header-logo']}
            />
        </div>
        <div className="column"></div>
        <div className="column is-narrow">
            <NavOptions />
        </div>
        {/* </div> */}
    </nav>
);
