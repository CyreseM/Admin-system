import React from 'react'
import './Organizational.css'
const Organizational = () => {
  return (
    <div>
      <section className="organizational">
        <form action="">
          <section className="organ1">
          <fieldset>
                  <div>
                      <label>Staff ID<span>*</span></label>
                      <input type="text" placeholder='Auto Generate ID' style={{backgroundColor:"#D8DBE0"}} required/>
                  </div>
                  <div>
                      <label>Hire Date<span>*</span></label>
                      <input type='date' required/>
                  </div>
              </fieldset>

              <fieldset>
                <legend>Segments</legend>
                <div>
                    <label>Section</label>
                    <select name='section' required>
                            <option value="" disabled selected>Select Section</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                </div>
                <div>
                    <label>Department<span>*</span></label>
                    <select name='department' required>
                            <option value="" disabled selected>Select Department</option>
                            <option value="finance">Finance</option>
                            <option value="HR">Human Resource</option>
                            <option value="cybersecurity">Cyber security</option>
                            <option value="SI">System Integration</option>

                        </select>
                </div>
                <div>
                    <label>Division</label>
                    <select name='division'>
                            <option value="" disabled selected>Select Division</option>
                            <option value="1stdivision">First Division</option>
                            <option value="2nddivision">Second Division</option>
                        </select>
                </div>
                <div>
                    <label>Employee Type<span>*</span></label>
                    <select name='employeetype' required>
                            <option value="" disabled selected>Select Employee Type</option>
                            <option value="NSS">National Service Personnel</option>
                            <option value="Regular">Regular</option>
                            <option value="Temporary">Temporary</option>
                        </select>
                </div>
                <div>
                    <label>Position</label>
                    <select name='position' required>
                            <option value="" disabled selected>Select Position</option>
                            <option value="software-engineer">software engineer</option>
                            <option value="consultant">consultant</option>
                        </select>
                </div>
                <div>
                    <label>Unit</label>
                    <select name='gender' required>
                            <option value="" disabled selected>Select Unit</option>
                            <option value="unit1">Unit 1</option>
                            <option value="unit2">Unit2</option>
                        </select>
                </div>
                <div>
                    <label>Location</label>
                    <select name='location' required>
                            <option value="" disabled selected>Select Location</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                </div>         
              </fieldset>
          </section>

          <section className='barrier'>

          </section>

          <section className="organ2">
          <fieldset>
              <div>
                    <label>Tax Option</label>
                    <select name='tax option' required>
                            <option value="" disabled selected>Select Tax Option</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                </div>
                <div>
                    <label>Employment Option</label>
                    <select name='employment-option' required>
                            <option value="" disabled selected>Select Employment Option</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                </div>
                <div style={{display:"flex", alignItems:"center"}}>
                    <input type="checkbox"/>
                    <p>Overtime Exempt</p>
                </div>             
              </fieldset>

              <fieldset>
                <legend>Salary Info</legend>
                <div style={{display: "grid", gridTemplateColumns:"repeat(2, 1fr)", gap:"20px"}}>
                  <div>
                        <label>Salary Grade</label>
                        <select name='salary-grade' required>
                                <option value="" disabled selected>Select Salary Grade</option>
                                <option value="grade1">Male</option>
                                <option value="grade2">Female</option>
                            </select>
                    </div>
                  <div>
                      <label>Notch</label>
                      <select name='notch' required>
                              <option value="" disabled selected>Select Notch</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                          </select>
                  </div>
                </div>
                <div className="currency">
                  <div>
                        <label>Currency</label>
                        <input type="number" style={{backgroundColor:"#D8DBE0"}} />
                    </div>
                    <div>
                        <label>Salary Type</label>
                        <input type="text" style={{backgroundColor:"#D8DBE0"}}/>
                    </div>
                    <div>
                        <label>Rate<span>*</span></label>
                        <input type="number" />
                    </div>         
                </div>
                   
              </fieldset>
          </section>

          
        </form>
      </section>
    </div>
  )
}

export default Organizational
