import React from 'react';
import { InputLabel } from '../..';
import styles from './index.css';


export const SelectDropdown = (props) => {
    let jsxReturn = null;

    if (props.selectOptions
    && Array.isArray(props.selectOptions)) {
        const optionsToDisplay = props.selectOptions.map(((option, index) => (
            <option key={`${index}__${option}`} value={option}>
                {option}
            </option>
        )));

        jsxReturn = (
            <div className={`field ${styles['form-field']}`}>
                <InputLabel>{props.labelText}</InputLabel>
                <div className="control">
                    <div className="select is-fullwidth">
                        <select value={props.selectValue} onChange={props.onChange}>
                            <option value='' />
                            {optionsToDisplay}
                        </select>
                    </div>
                </div>
            </div>
        );
    }

    return jsxReturn;
};
