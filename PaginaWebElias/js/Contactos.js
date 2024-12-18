// 1. Verificar que EmailJS se cargó correctamente
window.onload = function () {
    if (typeof emailjs !== "undefined") {
        console.log("EmailJS cargado correctamente:", emailjs);
        emailjs.init("-8mV0Vbp9eeMtWeqf"); // Public Key correcta
        console.log("EmailJS inicializado correctamente.");
    } else {
        console.error("Error: EmailJS no se cargó correctamente.");
    }
};

// 2. Capturar el evento submit del formulario
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar el envío predeterminado del formulario

    console.log("Formulario enviado, capturando datos...");

    // 3. Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const mensaje = document.getElementById('notas').value.trim();

    console.log("Datos del formulario:", { nombre, apellido, email, telefono, mensaje });

    // 4. Validar campos obligatorios
    if (!nombre || !apellido || !email || !mensaje) {
        alert("Por favor, completa todos los campos obligatorios (*)");
        return;
    }

    // 5. Enviar datos a EmailJS
    const serviceID = "service_min52ue"; // Service ID correcto
    const templateID = "template_w78veim"; // Template ID correcto

    console.log("Verificando Service ID:", serviceID);
    console.log("Verificando Template ID:", templateID);
    console.log("Datos enviados a EmailJS:");
    emailjs.send(serviceID, templateID, {
        nombre: nombre,
        apellido: apellido,
        email: email,
        telefono: telefono,
        mensaje: mensaje
    }).then(
        function (response) {
            console.log("SUCCESS!", response.status, response.text);
            
            var myModal = new bootstrap.Modal(document.getElementById('mensajeEnviadoModal'));
            myModal.show();
        },
        function (error) {
            console.error("FAILED...", error);
            console.error("Detalles del error:", error.text || error.message);
            alert("Error al enviar el mensaje. Inténtalo de nuevo.");
        }
    );

    // 6. Resetear el formulario después del envío
    e.target.reset();
});



