import React from 'react'

function Instruction(props) {
  return (
    <div className='flex flex-row w-full justify-start'>
    <div className='flex justify-start'>
      <p className='mr-7'>{props.angka}</p>
      <p className='mb-3'>{props.kalimat}</p>
      </div>
    </div>
  )
}

export default Instruction
