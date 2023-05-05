function validateLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "cat" && password === "meow") {
    document.getElementById("cat-page").classList.remove("hidden");
    document.getElementById("login-box").classList.add("hidden");
  } else {
    alert("Invalid login credentials. Please try again.");
  }
}