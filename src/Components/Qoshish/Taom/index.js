import React from 'react'
import TaomStyledWrapper from './TaomStyledWrapper';
import Form from 'react-bootstrap/Form';
const Taom = () => {
  return (
    <TaomStyledWrapper className='py-4 text-center'>
        <span className='d-flex'>
            <input type="text" placeholder="Rasimga yo'l"  className='form-control me-2 px-3 py-1'/>
            <input type="text" placeholder="Taom nomi"  className='form-control px-3 py-1'/>
        </span>
        <textarea placeholder="Ta'rif" cols="30" rows="5" className='p-3 w-100 form-control mt-4'></textarea>
        <span className='d-flex mt-4'>
            <input type="text" placeholder="Narxi"  className='w-100 form-control me-2 px-3 py-1'/>
            
            <Form.Group className="w-100">
                <Form.Select>
                    <option>Kategoriya</option>
                    <option>Suyuq taomlar</option>
                    <option>Quyuq taomlar</option>
                    <option>Salatlar</option>
                    <option>Ichimliklar</option>
                </Form.Select>
            </Form.Group>
            
        </span>
        <button type='button' className='btn fw-bold btn-warning mt-4 px-5'>Qo'shish</button>
    </TaomStyledWrapper>
  )
}

export default Taom;