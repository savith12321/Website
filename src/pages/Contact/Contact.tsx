import React from 'react'
import "./Contact.css"
const Contact = () => {
    return (
        <div className="Contact">
            <div style={{textAlign: 'center', paddingTop: "30vh"}}>
                <h1 className="line-1 anim-typewriter">Feal free to contact me on discord, mail or twiter....</h1>
                <div>
                    <a href="https://discord.com/users/856767606869458946" style={{paddingRight: "10px"}}><img src="discord.png" alt="discord" width={64}></img></a>
                    <a href="https://twitter.com/12321Savith" style={{paddingRight: "10px"}}><img src="twitter.png" alt="discord" width={64}></img></a>
                    <a href="https://www.youtube.com/channel/UCzCsDbsz6MyLvlWkrSxrjeg" style={{paddingRight: "10px"}}><img src="youtube.png" alt="discord" width={64}></img></a>
                    <a href="mailto: isavith.nishitha@gmail.com" style={{paddingRight: "10px"}}><img src="mail.png" alt="discord" width={64}></img></a>
                </div>
            </div>
        </div>
    )
}

export default Contact
