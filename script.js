function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user.length < 3) {
        alert("Username must be at least 3 characters");
        return;
    }

    if (pass.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    // Demo credentials
    let correctUser = "admin";
    let correctPass = "123456";

    if (user === correctUser && pass === correctPass) {
        alert("Login Successful!");

        // Open Google in new tab
         window.open("https://youtube.com", "_blank");
         //window.open("https://github.com", "_blank");
         //window.open("https://chat.openai.com", "_blank");
    } 
    else {
        alert("Invalid Username or Password");
    }
}