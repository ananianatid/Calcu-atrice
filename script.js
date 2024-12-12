let touchs = document.querySelectorAll('.touch.n')
let screen = document.querySelector('.screen')
let clearTouch = document.querySelector('.touch.clear')
let hystoryTouch = document.querySelector('.touch.hystory')
let equal = document.querySelector('.touch.equal')
let blankTouch = document.querySelector('.touch.blank')
const hystory =[]



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
            
           /*
           hystory.forEach(calc=>{
            screen.innerHTML += calc[0]+"="+calc[1]+"</br>"
           })
            */
    }
    
    
    screen.classList.toggle('hystory')
})

blankTouch.addEventListener('click',(e)=>{
    alert('Project 1 : simple calculator')
})