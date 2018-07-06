import React from 'react';
import styles from './index.css';


export const FormButton = props => (
    <button
        className={`${styles['form-button']} ${styles[`is-disabled-${!props.isDisabled}`]}`}
        onClick={props.onClick}
        disabled={props.isDisabled}
    >
        {props.children}
    </button>
);
