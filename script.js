const inputbox=document.getElementById("input-box");
const licont=document.getElementById("list-cont");
function Addtask(){
    if(inputbox.value==''){
        alert("you must have to write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        licont.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }
    inputbox.value="";
    savedata();
}
licont.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}, false);
function savedata(){
    localStorage.setItem("data",licont.innerHTML);
}
function showlist(){
    licont.innerHTML=localStorage.getItem("data");
}
showlist();