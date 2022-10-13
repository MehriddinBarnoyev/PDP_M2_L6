import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import QoshishStyledWrapper from './QoshishStyledWrapper';

const Qoshish = () => {

  return (
    <QoshishStyledWrapper>
        <div className="wrapper ms-3 mt-3" style={{width: 900}}>
            <h2>Qo'shish</h2>
            <p>Yangi kategoriya / taom qo'shish</p>
            <div className="d-flex align-items-center">
              <Link to={"kategoriya"} className="fw-bold me-4 text-dark btn btn-outline-warning" style={{width: 200}}>Kategoriya qo'shish</Link>
              <Link to={"taom"} className="fw-bold me-4 text-dark btn btn-outline-warning"  style={{width: 200}}>Taom qo'shish</Link>
            </div>
            <Outlet />  
        </div>
    </QoshishStyledWrapper>
  )
}

export default Qoshish;