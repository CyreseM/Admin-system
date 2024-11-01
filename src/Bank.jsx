import React from 'react'

const Bank = () => {
  return (
    <div>

      <div style={{display:"grid", gridTemplateColumns:"2fr 3fr", columnGap:'20px'}}>
                  <div>
                      <label>Bank<span>*</span></label>
                      <select name='Bank'>
                          <option value="" disabled selected>Select Bank</option>
                          <option value="Calbank">Calbank</option>
                          <option value="GTBank">GTBank</option>
                          <option value="ABSA">ABSA</option>
                      </select>
                  </div>  
                 
                  <div>
                      <label>Branch<span>*</span></label>
                      < select name='Branch'>
                          <option value="" disabled selected>Select Branch</option>
                          <option value="Calbank">Dansoman</option>
                          <option value="GTBank">Mamprobi</option>
                          <option value="ABSA">Circle</option>
                      </select>
                  </div>  
        </div>

        <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", columnGap:'20px'}}>
                  <div>
                      <label>Account Number<span>*</span></label>
                      <input type="text" placeholder='Enter Account No.'/>
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

export default Bank
