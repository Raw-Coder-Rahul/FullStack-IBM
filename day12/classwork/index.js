let form = document.getElementById("userform");

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let Number = document.getElementById("Number").value;
    let password = document.getElementById("password").value;
    let ConfirmPassword = document.getElementById("ConfirmPassword").value;

    let obj = {
        name,email,Number,password,ConfirmPassword
    } 

    if (obj.password != obj.ConfirmPassword) {
        return alert("Password don't match");
    }

    console.log(name);

    
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = obj.name;

    let td2 = document.createElement("td");
    td2.innerText = obj.email;

    let td3 = document.createElement("td");
    td3.innerText = obj.Number;

    let td4 = document.createElement("td");
    td4.innerText = obj.password;

    let td5 = document.createElement("td");
    td5.innerText = obj.ConfirmPassword;

    tr.append(td1, td2, td3, td4, td5);

    document.getElementById("tbody").append(tr);
});