// A partir da coleção trips, determine o menor e
// o maior ano de nascimento.
// Guarde essa informação, você precisará dela
// mais tarde.

// Não considere documentos com valores vazios ("")
// ou em que o campo não existe!

// Para este desafio utilize o operador $toInt para
// converter de string para valor inteiro.

db.trips.aggregate([
  {
    $match: {
      $and: [
        { birthYear: { $exists: true } },
        { birthYear: { $ne: "" } },
      ],
    },
  },
  {
    $addFields: {
      convertedYear: { $toInt: "$birthYear" },
    },
  },
  {
    $group: {
      _id: null,
      maiorAnoNascimento: { $max: "$convertedYear" },
      menorAnoNascimento: { $min: "$convertedYear" },
    },
  },
  {
    $project: { _id: 0, maiorAnoNascimento: 1, menorAnoNascimento: 1 },
  },
  {
    $sort: { maiorAnoNascimento: -1, menorAnoNascimento: 1 },
  },
  {
    $limit: 1,
  },
]);
