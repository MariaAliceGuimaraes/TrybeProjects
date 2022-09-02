// Usando a pipeline anterior que retorna o dia com mais
// viagens, determine qual estação tem o maior número de viagens
// nesse dia da semana.
// Exiba apenas o nome da estação e o total de viagens.

db.trips.aggregate([
  {
    $match: {
      $expr: { $eq: [{ $dayOfWeek: "$startTime" }, 5] },
    },
  },
  {
    $group: {
      _id: "$startStationName",
      total: { $sum: 1 },
    },
  },
  {
    $project: {
      _id: 0,
      nomeEstacao: "$_id",
      total: "$total",
    },
  },
  { $sort: { total: -1 } },
  { $limit: 1 },
]);
