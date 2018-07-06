import React from 'react';
import { InputLabel } from '../..';
import styles from './index.css';


export const SelectDropdown = (props) => {
    let jsxReturn = null;

    if (props.selectOptions
    && Array.isArray(props.selectOptions)) {
        const optionsToDisplay = props.selectOptions.map(option => <option>{option}</option>);

        jsxReturn = (
            <div className={`field ${styles['form-field']}`}>
                <InputLabel>{props.labelText}</InputLabel>
                <div className="control">
                    <div className="select is-fullwidth">
                        <select>
                            <option />
                            {optionsToDisplay}
                        </select>
                    </div>
                </div>
            </div>
        );
    }

    return jsxReturn;
};
