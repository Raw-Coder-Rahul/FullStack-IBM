let parent = document.getElementById("parent");

async function getData() {
    let data = await fetch(`http://localhost:3000/posts`);

    let res = await data.json();
    showData(res);

    console.log(res);
}
getData();

async function showData(arr) {
    parent.innerHTML = null;
    arr.forEach((el, index) => {
        let box = document.createElement("div");
        box.className = "box";

        let id = document.createElement("p");
        id.innerText = el.id;
        id.className = "id";

        let title = document.createElement("p");
        title.innerText = el.title;
        title.className = "title";

        let views = document.createElement("p");
        views.innerText = el.views;

        let update = document.createElement("button");
        update.innerText = "Update";
        update.id = "update";
        update.addEventListener("click", async()=>{
            let newTitle = prompt("Enter the new title : ",el.title);
            if(newTitle != null) {
                await gettitle(el.id, newTitle);
            }
        });

        let Delete = document.createElement("button");
        Delete.innerText = "Delete";
        Delete.id = "Delete";
        Delete.addEventListener("click", async()=>{
                await getdelete(el.id);
        });
        
        box.append(id, title, views, update, Delete);
        parent.append(box);
    });
}

let button = document.getElementById("btn");
button.addEventListener("click", async()=>{
    let value = document.getElementById("input").value;
    
    let obj = {
        title:value,
        views:(Math.random(100, 10000)*100)
    }

    try {
        let res = await fetch(`http://localhost:3000/posts`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        });

        let respnse = await res.json();

        if(respnse) {
            getData();
            alert("Data saved Succesfully");
        }
    } catch (error) {
        console.log(error);
    }
});

async function gettitle(id, value) {
    let obj = {
        title: value
    };

    try {
        let res = await fetch(`http://localhost:3000/posts/${id}`,{
        method:"PATCH",
        headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        });
        
        let response = await res.json();
        
        if(response) {
            let titleElements = document.getElementsByClassName("title");
            for (let i = 0; i < titleElements.length; i++) {
                let parentElement = titleElements[i].parentElement;
                let idElement = parentElement.getElementsByClassName("id")[0];
                if (idElement.innerText === id) {
                    titleElements[i].innerText = value;
                    break;
                }
            }
            alert("Data saved Succesfully");
        }
    } catch (error) {
        console.log(error);
    }
}

async function getdelete(id) {
    try {
        let res = await fetch(`http://localhost:3000/posts/${id}`,{
        method:"DELETE",
        headers:{
                "Content-Type": "application/json"
            }
        });
        
        let response = await res.json();
        
        if(response) {
            let boxelements = document.getElementsByClassName("box");
            Array.from(boxelements).forEach(boxelement=>{
                boxelement.remove();
            });
            alert("Data removed Succesfully");
        }
    } catch (error) {
        console.log(error);
    }
}