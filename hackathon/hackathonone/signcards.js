
const form = document.getElementById("login-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  
    const username = form.elements.username.value;
    const password = form.elements.password.value;
  
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);

    window.location.assign("maincards.html");
});