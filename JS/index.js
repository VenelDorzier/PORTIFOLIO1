const form = document.getElementById('form'); 
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');
const menssagem= document.getElementById('menssagem');


const formulário = document.querySelector("#form");

formulário.onsubmit = evento => {

     // Receber o valor do campo
    var nome = document.querySelector("#nome").value;
    console.log(nome);
// verificar se o campo esta vazio
    if(nome === ""){
        evento.preventDefault();  
    document.getElementById("msgAlerta").innerHTML = "<p style='color: #f00;'>Erro: Preenche o campo nome!</p>";
    return; 

    
}

 // Receber o valor do campo
 var email = document.querySelector("#email").value;
 console.log(email);
// verificar se o campo esta vazio
if(email === ""){
    evento.preventDefault();
    document.getElementById("msgAlerta").innerHTML = "<p style='color: #f00;'>Erro: Preenche o campo email!</p>";
    return; 

}

 // Receber o valor do campo
 var telefone = document.querySelector("#telefone").value;
 console.log(telefone);
// verificar se o campo esta vazio
if(telefone === ""){
    evento.preventDefault();
    document.getElementById("msgAlerta").innerHTML = "<p style='color: #f00;'>Erro: Preenche o campo telefone!</p>";
    return; 
}

 // Receber o valor do campo
 var menssagem = document.querySelector("#menssagem").value;
 console.log(menssagem);
// verificar se o campo esta vazio
if(menssagem === ""){
    evento.preventDefault();
    document.getElementById("msgAlerta").innerHTML = "<p style='color: #f00;'>Erro: Preenche o campo menssagem!</p>";
    return; 
}

}