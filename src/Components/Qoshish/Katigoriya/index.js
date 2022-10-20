import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { addNewTask1 } from '../../../Redux/actions/katigoriyaAction';
import KatRoyxat from '../KatRoyxat';
import KategoriyaStyledWrapper from './KategoriyaStyledWrapper';

const Kategoriya = () => {
  const tasks1 = useSelector((state) => state.katigoriya.tasks1)
  let n = tasks1.length;
  console.log("n+++++"+n);
  const [value, setValue] = useState("");
  
  const addKategoriya = () => {
    addNewTask1(value, n)
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