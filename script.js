document.addEventListener('DOMContentLoaded', function() {
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