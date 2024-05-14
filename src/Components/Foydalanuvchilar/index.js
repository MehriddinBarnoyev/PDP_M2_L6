import React from 'react'
import FoydalanuchilarStyled from './FoydalanuchilarStyled';
import { useSelector } from 'react-redux';
import TrWrapper from './tr_wrapper';

const Foydalanuchilar = () => {
    
    const tasks4 = useSelector((state) => state.foydalanuvchi.tasks4);

  return (
    <FoydalanuchilarStyled>
        <span className='mt-4 d-block'>
            <h4 className='fw-bold'>Foydalanuvchilar</h4>
            <p className='text-secondary'>Rollarini biriktirishingiz mumkun</p>

            <table className='mt-4 table table-bordered shadow'>
                <thead>
                    <tr className='text-secondary text-center'>
                        <th>#</th>
                        <th>To'liq nomi</th>
                        <th>Telefon raqami</th>
                        <th>Roli</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks4.map((item, index) => (
                       <TrWrapper item={item} index={index} key={index}/>
                    ))}
                    <tr className='text-center'>
                        <td className='fw-bold'>Jami</td>
                        <td colSpan={2}></td>
                        <td className='fw-bold'>{tasks4.length + " "} ta</td>
                        <td colSpan={2}></td>
                    </tr>
                </tbody>
            </table>
        </span>
        
    </FoydalanuchilarStyled>
  )
}

export default Foydalanuchilar;