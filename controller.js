const textoInput = document.getElementById('textoInput');
const botaoCriptografar = document.getElementById('botaoCriptografar');
const botaoDescriptografar = document.getElementById('botaoDescriptografar');
const output = document.getElementById('output');

const criptografar = (text) => {
	
    const criptografia = {
        e: "enter",
        i: "imes",
        a: "ai",
        o: "ober",
        u: "ufat"
    };

    let textoCriptografado = '';

    for (let i = 0; i<text.lenght; i++){
        const char = text[i];
        const substituir = criptografia[char] || char;
        textoCriptografado += substituir;
    }

	return textoCriptografado;
}

const descriptografar = (text) => {

    const descriptografia ={
        ai: "a",
        enter: "e",
        imes: "i",
        ober: "o",
        ufat: "u"
    };

    let textoDescriptografado = '';

    
    for (let i = 0; i<text.lenght; i++){
        const char = text[i];
        const substituir = descriptografia[char] || char;
        textoDescriptografado += substituir;
    }
    
    return textoDescriptografado;
}

encryptButton.addEventListener('click', () => {
	const textoCriptografado = criptografar(textInput.value);
	output.textContent = textoCriptografado;
});

decryptButton.addEventListener('click', () => {
	const textoDescriptografado = descriptografar(textInput.value);
	output.textContent = textoDescriptografado;
});