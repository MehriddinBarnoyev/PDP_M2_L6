import React, { useState } from 'react'
import TaomStyledWrapper from './TaomStyledWrapper';
import TaomRoyxat from '../TaomRoyxat';
import Form from 'react-bootstrap/Form';
import { addNewTask } from '../../../Redux/actions';

const Taom = () => {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    const [value4, setValue4] = useState("");
    
    const addTaom = () => {
        const arrValue = [value1, value2, value3, value4];
        addNewTask(arrValue);
        setValue1(""),
        setValue2(""),
        setValue3(""),
        setValue4("")
    }
  return (
    <TaomStyledWrapper className='py-4'>
        <span className='d-flex'>
            <input type="text"  
                placeholder="Rasimga yo'l"  
                className='form-control me-2 px-3 py-1'/>
            <input type="text"
                value={value1}
                onChange={(e) => {
                    setValue1(e.target.value)
                }} 
                placeholder="Taom nomi"  
                className='form-control px-3 py-1'/>
        </span>
        <textarea placeholder="Ta'rif" 
            cols="30" rows="5" 
            value={value2} 
            onChange={(e) => {
                setValue2(e.target.value)
            }}
            className='p-3 w-100 form-control mt-4'></textarea>
        <span className='d-flex mt-4'>
            
            <input type="text" value={value3} onChange={(e) => {
                setValue3(e.target.value)
            }} placeholder="Narxi"  className='w-100 form-control me-2 px-3 py-1'/>

            {/* <input type="text" value={value3} onChange={(e) => {
                setValue3(e.target.value)
            }} placeholder="Katigoriyasi"  className='w-100 form-control me-2 px-3 py-1'/> */}

            <Form.Select aria-label="Default select example" value={value4} onChange={(e) => (
                    setValue4(e.target.value)
                )}>
                <option>Kategoriyalar</option>
                <option value={"Suyuq taomlar"}>Suyuq taomlar</option>
                <option value={"Quyuq taomlar"}>Quyuq taomlar</option>
                <option value={"Salatlar"}>Salatlar</option>
            </Form.Select>
            
                        
        </span>
        <button type='button' onClick={addTaom} className='d-flex justify-content-center btn fw-bold mx-auto btn-warning mt-4 px-5'>Qo'shish</button>
        <TaomRoyxat />
    </TaomStyledWrapper>
  )
}

export default Taom;