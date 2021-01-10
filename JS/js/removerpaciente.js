var tabela=document.querySelector("table");
tabela.addEventListener("dblclick", function(){
    //var alvoEvento=event.target;
    var paidoAlvo=event.target.parentNode;
    //paidoAlvo.remove();
    event.target.parentNode.classList.add("fadeout");
    setTimeout(function(){
        paidoAlvo.remove();    
    }, 500);
    
    
});

/*var pacientes=document.querySelectorAll(".paciente");
console.log(pacientes);
pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        console.log("clicado");
        this.remove();
    });
});*/

