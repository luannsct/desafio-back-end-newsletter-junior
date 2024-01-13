
# Desafio: Newletter mensagens

Olá seja muito bem-vindo ao projeto, ele foi desenvolvido em Javascript usando ExpressJS;


## Rodando localmente

Clone o projeto

```bash
  git clone git@github.com:luannsct/desafio-back-end-newsletter-junior.git
```

Entre no diretório do projeto

```bash
  cd desafio-back-end-newsletter-junior
```

Instale as dependências

```bash
  npm install
  npm install -D nodemon
```

Inicie o servidor

```bash
  npm run dev
```

Inicie o projeto em.\
[http://localhost:3000](http://localhost:3000) para ver no **insomnia** ou **postman**.


## Uso/Exemplos

[localhost:3000/update](localhost:3000/update) rota para atualizar status das mensagen
### Request /Update
É esperado o envio no body da requisição a seguinte estrutura:
```bash
  {
    "id":number,
    "status":string
  }
```
### Response /Update
**200** - **Success** - Status atualizado com sucesso! 
```bash
  {
    "id": number,
    "phone": string,
    "message": string,
    "status": string
  }
```
**400** - **Bad Request** será apresentado em dois casos. 
- 1º ID não é um número com a seguinte mensagem
```bash
  {
    message:`Oops... O id ${id}. Precisa ser um número.`
  }
```
- 2º O status enviado não é válido com a seguinte mensagem:
```bash
  {
    message:`Oops... Status enviado inválido.`
  }
```
**404** - **Not Found** - O id informado não existe com a seguinte mensagem:
```bash
  {
    message:`Oops... Esse id: ${id} não existe, favor verificar.`
  }
```
**500** - **Internal server error** - Um erro genérico interno com a seguinte mensagem:
```bash
  {
    message:`Erro interno!`
  }
```

[localhost:3000/reports](localhost:3000/reports) rota para obter relatorio
### Request /Reports
É esperado o envio no body da requisição a seguinte estrutura:
```bash
  {
    "status":string
  }
```
### Response /Reports
**200** - **Success** - Status atualizado com sucesso! 
```bash
  [
  {
    "id": number,
    "phone": string,
    "message": string,
    "status": string
  },
  {    
    "id": number,
    "phone": string,
    "message": string,
    "status": string
  }
  ]
```
**400** - **Bad Request** - O status enviado não é válido com a seguinte mensagem:
```bash
  {
    message:`Oops... Status enviado inválido.`
  }
```
**404** - **Not Found** - Nenhum registro encontrado com o status informado
```bash
  {
    message:`Nenhuma mensagem encontrada com o status informado.`
  }
```
**500** - **Internal server error** - Um erro genérico interno com a seguinte mensagem:
```bash
  {
    message:`Erro interno!`
  }
```

[localhost:3000/insert](localhost:3000/insert) rota para inserir mensagens com status (opcional)
### Request /Insert
É esperado o envio no body da requisição a seguinte estrutura:
```bash
  {
    "phone":string,
    "message":string,
    "status":string - (opcional)
  }
```
### Response /Insert
**200** - **Success** - Registro salvo com sucesso, caso o status não seja enviado será registrado com **null**! 
```bash
  {
    "id": number,
    "phone": string,
    "message": string,
    "status": string || null
  }
```
**400** - **Bad Request** será apresentado em dois casos. 
- 1º ID não é um número com a seguinte mensagem
```bash
  {
    message:`Oops... Os campos Phone e MEssage são obrigatórios`
  }
```
- 2º O status enviado não é válido com a seguinte mensagem:
```bash
  {
    message:`Oops... Status enviado inválido.`
  }
```

**500** - **Internal server error** - Um erro genérico interno com a seguinte mensagem:
```bash
  {
    message:`Erro interno!`
  }
```


## Stack utilizada

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
---
**SQL**

![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

## Deploy

e o Deploy do BackEnd está rodando na [Vercel](https://desafio-backend-theta.vercel.app/)

