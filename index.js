const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
let password = characters.concat(numbers, symbols)

let passwordElOne = document.getElementById("password-el-one")
let passwordElTwo = document.getElementById("password-el-two")
let symbolsEl = document.getElementById("symbols-el")
let numbersEl = document.getElementById("numbers-el")
let lengthEl = document.getElementById("length-el")
let hasPassword = false

function getRandomIndex() {
  return Math.floor(Math.random() * password.length)
  }

function generatePassword() {
  hasPassword = true
  if (numbersEl.checked && symbolsEl.checked) {
    password = characters.concat(numbers, symbols)
  } else if (symbolsEl.checked === false && numbersEl.checked === true) {
      password = characters.concat(numbers)
  } else if (numbersEl.checked === false && symbolsEl.checked === true) {
    password = characters.concat(symbols)
  } else {
    password = characters
  }
    for (let i = 0; i < lengthEl.value; i++) {
      passwordElOne.textContent += password[getRandomIndex()]
      passwordElTwo.textContent += password[getRandomIndex()]
    }
  }

function showPassword() {
  if (hasPassword = false) {
    generatePassword()
  } else {
    passwordElOne.textContent = ""
    passwordElTwo.textContent = ""
    generatePassword()
  }
}

passwordElOne.select