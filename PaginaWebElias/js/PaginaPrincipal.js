// Elementos del Carrusel
const carouselInner = document.querySelector('.carousel-inner');
const carouselIndicators = document.querySelector('.carousel-indicators');

// Función para cargar comentarios desde la base de datos
async function cargarComentarios() {
    try {
        const response = await fetch('../obtener_comentarios.php'); // Archivo PHP
        const data = await response.json();

        let slideIndex = 0;

        data.forEach((comentario) => {
            // Crear el elemento para cada slide del carrusel
            const carouselItem = document.createElement('div');
            carouselItem.className = `carousel-item ${slideIndex === 0 ? 'active' : ''}`;
            carouselItem.innerHTML = `
                <div class="carousel-content text-center">
                    <p class="carousel-text">"${comentario.comentario}"</p>
                    <h5 class="carousel-author">${comentario.nombre}</h5>
                </div>
            `;
            carouselInner.appendChild(carouselItem);

            // Crear el indicador dinámico
            const indicator = document.createElement('button');
            indicator.setAttribute('type', 'button');
            indicator.setAttribute('data-bs-target', '#testimonialCarousel');
            indicator.setAttribute('data-bs-slide-to', slideIndex);
            if (slideIndex === 0) indicator.className = 'active';

            carouselIndicators.appendChild(indicator);
            slideIndex++;
        });

        console.log("Comentarios cargados en el carrusel exitosamente.");
    } catch (error) {
        console.error("Error al cargar comentarios:", error);
    }
}

// Llamar a la función al cargar la página
window.addEventListener('DOMContentLoaded', cargarComentarios);
