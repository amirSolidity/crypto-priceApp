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
    let i = 1;
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
                    <p class="coinsName2">DC</p>
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
