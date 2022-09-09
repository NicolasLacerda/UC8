let pecas = ["suspensão","volante","bateria","escapamento","pneu"];

if (pecas.length > 5){
    console.log("Cadastro inválido, limite de peças atingido");
}else{
    console.log("Cadastro de peça concluído, o limite de peças não foi ultrapassado");
}

let pesoMaximo = 50;
let peso = 20;
let medida = "Kg";

if(peso < pesoMaximo){
    console.log(let = `Peso de ${peso}${medida} Permitido`);
}else{
    console.log("O peso máximo foi excedido")
}

let peca = "Velas de ignição";

if(peca.length > 6){
    console.log("Nomeclatura da peça muito extensa");
}else{
    console.log("Nomeclatura permitida");
}