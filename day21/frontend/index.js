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

        let title = document.createElement("p");
        title.innerText = el.title;
        title.className = "title";

        let views = document.createElement("p");
        views.innerText = el.views;

        let update = document.createElement("button");
        update.innerText = "Update";
        update.id = "update";
        update.addEventListener("click", async()=>{
            gettitle();
        });

        box.append(id, title, views, update);

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

        if(respnse) {getData();
            alert("Data saved Succesfully");
        }
    } catch (error) {
        console.log(error);
    }
});


async function gettitle() {
    let value = document.getElementsByClassName("title").prompt();
    let obj = {
        title: value
    }
    try {
        let res = await fetch(`http://localhost:3000/posts:${id}`,{
        method:"PATCH",
        headers:{

                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        });
        
        let respnse = await res.json();
        
        if(respnse) {getData();
            alert("Data saved Succesfully");
        }
    } catch (error) {
        console.log(error);
    }
}