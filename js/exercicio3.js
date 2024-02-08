//03 - crie uma função que exiba uma mensagem no console
function saudacao(){
   let verificaTurno = "Bom Tarde";
   if(verificaTurno == "Bom dia"){
     console.log("Bom dia:");                         
   }else if(verificaTurno == "Boa Tarde"){
       console.log("Boa Tarde:");                     
   }else if(verificaTurno == "Boa Noite"){
      console.log("Boa Noite:");                      
   }
   return verificaTurno;
}

console.log(saudacao());

