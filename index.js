// Função para adicionar a peça na tabela de resumo
function adicionarPeca() {
    // Captura os valores do formulário
    const peca = document.getElementById('peca').value;
    const acoes = document.querySelectorAll('input[name="acao"]:checked');
    const diametro = document.getElementById('diametro').value;
    const comprimento = document.getElementById('comprimento').value;
    const largura = document.getElementById('largura').value;
    let acoesSelecionadas = [];

    // Percorre as opções de ação selecionadas
    acoes.forEach((acao) => {
        acoesSelecionadas.push(acao.value);
    });

    // Cria uma nova linha para a tabela
    const tabela = document.getElementById('tabelaResumo');
    const novaLinha = tabela.insertRow();

    // Insere as colunas com os valores
    const colunaPeca = novaLinha.insertCell(0);
    colunaPeca.textContent = peca;

    const colunaAcoes = novaLinha.insertCell(1);
    colunaAcoes.textContent = acoesSelecionadas.join(', ');

    const colunaDiametro = novaLinha.insertCell(2);
    colunaDiametro.textContent = diametro;

    const colunaComprimento = novaLinha.insertCell(3);
    colunaComprimento.textContent = comprimento;

    const colunaLargura = novaLinha.insertCell(4);
    colunaLargura.textContent = largura;

    // Limpa o formulário após adicionar a peça
    document.getElementById('formPeritagem').reset();
}

// Função para preencher o campo de ID automaticamente
function preencherId() {
    const ss = document.getElementById('ss').value;
    const id = document.getElementById('id');
    if (ss) {
        id.value = ss + '-1'; // Exemplo simples para gerar ID baseado no SS
    }
}

// Define a data automaticamente
document.addEventListener('DOMContentLoaded', () => {
    const dataPeritagem = document.getElementById('dataPeritagem');
    const hoje = new Date().toISOString().split('T')[0];
    dataPeritagem.value = hoje;
});

// Adiciona evento ao botão de salvar peça
document.getElementById('salvarPeca').addEventListener('click', adicionarPeca);
