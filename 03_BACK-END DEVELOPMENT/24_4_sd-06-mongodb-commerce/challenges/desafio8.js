// Crie uma query que faça a remoção do primeiro ingrediente no sanduíche Quarteirão com Queijo.
db.produtos.updateMany({ nome: "Quarteirão com Queijo" }, { $pop: { ingredientes: -1 } });

// Crie uma query que retorne o nome e ingredientes de todos os documentos.
db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });
