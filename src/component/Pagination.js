import React from 'react'

function Pagination(props) {

  let {pageNum,onNext,onPrev}  = props

  return (
    <div className='w-full flex items-center justify-center font-bold text-xl'>
        <div onClick={onPrev} className='bg-blue-400 rounded-l-lg border-black-100 cursor-pointer'>prev</div>
        <div className='bg-blue-400 mx-2'> {pageNum} </div>
        <div onClick={onNext} className='bg-blue-400 rounded-r-lg cursor-pointer' >next</div>


    </div>
  )
}

export default Pagination