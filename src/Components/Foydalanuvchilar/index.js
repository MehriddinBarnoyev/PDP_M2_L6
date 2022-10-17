import React from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import FoydalanuchilarStyled from './FoydalanuchilarStyled';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';

const Foydalanuchilar = () => {
    const [showRol, setShowRol] = useState(false);
    const handleCloseRol = () => setShowRol(false);
    const handleShowRol = () => setShowRol(true);
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);
    
    const tasks4 = useSelector((state) => state.tasks4); 
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
                        <tr key={index}>
                            <td className="text-center">{index+1}</td>
                            <td>{item.name}</td>
                            <td className="text-center">{item.tel}</td>
                            <td className="rol text-center">
                                <Button className='rolButton bg-white text-primary border-0 text-dark' onClick={handleShowRol}>
                                    {item.rol}
                                </Button>

                                <Modal show={showRol} onHide={handleCloseRol} centered animation={false}>
                                    <Modal.Header className='border-0 mx-auto'>
                                    <Modal.Title>Foydalanuvchi uchun rol tanlang</Modal.Title>
                                    </Modal.Header> 
                                    <Modal.Body className='mx-auto'>
                                        <Form.Select style={{width: 450}}>
                                            <option>Admin</option>
                                            <option>Yetkazuvchi</option>
                                            <option>Foydalanuvchi</option>
                                        </Form.Select>
                                    </Modal.Body>
                                    <Modal.Footer className='border-0 mx-auto'>
                                    <Button variant="danger" style={{width: 150}} onClick={handleCloseRol}>
                                        Bekor qilish
                                    </Button>
                                    <Button variant="warning" className='fw-bold' style={{width: 150}} onClick={handleCloseRol}>
                                        Saqlash
                                    </Button>
                                    </Modal.Footer>
                                </Modal>
                            </td>
                            <td className="text-center">
                                <Button className='bg-white text-primary border-0' onClick={handleShowEdit}>
                                    <FaEdit className='' />
                                </Button>

                                <Modal show={showEdit} onHide={handleCloseEdit} centered animation={false}>
                                    <Modal.Header className='border-0 mx-auto'>
                                    <Modal.Title>Foydalanuvchi malumotlarini kiriting</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body className='mx-auto'>
                                        <form>
                                            <p><input type="text" className='form-control' style={{width: 450}} placeholder='Last name' /></p>
                                            <p><input type="text" className='form-control' style={{width: 450}} placeholder='Frist name' /></p>
                                        </form>
                                        <Form.Select style={{width: 450}}>
                                            <option>Admin</option>
                                            <option>Yetkazuvchi</option>
                                            <option>Foydalanuvchi</option>
                                        </Form.Select>
                                    </Modal.Body>
                                    <Modal.Footer className='border-0 mx-auto'>
                                    <Button variant="danger" style={{width: 150}} onClick={handleCloseEdit}>
                                        Bekor qilish
                                    </Button>
                                    <Button variant="warning" className='fw-bold' style={{width: 150}} onClick={handleCloseEdit}>
                                        Saqlash
                                    </Button>
                                    </Modal.Footer>
                                </Modal>
                            </td>
                            <td className="text-center">
                                <button className='bg-white text-danger border-0'><FaTrashAlt /></button>
                            </td>
                        </tr>
                    ))}
                    <tr className='text-center'>
                        <td className='fw-bold'>Jami</td>
                        <td colSpan={2}></td>
                        <td className='fw-bold'>{tasks4.length + " "} so'm</td>
                        <td colSpan={2}></td>
                    </tr>
                </tbody>
            </table>
        </span>
        
    </FoydalanuchilarStyled>
  )
}

export default Foydalanuchilar;