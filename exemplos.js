let nomes = ['Heloisa','Lívia','Gabriel','Helena']

nomes.push('Arthur');

function listarNomes(){
    for(let nome of nomes){
        console.log(`${nome}`)
    }
}

nomes.pop();
listarPets();
