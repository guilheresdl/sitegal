// Script para preencher o campo de ID e configurar a data
document.addEventListener('DOMContentLoaded', function () {
    const idSelect = document.getElementById('id');
    const currentDate = new Date().toISOString().split('T')[0];
    document.getElementById('data').value = currentDate;

    // Preencher as opções de ID de 1 a 50
    for (let i = 1; i <= 50; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        idSelect.appendChild(option);
    }
});

function showOptions() {
    const peçaSelect = document.getElementById('peçaSelect');
    const peçaOptionsDiv = document.getElementById('peçaOptions');
    const peça = peçaSelect.value;

    let optionsHtml = '';

    // Gerar opções com base na peça selecionada
    switch (peça) {
        case 'haste':
            optionsHtml = `
                <label>Opções para Haste:</label>
                <label><input type="checkbox" value="fabricar"> Fabricar</label>
                <label><input type="checkbox" value="cromar"> Cromar</label>
                <label><input type="checkbox" value="rec-roca"> Rec. Rosca</label>
                <label>Diâmetro: <input type="text" class="diametro" placeholder="Diâmetro"></label>
                <label>Comprimento: <input type="text" class="comprimento" placeholder="Comprimento"></label>
                <label>Largura: <input type="text" class="largura" placeholder="Largura"></label>
            `;
            break;
        case 'camisa':
            optionsHtml = `
                <label>Opções para Camisa:</label>
                <label><input type="checkbox" value="fabricar"> Fabricar</label>
                <label><input type="checkbox" value="brunir"> Brunir</label>
                <label><input type="checkbox" value="rec-roca"> Rec. Rosca</label>
                <label>Diâmetro: <input type="text" class="diametro" placeholder="Diâmetro"></label>
                <label>Comprimento: <input type="text" class="comprimento" placeholder="Comprimento"></label>
                <label>Largura: <input type="text" class="largura" placeholder="Largura"></label>
            `;
            break;
        // Adicione mais cases para outras peças
        case 'vedacao':
            optionsHtml = `
                <label>Opções para Jogo de Vedação:</label>
                <label><input type="checkbox" value="substituir"> Substituir</label>
                <label><input type="checkbox" value="cliente"> Cliente Vai Fornecer</label>
            `;
            break;
    }

    peçaOptionsDiv.innerHTML = optionsHtml;
}

function addPiece() {
    const peçaSelect = document.getElementById('peçaSelect');
    const peçaOptionsDiv = document.getElementById('peçaOptions');
    const resumoTable = document.getElementById('resumoTable').getElementsByTagName('tbody')[0];

    const peça = peçaSelect.value;
    const opções = Array.from(peçaOptionsDiv.querySelectorAll('input[type="checkbox"]:checked'))
                        .map(el => el.value)
                        .join(', ');
    const diâmetro = peçaOptionsDiv.querySelector('.diametro') ? peçaOptionsDiv.querySelector('.diametro').value : '';
    const comprimento = peçaOptionsDiv.querySelector('.comprimento') ? peçaOptionsDiv.querySelector('.comprimento').value : '';
    const largura = peçaOptionsDiv.querySelector('.largura') ? peçaOptionsDiv.querySelector('.largura').value : '';

    // Adicionar a peça à tabela de resumo
    if (peça) {
        const row = resumoTable.insertRow();
        row.insertCell().textContent = peça.charAt(0).toUpperCase() + peça.slice(1);
        row.insertCell().textContent = opções;
        row.insertCell().textContent = diâmetro;
        row.insertCell().textContent = comprimento;
        row.insertCell().textContent = largura;
    }
}
