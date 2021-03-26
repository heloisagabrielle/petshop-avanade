const nomePetShop = "PETSHOP AVANADE";

let pets = [{
    nome: "Jade",
    tipo: "cachorro",
    idade: 5,
    raca: "SRD",
    peso: 19,
    tutor: "Heloisa Gabrielle",
    contato: "(81) 99999-9999",
    vacinado: false,
    servicos: ["banho","tosa"]
}, 
{
    nome: "Loky",
    tipo: "gato",
    idade: 1,
    raca: "SRD",
    peso: 1,
    tutor: "Helena",
    contato: "(81) 90000-9999",
    vacinado: false,
    servicos: ["banho","tosa"]
},
{
    nome: "Thor",
    tipo: "gato",
    idade: 1,
    raca: "SRD",
    peso: 1,
    tutor: "Lívia Gabrielle",
    contato: "(81) 98888-8888",
    vacinado: false,
    servicos: ["banho","tosa"]
}
]

//adicionar novo cliente
const adicionarCliente = (nome,tipo,idade,raca,peso,tutor,contato,vacinado,servicos=[]) => {
    pets.push({nome:nome,tipo:tipo,idade:idade,raca:raca,peso:peso,tutor:tutor,contato:contato,vacinado:vacinado,servicos:servicos});
}

//Listar todos os pets
const listarPets = () => {
    for (let pet of pets){
        console.log(pet);
    }
}

//Listar tudo sobre um pet
const listarUmPet = (nome) => {
    for (let pet of pets){
        if(pet.nome == nome){
            console.log(`Nome: ${pet.nome}`);
            console.log(`Tipo: ${pet.tipo}`);
            console.log(`Idade: ${pet.idade}`);
            console.log(`Raca: ${pet.raca}`);
            console.log(`Peso: ${pet.peso}`);
            console.log(`Tutor: ${pet.tutor}`);
            console.log(`Contato: ${pet.contato}`);
            console.log(`Vacinado: ${pet.vacinado}`);
            console.log(`Serviços: ${pet.servicos}`);
        }
    }
}

//Vacinar um pet específico
const vacinarUmPet = (nome) => {
    for (let pet of pets){
        if(pet.nome == nome){
            pet.vacinado = true;
            console.log(`O pet ${pet.nome} está vacinado(a)`);
        }
    }
}

//Vacinar todos os pets
const campanhaVacina = () => {
    var petsVacinados = 0;
    for (let pet of pets){
        if(pet.vacinado == false){
            pet.vacinado = true;
            petsVacinados++;
        }
    }
    console.log(`O número de pets vacinados é ${petsVacinados}`);
}

//Função dar banho no pet
const darBanhoPet = (nome) => {
    for(let pet of pets){
        if(pet.nome == nome){
            var data = new Date();
            pet.servicos.push("banho");
            console.log(`O pet ${pet.nome} realisou ${pet.servicos} em ${data}`);
        }
    }
}

//Função cortar unhas do pet
const cortarUnhasPet = (nome) => {
    for(let pet of pets){
        if(pet.nome == nome){
            pet.servicos.push("corte unhas");
            console.log(`O pet ${pet.nome} está de unhas cortadas!`);
        }
    }
}

//Função tosar pet
const tosarPet = (nome) => {
    for(let pet of pets){
        if(pet.nome == nome){
            pet.servicos.push("tosa");
            console.log(`O pet ${pet.nome} está de corte novo!`);
        }
    }
}

//abaixo chamo as funções que desejo usar

//listarPets();
//listarUmPet("Jade");
//vacinarUmPet("Jade");
//campanhaVacina();
//tosarPet("Jade");
//cortarUnhasPet("Jade");
//darBanhoPet("Jade");
adicionarCliente("Elsa","Cachorro",5,"Poodle","10","Lúcio","(81)90000-0000",true,["banho","tosa"]);
darBanhoPet("Elsa"); //serviço adicionado não está como array precisa ajustar o adicionarCliente()
listarUmPet("Elsa");

