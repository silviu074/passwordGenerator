import React, { useState } from 'react'



    // Synchronizing the length and range for the minimum numbers of characters required------------------------------


    // function handleMinimumLength(e){
    // }


    // Synchronizing the length and range for the minimum numbers of characters required------------------------------


export const PasswordGenerator =() =>  {

    // const [characterAmountNumber, setcharacterAmountNumber] = useState(6)
    // const [characterAmountRange, setcharacterAmountRange] = useState(6)




   return (
    <div>
        <div className="container">
        <h1>Password Generator</h1>
        <div className="inputs">

            <div>
         <label htmlFor='minumumLengthNumber' >Minimum lenth: </label>
         <input type="range" id="minumumLengthRange" min={6} max={25} value={6}/>
         <input type="number" id="minumumLengthNumber"  min={6} max={25}  value={6}/>
         </div>

         <label htmlFor='hasUpperCaseLetters' >At least one uppercase letter: </label>
         <input type="checkbox" id="hasUpperCaseLetters"  />

         <label htmlFor='hasNumbers' >At least one number: </label>
         <input type="checkbox" id="hasNumbers"  />

         <label htmlFor='hasSymbols' >At least one symbol: </label>
         <input type="checkbox" id="hasSymbols"  />
  
        </div>
        
        <button type='submit'>Generate Password</button>

      </div>
    </div>
  )
}
