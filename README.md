# 📝 API de Tarefas (CRUD)

Esta é uma API REST simples para gerenciamento de tarefas (CRUD), desenvolvida com **Node.js** e **Express**. Permite criar, listar, atualizar e deletar tarefas, armazenadas em memória.

---

## 🛠️ Pré-requisitos

Antes de começar, você precisa ter instalado:

* **Node.js** (versão LTS recomendada)
* **npm** (vem junto com o Node.js)
* **Postman** ou **Insomnia** (para testar as requisições)

---

## ▶️ Como Rodar o Projeto

1. Clone ou baixe o repositório:

```bash
git clone https://github.com/Archangeloo/todo-list-api.git
cd ToDo_API
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor:

```bash
npm start
```

O servidor ficará disponível em: **[http://localhost:3000](http://localhost:3000)**

💡 Dica: se quiser que o servidor reinicie automaticamente a cada alteração de código, use:

```bash
npm run dev
```

*(É necessário instalar o nodemon com `npm install --save-dev nodemon`)*

---

## 🔗 Rotas da API

| Método | Rota          | Descrição                     |
| ------ | ------------- | ----------------------------- |
| GET    | /tarefas      | Lista todas as tarefas        |
| POST   | /tarefas      | Cria uma nova tarefa          |
| PUT    | /tarefas/\:id | Atualiza uma tarefa existente |
| DELETE | /tarefas/\:id | Remove uma tarefa existente   |

---

## 📑 Exemplos de JSON

### Criar uma tarefa (POST /tarefas)

**Body:**

```json
{
  "titulo": "Estudar Node.js"
}
```

---

### Atualizar uma tarefa (PUT /tarefas/1)

**Body:**

```json
{
  "titulo": "Estudar Express",
  "concluida": true
}
```

---

### Deletar uma tarefa (DELETE /tarefas/1)

**Resposta:**

```json
{
  "mensagem": "Tarefa removida",
  "tarefa": {
    "id": 1,
    "titulo": "Estudar Express",
    "concluida": true
  }
}
```

---

## 🧪 Testando no Postman

1. Abra o Postman e crie uma nova Collection chamada **API de Tarefas**.
2. Crie as requisições:

   * GET `http://localhost:3000/tarefas`
   * POST `http://localhost:3000/tarefas` (Body > raw > JSON)
   * PUT `http://localhost:3000/tarefas/1` (Body > raw > JSON)
   * DELETE `http://localhost:3000/tarefas/1`
3. Clique em **Send** para enviar as requisições.
---

## 📂 Estrutura do Projeto

```
ToDo_API/
│
├─ index.js           # Arquivo principal
├─ package.json
│
├─ routes/            # Rotas da aplicação
│   └─ tarefas.js
│
├─ prints/            # Prints de testes no Postman
└─ node_modules/
```

---

## ℹ️ Observação

Esta API armazena as tarefas **em memória** (array). Ao reiniciar o servidor, os dados voltam ao estado inicial.
