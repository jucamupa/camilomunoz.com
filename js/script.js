/**
 * Archivo Javascript Principal para camilomunoz.com
 * Aquí puedes añadir interacciones futuras o lógica dinámica.
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('¡Estructura base de camilomunoz.com cargada exitosamente!');

    // 1. Efecto simple que añade una clase "activa" al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Se puede usar para cerrar el nav móvil en el futuro u otras interacciones
            console.log(`Navegando a: ${this.getAttribute('href')}`);
        });
    });

    // --- Espacio para futuras agregaciones ---
    // Ej: IntersectObserver para animar las tarjetas de servicio al hacer scroll.
    // Ej: Manejador de menú tipo hamburguesa responsivo.
});