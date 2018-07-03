import React from 'react';
import styles from './index.css';


export const CalloutTitle = props => (
    <p className={styles['callout-title-text']}>
        {props.children}
    </p>
);
