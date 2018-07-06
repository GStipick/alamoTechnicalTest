import React from 'react';
import styles from './index.css';


export const InputLabel = props => (
    <label className={`label ${styles['input-label']}`}>{props.children}</label>
);
