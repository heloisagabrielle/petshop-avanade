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
    serviços: ["banho","tosa"]
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
    serviços: ["banho","tosa"]
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
    serviços: ["banho","tosa"]
}
];

const listarPets = () => {
    for (let pet of pets){
        console.log(`O nome é: ${pet.nome}`);
    }
}

//listarPets();

/* 
const vacinarPets = () => {
    for (let pet of pets){
        pet.vacinado = "true";
        console.log(`O pet ${pet.nome} está vacinado`);
    }
}*/

const vacinarPets = (nome) => {
    for (let pet of pets){
        if(pet.nome == nome){
            pet.vacinado = true;
            console.log(`O pet ${pet.nome} está vacinado(a)`);
        }
    }
}

vacinarPets("Jade");
