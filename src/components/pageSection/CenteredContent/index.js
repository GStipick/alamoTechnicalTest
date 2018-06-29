import React from 'react';
import styles from './index.css';


export const CenteredContent = props => (
    <div
        id={props.id || ''}
        className={`columns is-centered ${props.backgroundClass}`}
    >
        <section className={`column ${styles['content-container']}`}>
            {props.children}
        </section>
    </div>
);
