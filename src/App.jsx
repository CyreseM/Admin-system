import './App.css'
import { Outlet} from 'react-router'
import { useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateForward, faFloppyDisk, faXmark } from '@fortawesome/free-solid-svg-icons'

function App() {
  const navigate = useNavigate()

  return (
    <>
    <div style={{minHeight:"100vh"}}>
      <header>
          <p>Add Employee Details</p>
        </header>
        <div className="container" style={{marginBottom: "20px"}}>
          <nav>
            <button onClick={()=>{navigate('/')}}>Personal</button>
            <button onClick={()=>{navigate('organizational')}}>Organizational</button>
            <button onClick={()=>{navigate('paymentinfo')}}>Payment Info</button>
            <button onClick={()=>{navigate('otherinfo')}}>Other Info</button>
            <button onClick={()=>{navigate('generalledger')}}>General Ledger</button>
          </nav>
          <hr />

          <Outlet/>
        </div>
        <footer>
            <p>All fields marked with asterix are required (<span>*</span>)</p>
            <div>
              <button style={{backgroundColor: "#5B5B5B"}}><FontAwesomeIcon icon={faXmark}/> Cancel</button>
              <button style={{backgroundColor: '#F9B115'}}><FontAwesomeIcon icon={faArrowRotateForward}/> Reset</button>
              <button style={{backgroundColor: '#315A76'}}><FontAwesomeIcon icon={faFloppyDisk}/> Save</button>
            </div>
          </footer>
    </div>
      
    </>
  )
}

export default App
