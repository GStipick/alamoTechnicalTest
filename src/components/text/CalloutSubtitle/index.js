import React from 'react';
import styles from './index.css';


export const CalloutSubtitle = props => (
    <p className={styles['callout-subtitle-text']}>
        {props.children}
    </p>
);
