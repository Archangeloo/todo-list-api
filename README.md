📌 To-do List API – Trabalho de Recuperação
📝 Descrição do Projeto
API REST simples para gerenciar uma lista de tarefas (To-do list), desenvolvida com Node.js e Express. Permite criar, listar, atualizar e excluir tarefas via JSON.

⚙️ Pré-requisitos
Node.js instalado (versão recomendada: 18+)
Postman para testar as rotas


📁 Instalação
1. Clone o repositório:
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
2. Instale as dependências:
npm install

🚀 Como iniciar o servidor:
npm start
O servidor será iniciado em: http://localhost:3000

🔁 Rotas da API
Método   |  Rota          |  Descrição
_________________________________________________________
GET      |  /tarefas      |  Lista todas as tarefas
POST     |  /tarefas      |  Cria uma nova tarefa
PUT      |  /tarefas/:id  |  Atualiza uma tarefa pelo ID
DELETE   |  /tarefas/:id  |  Remove uma tarefa pelo ID


📦 Exemplo de JSON para POST/PUT:

{
  "titulo": "Nova tarefa",
  "concluida": false
}
