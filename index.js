// index.js
window.onload = function() {
    // Define a data atual
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('data').value = today;

    // Define as opções de ações por peça
    const acoesPorPeca = {
        haste: ['fabricar', 'cromar', 'rec. rosca'],
        camisa: ['fabricar', 'brunir', 'rec. rosca'],
        olhal: ['fabricar', 'rec. furo', 'rec. rosca'],
        flange: ['fabricar', 'recuperar'],
        fundo: ['fabricar', 'rec. olhal'],
        embolo: ['fabricar', 'rec. olhal', 'rec. rosca'],
        espaco: ['fabricar', 'recuperar'],
        vedacao: ['substituir', 'cliente vai fornecer']
    };

    // Função para mostrar as opções de acordo com a peça selecionada
    window.mostrarOpcoes = function() {
        const peca = document.getElementById('pecas').value;
        const opcoes = document.getElementById('opcoesPeca');
        const acoes = document.getElementById('acoes');

        if (peca) {
            opcoes.classList.remove('hidden');
            acoes.innerHTML = ''; // Limpa as opções existentes

            acoesPorPeca[peca].forEach(acao => {
                const option = document.createElement('option');
                option.value = acao;
                option.textContent = acao;
                acoes.appendChild(option);
            });
        } else {
            opcoes.classList.add('hidden');
        }
    }

    // Função para adicionar a peça à tabela
    window.adicionarPeca = function() {
        const peca = document.getElementById('pecas').value;
        const acoesSelecionadas = Array.from(document.getElementById('acoes').selectedOptions).map(option => option.value);
        const diametro = document.getElementById('diametro').value;
        const comprimento = document.getElementById('comprimento').value;
        const largura = document.getElementById('largura').value;

        if (peca) {
            const tabela = document.getElementById('tabelaPecas').getElementsByTagName('tbody')[0];
            const novaLinha = tabela.insertRow();

            novaLinha.insertCell(0).textContent = peca;
            novaLinha.insertCell(1).textContent = acoesSelecionadas.join(', ');
            novaLinha.insertCell(2).textContent = diametro;
            novaLinha.insertCell(3).textContent = comprimento;
            novaLinha.insertCell(4).textContent = largura;

            // Limpar os campos
            document.getElementById('pecas').value = '';
            document.getElementById('acoes').innerHTML = '';
            document.getElementById('diametro').value = '';
            document.getElementById('comprimento').value = '';
            document.getElementById('largura').value = '';
            document.getElementById('opcoesPeca').classList.add('hidden');
        } else {
            alert('Selecione uma peça.');
        }
    }
}
