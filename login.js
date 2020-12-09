function validate(event){
    console.log("hiiii");
    event.preventDefault();
    let form = document.querySelector("form")
    let username = document.getElementById("username");
    let password = document.getElementById("password");

 
    if( username.value === "admin" && password.value === "12345") {
        form.submit();
    }
    else{
        document.getElementById("warning").innerHTML = "<p class='text-white bg-danger p-1'>Invalid credentials</p>"
    }
}
