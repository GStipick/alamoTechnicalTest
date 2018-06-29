import React from 'react';
import styles from './index.css';


export const FAQTitle = props => (
    <p className={styles['faq-title-text']}>
        {props.children}
    </p>
);
