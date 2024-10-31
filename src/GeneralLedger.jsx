import React from 'react'
import './GeneralLedger.css'
const GeneralLedger = () => {
  return (
    <div>
     <section className="generalledger">
        <form action="">
         <section className="general1">
          <fieldset>
            <legend>Regular</legend>

              <div>
                <label>Salary</label>
                <input type="search" placeholder='Search GL'/>  
              </div>
              <div>
                <label>Income Tax</label>
                <input type="search" placeholder='Search GL'/>
              </div>
              <div>
                <label>Net Salary Payable</label>
                <input type="search" placeholder='Search GL'/>
               </div>
               <div>
                <label>Operating Overtime</label>
                <input type="search" placeholder='Search GL'/>
               </div>
               <div>
                <label>Shift Allowance</label>
                <input type="search" placeholder='Search GL'/>
               </div> 
               <div>
                <label>Tax Relief</label>
                <input type="search" placeholder='Search GL'/>
               </div> 
              </fieldset>
            </section>

          <section className='barrier'>

          </section>

          <section className="general2">
            <fieldset>
              <legend>Mandatory</legend>

                <div>
                  <label>Employee Contribution GL</label>
                  <input type="search" placeholder='Search GL'/>  
                </div>
                <div>
                  <label>Employee Contribution GL</label>
                  <input type="search" placeholder='Search GL'/>
                </div>
                <div>
                  <label>Employee Contribution GL</label>
                  <input type="search" placeholder='Search GL'/>
                </div>
    
            </fieldset>

            <fieldset>
              <legend>Voluntary</legend>

                <div>
                  <label>Employee Contribution GL</label>
                  <input type="search" placeholder='Search GL'/>  
                </div>
                <div>
                  <label>Employee Contribution GL</label>
                  <input type="search" placeholder='Search GL'/>
                </div>
                <div>
                  <label>Employee Contribution GL</label>
                  <input type="search" placeholder='Search GL'/>
                </div>
    
            </fieldset>
              
          </section>

          
        </form>
      </section>
    </div>
  )
}

export default GeneralLedger
