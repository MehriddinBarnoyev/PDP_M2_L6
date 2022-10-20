import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { removeTaskKat } from '../../../../Redux/actions/katigoriyaAction';
import TrKatWrapperStyled from './TrKatStyled';

const TrKat = ({item, index, ...props}) => {
    const remove = (index) => removeTaskKat(index)
    const [katigoriya, setKatigoriya] = useState(item.katigoriya)
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);
    
  return (
    <TrKatWrapperStyled {...props}>
        <td>{item.id}</td>
        <td>{katigoriya}</td>
        <td className='text-center'>
        <Button className='py-1 px-2' onClick={handleShowEdit}>
                    <FaEdit className='' />
                </Button>

                <Modal show={showEdit} onHide={handleCloseEdit} centered animation={false}>
                    <Modal.Header className='border-0 mx-auto'>
                        <Modal.Title>Foydalanuvchi malumotlarini kiriting</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='mx-auto'>
                        <form>
                            <p><input type="text" 
                                value={katigoriya} 
                                onChange={(e) => setKatigoriya(e.target.value)} 
                                className='form-control' 
                                style={{width: 450}} placeholder='Last name' /></p>
                        </form>
                        
                    </Modal.Body>
                    <Modal.Footer className='border-0 mx-auto'>
                        <Button variant="warning" className='fw-bold' style={{width: 150}} onClick={handleCloseEdit}>
                            Saqlash
                        </Button>
                    </Modal.Footer>
                </Modal>
        </td>
        <td className='text-center'>
            <button type='button' onClick={() => remove(index)} className='btn btn-danger px-2 py-1'>
                <FaTrash />
            </button>
        </td>
    </TrKatWrapperStyled>
  )
}

export default TrKat;