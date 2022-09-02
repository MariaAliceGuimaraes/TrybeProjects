// Crie uma query que faça a inclusão de bacon no final da lista
// de ingredientes dos sanduíches Big Mac e Quarteirão com Queijo.
db.produtos.updateMany(
  { nome: { $in: ["Big Mac", "Quarteirão com Queijo"] } },
  { $addToSet: { ingredientes: "bacon" } },
);

// Crie uma query que retorne o nome e ingredientes de todos os documentos.
db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });
