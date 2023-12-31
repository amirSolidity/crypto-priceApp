

const searchInput = document.querySelector(".searchInput")
const searchDiv = document.querySelector(".searchDiv")
const searchIcon = document.querySelector(".searchIcon")

searchInput.addEventListener('click', () => {
    searchInput.style.backgroundColor = '#282828'
    searchInput.style.color = "white"
})
fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cbnb%2Cusdcoin%2Cxrp%2Ccardano%2Cpolygon%2Cdogecoin%2Csolana&vs_currencies=usd&include_24hr_change=true")
  .then(data => data.json())
  .then(json => {
    const coins = Object.getOwnPropertyNames(json)
    const coinsColumnDiv1 = document.getElementById("coinsPriceColumnDiv")
    console.log(json)
    for(let coin of coins){

        const coinInfo = json[`${coin}`]
        const Price = coinInfo.usd;
        const change = coinInfo.usd_24h_change.toFixed(5);

        coinsColumnDiv1.innerHTML += 
        `
        <div class="coinsRowDiv1 ${change < 0 ? 'falling' : 'rising'}">
            <div class="coinsRowDiv2">
                <div class="coinsRowDiv3">
                    <span class="material-symbols-outlined gradeIcon">
                        grade
                    </span>
                    <p class="cryptoNumber"></p>
                </div>
            <div class="coinsRowDiv4">
                <div class="coinsImgDiv">
                    <img class="coinsImg" src="${coin}.png">
                </div>
                <div class="coinsNameDiv">
                    <p class="coinsName1">${coin}</p>
                    <p class="coinsName2">USD</p>
                </div>
            </div>
        </div>
        <div class="coinsRowDiv5">
                <span class="coinsPrice">${Price}</span>
                <span class="coinsChange">${change}</span>
        </div>
    </div>
        `
    }
  })
function input2_onFocus(){
    wordRange.style.display = "inline"
}

function input2_keyDown(e){
    if(e.keyCode == 8){
        alert("Are you sure you want to delete this word ?")
        wordRange.innerHTML = eval(wordRange.innerHTML) - 1
    }else if(e.keyCode != 8){
        wordRange.innerHTML = eval(wordRange.innerHTML) + 1
    }
}
const wordRange = document.getElementById("word_range")




const divvvvv = document.getElementById("divvvv")
const inptBtn = document.getElementById("btnn")
function click(){
    divvvvv.style.backgroundColor = "red"
}

const form = document.getElementById('form')
const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
const phoneRegex = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/
const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
const nameInput = document.getElementById('nameInput')
const phoneInput = document.getElementById('phoneInput')
const emailInput = document.getElementById('emailInput')
const nameSmall = document.getElementById('nameSmall')
const phoneSmall = document.getElementById('phoneSmall')
const emailSmall = document.getElementById('emailSmall')
const submitBtn = document.getElementById('submitBtn')
const contactInputs = document.getElementById('formColumn').getElementsByTagName('input')
console.log(contactInputs[0])

form.addEventListener('submit' , (event) => {
    event.preventDefault()

    const resultName = nameRegex.test(nameInput.value)
    if(!(resultName)){
        nameSmall.innerHTML = 'the entered name is not correct'
        nameSmall.style.color = 'red'
    }else{
        nameSmall.innerHTML = ''
    }
    const resultPhone = phoneRegex.test(phoneInput.value)
    if(!(resultPhone)){
        phoneSmall.innerHTML = 'the entered number is not correct'
        phoneSmall.style.color = 'red'
    }else{
        phoneSmall.innerHTML = ''
    }
    const resultEmail = emailRegex.test(emailInput.value)
    if(!(resultEmail)){
        emailSmall.innerHTML = 'the entered email is not correct'
        emailSmall.style.color = 'red'
    }else{
        emailSmall.innerHTML = ''
    }
})

const focusDommmm = () =>{
    for(let i = 0;i<contactInputs.length; i++){
        contactInputs[i].style.backgroundColor = '#353535'
        contactInputs[i].style.color = 'white'
    }
}
