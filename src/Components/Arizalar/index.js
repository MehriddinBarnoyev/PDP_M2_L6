import React from 'react'
import { useSelector } from 'react-redux';
import ArizalarStyledWrapper from './ArizalarStyledWrapper';
import { FaEdit, FaTrash } from 'react-icons/fa';
import TrAriza from './TrAriza';

const Arizalar = () => {
    let sum = 0;
    const tasks2 = useSelector((state) => state.ariza.tasks2); 
    tasks2.map((item, i) => ( sum += parseFloat(item.umumiyNarxi)))
    
    return (
    <ArizalarStyledWrapper>
        <span className='mt-4 d-block'>
            <h4 className='fw-bold'>Arizalar</h4>
            <p className='text-secondary'>Yetib kelgan arizalarni kuzatishingiz mumkin</p>

            <table className='mt-4 table shadow table-striped table-hover table-bordered'>
                <thead>
                    <tr className='text-secondary'>
                        <th>#</th>
                        <th>To'liq nomi</th>
                        <th>Taom nomi</th>
                        <th>Narxi</th>
                        <th>Soni</th>
                        <th>Umumiy narxi</th>
                        <th>Telefon raqami</th>
                        <th>Izoh</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks2.map((item, index) => (
                        <TrAriza item={item} index={index} key={index} />
                    ))}
                </tbody>
            </table>
        </span>
        <span className='d-flex align-items-center justify-content-between mt-4 fs-5'>
            <p className='fw-bold'>Jami</p>
            <span className='fw-bold'>
                {sum + "  "}
                so'm
            </span>
        </span>
    </ArizalarStyledWrapper>
  )
}

export default Arizalar;