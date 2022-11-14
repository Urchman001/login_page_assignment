let me = [
    {
        username: "obi1",
        password: "obiobi"
    },
    // {
    //     username: "obi2",
    //     password: "obiobi"
    // },
    // {
    //     username: "obi3",
    //     password: "obiobi"
    // },
    // {
    //     username: "obi4",
    //     password: "obiobi"
    // }
]
function getInfo() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    for (i = 0; i < me.length; i++) {
        if (username == me[i].username && password == me[i].password) {
            alert('you are logged in')
        } else {
            alert('incorrect username or password');
        }
    }


}