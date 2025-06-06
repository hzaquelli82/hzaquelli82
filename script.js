document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Previene el comportamiento por defecto del ancla

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth' // Desplazamiento suave
                });
            }
        });
    });

    // Pequeño script para el formulario de contacto (solo para demostración)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Previene el envío real del formulario

            // Aquí podrías agregar lógica para enviar el formulario a un servicio de backend
            // o simplemente mostrar un mensaje de éxito.
            alert('¡Mensaje enviado con éxito! (Esto es solo una demostración)');
            contactForm.reset(); // Limpia el formulario
        });
    }
});
