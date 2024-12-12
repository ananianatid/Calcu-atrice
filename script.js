let touchs = document.querySelectorAll('.touch.n')
let screen = document.querySelector('.screen')
let clearTouch = document.querySelector('.touch.clear')
let hystoryTouch = document.querySelector('.touch.H')
let equal = document.querySelector('.touch.equal')
const hystory =[['1+1', 2],['2+1', 3],['3+1', 4],['4+1', 5],['5+1', 6]]



touchs.forEach(touch =>{
    touch.addEventListener('click',(e)=>{
        if(screen.classList.contains("hystory")){
            screen.innerHTML = ''
            let value = touch.getAttribute('value')
            screen.innerHTML+= value
            screen.classList.toggle('hystory')
         }else{
            let value = touch.getAttribute('value')
            screen.innerHTML+= value
         }
        
    })
    
})

clearTouch.addEventListener('click',(e)=>{
    screen.innerHTML = ""
})

equal.addEventListener('click',(e)=>{
    operation = screen.innerHTML
    let result = eval(operation)
    screen.innerHTML = result
    hystory.push([operation,result])
    console.log(hystory)
})

hystoryTouch.addEventListener('click',(e)=>{
    
    if(screen.classList.contains("hystory")){
       screen.innerHTML = ''
    }else{
        screen.innerHTML = ''
        for(let i=0; i<3;i++){  
            let length = hystory.length - 1
            let index = length-i
            screen.innerHTML += hystory[index][0]+"="+hystory[index][1]+"</br>"
        }
    }
    
    
    screen.classList.toggle('hystory')
})

