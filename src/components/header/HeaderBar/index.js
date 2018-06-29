import React from 'react';
import { NavOptions } from '../NavOptions';
import { getImage } from '../../../assets/images';
import styles from './index.css';


export const HeaderBar = () => (
    <header className={`columns ${styles['header-padding']}`}>
        <div className="column is-narrow">
            <img src={getImage('logo')} alt="Alamo Drafthouse Logo"/>
        </div>
        <div className="column"></div>
        <div className="column is-narrow">
            <NavOptions />
        </div>
    </header>
);
