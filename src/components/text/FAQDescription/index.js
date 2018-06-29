import React from 'react';
import styles from './index.css';


export const FAQDescription = props => (
    <p className={styles['faq-description-text']}>
        {props.children}
    </p>
);
