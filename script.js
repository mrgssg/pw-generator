const numbers = [1,2,3,4,5,6,7,8,9,0];
const characters = ["!", "@", "#", "$"];
const characterCodes = Array.from(Array(26)).map( (_, i) => i + 97);
const lowercaseLetters = characterCodes.map(code => String.fromCharCode(code));
const uppercaseLetters = lowercaseLetters.map(letter => letter.toLocaleUpperCase())
const passwordEl = document.getElementById('password')

passwordEl.addEventListener("click", generatePassword => {
        ...(hasLowercase ? lowercaseLetters : []),
        ...(hasUppercase ? lowercaseLetters : []),
        ...(hasNumbers ? numbers : []),
        ...(hasCharacters ? characters : [])
});
    
    for(let i = 0; i <length; i++){
        const randomIndex = Math.floor(Math.random() * availableCharacters.length);
        password += availableCharacters[randomIndex];
}

passwordEl.innerText = generatePassword(
hasLowercase,
hasUppercase,
hasNumbers,
hasCharacters,
length
);


      