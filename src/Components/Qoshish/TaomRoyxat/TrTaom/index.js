import React, { useState } from 'react'
import { removeTaskTaom } from '../../../../Redux/actions/taomAction';
import TrTaomWrapperStyled from './TrTaomStyled';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Button, Form, Modal } from 'react-bootstrap';
const TrTaom = ({item, index, ...props}) => {
    const [taomnomi, setTaomNomi] = useState(item.taomnomi)
    const [taomtarifi, setTaomTarifi] = useState(item.taomtarifi)
    const [taomNarxi, setTaomNarxi] = useState(item.taomNarxi)
    const [katigoriya, setKatigoriya] = useState(item.kategoriya)
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const remove = (index) => removeTaskTaom(index);
  return (
    <TrTaomWrapperStyled className="coll col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4" {...props}>
        <div className="box border rounded shadow">
            <img src="..." className="bg-secondary rounded d-block w-100" style={{width: 250, height: 150}} alt="250x150" />
            <span className='py-2 px-3 d-block'>
                <span className='d-flex align-items-center justify-content-between'>
                    <h4 className='text-secondary'>{taomnomi}</h4>
                    <span>
                        <span>
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
                                            value={taomnomi} 
                                            onChange={(e) => setTaomNomi(e.target.value)} 
                                            className='form-control' 
                                            style={{width: 450}} placeholder='Last name' /></p>
                                        <p><input type="text" 
                                            value={taomtarifi}
                                            onChange={(e) => setTaomTarifi(e.target.value)}
                                            className='form-control' 
                                            style={{width: 450}} 
                                            placeholder='Frist name' /></p>
                                        <p><input type="text" 
                                            value={taomNarxi}
                                            onChange={(e) => setTaomNarxi(e.target.value)}
                                            className='form-control' 
                                            style={{width: 450}} 
                                            placeholder='Frist name' /></p>
                                        
                                    </form>
                                    <Form.Select style={{width: 450}} defaultValue={katigoriya} onChange={(e) => setKatigoriya(e.target.value)} >
                                        <option value={"Suyuq taom"}>Suyuq taom</option>
                                        <option value={"Quyuq taom"}>Quyuq taom</option>
                                        <option value={"Pishiriqlar"}>Pishiriqlar</option>
                                        <option value={"Ichimliklar"}>Ichimliklar</option>
                                        <option value={"Salatlar"}>Salatlar</option>
                                    </Form.Select>
                                </Modal.Body>
                                <Modal.Footer className='border-0 mx-auto'>
                                    <Button variant="warning" className='fw-bold' style={{width: 150}} onClick={handleCloseEdit}>
                                        Saqlash
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </span>            
                         <button type='button' onClick={() => remove(index)} className='border-0 bg-white text-danger'>
                            <FaTrash/>
                        </button>
                    </span>
                </span>
                <p className='text-secondary text-break text-wrap'>{taomtarifi}</p>
                <span className='d-flex align-items-center justify-content-between'>
                    <p className='text-break text-wrap'>
                        <b className='text-primary'>{taomNarxi} so'm</b>
                    </p>
                    <p className='text-break text-wrap'>
                        <b className='text-primary'>{katigoriya}</b>
                    </p>
                </span>
            </span>
        </div>
    </TrTaomWrapperStyled>
  )
}

export default TrTaom;