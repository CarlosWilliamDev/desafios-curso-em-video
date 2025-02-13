document.addEventListener("DOMContentLoaded", function () {
    const setaTopo = document.getElementById("seta-topo");

    // esconder a seta conforme a rolagem
    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) { 
            setaTopo.classList.add("mostrar");
        } else {
            setaTopo.classList.remove("mostrar");
        }
    });

    // efeito de rolagem suave ao clicar na seta
    setaTopo.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // rolagem suave para os links do menu
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1); // Remove o #
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});