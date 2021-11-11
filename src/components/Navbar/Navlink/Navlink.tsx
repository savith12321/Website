import React from 'react'
import  PropTypes from 'prop-types';
const Navlink = (props: any) => {
    return (
        <li className="nav-item ml-auto">
            <a className="nav-link active" aria-current="page" href={props.url}><i style={{paddingRight: "0.5rem"}} className={props.icon}></i>{props.title}</a>
        </li>
    )
}

Navlink.prototype = {
    title: PropTypes.string,
    url: PropTypes.string,
    icon: PropTypes.string,
}

export default Navlink
