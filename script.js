const passwordLengthElement = document.getElementById(`passwordLength`)
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeLowercaseElement = document.getElementById('includeLowercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSpecialCharactersElement = document.getElementById('includeSpecialCharacters')
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')


const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SPECIALCHARACTER_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126))


form.addEventListener('click', generatePassword); {
        const passwordLength = passwordLengthElement.value
        const includeUppercase = includeUppercaseElement.checked
        const includeLowercase = includeLowercaseElement.checked
        const includeNumbers = includeNumbersElement.checked
        const includeSpecialCharacters = includeSpecialCharactersElement.checked
        const password = generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSpecialCharacters)
        passwordDisplay.innerText = password
}

function generatePassword (passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSpecialCharacters) {
let charCodes = LOWERCASE_CHAR_CODES
if (includeUppercase) charCodes = charCodes.concat (UPPERCASE_CHAR_CODES)
if (includeSpecialCharacters) charCodes = charCodes.concat(SPECIALCHARACTER_CHAR_CODES)
if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)

const passwordCharacters = []
for (let i = 0; i < characterAmount; i++) {
 const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
 passwordCharacters.push(String.fromCharCode(character))
}
return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
const array = []
for (let i = low; i <= high; i++) {
array.push(i)
}
return array
}





