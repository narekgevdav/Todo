let addButton = document.getElementById("addButton")
let input = document.getElementById("input")
addButton.addEventListener("click", addElement)
input.addEventListener("keypress",addElement)
function addElement(e){
    
    if(e.type === "click" || e.keyCode === 13){
    console.log(e)  
       
    let element = input.value

    if(element === ""){
        alert("add something")
    } else {
        addElement(element)
    }
    document.getElementById("input").value = ""
}
function addElement(newElement){
    let list = document.getElementById("toDoElements")
    let element = document.createElement("li")
    element.innerHTML = newElement
    let remove = document.createElement("button")
    remove.innerHTML = "X"
    remove.addEventListener("click",removeElement);
    let complete = document.createElement("button")
    complete.innerHTML = "V"
    complete.addEventListener("click",completeElement)
    element.appendChild(complete)
    element.appendChild(remove)
    list.insertBefore(element,list.childNodes[0])
    function removeElement(){
        let item =  this.parentNode
        let parent  = item.parentNode;   
        parent.removeChild(item);    
    }
    function completeElement(){
        let item = this.parentNode
        let parent = item.parentNode
        parent.classList.add("done")
        
        
        
        
    }
}

    
}
