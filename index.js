document.addEventListener('DOMContentLoaded', () => {
    const dataInput = document.getElementById('data');
    const hoje = new Date().toISOString().split('T')[0];
    dataInput.value = hoje;
});

function adicionarPeca() {
    const selectPeca = document.getElementById('pecas');
    const pecasInfoDiv = document.getElementById('pecas-info');
    
    const peca = selectPeca.value;
    if (peca === "") {
        alert("Selecione uma peça.");
        return;
    }

    const informacoes = {
        haste: { acoes: ["fabricar", "cromar", "rec. rosca"], dimensoes: true },
        camisa: { acoes: ["fabricar", "brunir", "rec. rosca"], dimensoes: true },
        olhal: { acoes: ["fabricar", "rec. furo", "rec. rosca"], dimensoes: true },
        flange: { acoes: ["fabricar", "recuperar"], dimensoes: true },
        fundo: { acoes: ["fabricar", "rec. olhal"], dimensoes: true },
        embolo: { acoes: ["fabricar", "rec. olhal", "rec. rosca"], dimensoes: true },
        espaco: { acoes: ["fabricar", "recuperar"], dimensoes: true },
        vedacao: { acoes: ["Substituir", "Cliente Vai Fornecer"], dimensoes: false }
    };

    const pecaInfo = informacoes[peca];
    if (!pecaInfo) return;

    const tableBody = document.querySelector('#pecas-tabela tbody');
    const tr = document.createElement('tr');

    const tdPeca = document.createElement('td');
    tdPeca.textContent = peca;
    tr.appendChild(tdPeca);

    const tdAcao = document.createElement('td');
    tdAcao.textContent = pecaInfo.acoes.join(', ');
    tr.appendChild(tdAcao);

    if (pecaInfo.dimensoes) {
        const tdDiametro = document.createElement('td');
        tdDiametro.innerHTML = `<input type="text" placeholder="Diâmetro (mm)" />`;
        tr.appendChild(tdDiametro);

        const tdComprimento = document.createElement('td');
        tdComprimento.innerHTML = `<input type="text" placeholder="Comprimento (mm)" />`;
        tr.appendChild(tdComprimento);

        const tdLargura = document.createElement('td');
        tdLargura.innerHTML = `<input type="text" placeholder="Largura (mm)" />`;
        tr.appendChild(tdLargura);
    } else {
        tr.innerHTML += `<td></td><td></td><td></td>`;
    }

    tableBody.appendChild(tr);
    
    document.getElementById('peritagem-form').reset();
    document.getElementById('data').value = hoje;
}
