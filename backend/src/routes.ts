import express from "express";
import { db } from "./db";

const router = express.Router();

//Listar os produtos 
router.get("/produtos", async (__, res) =>{
    const [rows] = await db.query("SELECT * FROM produtos");
    res.json(rows);
});

//Adicionar um produto 
router.post("/produtos", async (_,res) => {
    const { nome, categoria, preco, estoque } = req.body;
    await db.query("INSERT INTO produtos (nome, categoria, preco, estoque) VALUES (?, ?, ?, ?)", [nome, categoria, preco, estoque]);
    res.status(201).send("Produto adicionado!"); 
})