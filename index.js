document.addEventListener('DOMContentLoaded', function() {
    // Referências para os elementos do DOM
    const tipoPecaSelect = document.getElementById('tipoPeca');
    const acoesPecaContainer = document.getElementById('acoesPecaContainer');
    const adicionarPecaBtn = document.getElementById('adicionarPeca');
    const pecasTabelaBody = document.querySelector('#pecasTabela tbody');

    // Função para atualizar as opções de ações baseadas no tipo de peça selecionado
    tipoPecaSelect.addEventListener('change', function() {
        const tipoSelecionado = this.value;
        const acoesPecaHTML = getAcoesPecaHTML(tipoSelecionado);
        acoesPecaContainer.innerHTML = acoesPecaHTML;
    });

    // Função para gerar o HTML das ações baseado no tipo de peça
    function getAcoesPecaHTML(tipoPeca) {
        let acoesHTML = '';

        const acoes = {
            haste: ['Fabricar', 'Cromar', 'Rec. Rosca'],
            camisa: ['Fabricar', 'Brunir', 'Rec. Rosca'],
            olhal: ['Fabricar', 'Rec. Furo', 'Rec. Rosca'],
            flange: ['Fabricar', 'Recuperar'],
            fundo: ['Fabricar', 'Rec. Olhal'],
            embolo: ['Fabricar', 'Rec. Olhal', 'Rec. Rosca'],
            espacoador: ['Fabricar', 'Recuperar'],
            jogo_vedacao: ['Substituir', 'Cliente Vai Fornecer']
        };

        if (acoes[tipoPeca]) {
            acoes[tipoPeca].forEach(acao => {
                acoesHTML += `
                    <label>
                        <input type="checkbox" name="acoesPeca" value="${acao}">
                        ${acao}
                    </label><br>
                `;
            });
        }

        return acoesHTML;
    }

    // Função para adicionar uma nova peça à tabela
    adicionarPecaBtn.addEventListener('click', function() {
        // Coleta os valores dos campos do formulário
        const nomeCliente = document.getElementById('nomeCliente').value;
        const nomeEquipamento = document.getElementById('nomeEquipamento').value;
        const ss = document.getElementById('ss').value;
        const id = document.getElementById('id').value;
        const dataPeritagem = document.getElementById('dataPeritagem').value;
        const observacoes = document.getElementById('observacoes').value;
        const tipoPeca = tipoPecaSelect.value;
        const acoesPeca = Array.from(document.querySelectorAll('input[name="acoesPeca"]:checked')).map(input => input.value).join(', ');
        const diamentro = document.getElementById('diamentro').value;
        const comprimento = document.getElementById('comprimento').value;
        const largura = document.getElementById('largura').value;
        const jogoVedacao = document.getElementById('jogoVedacao').value;

        // Verifica se todos os campos obrigatórios estão preenchidos
        if (!nomeCliente || !nomeEquipamento || !ss || !id || !dataPeritagem) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // Cria uma nova linha para a tabela
        const novaLinha = document.createElement('tr');

        // Adiciona os dados à nova linha
        novaLinha.innerHTML = `
            <td>${nomeCliente}</td>
            <td>${nomeEquipamento}</td>
            <td>${ss}</td>
            <td>${id}</td>
            <td>${dataPeritagem}</td>
            <td>${tipoPeca}</td>
            <td>${acoesPeca}</td>
            <td>${diamentro}</td>
            <td>${comprimento}</td>
            <td>${largura}</td>
            <td>${jogoVedacao}</td>
            <td>${observacoes}</td>
        `;

        // Adiciona a nova linha ao corpo da tabela
        pecasTabelaBody.appendChild(novaLinha);

        // Limpa os campos do formulário após adicionar a peça
        document.getElementById('peritagemForm').reset();
        acoesPecaContainer.innerHTML = ''; // Limpa as opções de ações
    });
});
