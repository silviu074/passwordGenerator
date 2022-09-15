import React, { useState } from 'react'

    const NUMBERS = arrayASCII(48,57)
    const UPPERCASE = arrayASCII(65,90)
    const LOWERCASE = arrayASCII(97,122)
    const SYMBOLS = arrayASCII(33,47).concat(arrayASCII(58,64))
    console.log(NUMBERS)
    console.log(UPPERCASE)
    console.log(LOWERCASE)
    console.log(SYMBOLS)

    function arrayASCII(min,max){
      const array=[]
      for(let i=min;i<=max;i++){
        let j=String.fromCharCode(i)
        array.push(j)
      }
      return array
    }

    // function password (a , length) {
    //   const password=[]
    //   for(let i=0; i<=length; i++){
    //     const x = characters[Math.floor(Math.random()*length)]
    //     password.push(x)
    //   }
    // }

    function usableCharacters(length,upperCase,numbers,symbols){

      const characters = []
      console.log(length)
      console.log(upperCase)
      console.log(numbers)
      console.log(symbols)

      switch(true){
        case upperCase && numbers && symbols:
          characters = LOWERCASE.concat(UPPERCASE).concat(NUMBERS).concat(SYMBOLS)
          break;
      }

      
      console.log(characters)
      
    }

    
export const PasswordGenerator =() =>  {

    const [characterAmountNumber, setcharacterAmountNumber] = useState(6)
    const [characterAmountRange, setcharacterAmountRange] = useState(6)
    const [hasUpperCaseLetters, setHasUpperCaseLetters] = useState(false)
    const [hasNumbers, setHasNumbers] = useState(false)
    const [hasSymbols, setHasSymbols] = useState(false)

   return (
    <div>
        <div className="container">
        <h1>Password Generator</h1>
        <div>
          <p>Password</p>
          <button>copy</button></div>
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
        <button type='submit' 
        onClick={usableCharacters(characterAmountNumber, hasUpperCaseLetters, hasNumbers, hasSymbols)}>
          Generate Password</button>

      </div>
    </div>
  )
}
