var add=document.querySelector("#adicionar-paciente");
add.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Cliquei caraio");
    
    /*pegar a parte de inserção de valores*/
    var form=document.querySelector("#form-adiciona");
    console.log(form);
    /*pegar valores do form*/
    var paciente=obterInfo(form);
    console.log(paciente);
    
    
    var erro=validaPaciente(paciente);
    if(erro.length>0){
        exibeMsgErro(erro);
        return;
    }
    
    adicionarPaciente(paciente);
    var ul=document.querySelector("#mensagem-erro");
    ul.innerHTML="";
    
    console.log(lista);
    form.reset();
    
    
});

function adicionarPaciente(paciente){
     var pacienteTr=criaTr(paciente);
    var lista=document.querySelector("#tabela-pacientes");
    lista.appendChild(pacienteTr);
}

function obterInfo(form){
    var paciente={
        nome:form.nome.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura:form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
    
}

function criaTr(paciente){
    /*criar tags*/
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    /*hierarquia das tags*/
    pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(criaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(criaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(criaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(criaTd(paciente.imc, "info-imc"));
    
    return(pacienteTr);
}

function criaTd(dado, classe){
    var td=document.createElement("td");
    td.textContent=dado;
    td.classList.add(classe);
    return(td);
    
}

function validaPaciente(paciente){
    var erro=[];
    if(!validaPeso(paciente.peso)){
       erro.push("Peso inválido ");
       }
    if(!validaAltura(paciente.altura)){
        erro.push("Altura inválida");
    }
    if(paciente.nome.length==0){
        erro.push("Nome não inserido");
    }
    if(paciente.gordura.length==0){
        erro.push("Gordura não inserida");
    }
    return erro;
}

function exibeMsgErro(erros){
    var ul=document.querySelector("#mensagem-erro");
    ul.innerHTML="";
    erros.forEach(function(erro){
        var li=document.createElement("li");
        li.textContent=erro;
        ul.appendChild(li);
    });
}
