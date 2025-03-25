# Verificação de Cartão

Este projeto permite verificar um cartão de crédito e cadastrar os dados de seu cartão.

## Tecnologias Utilizadas

- **Frontend**:
  - HTML5
  - CSS3
  - JavaScript
- **Backend**:
  - Node.js (com Express)
  - Sequelize 
  - MySQL

## Funcionalidades

- Cadastro de dados de cartão de crédito:
  - Nome no cartão
  - Número do cartão
  - Data de expiração (MM/AA)
  - CVV
- Validação de formulário com campos obrigatórios.
- Feedback para o usuário sobre o status do cadastro do cartão (sucesso ou erro).
- Redirecionamento para um link do YouTube após o cadastro bem-sucedido.

## Como Rodar Localmente

### 1. Clone o repositório:

```bash
git clone https://github.com/Viniciusulpicio/formulario-cartao.git
cd formulario-cartao
```

### 2. Instale as dependências do Backend (Node.js + Express):

Na pasta do projeto, instale as dependências do backend:

```bash
npm install
```

### 3. Configure o Banco de Dados:

- Crie um banco de dados MySQL (/src/config/backup/cartoes_db.sql) para armazenar os dados dos cartões.
- Ajuste as configurações de conexão com o banco de dados no arquivo de configuração do Sequelize no seu backend.

### 4. Inicie o Backend:

Para iniciar o servidor backend, execute:

```bash
npm start
```

Isso iniciará o servidor na porta `8080`.

### 5. Inicie o Frontend:

O frontend está na pasta `frontend`. Abra o arquivo `index.html` no seu navegador para visualizar a aplicação.

```bash
cd frontend
# Apenas abra o arquivo index.html no seu navegador
```

### 6. Teste a aplicação:

- Preencha o formulário com os dados do cartão e clique em "Verificar".
- O formulário enviará os dados para o backend, onde será processado e armazenado no banco de dados.
- Após um cadastro bem-sucedido, o usuário será redirecionado para um link do YouTube.

## Como Funciona

1. O usuário preenche o formulário com o nome, número, data de expiração e CVV do cartão.
2. O frontend envia os dados para o backend (API) via uma requisição HTTP.
3. O backend recebe os dados e os armazena no banco de dados.
4. Se o cadastro for bem-sucedido, o frontend exibe uma mensagem de sucesso e redireciona o usuário para um link do YouTube.


## Considerações Finais

Este é um projeto simples para aprendizado e demonstração. **Nunca armazene dados de cartões de crédito reais em um banco de dados sem seguir as práticas adequadas de segurança**, como criptografia, para proteger as informações sensíveis.
