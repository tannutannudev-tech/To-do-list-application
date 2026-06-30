function ADD(){
    let input = document.querySelector(".input");
    let inputDate = document.querySelector(".inputDate");
    let container = document.querySelector(".container");
    let div = document.createElement("div");
    let para = document.createElement("p");
    let datePara = document.createElement("p");
    let delbtn = document.createElement("button");
    delbtn.innerHTML = "🗑️";
    let editbtn = document.createElement("button");
    editbtn.innerHTML = "✏️";
    let savebtn = document.createElement("button");
    savebtn.innerHTML = "💾";
    let task = input.value;
    datePara.innerHTML = inputDate.value;
    para.innerHTML = task;
    let editInput = document.createElement("input");

    //function for delbtn
    delbtn.onclick = () => {
        div.remove();
    }

    //funnction of editbtn
    editbtn.onclick = () =>{        
        editInput.value = para.innerHTML;
        div.replaceChild(editInput,para);
        div.replaceChild(savebtn,editbtn);
    savebtn.onclick=() =>{
       para.innerHTML = editInput.value;
       div.replaceChild(para,editInput);
       div.replaceChild(editbtn,savebtn);
    }
}

    div.appendChild(para);
    div.appendChild(datePara);
    div.appendChild(delbtn);
    div.appendChild(editbtn);
    container.appendChild(div);
    input.value = "";
    inputDate.value ="";
    
}