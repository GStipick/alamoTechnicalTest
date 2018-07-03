import React from 'react';
import { NavOption } from '../../text';


export const NavOptions = () => (
    <React.Fragment>
        <NavOption
            link="#waitlist"
        >
            Join
        </NavOption>
        <NavOption
            link="#faq"
        >
            FAQ
        </NavOption>
        <NavOption
            link="https://www.google.com"
        >
            External Link
        </NavOption>
    </React.Fragment>
);
