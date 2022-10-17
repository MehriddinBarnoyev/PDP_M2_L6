import React from 'react'
import { useSelector } from 'react-redux';
import ArizalarStyledWrapper from './ArizalarStyledWrapper';

const Arizalar = () => {
    let sum = 0;
    const tasks2 = useSelector((state) => state.tasks2); 
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
                    </tr>
                </thead>
                <tbody>
                    {tasks2.map((item, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.taomName}</td>
                            <td>{item.narxi}</td>
                            <td>{item.soni}</td>
                            <td>{item.umumiyNarxi}</td>
                            <td>{item.tel}</td>
                            <td>{item.izox}</td>
                        </tr>
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