import { useState } from 'react'
import { Link } from 'react-router-dom';

function Home() {
  //fetch("http:localhost:3000/sala");
  return (
    <>
      <div>
        <Link to="/chat">Chat</Link>
      </div>
    </>
  )
}

export default Home
