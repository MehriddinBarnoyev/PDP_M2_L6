import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { removeTaskKat } from '../../../Redux/actions/katigoriyaAction';
import KatRoyxatStyledWrapper from './KatRoyxatStyledWrapper';
import TrKat from './TrKat';

const KatRoyxat = () => {
  
  const tasks1 = useSelector((state) => state.katigoriya.tasks1);
  const remove = (index) => removeTaskKat(index)
  return (
    <KatRoyxatStyledWrapper className='mt-4'>
      <table className='table shadow table-hover table-bordered text-center'>
        <thead>
          <tr>
            <th>#</th>
            <th>Kategoriya ro'yxati</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
          tasks1.map((item, index) => (
            <TrKat item={item} index={index} key={index} />
          ))
          }
        </tbody>
      </table>
    </KatRoyxatStyledWrapper>
  )
}

export default KatRoyxat;