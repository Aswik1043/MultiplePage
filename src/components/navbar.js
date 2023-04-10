import React from 'react'

const Navbar =() =>
{
  return(
    <div>
    <nav className='ui raisedvery padded segment'>
    <div className='ui right floated header'>
      <button className='ui button'><a href='/home'>Home</a></button>
      <button className='ui button'><a href="/calculator">Calculator</a></button>
      <button className='ui button'><a href="/data">DataList</a></button>
    </div>
    </nav>
    </div>
  )
}

export default Navbar;