document.addEventListener('DOMContentLoaded', function() {
    // Referência para o botão de adicionar peça
    const adicionarPecaBtn = document.getElementById('adicionarPeca');
    
    // Referência para o corpo da tabela onde as peças serão listadas
    const pecasTabelaBody = document.querySelector('#pecasTabela tbody');
    
    // Função para adicionar uma nova peça à tabela
    adicionarPecaBtn.addEventListener('click', function() {
        // Coleta os valores dos campos do formulário
        const nomeCliente = document.getElementById('nomeCliente').value;
        const nomeEquipamento = document.getElementById('nomeEquipamento').value;
        const ss = document.getElementById('ss').value;
        const id = document.getElementById('id').value;
        const dataPeritagem = document.getElementById('dataPeritagem').value;
        const observacoes = document.getElementById('observacoes').value;
        
        // Cria uma nova linha para a tabela
        const novaLinha = document.createElement('tr');
        
        // Adiciona os dados à nova linha
        novaLinha.innerHTML = `
            <td>${nomeEquipamento}</td>
            <td>Adicionar mais detalhes</td>
            <td>${observacoes}</td>
        `;
        
        // Adiciona a nova linha ao corpo da tabela
        pecasTabelaBody.appendChild(novaLinha);
        
        // Limpa os campos do formulário após adicionar a peça
        document.getElementById('peritagemForm').reset();
    });
});
