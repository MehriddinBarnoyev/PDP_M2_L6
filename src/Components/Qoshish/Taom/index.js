import React, { useState } from 'react'
import TaomStyledWrapper from './TaomStyledWrapper';
import TaomRoyxat from '../TaomRoyxat';
import getTaom from '../TaomRoyxat/TaomRoyxatList';
import Form from 'react-bootstrap/Form';

const Taom = () => {
    const arrtaom = getTaom();
    const [value, setValue] = useState("");
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    const [royxat, setRoyxat] = useState(arrtaom);
    
    const addTaom = () => {
        setRoyxat([...royxat, {taomnomi: value, taomtarifi: value1, taomNarxi: value2, kategoriya: value3}])
        setValue(""),
        setValue1(""),
        setValue2(""),
        setValue3("")
    }
  return (
    <TaomStyledWrapper className='py-4'>
        <span className='d-flex'>
            <input type="text"  
                placeholder="Rasimga yo'l"  
                className='form-control me-2 px-3 py-1'/>
            <input type="text"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value)
                }} 
                placeholder="Taom nomi"  
                className='form-control px-3 py-1'/>
        </span>
        <textarea placeholder="Ta'rif" 
            cols="30" rows="5" 
            value={value1} 
            onChange={(e) => {
                setValue1(e.target.value)
            }}
            className='p-3 w-100 form-control mt-4'></textarea>
        <span className='d-flex mt-4'>
            
            <input type="text" value={value2} onChange={(e) => {
                setValue2(e.target.value)
            }} placeholder="Narxi"  className='w-100 form-control me-2 px-3 py-1'/>

            {/* <input type="text" value={value3} onChange={(e) => {
                setValue3(e.target.value)
            }} placeholder="Katigoriyasi"  className='w-100 form-control me-2 px-3 py-1'/> */}

            <Form.Select aria-label="Default select example" value={value3} onChange={(e) => (
                    setValue3(e.target.value)
                )}>
                <option>Kategoriyalar</option>
                <option value={"Suyuq taomlar"}>Suyuq taomlar</option>
                <option value={"Quyuq taomlar"}>Quyuq taomlar</option>
                <option value={"Salatlar"}>Salatlar</option>
            </Form.Select>
            
                        
        </span>
        <button type='button' onClick={addTaom} className='d-flex justify-content-center btn fw-bold mx-auto btn-warning mt-4 px-5'>Qo'shish</button>
        <TaomRoyxat arr1={royxat} />
    </TaomStyledWrapper>
  )
}

export default Taom;