document.getElementById('comment-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const rut = document.getElementById('rut').value.trim();
    const email = document.getElementById('email').value.trim();
    const comment = document.getElementById('comment').value.trim();

    if (!name || !rut || !email || !comment) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('rut', rut);
    formData.append('email', email);
    formData.append('comment', comment);

    try {
        const response = await fetch('guardar_comentario.php', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (response.ok && result.success) {
            alert("Comentario enviado correctamente.");
            document.getElementById('comment-form').reset();
        } else {
            alert("Error: " + (result.error || "Error desconocido."));
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Hubo un problema al enviar los datos.");
    }
});
