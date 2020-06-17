const select = document.querySelector("#select");
const opciones = document.querySelector("#opciones");
const contenidoSelect = document.querySelector("#select .contenido-select");
const hiddentInput = document.querySelector("#inputSelect");

select.addEventListener("click", ()=>{
	select.classList.toggle("active");
	opciones.classList.toggle("active");
});

document.querySelectorAll("#opciones > .opcion").forEach((opcion) => {
	opcion.addEventListener("click", clickOpcion);
});

function showOptions() {
	select.classList.toggle("active");
	opciones.classList.toggle("active");
}

function clickOpcion(e) {
	e.preventDefault();
	contenidoSelect.innerHTML = e.currentTarget.innerHTML;
	select.classList.toggle('active')
	opciones.classList.toggle('active')
	// busca solo dentro del elemento al que se le dio click
	hiddentInput.value = e.currentTarget.querySelector('.titulo')

}
