// Função para carregar itens do localStorage
function carregarItens() {
    const itensSalvos = JSON.parse(localStorage.getItem('listaDeTarefas')) || [];
    itensSalvos.forEach(item => {
        adicionarItemNaLista(item.texto, item.checked);
    });
}

// Função para salvar os itens no localStorage
function salvarItens() {
    const itens = [];
    const taskContainers = document.querySelectorAll('#taskContainer');
    taskContainers.forEach(container => {
        const p = container.querySelector('p');
        const checkbox = container.querySelector('input[type="checkbox"]');
        itens.push({ texto: p.textContent, checked: checkbox.checked });
    });
    localStorage.setItem('listaDeTarefas', JSON.stringify(itens));
}

// Função para adicionar um item à lista e no DOM
function adicionarItemNaLista(novoItem, checked = false) {
    if (novoItem.trim() !== "") {
        const taskContainer = document.createElement('div');
        taskContainer.id = 'taskContainer';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'checkbox';
        checkbox.checked = checked;

        let p = document.createElement('p');
        p.textContent = novoItem;

        let remove = document.createElement('img');
        remove.src = './img/remove.png';
        remove.style.width = '24px';

        taskContainer.appendChild(checkbox);
        taskContainer.appendChild(p);
        taskContainer.appendChild(remove);

        document.getElementById("lista").appendChild(taskContainer);
        document.getElementById("novoItem").value = "";
        document.getElementById("novoItem").focus();

        // Evento do checkbox
        checkbox.addEventListener('click', function () {
            if (checkbox.checked) {
                p.style = 'text-decoration:line-through';
                taskContainer.style.backgroundColor = '#a37fad';
            } else {
                p.style = 'text-decoration:none';
                taskContainer.style.backgroundColor = '#c855ee';
            }
            salvarItens(); // Salvar após alterar o estado do checkbox
        });

        // Evento de editar texto
        p.addEventListener('click', function () {
            const novoTexto = prompt('Qual será o novo nome da checklist?');
            if (novoTexto !== null && novoTexto.trim() !== "") {
                p.textContent = novoTexto;
                salvarItens(); // Salvar após editar o item
            }
        });

        // Evento de remover item
        remove.addEventListener('click', function () {
            const parent = document.getElementById('lista');
            parent.removeChild(taskContainer);
            salvarItens(); // Salvar após remover o item
        });

        // Aplicar o estilo conforme o estado do checkbox
        if (checked) {
            p.style = 'text-decoration:line-through';
            taskContainer.style.backgroundColor = '#a37fad';
        } else {
            p.style = 'text-decoration:none';
            taskContainer.style.backgroundColor = '#c855ee';
        }
    }
}

// Função chamada ao adicionar um novo item
function adicionarItem() {
    let novoItem = document.getElementById("novoItem").value;
    adicionarItemNaLista(novoItem);
    salvarItens(); // Salvar após adicionar o item
}

// Carregar os itens quando a página for carregada
window.onload = function () {
    carregarItens();
};
