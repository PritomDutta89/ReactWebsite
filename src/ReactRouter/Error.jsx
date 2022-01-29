import React from 'react';
import { NavLink } from 'react-router-dom';


const Error = () => {
    return (
        <>
            <h1>oops! 404 page is not found</h1>
            <NavLink to="/">go back</NavLink>
        </>
    )
}

export default Error;
