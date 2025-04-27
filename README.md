Claro! Aqui está um modelo de README para o seu projeto:

---

# Projeto de Formulário Simples

Este é um projeto simples em HTML e JavaScript, que contém um formulário para selecionar o gênero, digitar o nome e a idade. O formulário só aparece quando o botão "Mostrar Formulário" é clicado.

## Funcionalidades

- **Botão para Mostrar Formulário**: O formulário é inicialmente oculto e só aparece quando o usuário clica no botão.
- **Campos do Formulário**:
  - Nome: Campo para o usuário digitar seu nome.
  - Idade: Campo para o usuário digitar sua idade.
  - Gênero: Campo de seleção com opções para o usuário escolher seu gênero (Masculino, Feminino, Outro).
  
## Como rodar

1. Clone este repositório ou baixe os arquivos.
2. Abra o arquivo `index.html` no seu navegador.

## Estrutura do Projeto

```
/projeto
  ├── index.html
  └── script.js
```

## Descrição dos Arquivos

- **index.html**: Contém a estrutura básica do HTML com um botão para mostrar o formulário e os campos necessários para o usuário preencher.
- **script.js**: Responsável por exibir o formulário quando o botão é clicado.

## Exemplo de Código

**index.html**

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário Simples</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <button id="showFormBtn">Mostrar Formulário</button>
    
    <div id="formContainer" style="display:none;">
        <form id="userForm">
            <label for="name">Nome:</label>
            <input type="text" id="name" name="name" required>
            
            <label for="age">Idade:</label>
            <input type="number" id="age" name="age" required>
            
            <label for="gender">Gênero:</label>
            <select id="gender" name="gender" required>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro</option>
            </select>
        </form>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

**script.js**

```javascript
document.getElementById("showFormBtn").addEventListener("click", function() {
    var formContainer = document.getElementById("formContainer");
    if (formContainer.style.display === "none") {
        formContainer.style.display = "block";
    } else {
        formContainer.style.display = "none";
    }
});
```

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
