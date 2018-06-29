import React from 'react';
import { NavOption } from '../../text';


export const NavOptions = () => (
    <div className="columns ">
        <NavOption
            className="column is-narrow"
            link="#waitlist"
        >
            Join
        </NavOption>
        <NavOption
            className="column is-narrow"
            link="#faq"
        >
            FAQ
        </NavOption>
        <NavOption
            className="column is-narrow"
            link="https://www.google.com"
        >
            External Link
        </NavOption>
    </div>
);
