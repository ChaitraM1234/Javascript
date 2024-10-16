
const textBox = document.getElementById("textbox")
const toFahrenheit = document.getElementById("toFahrenheit")
const toCelsius = document.getElementById("toCelsius")
const result = document.getElementById("result")
let temp 

function converter () {

  if(toFahrenheit.checked){
    temp = Number(textBox.value) 
    temp = temp * 9 / 5 + 32;
    result.textContent = temp.toFixed(2) + "\u00B0F"

  }else if(toCelsius.checked){
    temp = Number(textBox.value) 
    temp = (temp - 32) * (5/9);
    result.textContent = temp.toFixed(2) + "\u00B0C"

  }else{
    result.textContent = "Select a unit"
  }
}