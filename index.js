const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passLength = 12
let pass1El = document.getElementById("pass1")
let pass2El = document.getElementById("pass2")

let isGenerated = false


function generatePasswords(){
    let pass1Text = ""    
    let pass2Text = ""
    
    for(let i = 0; i < passLength; i++){
        pass1Text += getRandomCharacter()
        pass2Text += getRandomCharacter()
    }    
    
    pass1El.textContent = pass1Text
    pass2El.textContent = pass2Text
    isGenerated = true
}

function getRandomCharacter(){
    let index = Math.floor(Math.random() * characters.length)
    return characters[index]
}

function pass1Copy(){
    if(isGenerated){
        copyToClipboard(pass1El)
    }
}

function pass2Copy(){
    if(isGenerated){ 
        copyToClipboard(pass2El)
    }
}

function copyToClipboard(htmlEl) {
    navigator.clipboard.writeText(htmlEl.textContent);
    showToolTip()
}

function showToolTip(){
    let tooltip = document.getElementById("tooltip") 
    tooltip.classList.remove("change")
    setTimeout(function() {
        tooltip.classList.add("change")
    },10)
    // tooltip.style.animation = "fade 4s linear"
}

window.generatePasswords = generatePasswords
window.getRandomCharacter = getRandomCharacter
window.pass1Copy = pass1Copy
window.pass2Copy = pass2Copy
window.copyToClipboard = copyToClipboard
window.showToolTip = showToolTip
