import React, { useContext, useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom';
import DashboardStyledWrapper from './DashboardStyledWrapper';
import { FaBars, FaUserTie } from 'react-icons/fa';
import image15 from './Photo/image15.png';
import ListGroup from 'react-bootstrap/ListGroup';
import Vector from './Photo/Vector.png';
import Vector1 from './Photo/Vector1.png';
import Vector2 from './Photo/Vector2.png';
import Vector3 from './Photo/Vector3.png';
import Vectorgroup from './Photo/Vectorgroup.png';
import { LoginContext } from '../../App';

const Dashboard = () => {
    const navList = [
        { 
            to: "ariza",
            imgSrc: Vector,
            title: "Arizalar",
            text: "Yetib kelgan arizalarni kuzatishingiz mumkin", 
        
        },
        { 
            to: "yitariza",
            imgSrc: Vector1,
            title: "Yetkazilgan",
            text: "Yetkazilgan taomlar ro’yxati bilan tanishing", 
        
        },
        { 
            to: "statistika",
            imgSrc: Vector2,
            title: "Statistika",
            text: "Diagrammalar bilan ishlangan statistika", 
        
        },
        { 
            to: "qoshish",
            imgSrc: Vector3,
            title: "Qo'shish",
            text: "Yangi taom qo’shish", 
        
        },
        { 
            to: "foydalanuvchilar",
            imgSrc: Vectorgroup,
            title: "Foydalanuvchilar",
            text: "Rollarni biriktirishingiz mumkin", 
        
        }
    ];
     
    const [display, setDisplay] = useState(true)
    const {isLogin, setLogin} = useContext(LoginContext);
  return (
    <DashboardStyledWrapper className='d-flex'>
        <aside className={`shadow p-3 border ${display === true ? "d-block" : "d-none"}`}>
            <img src={image15} className="w-100" alt="" />

            <ListGroup>
                {navList.map((item, index) => (
                    <ListGroup.Item key={index}>
                        <NavLink to={item.to} 
                            className={`d-flex align-items-center 
                                ${({isActive}) => isActive ? "active" : ""}`}>
                            <img src={item.imgSrc} alt="" />
                            <span>
                                <h6 className='text-secondary'>{item.title}</h6>
                                <p className='text-secondary'>{item.text}</p>
                            </span>
                        </NavLink>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        
        </aside>
        <div className="rightside">
            <header className='shadow border px-4 py-3 d-flex align-items-center justify-content-between'>
                <button type='button ' onClick={() => setDisplay(display === true ? false : true)} className='border-0 bg-white '>
                  <button className='btn btn-primary '> Home</button>
                </button>
                <span className='d-flex align-items-center'>
                    <FaUserTie className='text-secondary me-1'/>
                    <p className='m-0 me-4 fw-bold text-secondary'>Mehriddin</p>
                    <Link to={"/"} onClick={() => setLogin(false)} className="btn btn-primary">Log out</Link>
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