// Mock user credentials (replace with real backend later)
const mockUser = {
    email: "admin@haustier.com",
    password: "password123"
  };
  
  document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (email === mockUser.email && password === mockUser.password) {
      // Successful login
      window.location.href = "dashboard.html";
    } else {
      // Failed login
      const errorElement = document.getElementById("login-error");
      errorElement.textContent = "Invalid email or password!";
    }
  });
  