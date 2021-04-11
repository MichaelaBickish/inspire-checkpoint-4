//Private
function _draw() {
    let today = new Date()
    let hours = today.getHours() 
    let minutes = today.getMinutes() 
    let seconds = today.getSeconds()
    let timeofDay = "am"
    let h = hours
    
    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds
    
    
    if(hours >= 12){
        hours = hours - 12
        timeofDay = "pm"
    }
    hours == 0 ? hours = 12 : ""
    

    let template = ''
    template += /**html */`<h1 class="display-4 text-dark mx-1">${hours} : ${minutes} <h4 class="text-muted text-center mb-3"> ${timeofDay}</h4></h1>`
    document.getElementById('clock').innerHTML = template
}

export default class ClocksController {
    constructor(){
        window.setInterval(_draw, 1000)
    }
    
}