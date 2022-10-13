import React from 'react'
import KatRoyxatStyledWrapper from './KatRoyxatStyledWrapper';

const KatRoyxat = ({arr, ...props}) => { 
  return (
    <KatRoyxatStyledWrapper className='mt-4'>
      <table className='table shadow table-hover table-bordered text-center'>
        <thead>
          <tr>
            <th>#</th>
            <th>Kategoriya ro'yxati</th>
          </tr>
        </thead>
        <tbody {...props}>
          {
          arr?.map((item, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{item}</td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </KatRoyxatStyledWrapper>
  )
}

export default KatRoyxat;