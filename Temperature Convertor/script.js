let Celciusinput=document.querySelector('.Celcius > input')
let Fahrenheitinput=document.querySelector('.Fahrenheit > input')
let Kelvininput=document.querySelector('.Kelvin > input')
let btn=document.querySelector('.button button')
function roundnumber(number){
    return Math.round(number*100)/100
}
/*Celcius to Fahrenheit and Kelvin */
Celciusinput.addEventListener('input',function(){
    let CTemp = parseFloat(Celciusinput.value)
    let FTemp = (CTemp*(9/5))+32
    let KTemp = CTemp+273.15

    Fahrenheitinput.value = roundnumber(FTemp)
    Kelvininput.value = roundnumber(KTemp)
})
/*Fahrenheit to Celcius and Kelvin */
Fahrenheitinput.addEventListener('input',function(){
    let FTemp = parseFloat(Fahrenheitinput.value)
    let CTemp = (FTemp-32)*(5/9)
    let KTemp = (FTemp-32)*(5/9)+273.15

    Celciusinput.value = roundnumber(CTemp)
    Kelvininput.value = roundnumber(KTemp)

})
/*Kelvin to Celcius and Fahrenheit */
Kelvininput.addEventListener('input',function(){
    let KTemp = parseFloat(Kelvininput.value)
    let CTemp = KTemp-273.15
    let FTemp = (KTemp - 273.15)*(9/5) + 32

    Fahrenheitinput.value = roundnumber(FTemp)
    Celciusinput.value = roundnumber(CTemp)
})
btn.addEventListener('click', ()=>{
    Celciusinput.value=""
    Fahrenheitinput.value=""
    Kelvininput.value=""
})