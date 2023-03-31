//GET

let getData = async ()=>{

    console.log("in getData func")

    try{
    let response =await fetch("http://localhost:3000/todos");
    let data = await response.json();
    console.log(data);
   // alert("fetch completed");
    append(data);
    }catch(err){
        console.log(err);
    }
}

//POST
let saveData =async ()=>{

    console.log("in saveData func")

    let input = document.querySelector("#input");
    const inputValue = input.value;
    input.value="";
    

    const payload = {
        id:Date.now(),
        status:false,
        todo:inputValue
    }


        
    try{
        let response = await fetch("http://localhost:3000/todos",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(payload)
        })

     //   alert("saveCompleted");
        getData();
    }catch(err){
        console.log(err);
    }

}


//PATCH

const updateData = async (id,status)=>{
    console.log("in updateData func");

     try{
        const response =await fetch(`http://localhost:3000/todos/${id}`,{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'status':!status})
        });

      //  alert("update Completed")
           getData();

     }catch(err){
        console.log(err);
     }
}



//DELETE
const deleteData =async (id)=>{
    console.log("in deleteData func");

    const response = await fetch(`http://localhost:3000/todos/${id}`,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        }
    });
   // alert("delete Completed");
     const data = response.json();
     console.log(data);
    getData();

}



const append = (data)=>{
    const container = document.querySelector("#container");
    
    container.innerHTML="";

    data.forEach(element => {

        let mainDiv= document.createElement("div");
        let h2 = document.createElement("h2");
        let updateButton = document.createElement("button");
        let deleteButton = document.createElement("button");

        h2.innerText=element.todo;
        updateButton.innerText= element.status==false ? "Not Done" : "Done";
        updateButton.innerText=="Done" ?  updateButton.style.backgroundColor='green' : 
        updateButton.style.backgroundColor='red';
        deleteButton.innerText="Delete";
        deleteButton.style.backgroundColor='orange';
        
        mainDiv.append(h2,updateButton,deleteButton);
        container.append(mainDiv);


        updateButton.addEventListener("click",()=>{
            updateData(element.id,element.status);
        });
        deleteButton.addEventListener("click",()=>{
            deleteData(element.id);
        });
    });

}

const submitButton = document.querySelector("#addButton");
submitButton.addEventListener("click",saveData);

getData();
