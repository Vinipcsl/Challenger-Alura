function criptografarLetra(inputTexto){
   
   var text = inputTexto.value;
   var textoFinal = "";

   for(var i=0; i<text.length; i++){
      if (text[i] == "a"){
         textoFinal = textoFinal + "ai"
      }
      else if(text[i] == "e"){
         textoFinal = textoFinal + "enter"
      }
      else if (text[i] == "i"){
         textoFinal = textoFinal + "imes"
      }
      else if (text[i] == "o"){
         textoFinal = textoFinal + "ober"
      }
      else if (text[i] == "u"){
         textoFinal = textoFinal + "ufat"
      }
      else{
         textoFinal = textoFinal + text[i]
      }    

   }
   return textoFinal;
}

function descriptografarLetra(textoCriptografado) {
   var textoFinal = "";
   var i = 0;

   while (i < textoCriptografado.length) {
       if (textoCriptografado[i] == "a" && textoCriptografado[i + 1] == "i") {
           textoFinal += "a";
           i += 2; 
       } else if (textoCriptografado[i] == "e" && textoCriptografado[i + 1] == "n" && textoCriptografado[i + 2] == "t" && textoCriptografado[i + 3] == "e" && textoCriptografado[i + 4] == "r") {
           textoFinal += "e";
           i += 5; 
       } else if (textoCriptografado[i] == "i" && textoCriptografado[i + 1] == "m" && textoCriptografado[i + 2] == "e" && textoCriptografado[i + 3] == "s") {
           textoFinal += "i";
           i += 4; 
       } else if (textoCriptografado[i] == "o" && textoCriptografado[i + 1] == "b" && textoCriptografado[i + 2] == "e" && textoCriptografado[i + 3] == "r") {
           textoFinal += "o";
           i += 4; 
       } else if (textoCriptografado[i] == "u" && textoCriptografado[i + 1] == "f" && textoCriptografado[i + 2] == "a" && textoCriptografado[i + 3] == "t") {
           textoFinal += "u";
           i += 4; 
       } else {
           textoFinal += textoCriptografado[i];
           i++; 
       }
   }
   return textoFinal;
}

function criptografar() {
   const inputTexto = document.getElementById("textoInput");
   const textoCriptografado = criptografarLetra(inputTexto);
   const labelTexto = document.getElementById("labelResposta");
   labelTexto.textContent = textoCriptografado;

   var classeImagem = document.querySelector('.meio_imagem');

   if(classeImagem.style.display === 'block'){
    classeImagem.style.display = 'none';
   }
   else{
    classeImagem.style.display = 'none';
   }   
}

function descriptografar() {
   let inputTexto = document.getElementById("textoInput").value;
   const textodDesriptografado = descriptografarLetra(inputTexto.toLowerCase());
   const labelTexto = document.getElementById("labelResposta");

   labelTexto.textContent = textodDesriptografado;

   var classeImagem = document.querySelector('.meio_imagem');

  if(classeImagem.style.display === 'block'){
   classeImagem.style.display = 'none';
  }
  else{
   classeImagem.style.display = 'none';
  }
}

function copiarTexto(){

   const labelTexto = document.getElementById("labelResposta").innerHTML;

   navigator.clipboard.writeText (labelTexto).then(()=> { console.log("texto copiado")})
   .catch(erro =>{
      console.log("Deu erro!", erro);
   })

   alert("Texto copiado!");
  
   
}