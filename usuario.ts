import { adicionaItem } from "./function"; 
import { removeItem } from "./function";
import { listaItens } from "./function";
import { editaItem } from "./function";
import { marcarStatus } from "./function";
import { resumeLista } from "./function";


let cont : number = 0
while(cont == 0){
    console.log(`
        ----- Lista de Compras -----
        1 - Para adicionar
        2 - Para listar
        3 - Para remover
        4 - Para editar
        5 - Para marcar como comprado ou não
        6 - Para resumir
        7 - Para encerrar 
        `)

    let funcao : number = Number(prompt("Digite o número de acordo com a função escolhida:"))
  
    switch (funcao) {
        case 1:
            adicionaItem()
            break;
        case 2:
            listaItens()
            break;
        case 3:
            removeItem()
            break;
        case 4:
            editaItem()
            break;
        case 5:
            marcarStatus()
            break;
        case 6:
            resumeLista()
            break;
        case 7:
            cont = 10;
    }
    
}
