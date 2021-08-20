import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./join.css"

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
      <div className="joinOuterContainer">
           <div className="joinInnerContainer">
           <div className="upperContainer">
          <h2 className="heading">Join a room</h2>
          </div>
    
          <div className="inputContainer">
          <input type="text" placeholder="Name" className="joinInput" onChange={(e)=> setName(e.target.value)} />
          <input type="text" placeholder="Room" className="joinInput" onChange={(e)=> setRoom(e.target.value)} />
          </div>
           <Link onClick={e=> (!name || !room)? e.preventDefault(): null} to={`/chat?name=${name}&room=${room}`}>
             <button className="button mt-2" type="submit">Sign In</button>
           </Link>
           </div>
           <h3 className="credits">© Designed By Mintu</h3>
      </div>
  )
};

export default Join;
