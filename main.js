const form = document.getElementById("formAtividade");
const nomeContato = [];
const numeroContato = [];

let linhas = " ";

form.addEventListener('submit', function (e)  {
    e.preventDefault();
    
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNovoName = document.getElementById('NomeContato');
    const inputNovoNumber = document.getElementById('NumeroContato');

    if (nomeContato.includes(inputNovoName.value)) {
        alert(`Este contato ${inputNovoName.value} já foi inserido!`)
    } else {

    nomeContato.push(inputNovoName.value);
    numeroContato.push(parseInt(inputNovoNumber.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNovoName.value} </td> `;
        linha += `<td>${inputNovoNumber.value}</td>`;
        linha += '</tr>';

        linhas += linha;

        inputNovoName.value = '';
        inputNovoNumber.value = '';
    }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}