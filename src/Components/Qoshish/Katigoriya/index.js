import React from 'react'
import KategoriyaStyledWrapper from './KategoriyaStyledWrapper';

const Kategoriya = () => {
  return (
    <KategoriyaStyledWrapper className='py-4 text-center'>
        <p>
        <input type="text" placeholder='Kategoriya nomi'  className='w-100 mt-2 px-3 py-1 from-control mb-4' />
        </p>
        <button type='button' className='btn btn-warning px-4 fw-bold shadow'>Qo'shish</button>
    </KategoriyaStyledWrapper>
  )
}

export default Kategoriya;