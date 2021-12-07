function preencherTabela() {
    let tabela = document.getElementById("tabela")

    fetch("/assets/json/medalhas.json") // realiza uma requisição para obter o arquivo com as informações das medalhas
        .then(response => response.json())
        .then(data => {
            data.forEach(pais => {
                row = tabela.insertRow()
                row.insertCell().outerHTML = `<td><img class="bandeira" src="${pais.bandeira}"/></td>`
                row.insertCell().innerHTML = pais.pais
                row.insertCell().innerHTML = pais.ouro
                row.insertCell().innerHTML = pais.prata
                row.insertCell().innerHTML = pais.bronze
                row.insertCell().innerHTML = parseInt(pais.ouro) + parseInt(pais.prata) + parseInt(pais.bronze)
            })
        })
}

preencherTabela()