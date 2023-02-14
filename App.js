const firstScore = document.querySelector('#first-score')
const secScore = document.querySelector('#sec-score')
const btn = document.querySelector('.btn')
const text = document.querySelector('.Heading')
//First Score
    btn.addEventListener('click', function(){
        
        let random = Math.ceil(Math.random() * 10)
        firstScore.innerText = random
    
        let random2 = Math.ceil(Math.random() * 10)
        secScore.innerText = random2
    
        if (random > random2) {
            text.innerText = 'Home is a Winner'
            

        }else if (random == random2) {
            text.innerText = 'Draw'
       
        }else{
            text.innerText = 'Guest is the winner'
        }
        })
    
    

