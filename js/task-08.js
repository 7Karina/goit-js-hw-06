const login = document.querySelector(".login-form");

login.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  const userData = {};

  formData.forEach((value, key) => {
    userData[key] = value;
  });

  if (!userData.email || !userData.password) {
    return alert("Будь ласка, заповніть всі поля форми");
  }

  console.log(userData);
  login.reset();
});
