var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes=document.querySelectorAll(".paciente");

for(var c=0; c<pacientes.length; c++){
    console.log(pacientes[c]);
    var tdpeso=pacientes[c].querySelector(".info-peso");
    var tdaltura=pacientes[c].querySelector(".info-altura");
    var altura=tdaltura.textContent;
    var peso=tdpeso.textContent;
    
    console.log(peso);
    console.log(altura);
    console.log(imc);

    var Bpeso=validaPeso(peso);
    var Baltura=validaAltura(altura);
    if(!Bpeso){
        console.log("Peso inválido!");
        Bpeso=false;
        tdpeso.textContent="Peso invalido"
        pacientes[c].classList.add("paciente-invalido");
    }
    if(!Baltura){
        console.log("Altura inválida!");
        Baltura=false;
        tdaltura.textContent="Altura invalida";
        pacientes[c].classList.add("paciente-invalido");
    }
    if(Bpeso && Baltura){
        var imc=calculaImc(peso, altura);
        var tdimc=pacientes[c].querySelector(".info-imc");
        tdimc.textContent=imc;
    }
    
}

function calculaImc(peso, altura){
    return peso/(altura*altura);
}

function validaPeso(peso){
    if(peso >0 && peso<1000) return true;
    else return false;
}
function validaAltura(altura){
    if(altura>0 && altura<3.0) return true;
    else return false;
}