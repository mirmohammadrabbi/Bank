
document.getElementById("login-btn").addEventListener("click",function(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email === "mirmohammadrabbi@gmail.com" && password === "Rabbi@123"){
    document.getElementById("email").style.border = "2px solid green";
    document.getElementById("password").style.border = "2px solid green";
    window.location.href = 'dashboard.html';
    }else{
    //  const content = document.getElementById("para");
    // const p = document.createElement("p");
    // const list = p.innerText = "Invalid Email or Password";
    // p.classList.add("item");
    // content.appendChild(p);


    document.getElementById("email").style.border = "1px solid red";
    document.getElementById("password").style.border = "1px solid red";
    }

 });