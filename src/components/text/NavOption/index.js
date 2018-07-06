import React from 'react';
import styles from './index.css';


export const NavOption = (props) => {
    let navOptionReturn = null;
    if (props.link) {
        if (props.link.charAt(0) === '#') { // Anchor Link
            navOptionReturn = (
                <a
                    className={`${styles['nav-option-text']} ${props.classes || ''}`}
                    href={props.link}
                >
                    {props.children}
                </a>
            );
        } else { // External Link
            navOptionReturn = (
                <a
                    className={`${styles['nav-option-text']} ${props.classes || ''}`}
                    href={props.link}
                    target="_blank"
                >
                    {props.children}
                </a>
            );
        }
    }

    return navOptionReturn;
};
