function login() {
  const password = document.getElementById("password").value;
  if (password === "₹ajsal120&") {
    localStorage.setItem("auth", "yes");
    window.location.href = "./dashboard.html";
  } else {
    document.getElementById("error").innerText = "Incorrect password.";
  }
}
