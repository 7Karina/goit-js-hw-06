const login = document.querySelector(".login-form");

login.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  const userData = {};

  formData.forEach((value, key) => {
    userData[key] = value.trim();
  });

  if (!userData.email || !userData.password) {
    return alert("Будь ласка, заповніть всі поля форми");
  }

  console.log(userData);
  e.currentTarget.reset();
});
