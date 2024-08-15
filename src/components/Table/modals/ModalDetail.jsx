import {Modal} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux"
import {changeModalNameAction} from "../../../store/reducers/modalReducer"
import {useEffect} from "react"
import TableService from "../../../services/TableService.js"

const ModalDetail = () => {
  const dispatch = useDispatch()
  const {id, name_modal} = useSelector(state => state.modalReducer)
  const {detail} = useSelector(state => state.tableReducer)

  useEffect(() => {
    if (name_modal === 'detail') TableService.getDetail(id)
  }, [name_modal])

  return (
    <Modal size="xl" show={name_modal === 'detail'} onHide={() => dispatch(changeModalNameAction(''))}
           centered>
      <div className="p-3">
        <div className="border-bottom-modal">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h5 className="modal-title">Detail</h5>
            <button type="button" className="close" onClick={() => dispatch(changeModalNameAction(''))}>
              <span className="material-icons">close</span>
            </button>
          </div>
        </div>
        <div className="mt-2">
          <p>Address: {detail?.contact_address}</p>
          <p>Email: {detail?.contact_email}</p>
          <p>Name: {detail?.contact_name}</p>
          <p>Phone: {detail?.contact_phone}</p>
        </div>
      </div>
    </Modal>
  )
}
export default ModalDetail
