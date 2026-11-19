const buscador = document.getElementById("buscador");
const tarjetas = document.querySelectorAll(".tarjeta");

buscador.addEventListener("input", function () {
    const texto = buscador.value.toLowerCase();

    tarjetas.forEach(function (tarjeta) {
        const nombre = tarjeta.querySelector("h3").textContent.toLowerCase();

        if (nombre.includes(texto)) {
            tarjeta.style.display = "block";
        } else {
            tarjeta.style.display = "none";
        }
    });
});

function mostrarDetalle(nombre, descripcion) {
    const detalle = document.getElementById("detalle");

    detalle.innerHTML = `
        <h2>${nombre}</h2>
        <p>${descripcion}</p>
        <br>
        <button onclick="cerrarDetalle()">Cerrar</button>
    `;

    detalle.style.display = "block";
    detalle.scrollIntoView({ behavior: "smooth" });
}

function cerrarDetalle() {
    document.getElementById("detalle").style.display = "none";
}