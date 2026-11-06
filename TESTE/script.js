
document.addEventListener("DOMContentLoaded", () => {

    // Efeito de entrada nas habilidades
    const skills = document.querySelectorAll(".progress div");

    skills.forEach(skill => {
        const width = skill.style.width;

        skill.style.width = "0";

        setTimeout(() => {
            skill.style.width = width;
        }, 300);
    });

    // Ano automático no rodapé
    const footer = document.querySelector("footer p");

    footer.innerHTML =
        `© ${new Date().getFullYear()} Enzo | Portfólio Profissional`;

});
