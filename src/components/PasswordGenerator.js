import React, { useState } from 'react'

    const NUMBERS = arrayASCII(48,57)
    const UPPERCASE = arrayASCII(65,90)
    const LOWERCASE = arrayASCII(97,122)
    const SYMBOLS = arrayASCII(33,47).concat(arrayASCII(58,64))

    function arrayASCII(min,max){
      const array=[]
      for(let i=min;i<=max;i++){
        let j=String.fromCharCode(i)
        array.push(j)
      }
      return array
    }

    const createPassword = (length,upperCase,numbers,symbols) => {

      let characters = LOWERCASE
      let password=[]

      if(upperCase){
        characters = characters.concat(UPPERCASE)
      }

      if(numbers){
        characters = characters.concat(NUMBERS)
      }

      if(symbols){
        characters = characters.concat(SYMBOLS)
      }

      
      for(let i=0; i<=length; i++){
        const x = characters[Math.floor(Math.random()*characters.length)]
        password.push(x)
      }
      
      return password.join('')
      
    }

    
export const PasswordGenerator = () =>  {

    const [characterAmountNumber, setcharacterAmountNumber] = useState(6)
    const [characterAmountRange, setcharacterAmountRange] = useState(6)
    const [hasUpperCaseLetters, setHasUpperCaseLetters] = useState(false)
    const [hasNumbers, setHasNumbers] = useState(false)
    const [hasSymbols, setHasSymbols] = useState(false)
    const [password, setPassword] = useState('Your password')
   
  
   return (
    <div className='render'>
        <div className="container">
        <h1 className="title">Password Generator</h1>
        <div className="displayPassword">
          <p className='fakeInput'>{password}</p>
          <button
          onClick={() => { 
            navigator.clipboard.writeText(password)
            alert(`${password}  was copied to clipboard`)
          }}>
            <img 
          className='copyIcon' src='https://i.pngimg.me/thumb/f/720/m2H7G6A0i8N4A0N4.jpg' alt='copy icon'></img>
            </button></div>
        <div className="inputs">
        <div className="condition">
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


           <div className="condition">
         <label htmlFor='hasUpperCaseLetters' >At least one uppercase letter: </label>
         <input 
          type="checkbox" 
          id="hasUpperCaseLetters"
          value={hasUpperCaseLetters}
          onChange={ () => {
            setHasUpperCaseLetters(current => !current)
         } }
          /></div>
          
          <div className="condition">
         <label htmlFor='hasNumbers' >At least one number: </label>
         <input 
           type="checkbox" 
           id="hasNumbers"
           value={hasNumbers}
           onChange={ () => {
            setHasNumbers(current => !current)
         } }  /></div>

          <div className="condition">
         <label htmlFor='hasSymbols' >At least one symbol: </label>
         <input 
          type="checkbox" 
          id="hasSymbols"
          value={hasSymbols}
          onChange={ () => {
            setHasSymbols(current => !current)
         } }  /></div>
        </div>
        
        <button type='submit'  className='generate'
        onClick={() => setPassword(createPassword(characterAmountNumber, hasUpperCaseLetters, hasNumbers, hasSymbols))}>
          Generate Password</button>

      </div>
    </div>
  )
}
