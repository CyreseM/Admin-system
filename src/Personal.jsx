import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { useState } from 'react';


const Personal = () => {
    const [phone, setPhone] = useState('')
  return (
    <div>
        <div className="division"></div>
      <section className="personal">
        <form action="">
            <fieldset>
                <div>
                    <label>Title</label>
                    <select name='title'>
                        <option value="" disabled selected>Select title</option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                    </select>
                </div>
                <div>
                    <label>First Name<span>*</span></label>
                    <input type='text' />
                </div>
                <div>
                    <label>Last Name<span>*</span></label>
                    <input type='text' name="title" id="" />
                </div>
                <div>
                    <label>Other Names</label>
                    <input type='text' name="title" id="" />
                </div>
                <div>
                    <label>Gender<span>*</span></label>
                    <select name='gender' required>
                            <option value="" disabled selected>Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                </div>
                <div>
                    <label>Date Of Birth<span>*</span></label>
                    <input type='date' name="title" id="" required />
                </div>
                <div>
                    <label>Marital Status<span>*</span></label>
                    <select name='marital status' required>
                            <option value="" disabled selected>Select Marital Status</option>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                 </select>
                </div>
            </fieldset>

            <fieldset style={{borderTop:"1px solid #DCDFE4", marginTop:"5px"}}>
                <legend>Contact Info</legend>
                <div>
                    <label>Email Address<span>*</span></label>
                    <input type='email' />
                </div>
                <div>
                    <label>Phone<span>*</span></label>
                        
                            <PhoneInput
                                    inputStyle={{height:'25px'}}
                                    defaultCountry="gh"
                                    value={phone}
                                    onChange={(phone) => setPhone(phone)}
                                />      
                </div>

                <div>
                    <label>Digital Address</label>
                    <input type='text' />
                </div>
                <div className='contact1'>
                    <label>Home Address</label>
                    <textarea  name='homeaddress' placeholder='Enter Home Address'/>
                </div>
            </fieldset>
            
            <fieldset >
                <div>
                    <label>Country<span>*</span></label>
                    <select name='county' required>
                            <option value="" disabled selected>Select Country</option>
                            <option value="male">Ghana</option>
                            <option value="female">Switzerland</option>
                        </select>
                </div>
                <div>
                    <label>Nationality<span>*</span></label>
                    <select name='nationality' required>
                            <option value="" disabled selected>Select Country</option>
                            <option value="male">Ghana</option>
                            <option value="female">Switzerland</option>
                        </select>
                </div>
                <div>
                    <label>National ID</label>
                    <input type='text' />
                </div>
                <div style={{display:"flex", alignItems:"center",justifyContent:"space-between", width:"80px"}}>
                    <input type="checkbox"/>
                    <p>Resident</p>
                </div>
            </fieldset>
            <fieldset className='fileupload' style={{borderTop:"1px solid #DCDFE4"}}>
                <legend>Employee Image</legend>
                <label style={{display:"block"}}>Profile Picture</label>
                <label for="file-upload" class="custom-file-upload"><span style={{color:'white'}}><FontAwesomeIcon icon={faCamera} /> Upload Image</span></label>
                <input id="file-upload" type="file" src="" alt="" />
            </fieldset>
           
        </form>
        
      </section>
    </div>
  )
}

export default Personal
