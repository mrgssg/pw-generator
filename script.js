const numbers = [1,2,3,4,5,6,7,8,9,0];
const characters = ["!", "@", "#", "$"];
const characterCodes = Array.from(Array(26)).map( (_, i) => i + 97);
const lowercaseLetters = characterCodes.map(code => String.fromCharCode(code));
const uppercaseLetters = lowercaseLetters.map(letter => letter.toLocaleUpperCase())

const generatePassword = (_length, hasLowercase, hasUppercase, hasNumbers, hasCharacters) =>{
    const availableCharacters = [
        ...(hasLowercase ? lowercaseLetters : []),
        ...(hasUppercase ? lowercaseLetters : []),
        ...(hasNumbers ? numbers : []),
        ...(hasCharacters ? characters : [])
]};
    
    let password = "";

    for(let i = 0; i <length; i++){
        const randomIndex = Math.floor(Math.random() * availableCharacters.length);
        password += availableCharacters[randomIndex];
    console.log
}

 console.log(generatePassword(8,true, true, true, true));


    
    
    
    
    // const resultEl = document.getElementById('result');
// const lengthEl = document.getElementById('length');
// const uppercaseEl = document.getElementById('uppercase');
// const lowercaseEl = document.getElementById('lowercase');
// const numbersEl = document.getElementById('numbers');
// const charactersEl = document.getElementById('characters');
// const generateEl = document.getElementById('generate');


// const randomFunc = {
//     lower: getRandomLower,
//     upper: getRandomUpper,
//     number: getRandomNumbers,
//     character: getRandomCharacters
// };

// generateEl.addEventListener('click', () => {
//     const length = +lengthEl.value;
//     const hasLower = lowercaseEl.checked;
//     const hasUpper = uppercaseEl.checked;
//     const hasNumbers = numbersEl.checked;
//     const hasCharacters = charactersEl.checked;

// resultEl.innerText = generatePassword( 
//     hasLower, 
//     hasUpper, 
//     hasNumbers, 
//     hasCharacters, 
//     length
//     );
// });

// function generatePassword(lower, upper, numbers, characters, _length) {

//     let generatedPassword = ''

//     const typesCount = lower + upper + numbers + characters;

//     // const typesArr = [{ lower }, { upper }, { numbers }, { characters }].filter
//     (item =>Object.values(item) [0]
//     );

//     if(typesCount === 0) {
//         return'';}
//     }

// for (let i = 0; i < length; i += typesCount) {
//     typesArr.forEach(type => {
//         const funcName = Object.keys(type)[0];

//         generatedPassword += randomFunc[funcName]()

//       });    

//         console.log(generatedPassword) 
   
//     const generatedPassword = generatedPassword(0, length);
  

// }

// function getRandomLower () {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRandomUpper () {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// function getRandomNumbers () {
//     return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// function getRandomCharacters () {
//     const character = "!@#$%^&*()-+";
//     return character[Math.floor(Math.random() * character.length)];
// }

      