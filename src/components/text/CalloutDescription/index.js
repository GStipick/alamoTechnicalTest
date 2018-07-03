import React from 'react';
import styles from './index.css';


export const CalloutDescription = props => (
    <p className={styles['callout-description-text']}>
        {props.children}
    </p>
);
