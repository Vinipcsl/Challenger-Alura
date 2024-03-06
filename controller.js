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
       textoCriptografado += substituir;
   }

   return textoCriptografado;
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

