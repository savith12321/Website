import React from 'react';

const Copyright = () => {
    return (
        <footer style={{"position":"fixed","bottom":"0","paddingBottom":"2px"}} className="float-left">
            <p>© {new Date().getFullYear()} SuperN00b</p>
        </footer>
    )
}

export default Copyright
