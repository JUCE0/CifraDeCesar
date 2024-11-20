function cifraDeCesar() {
    // Obtém os valores inseridos pelo usuário
    const texto = document.getElementById("texto").value;
    const deslocamento = parseInt(document.getElementById("deslocamento").value);

    // Valida o deslocamento
    if (isNaN(deslocamento)) {
      document.getElementById("resultado").textContent = "Por favor, insira um número válido para o deslocamento.";
      return;
    }

    let resultado = "";

    // Aplica a cifra
    for (let i = 0; i < texto.length; i++) {
      let char = texto[i];

      // Caso seja uma letra maiúscula
      if (char >= 'A' && char <= 'Z') {
        let novaLetra = String.fromCharCode(((char.charCodeAt(0) - 65 + deslocamento) % 26) + 65);
        resultado += novaLetra;
      }
      // Caso seja uma letra minúscula
      else if (char >= 'a' && char <= 'z') {
        let novaLetra = String.fromCharCode(((char.charCodeAt(0) - 97 + deslocamento) % 26) + 97);
        resultado += novaLetra;
      }
      // Caso não seja uma letra (mantém o caractere original)
      else {
        resultado += char;
      }
    }

    // Mostra o resultado
    document.getElementById("resultado").textContent = resultado;
  }
