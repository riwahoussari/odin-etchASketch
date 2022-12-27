// variables for the DOM
const container = document.querySelector(".container")
const button = document.querySelector("#btn")
//create the boxes
for (let i=0 ; i<256 ; i++){
    const div = document.createElement('div')
    div.classList.add('gridBox')
    container.appendChild(div)
}
// nodelist boxes 
let boxes = document.querySelectorAll('.gridBox');
let chosenColor;
addHover()
//create the function of the button
let gridSize;
button.addEventListener('click',()=>{
    //ask for the color of the grid
    chosenColor = confirm('do you want your grid to be multicolored?');
    gridSize = prompt("how many pixels would you like per side?")
    while(isNaN(gridSize)||Math.floor(gridSize)>100){ 
        gridSize = prompt('please enter an integer smaller than 101')
    }
    
    //remove the existing grid
    boxes.forEach((a)=>{
        container.removeChild(a);
        a.classList.remove('gridBox')
    })
    container.textContent=""
    //make new grid
    for (let i=0; i<gridSize*gridSize; i++) {
        const div = document.createElement('div')
        div.classList.add('gridBox')
        container.appendChild(div)
        const size = 100/gridSize;
        div.style.cssText = `width:${size}%; height:${size}%`
    }
    if(!gridSize){container.textContent="no grid"}
    //reassign boxes the new grid
    boxes = document.querySelectorAll('.gridBox')
    addHover()
})

// store each box in a variable called box
// add event listener to change background on hover
function addHover(){
    boxes.forEach((a)=>{
        const box = a
        box.style.backgroundColor = "white"

        if(chosenColor == true){
            box.addEventListener('mouseenter', ()=>{
                colorGrid(box)
            },{once:true})
        }else{
            box.addEventListener('mouseenter', ()=>{
                blackGrid(box)
            })
        }
    })  
}

//colored grid function
let red;
let green;
let blue;
function getRanColor(){
    red = Math.floor(Math.random()*256);
    green = Math.floor(Math.random()*256);
    blue = Math.floor(Math.random()*256);
}
function colorGrid(box){
    getRanColor()
    box.style.backgroundColor = `rgb(${red},${green},${blue})`
}

// black grid function
let shade = 0.1
function blackGrid(box){
    let preColor = box.style.backgroundColor;
    if (preColor=="white"){
        box.style.backgroundColor = "rgba(0,0,0,0.1)"
    }else{
        let shade = Number(preColor.slice(-4,-1))
        box.style.backgroundColor = `rgba(0,0,0,${shade+0.1})`
    }
}