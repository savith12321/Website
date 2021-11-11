import React from 'react'

const About = () => {
    function age(birthday : any) { // birthday is a date
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    return (
        <div style={{textAlign: 'center', paddingTop: '25vh'}}>
            <h1><b>HI!</b></h1>
            <br />
            <p>Hello, i am <span className="count">{age(new Date('2008-07-14'))}</span> old, and i know java, <b>java script</b>, Python, c++, <br></br> etc and i am learning c, rust, and reactjs</p>
            <script src='/js/count.js'></script>
        </div>
    )
}

export default About
