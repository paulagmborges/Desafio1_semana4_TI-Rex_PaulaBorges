# Desafio1_semana4_TI-Rex_PaulaBorges

## 🎯 Descrição do Projeto

Este projeto foi desenvolvido como parte do **Desafio 1 - Semana 04** da trilha do PB **Front-end (React) da Compass.Uol**, onde o objetivo foi recriar uma ferramenta de produtividade com três páginas: **Home**, **Login** e **Kanban**. O foco principal foi a fidelidade ao design original do Figma e a implementação das funcionalidades descritas no desafio:

### 1. **Home**
- Contém um formulário de inscrição com campos para nome e e-mail.
- Validações implementadas com JavaScript:
  - O campo nome não pode estar vazio.
  - O campo e-mail deve conter um formato válido.
- As informações são armazenadas no `LocalStorage` se os requisitos forem atendidos.

### 2. **Login**
- Possui um formulário com campos de e-mail e senha.
- Validações implementadas com JavaScript:
  - O campo e-mail deve conter um formato válido.
  - O campo senha não pode estar vazio.
- Ao atender aos requisitos, redireciona o usuário para a página **Kanban**.

### 3. **Kanban**
- Página com três colunas: "To Do", "In Progress" e "Complete".
- Estrutura visual fiel ao design do Figma.

## 🛠️ Tecnologias Utilizadas

- **HTML**: Estrutura do conteúdo com tags semânticas.
- **CSS**: Estilização com foco em fidelidade ao design e responsividade.
- **JavaScript**: Validações de formulários e interações.

## 📂 Estrutura do Projeto

```plaintext
/
├── home.html            # Página inicial (Home)
├── login.html           # Página de Login
├── kanban.html          # Página do Kanban
├── css/
│   ├── home.css         # Arquivo principal de estilos
|   ├── login.css        # Arquivo principal de estilos
|   ├── kanban.css       # Arquivo principal de estilos
├── js/
│   ├── home.js          # Scripts gerais
│   ├── login.js         # Validações de formulários
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
   git clonehttps://github.com/paulagmborges/Desafio1_semana4_TI-Rex_PaulaBorges
   ```

2. **Abra o Projeto no Navegador**:
   - Navegue até o diretório do projeto.
   - Abra o arquivo `home.html` no navegador.



## 👩‍💻 Autora

Desenvolvido por Paula Borges.

## 📜 Licença

Este projeto é apenas para fins educacionais e não possui licença oficial.