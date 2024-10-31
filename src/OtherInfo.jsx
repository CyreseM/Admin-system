import React from 'react'
import './OtherInfo.css'

const OtherInfo = () => {
  return (
    <div>
      <section className="otherinfo">
        <form action="">
          <section className="other1">
          <fieldset>
            <legend>Salary Info</legend>
            <section>
              <div>
                    <label>Payroll hours</label>
                    <select name='gender' required>
                            <option value="" disabled selected>Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                  </div>
                  <div>
                    <label className='percentagesal'>Percentage Of Basic Salary</label>
                    <input type="number"  placeholder='0.00' style={{textAlign:"right", backgroundColor:"#D8DBE0"}}/>
                  </div>
            </section>
          
                  <div>
                    <label>Payslip Note</label>
                    <textarea type="text"  placeholder='Note'  />
                  </div>
              </fieldset>
            </section>

          <section className='barrier'>

          </section>

          <section className="other2">
         
             
          </section>

          
        </form>
      </section>
    </div>
  )
}

export default OtherInfo
