import React, { useState } from 'react'
import { addNewTask1 } from '../../../Redux/actions';
import KatRoyxat from '../KatRoyxat';
import KategoriyaStyledWrapper from './KategoriyaStyledWrapper';

const Kategoriya = () => {

  const [value, setValue] = useState("");
  
  const addKategoriya = () => {
    addNewTask1(value)
    setValue("");
  };
  
  return (
    <KategoriyaStyledWrapper className='py-4 text-center'>
        <p>
        <input type="text" 
          placeholder='Kategoriya nomi' 
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}  
          className='w-100 mt-2 px-3 py-1 from-control mb-4' />
        </p>
        <button type='button' onClick={addKategoriya} className='btn btn-warning mb-4 px-4 fw-bold shadow'>Qo'shish</button>
        <KatRoyxat />
    </KategoriyaStyledWrapper>
  )
}

export default Kategoriya;