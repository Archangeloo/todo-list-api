import express from "express";
import tarefasRouter from "./routes/tarefas.js";

const app = express();
const PORT = 3000;

app.use(express.json());

// Usa as rotas de tarefas (prefixo /tarefas)
app.use("/tarefas", tarefasRouter);

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
