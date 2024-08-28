function encryptText() {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    
    updateRightContent(encryptedText);
}

function decryptText() {
    const inputText = document.getElementById('inputText').value;
    const decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
    updateRightContent(decryptedText);
}

function updateRightContent(text) {
    const rightContent = document.getElementById('rightContent');
    rightContent.innerHTML = `
        <textarea id="resultText" readonly>${text}</textarea>
        <button onclick="copyText()">Copiar Texto</button>
    `;
}

function copyText() {
    const resultText = document.getElementById('resultText');
    resultText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}
