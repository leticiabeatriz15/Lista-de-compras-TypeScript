interface Item {
    nome: string, 
    quantidade: number, 
    categoria: string, 
    status: boolean
}

let lista : Item[] =[{nome: "pimenta", quantidade: 3, categoria: "higiene", status: true}]

export function adicionaItem(){
    let nomeItem : string|null = prompt("Digite o nome do item: ")
    if(nomeItem != null){
        nomeItem = nomeItem.toLowerCase()
    }
    let quantidadeItens : number = Number(prompt("Digite a quantidade de itens: "))

        function verificaCategoria(){
            
            let categoriaItem = prompt(`
                Digite o nome da categoria do item: 
                1 - Comida
                2 - Bebida
                3 - Higiene
                4 - Limpeza
                `)!
            switch(categoriaItem){
                case "1":
                    return categoriaItem= "comida"
                case "2":
                    return categoriaItem= "bebida"
                case "3":
                    return categoriaItem= "higiene"
                case "4":
                    return categoriaItem= "limpeza"
                default:
                    console.log("Digite uma categoria válida")
                    return verificaCategoria()
                    
            }
        }

    while(nomeItem === null || quantidadeItens === 0){
        if(nomeItem === null){
            nomeItem = prompt("Campo Obrigatório --> Digite o nome do item: ")
        }
        else if(quantidadeItens === 0){
            quantidadeItens = Number(prompt("Campo Obrigatório --> Digite a quantidade de itens: "))
        }
    }


    let item1: Item = {
        nome: nomeItem, 
        quantidade: quantidadeItens,
        categoria: verificaCategoria(), 
        status: false
    }
    lista.push(item1)
    visualiza(lista)
}


export function listaItens(){
    const itensListados : number | null = Number(prompt(`
        Digite:
        1 - Para Listar por Categoria
        2 - Para Listar por Ordem Alfabética
        3 - Para Listar por Quantidade
        4 - Para Listar por Status` ))

    if(itensListados === 1){
        let itemCat : string| null = prompt("Digite a categoria para a listagem:")
        let itensListadoCat = lista.filter((item) => item.categoria === itemCat)
        visualiza(itensListadoCat)
    }
    else if(itensListados === 2){
        lista.sort((a,b) => a.nome.localeCompare(b.nome)) 
        visualiza(lista)
    }
    else if(itensListados === 3){
        lista.sort((a,b)=> a.quantidade - b.quantidade)
        visualiza(lista)
    }
    else if(itensListados === 4){
        let menu = Number(prompt(`
            Digite se deseja listar:
            1 - por comprado
            2 - por não comprado`))
        if(menu === 1){
            let listaComprados = lista.filter((item) => item.status === true)
            visualiza(listaComprados)
        }
        else if(menu === 2){
            let listaNaoComprados = lista.filter((item) => item.status === false)
            visualiza(listaNaoComprados)
        }
    }

}

export function removeItem(){
    const itemRemovido : number | null = Number(prompt("Digite o numero do item que deseja remover:"))
    const certeza : number = Number(prompt(`
        Tem certeza que deseja remover o item ${lista[itemRemovido].nome}? 
        Digite:
        1 - para Sim
        2 - para Não`))
    if( certeza == 1){
        let pesquisa : number = lista.findIndex((compra) => compra.nome == lista[itemRemovido].nome)
        lista.splice(pesquisa,1)
        visualiza(lista)
    }

}

export function editaItem(){
    let itemEditado : string | null = prompt("Digite o nome do item que deseja editar:")

    for(const item of lista){
        if(item.nome === itemEditado?.toLowerCase()){
            let itemEdit : number = lista.indexOf(item)
            let nvNome = prompt("Digite o novo nome para o item:")!
            if(nvNome != null){
                nvNome = nvNome.toLowerCase()
            }
            let nvQuantidade = Number(prompt("Digite a nova quantidade de itens:"))
            let nvCategoria = prompt("Digite a nova categoria do item:")!
            if(nvCategoria != null){
                nvCategoria = nvCategoria.toLowerCase()
            }
            while(nvNome === null || nvCategoria === null || nvQuantidade === 0 ){
                if(nvNome === null){
                    nvNome = prompt("Campo Obrigatório -->Digite o novo nome para o item: ")!
                }
                else if(nvQuantidade === 0){
                    nvQuantidade = Number(prompt("Campo Obrigatório -->Digite a nova quantidade de itens: "))
                }
                else if(nvCategoria === null){
                    nvCategoria = prompt("Campo Obrigatório -->Digite uma nova categoria para o item: ")!
                }
            }
            lista[itemEdit].nome = nvNome 
            lista[itemEdit].quantidade = nvQuantidade
            lista[itemEdit].categoria = nvCategoria
            visualiza(lista)
        }
    }
}

export function marcarStatus(){
    visualiza(lista)
    const marcarItem = Number(prompt(`Digite o número de qual desses itens deseja marcar como comprado: `))
    if(marcarItem < 0 || marcarItem >= lista.length){
        console.log("Opção Inválida")
    }
    else{
        lista[marcarItem].status === false ? lista[marcarItem].status = true : lista[marcarItem].status = false;
        visualiza(lista)
    }
    
}

export function resumeLista(){
        let listaComprados = lista.filter((item) => item.status === true)
        let listaNaoComprados = lista.filter((item) => item.status === false)
    
        let nItens = lista.length
        if(nItens === 1){
            console.log(`\nNúmero total de itens na lista é: ${lista.length} item`)
        }
        else if(nItens > 1){
            console.log(`\nNúmero total de itens na lista é: ${lista.length} itens`)
        }
        else if(nItens < 1){
            console.log(`\nNão tem itens na lista!`)
        }

        let nItensComp = listaComprados.length
        if(nItensComp === 1){
            console.log(`Número total de itens comprados na lista é: ${nItensComp} item`)
        }
        else if(nItensComp > 1){
            console.log(`Número total de itens comprados na lista é: ${nItensComp} itens`)
        }
        else if(nItensComp < 1){
            console.log(`Não tem itens comprados nessa lista!`)
        }
        
        let nItensNcomp = listaNaoComprados.length
        if(nItensNcomp === 1){
            console.log(`Número total de itens não comprados na lista é: ${nItensNcomp} item`)
        }
        else if(nItensNcomp > 1){
            console.log(`Número total de itens não comprados na lista é: ${nItensNcomp} itens`)
        }
        else if(nItensNcomp < 1){
            console.log(`Não tem itens não comprados nessa lista!`)
        }

        let filtCategoriaC = lista.filter((item) => item.categoria === "comida")
        let nComida = filtCategoriaC.length
        let filtCategoriaB = lista.filter((item) => item.categoria === "bebida")
        let nBebida = filtCategoriaB.length
        let filtCategoriaH = lista.filter((item) => item.categoria === "higiene")
        let nHigiene = filtCategoriaH.length
        let filtCategoriaL = lista.filter((item) => item.categoria === "limpeza")
        let nLimpeza = filtCategoriaL.length
        visualiza(lista)
        console.log(`\nNúmero de itens da categoria Comida: ${nComida}\nNúmero de itens da categoria Bebida: ${nBebida}\nNúmero de itens da categoria Higiene: ${nHigiene}\nNúmero de itens da categoria Limpeza: ${nLimpeza}
                \n`)

}

function visualiza(array: any){
    let exiba : any[]= []    
    for(let i = 0; i < array.length; i++){
        let emoji: any
        array[i].status == true? emoji = "✅" : emoji = "❌"
        let compra = exiba.push({'Nome do item': array[i].nome, 'Quantidade em estoque': array[i].quantidade, 'Categoria': array[i].categoria, 'Situação': emoji})
    }
    console.table(exiba)
}
