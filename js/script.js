    function adicionarItemNaLista(novoItem, checked = false) {
        let novoItem = document.getElementById("novoItem").value
        if (novoItem.trim() !== "") {

            //criando div
            const taskContainer = document.createElement('div')
            taskContainer.id = 'taskContainer'

            //criando checkbox
            const checkbox = document.createElement('input')
            checkbox.type = 'checkbox'
            checkbox.id = 'checkbox'

            //criando text <p>
            let p = document.createElement('p')
            p.textContent = novoItem
            
            //criando img 
            let remove = document.createElement('img')
            remove.src = './img/remove.png';
            remove.style.width = '24px';

            //adicionando itens na div
            taskContainer.appendChild(checkbox);
            taskContainer.appendChild(p)
            taskContainer.appendChild(remove)
        
            //adicionando div na lista
            document.getElementById("lista").appendChild(taskContainer);

            //limpando valores ao adicionar um item
            document.getElementById("novoItem").value = "";
            document.getElementById("novoItem").focus();
            
            //verificação do checkbox
            checkbox.addEventListener('click',function(){
                if(checkbox.checked){
                    p.style = 'text-decoration:line-through'
                    taskContainer.style.backgroundColor = '#a37fad';
                }else{
                    p.style = 'text-decoration:none'
                    taskContainer.style.backgroundColor = '#c855ee';
                }
            })

            //modificação do nome da task
            p.addEventListener('click',function(){
                const novoTexto = prompt('Qual será o novo nome da checklist?')
                if(novoTexto !== null && novoTexto.trim() !== ""){
                    p.textContent = novoTexto
                }
            })

            //exclusão da task
            remove.addEventListener('click',function(){
                const parent = document.getElementById('lista')
                parent.removeChild(taskContainer)
            })
        }
    }

    function criarItem(){

    }

    function salvarItem(){
        
    }