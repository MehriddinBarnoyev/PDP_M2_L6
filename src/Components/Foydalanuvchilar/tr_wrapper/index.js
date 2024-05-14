import React, { useState } from 'react'
import { removeTaskFoy } from '../../../Redux/actions/foydalanuvchiAction';
import TrwrapperStyled from './TrwrapperStyled';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const TrWrapper = ({item, index, ...props}) => {
    const [text, setText] = useState(item.name)
    const [tel, setTel] = useState(item.tel)
    const [rol, setRol] = useState(item.rol)
    const [showRol, setShowRol] = useState(false);
    const handleCloseRol = () => setShowRol(false);
    const handleShowRol = () => setShowRol(true);
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);
    
    const remove = (index) => removeTaskFoy(index)

  return (
    <TrwrapperStyled {...props}>
        <td className="text-center">{item.id}</td>
        <td>{text}</td>
        <td className="text-center">{tel}</td>
        <td className="rol text-center">
            <Button className='rolButton bg-white text-primary border-0 text-dark' onClick={handleShowRol}>
                {rol}
            </Button>

           
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
                        <p><input type="text" 
                            value={text} 
                            onChange={(e) => setText(e.target.value)} 
                            className='form-control' 
                            style={{width: 450}} placeholder='Last name' /></p>
                        <p><input type="text" 
                            value={tel}
                            onChange={(e) => setTel(e.target.value)}
                            className='form-control' 
                            style={{width: 450}} 
                            placeholder='Frist name' /></p>
                    </form>
                    <Form.Select style={{width: 450}} defaultValue={rol} onChange={(e) => setRol(e.target.value)} >
                        <option value={"Admin"}>Admin</option>
                        <option value={"Yitkazuvchi"}>Yetkazuvchi</option>
                        <option value={"Foydalanuvchi"}>Foydalanuvchi</option>
                    </Form.Select>
                </Modal.Body>
                <Modal.Footer className='border-0 mx-auto'>
                    <Button variant="warning" className='fw-bold' style={{width: 150}} onClick={handleCloseEdit}>
                        Saqlash
                    </Button>
                </Modal.Footer>
            </Modal>
        </td>
        <td className="text-center">
            <button className='bg-white text-danger border-0' onClick={() => remove(index)}><FaTrashAlt /></button>
        </td>
                        
    </TrwrapperStyled>
  )
}

export default TrWrapper;