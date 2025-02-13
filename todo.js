const inputbox=document.getElementById("input-box");
const listbox=document.getElementById("list");
function addtask(){
    if(inputbox.value===''){
        alert("You must write someting");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listbox.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
inputbox.value="";
}
listbox.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);
