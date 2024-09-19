// index.js

document.addEventListener('DOMContentLoaded', function() {
    const pecasSelect = document.getElementById('peças');
    const pecaInfo = document.getElementById('peca-info');
    const tabelaPecasBody = document.querySelector('#tabela-pecas tbody');
    const adicionarPecaButton = document.getElementById('adicionar-peca');

    const pecasDados = {
        "haste": { acoes: ["fabricar", "cromar", "rec. rosca"], dimensoes: ["diâmetro", "comprimento", "largura"] },
        "camisa": { acoes: ["fabricar", "brunir", "rec. rosca"], dimensoes: ["diâmetro", "comprimento", "largura"] },
        "olhal": { acoes: ["fabricar", "rec. furo", "rec. rosca"], dimensoes: ["diâmetro", "comprimento", "largura"] },
        "flange": { acoes: ["fabricar", "recuperar"], dimensoes: ["diâmetro", "comprimento", "largura"] },
        "fundo": { acoes: ["fabricar", "rec. olhal"], dimensoes: ["diâmetro", "comprimento", "largura"] },
        "êmbolo": { acoes: ["fabricar", "rec. olhal", "rec. rosca"], dimensoes: ["diâmetro", "comprimento", "largura"] },
        "espaçador": { acoes: ["fabricar", "recuperar"], dimensoes: ["diâmetro", "comprimento", "largura"] },
        "jogo-vedacao": { acoes: ["substituir", "cliente vai fornecer"], dimensoes: [] }
    };

    pecasSelect.addEventListener('change', function() {
        const selectedPeca = pecasSelect.value;
        if (selectedPeca) {
            const dados = pecasDados[selectedPeca];
            pecaInfo.innerHTML = `
                <h3>Informações da Peça: ${selectedPeca.charAt(0).toUpperCase() + selectedPeca.slice(1)}</h3>
                <p><strong>Ações possíveis:</strong> ${dados.acoes.join(', ')}</p>
                ${dados.dimensoes.length > 0 ? `
                <div class="form-group">
                    <label for="diametro">Diâmetro (mm)</label>
                    <input type="number" id="diametro" name="diametro">
                </div>
                <div class="form-group">
                    <label for="comprimento">Comprimento (mm)</label>
                    <input type="number" id="comprimento" name="comprimento">
                </div>
                <div class="form-group">
                    <label for="largura">Largura (mm)</label>
                    <input type="number" id="largura" name="largura">
                </div>
                ` : ''}
            `;
            pecaInfo.classList.remove('hidden');
        } else {
            pecaInfo.classList.add('hidden');
        }
    });

    adicionarPecaButton.addEventListener('click', function() {
        const peca = pecasSelect.value;
        const diametro = document.getElementById('diametro') ? document.getElementById('diametro').value : '';
        const comprimento = document.getElementById('comprimento') ? document.getElementById('comprimento').value : '';
        const largura = document.getElementById('largura') ? document.getElementById('largura').value : '';

        if (peca) {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${peca.charAt(0).toUpperCase() + peca.slice(1)}</td>
                <td>${pecasDados[peca].acoes.join(', ')}</td>
                <td>${diametro} mm</td>
                <td>${comprimento} mm</td>
                <td>${largura} mm</td>
            `;
            tabelaPecasBody.appendChild(tr);

            // Reset the form fields
            pecasSelect.value = '';
            pecaInfo.innerHTML = '';
            pecaInfo.classList.add('hidden');
            if (document.getElementById('diametro')) document.getElementById('diametro').value = '';
            if (document.getElementById('comprimento')) document.getElementById('comprimento').value = '';
            if (document.getElementById('largura')) document.getElementById('largura').value = '';
        } else {
            alert('Por favor, selecione uma peça.');
        }
    });
});
