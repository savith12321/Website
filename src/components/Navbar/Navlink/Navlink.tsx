import React from 'react'
import  PropTypes from 'prop-types';
const Navlink = (props: any) => {
    return (
        <li className="nav-item ml-auto">
            <a className="nav-link active" aria-current="page" href={props.url}>{props.title}</a>
        </li>
    )
}

Navlink.prototype = {
    title: PropTypes.string,
    url: PropTypes.string,
}

export default Navlink
