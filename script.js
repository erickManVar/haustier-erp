// URL del backend (Function App)
const backendURL = "https://haustier-functions-app.azurewebsites.net/api/LoginFunction";


// Agregar evento al formulario de inicio de sesión
document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  // Obtener valores del formulario
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    // Enviar solicitud al backend
    const response = await fetch(backendURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, contraseña: password }), // 'contraseña' debe coincidir con el backend
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Inicio de sesión exitoso:", data);

      // Redirigir a la página del dashboard
      window.location.href = "dashboard.html";
    } else if (response.status === 401) {
      // Credenciales incorrectas
      document.getElementById("login-error").textContent = "Email o contraseña incorrectos.";
    } else {
      // Otros errores
      document.getElementById("login-error").textContent = "Error al iniciar sesión. Inténtelo más tarde.";
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
    document.getElementById("login-error").textContent = "Error de conexión. Verifique su red.";
  }
});
