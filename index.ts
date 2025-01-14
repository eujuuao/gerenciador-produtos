// REPRESENTAÇÃO DE UM PRODUTO NO SISTEMA 

interface Produto {
    id: number;
    nome: string;
    categoria: string;
    preco: number;
    estoque: number;
}

// Dados iniciais (produtos disponiveis)

const produtos: Produto[] = [
    {id: 1, nome: "Camiseta", categoria: "Roupas", preco: 50, estoque: 20},
    {id: 2, nome: "Calça Jeans", categoria: "Roupas", preco: 120, estoque: 158},
    {id: 3, nome: "Notebook", categoria: "Eletrônicos", preco: 3000, estoque: 5},
    {id: 4, nome: "Smartphone", categoria: "Eletrônicos", preco: 2000, estoque: 10},
    {id: 5, nome: "Tênis", categoria: "Calçados", preco: 200, estoque: 30},
];

// Aplica um desconto de 10% em todos os produtos 

const produtosComDesconto = produtos.map(produto => ({...produto,
    preco: produto.preco*0.9, //10%  de desconto
}));

console.log("Produtos com desconto:", produtosComDesconto);

// Filtrar produtos de uma categoria "Eletrônicos" 

const Eletrônicos = produtos.filter(produto => produto.categoria === "Eletrônicos");

console.log("Produtos eletrônicos:", Eletrônicos);

// Calcular o valor total de todos os produtos em estoque 

const valorTotalEstoque = produtos.reduce((total,produto) => { 
    return total + produto.preco * produto.estoque;
}, 0);

console.log("Valor total do estoque:", valorTotalEstoque);

//Exibir os produtos no console

produtos.forEach(produto => {
    console.log(`Produto: ${produto.nome}, Preço: R$ ${produto.preco}`);
});

// verificar se ha algum produto com estoque zerado 

const algumProdutoEmFalta = produtos.some(produto => produto.estoque === 0);

console.log("Algum produto em falta?", algumProdutoEmFalta);

// verificar se todos os produtos possuem estoque maior que zero

const todosEstaoEmEstoque = produtos.every(produto => produto.estoque > 0);

console.log("Todos produtos estão em estoque", todosEstaoEmEstoque);

// Encontrar o primeiro produto chamado "Tênis" 

const produtoTenis = produtos.find(produto => produto.nome === "Tênis");

console.log("Produoto encontrado:", produtoTenis)

// ordernar os produtos pelo preço (do menor para o maior)

const ordernarProdutosPorPreco = produtos.slice().sort((a,b) => a.preco - b.preco);

console.log("Produtos ordenados por preco:" , ordernarProdutosPorPreco);