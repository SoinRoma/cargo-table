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
          <p><strong>Pick-up at:</strong> {detail?.pick_up_at}</p>
          <p><strong>Pick-up date:</strong> {detail?.pick_up_date}</p>
          <p><strong>Deliver to:</strong> {detail?.deliver_to}</p>
          <p><strong>Delivery date:</strong> {detail?.delivery_date}</p>
          <p><strong>Miles:</strong> {detail?.miles}</p>
          <p><strong>Suggested Truck Size:</strong> {detail?.suggested_truck}</p>
        </div>
      </div>
    </Modal>
  )
}
export default ModalDetail
