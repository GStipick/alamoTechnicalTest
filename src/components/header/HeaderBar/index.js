import React from 'react';
import { NavOptions } from '../NavOptions';
import { getImage } from '../../../assets/images';
import styles from './index.css';


export const HeaderBar = () => (
    <nav
        className={`navbar is-transparent ${styles['header-padding']}`}
        aria-label="main navigation"
    >
        <div className="navbar-brand">
            <img
                src={getImage('logo')}
                alt="Alamo Drafthouse Logo"
                class={styles['header-logo']}
            />
            <a
                role="button"
                className="navbar-burger"
                aria-label="menu"
                aria-expanded="false"
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div className="navbar-menu">
            <div className="navbar-end">
                <NavOptions />
            </div>
        </div>
    </nav>
);
