import React from 'react'


function Form({ isopen, onclose }) {
  if (!isopen)
    return null;

  return (
    <div className='absolute top-1/3 left-1/3  w-2/4 p-3 z-50 border border-black bg-white '>

      <button className='float-end' onClick={onclose}> ❌</ button>

      <h3 className='text-black'> Enter Movie Details</h3>
      <form action='' className=' relative form' p-2 w-full >

        <input type='text'
          className='form-control-plaintext  h-10 w-full rounded-md focus:border-green-500 my-5 '
          placeholder='Enter The Movie name' />  <br />


        <input type='url'
          className='form-control-plaintext h-10 my-5 w-full '
          placeholder='Enter The image url' /> <br />


        <input type='number'
         className='form-control-plaintext h-10 w-full my-5'
          placeholder='Enter The released year' /> <br />

        <button className='p-5 bg-black  center rounded-la text-white  hover:bg-white hover:text-black' onClick={handleSubmit}> submit</button>

      </form>
    </div>

  )
}

export default Form
