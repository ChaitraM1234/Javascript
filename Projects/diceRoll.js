


function rollDice() {

    const numOfDice = document.getElementById("numOfDice").value ;
    const diceResult = document.getElementById("diceResult")
    const diceImage = document.getElementById("diceImage")
    const values =[]
    const images = []

 
    for(let i= 0; i< numOfDice; i++){
        const value = Math.floor( Math.random() * 6) + 1
       values.push(value)
       images.push(`<img src = "dice_img/${value}.png" alt = "Dice ${value}" >`)
    }
   
    diceResult.textContent = `dice : ${values.join(', ')}`;   // join() --> The join() method returns an array as a string
    diceImage.textContent = images.join('')
} 