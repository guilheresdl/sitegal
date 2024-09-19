// index.js

document.addEventListener('DOMContentLoaded', function() {
    // Preencher IDs de 1 a 50 no select
    const idSelect = document.getElementById('id');
    for (let i = 1; i <= 50; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        idSelect.appendChild(option);
    }

    // Preencher data atual no campo de data
    const dateInput = document.getElementById('date');
    dateInput.value = new Date().toISOString().split('T')[0];

    // Adicionar evento para atualizar opções de peça
    document.getElementById('part-type').addEventListener('change', function() {
        const partType = this.value;
        const partOptions = document.getElementById('part-options');
        partOptions.innerHTML = ''; // Limpar opções anteriores

        if (partType) {
            // Configura opções e dimensões com base no tipo de peça selecionado
            const options = {
                haste: ['Fabricar', 'Cromar', 'Rec. Rosca'],
                camisa: ['Fabricar', 'Brunir', 'Rec. Rosca'],
                olhal: ['Fabricar', 'Rec. Furo', 'Rec. Rosca'],
                flange: ['Fabricar', 'Recuperar'],
                fundo: ['Fabricar', 'Rec. Olhal'],
                embolo: ['Fabricar', 'Rec. Olhal', 'Rec. Rosca'],
                espaco: ['Fabricar', 'Recuperar'],
                vedacao: ['Substituir', 'Cliente Vai Fornecer']
            };

            const dimensions = partType !== 'vedacao' ? `
                <label for="diameter">Diâmetro (mm):</label>
                <input type="number" id="diameter" name="diameter" step="0.1">

                <label for="length">Comprimento (mm):</label>
                <input type="number" id="length" name="length" step="0.1">

                <label for="width">Largura (mm):</label>
                <input type="number" id="width" name="width" step="0.1">
            ` : '';

            partOptions.innerHTML = `
                <label for="actions">Ações Disponíveis:</label>
                <select id="actions" name="actions" multiple>
                    ${options[partType].map(action => `<option value="${action}">${action}</option>`).join('')}
                </select>
                ${dimensions}
            `;
            partOptions.classList.remove('hidden');
        } else {
            partOptions.classList.add('hidden');
        }
    });
});

function addPart() {
    const partType = document.getElementById('part-type').value;
    const actions = Array.from(document.getElementById('actions').selectedOptions).map(option => option.value).join(', ');
    const diameter = document.getElementById('diameter') ? document.getElementById('diameter').value : '';
    const length = document.getElementById('length') ? document.getElementById('length').value : '';
    const width = document.getElementById('width') ? document.getElementById('width').value : '';

    if (partType && actions) {
        const table = document.getElementById('summary-table').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        newRow.insertCell().textContent = partType.charAt(0).toUpperCase() + partType.slice(1);
        newRow.insertCell().textContent = actions;
        newRow.insertCell().textContent = diameter;
        newRow.insertCell().textContent = length;
        newRow.insertCell().textContent = width;

        // Resetar formulário
        document.getElementById('inspection-form').reset();
        document.getElementById('part-options').classList.add('hidden');
    } else {
        alert('Por favor, preencha todas as informações necessárias.');
    }
}
