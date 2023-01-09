let resetButton = document.querySelector('#c')
let incrementButton = document.querySelector('#increment')
let decrementButton = document.querySelector('#decrement')

// declaration the counter variable
let countDOM = document.querySelector('#count')

// we have two count varible here, One of varible in js other one is dom for html
let countInJs = localStorage.getItem('count')
console.log(countInJs);

countDOM.innerHTML=countInJs

// what increment button do on 'click'
incrementButton.addEventListener('click',function(){
    countInJs++
    localStorage.setItem('count',countInJs)
    countDOM.innerHTML = countInJs
})

// what reset button do on 'click'
resetButton.addEventListener('click',function(){
    countInJs=0
    localStorage.setItem('count',countInJs)
    countDOM.innerHTML = countInJs
    console.clear()
})

// what decrement button do on 'click'
decrementButton.addEventListener('click',function(){
    //if count is not 0 exacute decrement
    if(!countInJs==0){
        countInJs--
        localStorage.setItem('count',countInJs)
        countDOM.innerHTML=countInJs
    }
})