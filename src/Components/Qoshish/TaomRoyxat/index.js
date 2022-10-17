import React from 'react'
import { useSelector } from 'react-redux';
import TaomRoyxatStyledWrapper from './TaomRoyaxatStyledWrapper';

const TaomRoyxat = () => {
    const tasks = useSelector((state) => state.tasks);
  return (
    <TaomRoyxatStyledWrapper className='mt-4'>
        <h2 className='text-center my-4'>Taomlar ro'yxati</h2>
        <div className="row">
            {
                tasks.map((item, index) => (
                    <div className="coll col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4" key={index}>
                        <div className="box border rounded shadow">
                            <img src="..." className="bg-secondary rounded d-block w-100" style={{width: 250, height: 150}} alt="250x150" />
                            <span className='py-2 px-3 d-block'>
                                <h4 className='text-secondary'>{item.taomnomi}</h4>
                                <p className='text-secondary text-break text-wrap'>{item.taomtarifi}</p>
                                <span className='d-flex align-items-center justify-content-between'>
                                    <p className='text-break text-wrap'>
                                        <b className='text-primary'>{item.taomNarxi} so'm</b>
                                    </p>
                                    <p className='text-break text-wrap'>
                                        <b className='text-primary'>{item.kategoriya}</b>
                                    </p>
                                </span>
                            </span>
                        </div>
                    </div>
                ))
            }
        </div>
    </TaomRoyxatStyledWrapper>
  )
}

export default TaomRoyxat;