import React from 'react'
import { useSelector } from 'react-redux';
import TaomRoyxatStyledWrapper from './TaomRoyaxatStyledWrapper';
import TrTaom from './TrTaom';

const TaomRoyxat = () => {
    const tasks = useSelector((state) => state.taom.tasks);
  return (
    <TaomRoyxatStyledWrapper className='mt-4'>
        <h2 className='text-center my-4'>Taomlar ro'yxati</h2>
        <div className="row">
            {
                tasks.map((item, index) => (
                    <TrTaom item={item} index={index} key={index} />
                ))
            }
        </div>
    </TaomRoyxatStyledWrapper>
  )
}

export default TaomRoyxat;