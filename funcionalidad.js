const listaPendientes = document.getElementById('listapendientes');
const btnAgregar = document.getElementById('btnAgregar');

function actualizarPrioridades() {
    const filas = listaPendientes.querySelectorAll('tr');
    filas.forEach((fila, index) => {
        fila.children[0].textContent = index + 1;
    });
}

function crearFila(pendiente) {
    const nuevaFila = document.createElement('tr');
    nuevaFila.innerHTML = `<td></td> <!-- La prioridad se asignará al actualizar --> 
        <td>${pendiente}</td>
        <td>
            <button class="btn btn-warning btn-sm editar">Editar</button>
            <button class="btn btn-danger btn-sm eliminar">Eliminar</button>
        </td>`;
    listaPendientes.appendChild(nuevaFila);
    actualizarPrioridades();
}

listaPendientes.addEventListener('click', function(event) {
    if (event.target.classList.contains('eliminar')) {
        const fila = event.target.closest('tr');
        fila.remove(); 
        actualizarPrioridades();
    }
});

listaPendientes.addEventListener('click', function(event) {
    if (event.target.classList.contains('editar')) {
        const fila = event.target.closest('tr');
        const pendiente = fila.children[1];
        const nuevoTexto = prompt('Editar pendiente:', pendiente.textContent);
        if (nuevoTexto !== null) {
            pendiente.textContent = nuevoTexto;
        }
    }
});

btnAgregar.addEventListener('click', function() {
    const nuevoPendiente = prompt('Nuevo pendiente:');
    if (nuevoPendiente) {
        crearFila(nuevoPendiente);
    }
});