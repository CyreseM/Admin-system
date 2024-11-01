import React, { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faXmark, faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import './paymentinfo.css'
import { Outlet, useNavigate } from 'react-router'

const PaymentInfo = () => {
  const dialogRef = useRef()
  const navigate = useNavigate()

  const handlePaymentOptionChange = (event) => {
    const selectedOption = event.target.value
    if (selectedOption === 'mobile-money') {
      navigate('momo')
    } else if (selectedOption === 'bank') {
      navigate('bank')
    }
  }
 useEffect(()=>navigate('momo'),[])
  return (
    <div>
      <dialog ref={dialogRef}>
        <form action="">
          <div className='dialog-header'>
            <div>
              <label htmlFor="payment-option">Payment Option</label>
              <select name="payment-option" id="payment-option" onChange={handlePaymentOptionChange}>
                <option value="mobile-money">Mobile Money</option>
                <option value="bank">Bank</option>
              </select>
            </div>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginRight:'auto'}}>
              <input type="checkbox" />
              <p>Default</p>
            </div>
          </div>

          <Outlet />

          <div className="dialog-footer">
            <div>
              <button onClick={() => dialogRef.current?.close()} style={{ backgroundColor: "#CED2D8", color: "#5E6B7F" }}>
                <FontAwesomeIcon icon={faXmark} /> Close
              </button>
              <button style={{ backgroundColor: '#7893A5', color: "white" }}>
                <FontAwesomeIcon icon={faFloppyDisk} /> Add
              </button>
            </div>
          </div>
        </form>
      </dialog>

      <section className='paymentinfo'>
        <button onClick={() => dialogRef.current?.showModal()}>
          <FontAwesomeIcon icon={faPlus} /> Add Option
        </button>
        <div style={{ position: "relative", top: "50px" }}>
          <table id="customers">
            <tr>
              <th>Payment Option</th>
              <th>Service provider</th>
              <th>Branch</th>
              <th>Account #</th>
              <th>Payment Basis</th>
              <th>Value</th>
              <th>Default</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
          </table>
        </div>
      </section>
    </div>
  )
}

export default PaymentInfo
