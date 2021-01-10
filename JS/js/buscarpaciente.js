var botao=document.querySelector("#buscar-paciente");
botao.addEventListener("click", function(){
   console.log("buscando");
    var erro=document.querySelector("#erro-ajax");
    var xhr= new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
        if(xhr.status==200){
            var pacientes=JSON.parse(xhr.responseText); 
            console.log(pacientes);
            erro.classList.add("invisivel");
            pacientes.forEach(function(paciente){
               adicionarPaciente(paciente);
            });
        } else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            
            erro.classList.remove("invisivel");
        }
                      
    });
    xhr.send();
});