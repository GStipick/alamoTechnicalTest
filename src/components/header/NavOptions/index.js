import React from 'react';
import { NavOption } from '../../text';
import styles from './index.css';


export const NavOptions = () => (
    <div className={styles['nav-options-container']}>
        <NavOption link="#waitlist" >
            Join
        </NavOption>
        <NavOption link="#faq">
            FAQ
        </NavOption>
        <NavOption link="https://www.google.com">
            External Link
        </NavOption>
    </div>
);
