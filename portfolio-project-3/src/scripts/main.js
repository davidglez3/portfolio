// This file contains JavaScript code for interactivity in the portfolio project.

document.addEventListener("DOMContentLoaded", () => {
    // Detectar si estamos en la carpeta "projects"
    const isInProjectsFolder = window.location.pathname.includes("/projects/");
    const basePath = isInProjectsFolder ? "../" : "./";

    // Cargar el header
    fetch(`${basePath}components/header.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al cargar el header: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);
        })
        .catch(error => console.error("Error cargando el header:", error));

    // Cargar el footer
    fetch(`${basePath}components/footer.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al cargar el footer: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.body.insertAdjacentHTML("beforeend", data);
        })
        .catch(error => console.error("Error cargando el footer:", error));

    const projectsContainer = document.getElementById("projects-container");

    // Verifica si la variable projects está definida y contiene datos
    if (typeof projects !== "undefined" && projects.length > 0) {
        projects.forEach(project => {
            const projectCard = document.createElement("div");
            projectCard.classList.add("project-card");

            projectCard.innerHTML = `
                <img src="${project.image}" alt="${project.title}">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p><strong>Date:</strong> ${project.date}</p>
                <a href="${project.link}" class="btn">View Project</a>
            `;

            projectsContainer.appendChild(projectCard);
        });
    } else {
        console.error("No projects found or projects variable is undefined.");
    }

    const toggleDetailsButton = document.getElementById("toggle-details");
    const details = document.getElementById("details");

    if (toggleDetailsButton && details) {
        toggleDetailsButton.addEventListener("click", () => {
            details.classList.toggle("hidden");
            toggleDetailsButton.textContent = details.classList.contains("hidden")
                ? "Ver más detalles"
                : "Ocultar detalles";
        });
    }

    const timelineItems = document.querySelectorAll("#timeline-list li");

    if (timelineItems) {
        timelineItems.forEach(item => {
            // Crear la tarjeta expandida
            const expandedCard = document.createElement("div");
            expandedCard.classList.add("expanded-card");
            expandedCard.innerHTML = `
                <h3>Detalles</h3>
                <p>Pasa el ratón o haz clic para ver más información.</p>
            `;
            item.appendChild(expandedCard);

            // Mostrar detalles al pasar el ratón
            item.addEventListener("mouseover", () => {
                const year = item.getAttribute("data-year");
                const title = item.querySelector("h3").textContent;
                const description = item.querySelector("p").textContent;

                expandedCard.innerHTML = `
                    <h3>${title} - ${year}</h3>
                    <p>${description}</p>
                `;
                expandedCard.classList.add("active");
            });

            // Ocultar detalles al quitar el ratón
            item.addEventListener("mouseout", () => {
                expandedCard.classList.remove("active");
            });

            // Alternar detalles al hacer clic
            item.addEventListener("click", () => {
                expandedCard.classList.toggle("active");
            });
        });
    }
});