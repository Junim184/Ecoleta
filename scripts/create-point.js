function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( () => res.json() )
    .then( states => {

        for( const state of states) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            console.log(`${state.nome}`)
        }
 
    } )
}

populateUFs()

document
    .querySelector("select[name=uf]")
    .addEventListener("change", () => {
        console.log("mudei")
    } )