import React from 'react';
import { InputLabel } from '../..';
import styles from './index.css';


export const TextInput = props => (
    <div className={`field ${styles['form-field']}`}>
        <InputLabel >{props.labelText}</InputLabel>
        <div className="control">
            <input
                className={`input ${styles['form-text-input']}`}
                type="text"
                placeholder=""
                onChange={props.onChange}
            />
        </div>
    </div>
);
