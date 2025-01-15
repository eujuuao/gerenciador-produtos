import express from "express";
import { db } from "./db";

const router = express.Router();

//Listar os produtos 
router.get("/produtos", async (__, res) =>{
    const [rows] = await db.query("SELECT * FROM produtos");
    res.json(rows);
});

//Adicionar um produto 
router.post("/produtos", async (req, res) => {
    const { nome, categoria, preco, estoque } = req.body;
    await db.query("INSERT INTO produtos (nome, categoria, preco, estoque) VALUES (?, ?, ?, ?)", [nome, categoria, preco, estoque]);
    res.status(201).send("Produto adicionado!"); 
})

//Atualizar um produto 
router.put("/produtos/:id", async (req, res) => {
    const { id } = req.params;
    const { nome, categoria, preco, estoque } = req.body;
    await db.query("UPDATE produtos SET nome = ?, categoria = ?, preco = ?, estoque = ? WHERE id = ?", [nome, categoria, preco, estoque, id]);
    res.send("Produto atualizado!");
});

//Deletar um produto
router.delete("/produtos/:id", async (req, res) => {
    const { id } = req.params;
    await db.query("DELETE FROM produtor where id = ?", [id]);
    res.send("Produto deletado!");
});

export default router;