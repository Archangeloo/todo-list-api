import { Router } from "express";

const router = Router();

let tarefas = [
  { id: 1, titulo: "Estudar Node.js", concluida: false },
  { id: 2, titulo: "Fazer exercícios de programação", concluida: true }
];

// GET /tarefas
router.get("/", (req, res) => {
  res.json(tarefas);
});

// POST /tarefas
router.post("/", (req, res) => {
  const novaTarefa = {
    id: tarefas.length + 1,
    titulo: req.body.titulo,
    concluida: false
  };
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
});

// PUT /tarefas/:id
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { titulo, concluida } = req.body;

  const tarefa = tarefas.find(t => t.id === parseInt(id));
  if (!tarefa) {
    return res.status(404).json({ erro: "Tarefa não encontrada" });
  }

  if (titulo !== undefined) tarefa.titulo = titulo;
  if (concluida !== undefined) tarefa.concluida = concluida;

  res.json(tarefa);
});

// DELETE /tarefas/:id
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = tarefas.findIndex(t => t.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ erro: "Tarefa não encontrada" });
  }

  const tarefaRemovida = tarefas.splice(index, 1);
  res.json({ mensagem: "Tarefa removida", tarefa: tarefaRemovida[0] });
});

export default router;
