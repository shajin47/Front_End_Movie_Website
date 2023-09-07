import React from 'react'
import movieLogo from "./logo.png"

import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full bg-blue-400 h-11 flex'>
        <img className='p-2' src={movieLogo} alt="logo"/>
        <Link to='/' className='p-2'>Movies</Link>
        <Link to='/watchlist' className='p-2'>Watchlist</Link> 
    </div>
  )
}

export default Navbar