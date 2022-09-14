import React, { useState } from 'react'



    // Synchronizing the length and range for the minimum numbers of characters required------------------------------


    // function handleMinimumLength(e){
    // }


    // Synchronizing the length and range for the minimum numbers of characters required------------------------------


export const PasswordGenerator =() =>  {

    const [characterAmountNumber, setcharacterAmountNumber] = useState(6)
    const [characterAmountRange, setcharacterAmountRange] = useState(6)
    const [hasUpperCaseLetters, setHasUpperCaseLetters] = useState(false)
    const [hasNumbers, setHasNumbers] = useState(false)
    const [hasSymbols, setHasSymbols] = useState(false)

    const emptyArray=[]
    const UPPERCASE = arrayAnsi(97.122)
    const LOWERCASE = arrayAnsi(65.90)
    const NUMBERS = arrayAnsi(48.57)
    const SYMBOLS = arrayAnsi(33.47).concat(arrayAnsi(58,64)).concat(arrayAnsi(91,96)).concat(arrayAnsi(123,126))
    console.log(UPPERCASE)
    console.log(LOWERCASE)
    console.log(NUMBERS)
    console.log(SYMBOLS)


    function arrayAnsi(min,max){
      const array=[]
      for(let i=min;i<=max;i++){
        array.push(i)
      }
      return array
    }

   return (
    <div>
        <div className="container">
        <h1>Password Generator</h1>
        <div className="inputs">

        <div>
         <label htmlFor='minumumLengthNumber' >Minimum lenth: </label>

         <input type="range"
            id="minumumLengthRange"
            min={6}
            max={25} 
            value={characterAmountNumber} 
            onChange={ (e) => {
              const value=e.target.value;
              setcharacterAmountNumber(value);
              setcharacterAmountRange(value);
           } }/>

         <input type="number" 
            id="minumumLengthNumber" 
            min={6} 
            max={25}  
            value={characterAmountRange}
            onChange={ (e) => {
              const value=e.target.value;
              setcharacterAmountNumber(value);
              setcharacterAmountRange(value);
           } }/>
         </div>

         <label htmlFor='hasUpperCaseLetters' >At least one uppercase letter: </label>
         <input 
          type="checkbox" 
          id="hasUpperCaseLetters"
          value={hasUpperCaseLetters}
          onChange={ () => {
            setHasUpperCaseLetters(current => !current)
         } }
          />

         <label htmlFor='hasNumbers' >At least one number: </label>
         <input 
           type="checkbox" 
           id="hasNumbers"
           value={hasNumbers}
           onChange={ () => {
            setHasNumbers(current => !current)
         } }  />

         <label htmlFor='hasSymbols' >At least one symbol: </label>
         <input 
          type="checkbox" 
          id="hasSymbols"
          value={hasSymbols}
          onChange={ () => {
            setHasSymbols(current => !current)
         } }  />
        </div>
        <button type='submit'>Generate Password</button>

      </div>
    </div>
  )
}
