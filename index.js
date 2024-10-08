// index.js

document.addEventListener('DOMContentLoaded', function() {
    // Preencher o campo de data com a data atual
    const dataInput = document.getElementById('dataPeritagem');
    const hoje = new Date().toISOString().split('T')[0];
    dataInput.value = hoje;
});

document.getElementById('peça').addEventListener('change', function() {
    const pecaSelecionada = this.value;
    const opcoesPeça = document.getElementById('opcoesPeça');
    const infoPeca = document.getElementById('infoPeca');
    const opcoesCheckbox = document.getElementById('opcoesCheckbox');

    // Limpar opções anteriores
    opcoesCheckbox.innerHTML = '';

    if (pecaSelecionada) {
        opcoesPeça.classList.remove('hidden');

        let infoHTML = '';
        let opcoes = [];

        switch (pecaSelecionada) {
            case 'haste':
                infoHTML = 'Opções:';
                opcoes = ['Fabricar', 'Cromar', 'Rec. Rosca'];
                break;
            case 'camisa':
                infoHTML = 'Opções:';
                opcoes = ['Fabricar', 'Brunir', 'Rec. Rosca'];
                break;
            case 'olhal':
                infoHTML = 'Opções:';
                opcoes = ['Fabricar', 'Rec. Furo', 'Rec. Rosca'];
                break;
            case 'flange':
                infoHTML = 'Opções:';
                opcoes = ['Fabricar', 'Recuperar'];
                break;
            case 'fundo':
                infoHTML = 'Opções:';
                opcoes = ['Fabricar', 'Rec. Olhal'];
                break;
            case 'embolo':
                infoHTML = 'Opções:';
                opcoes = ['Fabricar', 'Rec. Olhal', 'Rec. Rosca'];
                break;
            case 'espacoador':
                infoHTML = 'Opções:';
                opcoes = ['Fabricar', 'Recuperar'];
                break;
            case 'jogoVedacao':
                infoHTML = 'Opções:';
                opcoes = ['Substituir', 'Cliente Vai Fornecer'];
                break;
            default:
                infoHTML = '';
                opcoes = [];
        }

        infoPeca.innerHTML = infoHTML;

        // Adicionar checkboxes para as opções
        opcoes.forEach(opcao => {
            const div = document.createElement('div');
            div.classList.add('opcao');

            const input = document.createElement('input');
            input.type = 'checkbox';
            input.id = opcao;
            input.name = 'opcoes';
            input.value = opcao;

            const label = document.createElement('label');
            label.htmlFor = opcao;
            label.textContent = opcao;

            div.appendChild(input);
            div.appendChild(label);

            opcoesCheckbox.appendChild(div);
        });
    } else {
        opcoesPeça.classList.add('hidden');
    }
});

function adicionarPeca() {
    const peca = document.getElementById('peça').value;
    const diametro = document.getElementById('diametro').value;
    const comprimento = document.getElementById('comprimento').value;
    const largura = document.getElementById('largura').value;
    const opcoesSelecionadas = Array.from(document.querySelectorAll('input[name="opcoes"]:checked'))
        .map(checkbox => checkbox.value).join(', ');

    if (peca) {
        const tabelaResumo = document.getElementById('tabelaResumo').getElementsByTagName('tbody')[0];
        const novaLinha = tabelaResumo.insertRow();

        novaLinha.insertCell().textContent = peca;
        novaLinha.insertCell().textContent = diametro;
        novaLinha.insertCell().textContent = comprimento;
        novaLinha.insertCell().textContent = largura;
        novaLinha.insertCell().textContent = opcoesSelecionadas;

        // Limpar os campos
        document.getElementById('diametro').value = '';
        document.getElementById('comprimento').value = '';
        document.getElementById('largura').value = '';
        document.getElementById('peça').value = '';
        document.getElementById('opcoesCheckbox').innerHTML = '';
        document.getElementById('opcoesPeça').classList.add('hidden');
    } else {
        alert('Selecione uma peça antes de adicionar.');
    }
}
