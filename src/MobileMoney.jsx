import React from 'react'
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { useState } from 'react';

const MobileMoney = () => {
  const [phone, setPhone] = useState('')
  return (
    <div>
           <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", columnGap:'20px'}}>
                  <div>
                      <label>Service Provider<span>*</span></label>
                      <select name='service-provider'>
                          <option value="" disabled selected>Select Service Provider</option>
                          <option value="MTN">MTN</option>
                          <option value="Telcel">Telcel</option>
                          <option value="AirtelTigo">AirtelTigo</option>
                      </select>
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
                      <label>Payment Basis<span>*</span></label>
                      <select name='payment-basis'>
                          <option value="" disabled selected>Select Payment Basis</option>
                          <option value="Mr">Mr</option>
                          <option value="Mrs">Mrs</option>
                          <option value="Miss">Miss</option>
                      </select>
                  </div>  

            <div>
              <label style={{textAlign:"right"}}>NA<span>*</span></label>
              <input type="text"  style={{textAlign:"right", backgroundColor:"#D8DBE0"}}/>
            </div>   
       </div>

       <div>
          <label>Note</label>
         <textarea type="text"  placeholder='Note'  />
       </div>
       
    
    </div>
  )
}

export default MobileMoney
