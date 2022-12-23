const passwordLengthElement = document.getElementById(`passwordLength`)
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeLowercaseElement = document.getElementById('includeLowercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSpecialCharactersElement = document.getElementById('includeSpecialCharacters')
const form = document.getElementById('passwordGeneratorForm')

form.addEventListener('click', e => {
        e.preventDefault()
        const passwordLength = passwordLengthElement.value
        const includeUppercase = includeUppercaseElement.checked
        const includeLowercase = includeLowercaseElement.checked
        const includeNumbers = includeNumbersElement.checked
        const includeSpecialCharacters = includeSpecialCharactersElement.checked
        const password = generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSpecialCharacters)
})

function generatePassword (passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSpecialCharacters) {
string.fromCharCode(65)
}





