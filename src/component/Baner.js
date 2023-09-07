import React from 'react'

function Baner() {
  return (
    <div className = "h-[20vh] md:h-[60vh] bg-center flex bg-no-repeat items-end" style={
        {
            backgroundImage : `url(https://static.toiimg.com/thumb/msid-101172246,imgsize-129900,width-400,resizemode-4/101172246.jpg)`,
            width : `100%`,
            height : `225px`

        }
    }>  

        <div className='bg-gray-300 bg-opacity-25 w-full h-7 font-bold text-xl text-center text-white font-serif'>
            LEO
        </div> 
        
    </div>
  )
}

export default Baner