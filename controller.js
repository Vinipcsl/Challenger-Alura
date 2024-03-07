var botaoCriptografar = document.querySelector(".botoes__botaoCriptografar");
var botaoDescriptografar = document.querySelector(".botoes__botaoDescriptografar");
var resultado = document.querySelector(".meio_meio_texto");
var textoInput = document.querySelector(".apresentacao__conteudo_criptografia_input");
var imagem = document.querySelector(".meio_imagem");

botaoCriptografar.onclick = criptografar();
botaoDescriptografar.onclick = descriptografar();

function criptografar(){
   var textoarea = recuperarTexto();
   resultado.textContent = criptografarTexto(textoarea);
}

function descriptografar(){
   var textoarea = recuperarTexto();
   resultado.textContent = descriptografarTexto(textoarea);
}

function recuperarTexto(){
   var textoarea = document.querySelector(".apresentacao__conteudo_criptografia_input");
   return textoarea.value;
}

function criptografarTexto(texto){

   var text = texto;
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
      return textoFinal;

   }
   
}

function criptografarTexto(texto){

   var text = texto;
   var textoFinal = "";

   for(var i=0; i<text.length; i++){
      if (text[i] == "a"){
         textoFinal = textoFinal + "ai"
         i = i+1
      }
      else if(text[i] == "e"){
         textoFinal = textoFinal + "enter"
         i = i+4
      }
      else if (text[i] == "i"){
         textoFinal = textoFinal + "imes"
         i = i+3
      }
      else if (text[i] == "o"){
         textoFinal = textoFinal + "ober"
         i = i+3
      }
      else if (text[i] == "u"){
         textoFinal = textoFinal + "ufat"
         i = i+3
      }
      else{
         textoFinal = textoFinal + text[i]
      }
      return textoFinal;

   }
}



const btnCopiar = document.querySelector(".botaoCopiar");
 btnCopiar.addEventListener("click", copiar = () =>{
   var conteudo = document.querySelector(".meio_meio_texto").textContent;
   navigator.clipboard.writeText(conteudo);
   
 });




/*

function criptografarLetra(inputTexto){
   const cripto ={
      a: "ai",
      e: "enter",
      i: "imes",
      o: "ober",
      u: "ufat"
   };

   let textoCriptografado = '';

   for (let i = 0; i<inputTexto.length; i++){
      const char = inputTexto[i];
      const substituir = cripto[char] || char;
      textoCriptografado += substituir + ' ';
  }

  return textoCriptografado;
}

function descriptografarLetra(inputTexto){
   const descripto ={
      ai: "a",
      enter: "e",
      imes: "i",
      ober: "o",
      ufat: "u"
   };

   const palavrasCriptografadas = inputTexto.split(' ');

   let textoDescriptografado = '';

   for (let i = 0; i < palavrasCriptografadas.length; i++) {
       const palavraCriptografada = palavrasCriptografadas[i];
       const palavraDescriptografada = descripto[palavraCriptografada] || palavraCriptografada;
       textoDescriptografado += palavraDescriptografada;
   }

   return textoDescriptografado.trim();
}


function criptografar() {
   const inputTexto = document.getElementById("textoInput").value;
   const textoCriptografado = criptografarLetra(inputTexto.toLowerCase());
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
   classeImagem.style.display = 'none';
  }
}
*/