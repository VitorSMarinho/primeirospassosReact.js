import { useState } from 'react'

function ListaTarefas() {
    const [lista, setlista] = useState([
        { texto: "Item para fazer", completo: false },
        { texto: "Outra Tarefa", completo: false }
    ])

    function tratarKeyDown(e, codigo) {
        if (e.key == "Enter") {
            criarItemLista(e, codigo);
        }
        if(e.key == "Backspace" && lista[codigo].texto == ''){
            e.preventDefault()
            return removeItemLista(codigo)
        }
        
    }       

    function removeItemLista(codigo){
        if(codigo === 0 && lista.length === 1){
            return;
        }
        setlista(
            lista => lista.slice(0, codigo).concat(
                lista.slice(codigo+1, lista.length)
            )
        )
    }

    function criarItemLista(e, codigo){
        const novaLista = [...lista]
        const novoItem = {
            texto: '',
            completo: false
        }
        novaLista.splice(codigo + 1, 0, novoItem)
        setlista(novaLista) 
    }

    function atualizarItemLista(e, codigo){
        const novaLista = [...lista]
        novaLista[codigo].texto = e.target.value
        setlista(novaLista)
    }

    return (
        <form>
            <ul>
                {lista.map(
                    (itemlista, codigo) => (
                        <li key={codigo} className='item'>
                            <div className='checkbox'></div>
                            <input 
                            type="text"
                            onChange={e => atualizarItemLista(e,codigo)} 
                            value={itemlista.texto} 
                            onKeyDown={e => tratarKeyDown(e, codigo)}
                            />
                        </li>
                    )
                )}
            </ul>
        </form>
    )
}

export default ListaTarefas