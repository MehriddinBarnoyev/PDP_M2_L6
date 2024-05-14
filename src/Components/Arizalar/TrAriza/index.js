import React, { useState } from "react";
import { Button,  Modal } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { removeTask } from "../../../Redux/actions/arizaAction";
import TrArizaStyledWrapper from "./TrArizaStyled";

const TrAriza = ({ item, index, ...props }) => {
  const [text, setText] = useState(item.name);
  const [tel, setTel] = useState(item.tel);
  const [taomName, setTaomNome] = useState(item.taomName);
  const [narxi, setNarxi] = useState(item.narxi);
  const [soni, setSoni] = useState(item.soni);
  const [umumiyNarxi, setUmumiyNarxi] = useState(item.umumiyNarxi);
  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const remove = (index) => removeTask(index);
  return (
    <TrArizaStyledWrapper {...props}>
      <td>{item.id}</td>
      <td>{text}</td>
      <td>{taomName}</td>
      <td>{narxi}</td>
      <td>{soni}</td>
      <td>{umumiyNarxi}</td>
      <td>{tel}</td>
      
      <td className="text-center">
        <Button className="py-1 px-2" onClick={handleShowEdit}>
          <FaEdit className="" />
        </Button>

        <Modal
          show={showEdit}
          onHide={handleCloseEdit}
          centered
          animation={false}
        >
          <Modal.Header className="border-0 mx-auto">
            <Modal.Title>Foydalanuvchi malumotlarini kiriting</Modal.Title>
          </Modal.Header>
          <Modal.Body className="mx-auto">
            <form>
              <p>
                <input
                  type="text"
                  value={text}
                  onChange={(e) =>
                    setText(showEdit === false ? text : e.target.value)
                  }
                  className="form-control"
                  style={{ width: 450 }}
                  placeholder="Last name"
                />
              </p>

              <p>
                <input
                  type="text"
                  value={taomName}
                  onChange={(e) => setTaomNome(e.target.value)}
                  className="form-control"
                  style={{ width: 450 }}
                  placeholder="Taom nomi"
                />
              </p>
              <p>
                <input
                  type="text"
                  value={narxi}
                  onChange={(e) => setNarxi(e.target.value)}
                  className="form-control"
                  style={{ width: 450 }}
                  placeholder="Narxi"
                />
              </p>
              <p>
                <input
                  type="text"
                  value={soni}
                  onChange={(e) => setSoni(e.target.value)}
                  className="form-control"
                  style={{ width: 450 }}
                  placeholder="Soni"
                />
              </p>
              <p>
                <input
                  type="text"
                  value={umumiyNarxi}
                  onChange={(e) => setUmumiyNarxi(e.target.value)}
                  className="form-control"
                  style={{ width: 450 }}
                  placeholder="Umumiy narxi"
                />
              </p>
              <p>
                <input
                  type="text"
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                  className="form-control"
                  style={{ width: 450 }}
                  placeholder="Tel raqam"
                />
              </p>
           
            </form>
          </Modal.Body>
          <Modal.Footer className="border-0 mx-auto">
            <Button
              variant="warning"
              className="fw-bold"
              style={{ width: 150 }}
              onClick={handleCloseEdit}
            >
              Saqlash
            </Button>
          </Modal.Footer>
        </Modal>
      </td>
      <td className="text-center">
        <button
          type="button"
          onClick={() => remove(index)}
          className="btn btn-danger px-2 py-1"
        >
          <FaTrash />
        </button>
      </td>
    </TrArizaStyledWrapper>
  );
};

export default TrAriza;
