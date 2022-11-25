function validar(){

    let nome = document.forms['form']['nome'].value;
    let email = document.forms['form']['email'].value;
    let telefone = document.forms['form']['telefone'].value;
    let menssagem = document.forms['form']['menssagem'].value;

    if(nome === "" ){
        alert('Preenche o campo nome.');
        document.getElementById('erro').innerHTML = "<P style= 'color: #f00;'>Erro: Preenche o campo nome!</P>";
        return false;
    }

    if(email === ""){
        alert('Preenche o campo email.');
        document.getElementById('erro').innerHTML ="<p style='color: #f00;'>Erro: Preenche o campo email!</p>"; 
        return false;
 
    } 
        if(telefone === ""){
            alert('Preenche o campo telefone.');
            document.getElementById('erro').innerHTML = "<p style='color: #f00;'>Erro: Preenche o campo telefone!</p>";
            return false; 
        }

        if(menssagem === ""){
            alert('Preenche o campo menssagem.');
            document.getElementById('erro').innerHTML = "<p style='color: #f00;'>Erro: Preenche o campo menssagem!</p>";
            return false;
        } 

}

