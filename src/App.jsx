import './App.css'
import { Outlet} from 'react-router'
import { useNavigate,} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateForward, faFloppyDisk, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect} from 'react'

function App() {
  const navigate = useNavigate()
  const [selectedButton, setSelectedButton] = useState('/')
   
  const handleNavigation = (path) => {
    setSelectedButton(path)
    navigate(path)
  }
  
  
  return (
    <>
    <div style={{minHeight:"100vh"}}>
      <header>
          <p>Add Employee Details</p>
        </header>
        <div className="container" style={{marginBottom: "20px"}}>
         
          <nav>
          <button
              className={selectedButton === '/' ? 'focus' : ''}
              onClick={() => handleNavigation('/')}
            >
              Personal
            </button>
            <button
              className={selectedButton === 'organizational' ? 'focus' : ''}
              onClick={() => handleNavigation('organizational')}
            >
              Organizational
            </button>
            <button
              className={selectedButton === 'paymentinfo' ? 'focus' : ''}
              onClick={() => handleNavigation('paymentinfo')}
            >
              Payment Info
            </button>
            <button
              className={selectedButton === 'otherinfo' ? 'focus' : ''}
              onClick={() => handleNavigation('otherinfo')}
            >
              Other Info
            </button>
            <button
              className={selectedButton === 'generalledger' ? 'focus' : ''}
              onClick={() => handleNavigation('generalledger')}
            >
              General Ledger
            </button>
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
