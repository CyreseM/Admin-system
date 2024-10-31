import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import  Personal from './Personal.jsx'
import Organizational from './Organizational.jsx'
import PaymentInfo from './PaymentInfo.jsx'
import OtherInfo from './OtherInfo.jsx'
import GeneralLedger from './GeneralLedger.jsx'
import Bank from './bank.jsx'
import MobileMoney from './MobileMoney.jsx'

const root = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        index: true,
        element: <Personal/>
      },
      {
        path: 'organizational',
        element: <Organizational/>
      },
      {
        path: 'paymentinfo',
        element: <PaymentInfo/>,
        children:[
          {
            path: 'bank',
            element: <Bank/>
          },
          {
            path: 'momo',
            element: <MobileMoney/>
          }
        ]
      },
      {
        path: 'otherinfo',
        element: <OtherInfo/>
      },
      {
        path: 'generalledger',
        element: <GeneralLedger/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={root}/>
  </StrictMode>,
)
