import React from 'react';
import styles from './index.css';


export const RaisedCard = props => (
    <div className={`${styles['raised-card']} ${props.styleClasses}`}>
        {props.children}
    </div>
);
