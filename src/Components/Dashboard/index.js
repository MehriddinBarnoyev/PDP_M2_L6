import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import DashboardStyledWrapper from './DashboardStyledWrapper';
import { FaBars, FaUserTie } from 'react-icons/fa';
import image15 from './Photo/image15.png';
import ListGroup from 'react-bootstrap/ListGroup';
import Vector from './Photo/Vector.png';
import Vector1 from './Photo/Vector1.png';
import Vector2 from './Photo/Vector2.png';
import Vector3 from './Photo/Vector3.png';
import Vectorgroup from './Photo/Vectorgroup.png';

const Dashboard = () => {
    const [display, setDisplay] = useState(true)
  return (
    <DashboardStyledWrapper className='d-flex'>
        <aside className={`shadow p-3 border ${display === true ? "d-block" : "d-none"}`}>
            <img src={image15} className="w-100" alt="" />

            <ListGroup>
                <ListGroup.Item action>
                    <Link to={"ariza"} className="link d-flex align-items-center">
                        <img src={Vector} alt="" />
                        <span>
                            <h6 className='text-secondary'>Arizalar</h6>
                            <p className='text-secondary'>Yetib kelgan arizalarni kuzatishingiz mumkin</p>
                        </span>
                    </Link>
                </ListGroup.Item>
                <ListGroup.Item action>
                    <Link to={"yitariza"} className='link d-flex align-items-center'>
                        <img src={Vector1} alt="" />
                        <span>
                            <h6 className='text-secondary'>Yetkazilgan</h6>
                            <p className='text-secondary'>Yetkazilgan taomlar ro’yxati bilan tanishing</p>
                        </span>
                    </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Link  className='link d-flex align-items-center'>
                        <img src={Vector2} alt="" />
                        <span>
                            <h6 className='text-secondary'>Statistika</h6>
                            <p className='text-secondary'>Diagrammalar bilan ishlangan statistika</p>
                        </span>
                    </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Link to={"qoshish"} className='link d-flex align-items-center'>
                    <img src={Vector3} alt="" />
                    <span>
                        <h6 className='text-secondary'>Qo’shish</h6>
                        <p className='text-secondary'>Yangi taom qo’shish </p>
                    </span>
                    </Link>
                </ListGroup.Item>
                <ListGroup.Item className='d-flex align-items-center'>
                    <Link to={"foydalanuvchilar"} className='d-flex align-items-center link'>
                        <img src={Vectorgroup} className="imgGroup" alt="" />
                        <span>
                            <h6 className='text-secondary'>Foydalanuvchilar</h6>
                            <p className='text-warning'>Rollarni biriktirishingiz mumkin</p>
                        </span>
                    </Link>
                </ListGroup.Item>
            </ListGroup>
        
        </aside>
        <div className="rightside">
            <header className='shadow border px-4 py-3 d-flex align-items-center justify-content-between'>
                <button type='button' onClick={() => setDisplay(display === true ? false : true)} className='border-0 bg-white'>
                    <FaBars />
                </button>
                <span className='d-flex align-items-center'>
                    <FaUserTie className='text-secondary me-1'/>
                    <p className='m-0 me-4 fw-bold text-secondary'>Davron</p>
                    <Link to={"/"} className="btn btn-primary">Home</Link>
                </span>
            </header>
            <main className='p-3'>
                <Outlet />
            </main>
        </div>
    </DashboardStyledWrapper>
  )
}

export default Dashboard;