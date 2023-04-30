

let box = document.querySelector(".todo")
let ListContainer = document.querySelector(".ListContainer")
let Text = document.querySelector("input")
let Add = document.querySelector(".add")

Add.addEventListener("click", function(e){

    if(Text.value === "")
    alert("kuch to likho bhai")

    else{

        let ListItem = document.createElement("LI")
        ListItem.innerText = Text.value
        ListContainer.appendChild(ListItem)
        
        let Xicon = document.createElement("span")
        ListItem.appendChild(Xicon)
    }

    Text.value = ""
    savedata()
})

ListContainer.addEventListener("click", function(e){

    if(e.target.tagName == "LI")
    {
        e.target.classList.toggle("checked")
    }

    else if(e.target.tagName == "SPAN")
    {
        e.target.parentElement.remove()
    }

    savedata()
})


showdata()


let blow = document.querySelector(".blow")

document.addEventListener("mousemove", function(e){
    
        
    rect = box.getBoundingClientRect();
    console.log(rect);

    let x = e.clientX-rect.x;
    let y = e.clientY-rect.y;


    blow.style.left = x + "px" ;
    blow.style.top = y + "px";

    
    // blow.style.setProperty("--mouse-x",`${x}px`);
    // blow.style.setProperty("--mouse-y",`${y}px`);
})


let savedata = () => localStorage.setItem("Data", ListContainer.innerHTML)
function showdata(){
    ListContainer.innerHTML = localStorage.getItem("Data")
} 




