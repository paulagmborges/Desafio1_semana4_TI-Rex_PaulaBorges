# Desafio1_semana4_TI-Rex_PaulaBorges

## 🎯 Descrição do Projeto

Este projeto foi desenvolvido para o **Desafio 1 - Semana 04** da trilha do PB **Front-end (React) da Compass.Uol**, onde o objetivo foi recriar uma ferramenta de produtividade com três páginas: **Home**, **Login** e **Kanban**. O foco principal foi a fidelidade ao design original do Figma e a implementação das funcionalidades descritas abaixo no desafio:

### 1. **Home**
- Contém um formulário de inscrição com campos para nome e e-mail.
- Validações implementadas com JavaScript:
  - O campo nome não pode estar vazio.
  - O campo e-mail deve conter um formato válido.
- As informações são armazenadas no `LocalStorage` se os requisitos forem atendidos.
- Ao clicar no botão Login deve ser redirecionado para a página de Login.


### 2. **Login**
- Possui um formulário com campos de e-mail e senha.
- Validações implementadas com JavaScript:
  - O campo e-mail deve conter um formato válido.
  - O campo senha não pode estar vazio.
  - O erro da validação deve ser exibido na tela.
- Ao atender aos requisitos, redireciona o usuário para a página **Kanban**.
- A página nã deve possuir scroll

### 3. **Kanban**
- Página com três colunas: "To Do", "In Progress" e "Complete".
- Estrutura visual fiel ao design do Figma.
  
### 4. **Requisitos em todas as páginas**
- Utilizar tags semânticas do HTML.
- No footer adicionar corretamente o link nos icones para as redes sociais.
- Commits pelo Conventional Commits.
  
### 5. **Requisitos opcionais**
- Aplicar responsividade
- Aplicar efeitos Hover.
-  Mensagem de confirmação ao enviar os dados do formulário corretamente.


## 🛠️ Tecnologias Utilizadas

- **HTML**: Estrutura do conteúdo com tags semânticas.
- **CSS**: Estilização com foco em fidelidade ao design e responsividade.
- **JavaScript**: Validações de formulários e interações.

## 📂 Estrutura do Projeto

```plaintext

├── home.html            # Página inicial (Home)
├── login.html           # Página de Login
├── kanban.html          # Página do Kanban
├── css/
│   ├── home.css         # Arquivo principal de estilos da págna Home
|   ├── login.css        # Arquivo principal de estilos da página Login
|   ├── kanban.css       # Arquivo principal de estilos da página Kanban
├── js/
│   ├── home.js          # Validação do formulário da página Home
│   ├── login.js         # Validação do formulário da página Login
├── img/                 # Imagens do projeto
└── README.md            # Documentação do projeto
```

## 📝 Funcionalidades

### Home
- **Validação de Formulário**: Validação do campo nome e e-mail com mensagens de erro exibidas dinamicamente.
- **Armazenamento**: Dados salvos no `LocalStorage` após validação bem-sucedida.

### Login
- **Validação de Formulário**: Verifica se o e-mail é válido e se a senha não está vazia.
- **Redirecionamento**: Redireciona para a página **Kanban** após validação bem-sucedida.

### Kanban
- Estrutura estática com colunas "To Do", "In Progress" e "Complete".
- Design fiel ao Figma fornecido.

## 🚀 Como Executar o Projeto

1. **Clone o Repositório**:
   
   ```
   git clone: https://github.com/paulagmborges/Desafio1_semana4_TI-Rex_PaulaBorges
   ```

2. **Abra o Projeto no Navegador**:
   - Navegue até o diretório do projeto.
   - Abra o arquivo `home.html` no navegador.

<br>

### 👩‍💻 Desenvolvido por Paula Borges.
