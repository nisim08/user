let pass = document.getElementById("username").value

document.getElementById("btn").onclick = function() {

    let pass = document.getElementById("username").value
    let user = document.getElementById("password").value

    if(pass == "nisim" & user == "eitan") {
        alert("nice")
        document.getElementById("sodi").innerHTML = "hello " + pass + "" + user
    } 
    else(
        alert("password or usernamme incorect")
    )
        
}