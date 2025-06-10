document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los enlaces de navegación que apunten a secciones internas
    // En este caso, solo tenemos un botón "View My Works" que apunta a #portfolio
    // Si tuvieras un menú de navegación con más enlaces internos, los seleccionarías así:
    // const navLinks = document.querySelectorAll('a[href^="#"]');

    const portfolioLink = document.querySelector('.portfolio-section .btn'); // Selecciona el botón del portfolio

    if (portfolioLink) { // Asegúrate de que el enlace existe
        portfolioLink.addEventListener('click', function(e) {
            e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace (salto brusco)

            // Obtener el ID del destino del enlace (por ejemplo, '#portfolio')
            const targetId = this.getAttribute('href');

            // Si el enlace es simplemente '#' o un enlace externo, no hacer nada
            if (targetId === '#' || !targetId.startsWith('#')) {
                return;
            }

            // Seleccionar el elemento al que se debe desplazar
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Usar el método scrollIntoView para un desplazamiento suave
                // behavior: 'smooth' es la clave para el desplazamiento suave
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }

    // Opcional: Animación de barras de habilidad al cargar la página
    // Puedes aplicar esta animación con CSS puro o con JS como aquí.
    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(skill => {
        const skillWidth = skill.style.width; // Obtiene el ancho definido en el HTML
        skill.style.setProperty('--skill-width', skillWidth); // Establece la variable CSS personalizada
        skill.style.width = '0'; // Reinicia el ancho a 0 antes de la animación
        setTimeout(() => {
            skill.style.width = skillWidth; // Aplica el ancho original para la animación
        }, 100); // Pequeño retraso para asegurar que CSS se aplique
    });
});