document.addEventListener('DOMContentLoaded', function () {
    // Preencher as opções de ID de 1 a 50
    const idSelect = document.getElementById('id');
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

    switch (peça) {
        case 'haste':
            optionsHtml = `
                <label>Opções para Haste:</label>
                <label><input type="checkbox" class="opcao" value="fabricar"> Fabricar</label>
                <label><input type="checkbox" class="opcao" value="cromar"> Cromar</label>
                <label><input type="checkbox" class="opcao" value="rec-roca"> Rec. Rosca</label>
                <label>Diâmetro: <input type="text" class="diametro" placeholder="Diâmetro"> mm</label>
                <label>Comprimento: <input type="text" class="comprimento" placeholder="Comprimento"> mm</label>
                <label>Largura: <input type="text" class="largura" placeholder="Largura"> mm</label>
            `;
            break;
        case 'camisa':
            optionsHtml = `
                <label>Opções para Camisa:</label>
                <label><input type="checkbox" class="opcao" value="fabricar"> Fabricar</label>
                <label><input type="checkbox" class="opcao" value="brunir"> Brunir</label>
                <label><input type="checkbox" class="opcao" value="rec-roca"> Rec. Rosca</label>
                <label>Diâmetro: <input type="text" class="diametro" placeholder="Diâmetro"> mm</label>
                <label>Comprimento: <input type="text" class="comprimento" placeholder="Comprimento"> mm</label>
                <label>Largura: <input type="text" class="largura" placeholder="Largura"> mm</label>
            `;
            break;
        case 'olhal':
            optionsHtml = `
                <label>Opções para Olhal:</label>
                <label><input type="checkbox" class="opcao" value="fabricar"> Fabricar</label>
                <label><input type="checkbox" class="opcao" value="rec-furo"> Rec. Furo</label>
                <label><input type="checkbox" class="opcao" value="rec-roca"> Rec. Rosca</label>
                <label>Diâmetro: <input type="text" class="diametro" placeholder="Diâmetro"> mm</label>
                <label>Comprimento: <input type="text" class="comprimento" placeholder="Comprimento"> mm</label>
                <label>Largura: <input type="text" class="largura" placeholder="Largura"> mm</label>
            `;
            break;
        case 'flange':
            optionsHtml = `
                <label>Opções para Flange:</label>
                <label><input type="checkbox" class="opcao" value="fabricar"> Fabricar</label>
                <label><input type="checkbox" class="opcao" value="recuperar"> Recuperar</label>
                <label>Diâmetro: <input type="text" class="diametro" placeholder="Diâmetro"> mm</label>
                <label>Comprimento: <input type="text" class="comprimento" placeholder="Comprimento"> mm</label>
                <label>Largura: <input type="text" class="largura" placeholder="Largura"> mm</label>
            `;
            break;
        case 'fundo':
            optionsHtml = `
                <label>Opções para Fundo:</label>
                <label><input type="checkbox" class="opcao" value="fabricar"> Fabricar</label>
                <label><input type="checkbox" class="opcao" value="rec-olhal"> Rec. Olhal</label>
                <label>Diâmetro: <input type="text" class="diametro" placeholder="Diâmetro"> mm</label>
                <label>Comprimento: <input type="text" class="comprimento" placeholder="Comprimento"> mm</label>
                <label>Largura: <input type="text" class="largura" placeholder="Largura"> mm</label>
            `;
            break;
        case 'embolo':
            optionsHtml = `
                <label>Opções para Êmbolo:</label>
                <label><input type="checkbox" class="opcao" value="fabricar"> Fabricar</label>
                <label><input type="checkbox" class="opcao" value="rec-olhal"> Rec. Olhal</label>
                <label><input type="checkbox" class="opcao" value="rec-roca"> Rec. Rosca</label>
                <label>Diâmetro: <input type="text" class="diametro" placeholder="Diâmetro"> mm</label>
                <label>Comprimento: <input type="text" class="comprimento" placeholder="Comprimento"> mm</label>
                <label>Largura: <input type="text" class="largura" placeholder="Largura"> mm</label>
            `;
            break;
        case 'espaco':
            optionsHtml = `
                <label>Opções para Espaçador:</label>
                <label><input type="checkbox" class="opcao" value="fabricar"> Fabricar</label>
                <label><input type="checkbox" class="opcao" value="recuperar"> Recuperar</label>
                <label>Diâmetro: <input type="text" class="diametro" placeholder="Diâmetro"> mm</label>
                <label>Comprimento: <input type="text" class="comprimento" placeholder="Comprimento"> mm</label>
                <label>Largura: <input type="text" class="largura" placeholder="Largura"> mm</label>
            `;
            break;
        case 'bucha':
            optionsHtml = `
                <label>Opções para Bucha Guia:</label>
                <label><input type="checkbox" class="opcao" value="fabricar"> Fabricar</label>
                <label><input type="checkbox" class="opcao" value="recuperar"> Recuperar</label>
                <label>Diâmetro: <input type="text" class="diametro" placeholder="Diâmetro"> mm</label>
                <label>Comprimento: <input type="text" class="comprimento" placeholder="Comprimento"> mm</label>
                <label>Largura: <input type="text" class="largura" placeholder="Largura"> mm</label>
            `;
            break;
        case 'vedacao':
            optionsHtml = `
                <label>Opções para Jogo de Vedação:</label>
                <label><input type="checkbox" class="opcao" value="substituir"> Substituir</label>
                <label><input type="checkbox" class="opcao" value="cliente-fornecer"> Cliente Vai Fornecer</label>
            `;
            break;
        default:
            optionsHtml = '';
    }

    peçaOptionsDiv.innerHTML = optionsHtml;
}

function addPiece() {
    const peçaSelect = document.getElementById('peçaSelect');
    const peça = peçaSelect.value;
    const opcoes = Array.from(document.querySelectorAll('.opcao:checked')).map(el => el.value).join(', ');
    const diametro = document.querySelector('.diametro') ? document.querySelector('.diametro').value : '';
    const comprimento = document.querySelector('.comprimento') ? document.querySelector('.comprimento').value : '';
    const largura = document.querySelector('.largura') ? document.querySelector('.largura').value : '';

    if (!peça) {
        alert('Selecione uma peça.');
        return;
    }

    const tableBody = document.querySelector('#resumoTable tbody');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${peça}</td>
        <td>${opcoes}</td>
        <td>${diametro}</td>
        <td>${comprimento}</td>
        <td>${largura}</td>
    `;
    tableBody.appendChild(row);

    // Resetar o formulário
    document.getElementById('peritagemForm').reset();
    document.getElementById('peçaOptions').innerHTML = '';
}
