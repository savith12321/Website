import React from 'react'

const Projects = () => {
    return (
        <div className='' style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100%', color: 'black !important', paddingTop: '10vh'}}>
            <div className="card" style={{width: '18rem', marginRight: '20px', color: 'black'}}>
                <img src="waterbottle.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">Water Bottle</h5>
                <p className="card-text">Water bottle is a discord bot made for making Your discord experience to the next level.</p>
                <a href="https://water-bottle-dashboard.herokuapp.com/" rel="noreferrer" target="_blank" className="btn btn-primary">Check it out</a>
                </div>
            </div>
            <div className="card" style={{width: '18rem', color: 'black '}}>
                <img src="wchat.png" className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">Water Chat</h5>
                <p className="card-text">Water chat is a chatting application made from ejs, express and socket.io.</p>
                <a href="https://water-chat.herokuapp.com/" rel="noreferrer" target="_blank" className="btn btn-primary">Check it out</a>
                </div>
            </div>
        </div>
    )
}

export default Projects
