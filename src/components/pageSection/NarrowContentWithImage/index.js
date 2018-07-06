import React from 'react';
import { getImage } from '../../../assets/images';
import styles from './index.css';


export const NarrowContentWithImage = props => (
    <section className="columns is-desktop">
        <div className="column">
            <div className={`${styles['image-container']}`}>
                <img
                    src={getImage(props.sectionImage) || ''}
                    className={styles['section-image']}
                    alt={props.sectionImageAltText}
                />
            </div>
        </div>
        <div className={`column is-narrow ${styles['section-content']}`}>
            {props.children}
        </div>
        <div className="column"></div>
    </section>
);
