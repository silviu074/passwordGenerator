# React Password Generator

This project is a password generator that can help you create complex random passwords.

## Built with

  * HTML 
  * CSS
  * Javascript
  * React
  
## Demo

https://user-images.githubusercontent.com/44822821/191117050-567c07bf-a870-4560-80a9-ae1c16c0e52e.mp4


## How does this work?

There are 4 arrays which correspond to different type of characters:

* lowercase
* uppercase
* numbers
* symbols _(not all symbol type characters are included in this project)_

These arrays are created using a function which converts ANSI numbers to characters.

```
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
  
```  

When I click "Generate password" a function is called. This function returns a string with random characters extracted from an array which varies depensing on the value of the checkboxes:
  
```

     const createPassword = (length,upperCase,numbers,symbols) => {

      let characters = LOWERCASE // the starting array contains all lowecase characters
      let password=[]

      if(upperCase){ // verifies if "At least one uppercase letter" checkbox is true
        characters = characters.concat(UPPERCASE)
      }

      if(numbers){ // verifies if "At least one number" checkbox is true
        characters = characters.concat(NUMBERS)
      }

      if(symbols){ // verifies if "At least one symbol" checkbox is true
        characters = characters.concat(SYMBOLS)
      }

      for(let i=0; i<=length; i++){
        const x = characters[Math.floor(Math.random()*characters.length)]
        password.push(x) 
        // adds a random character from the characters array 
      }
      
      return password.join('') // returns this array as string
      
    }


```
  
## Credits

[Web Dev Simplified](https://www.youtube.com/watch?v=iKo9pDKKHnc)
