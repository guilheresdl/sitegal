// index.js

// Função para preencher a data atual
document.addEventListener('DOMContentLoaded', function() {
    const dataInput = document.getElementById('dataPeritagem');
    const hoje = new Date().toISOString().split('T')[0];
    dataInput.value = hoje;
});

document.getElementById('peça').addEventListener('change', function() {
    const pecaSelecionada = this.value;
    const opcoesPeça = document.getElementById('opcoesPeça');
    const infoPeca = document.getElementById('infoPeca');

    if (pecaSelecionada) {
        opcoesPeça.classList.remove('hidden');

        let infoHTML = '';

        switch (pecaSelecionada) {
            case 'haste':
                infoHTML = 'Opções: Fabricar, Cromar, Rec. Rosca';
                break;
            case 'camisa':
                infoHTML = 'Opções: Fabricar, Brunir, Rec. Rosca';
                break;
            case 'olhal':
                infoHTML = 'Opções: Fabricar, Rec. Furo, Rec. Rosca';
                break;
            case 'flange':
                infoHTML = 'Opções: Fabricar, Recuperar';
                break;
            case 'fundo':
                infoHTML = 'Opções: Fabricar, Rec. Olhal';
                break;
            case 'embolo':
                infoHTML = 'Opções: Fabricar, Rec. Olhal, Rec. Rosca';
                break;
            case 'espacoador':
                infoHTML = 'Opções: Fabricar, Recuperar';
                break;
            case 'jogoVedacao':
                infoHTML = 'Opções: Substituir, Cliente Vai Fornecer';
                break;
            default:
                infoHTML = '';
        }

        infoPeca.innerHTML = infoHTML;
    } else {
        opcoesPeça.classList.add('hidden');
    }
});

function adicionarPeca() {
    const peca = document.getElementById('peça').value;
    const diametro = document.getElementById('diametro').value;
    const comprimento = document.getElementById('comprimento').value;
    const largura = document.getElementById('largura').value;

    if (peca) {
        const tabelaResumo = document.getElementById('tabelaResumo').getElementsByTagName('tbody')[0];
        const novaLinha = tabelaResumo.insertRow();

        novaLinha.insertCell().textContent = peca;
        novaLinha.insertCell().textContent = diametro;
        novaLinha.insertCell().textContent = comprimento;
        novaLinha.insertCell().textContent = largura;
        novaLinha.insertCell().textContent = 'N/A';

        // Limpar os campos
        document.getElementById('diametro').value = '';
        document.getElementById('comprimento').value = '';
        document.getElementById('largura').value = '';
        document.getElementById('peça').value = '';
        document.getElementById('opcoesPeça').classList.add('hidden');
    } else {
        alert('Selecione uma peça antes de adicionar.');
    }
}
