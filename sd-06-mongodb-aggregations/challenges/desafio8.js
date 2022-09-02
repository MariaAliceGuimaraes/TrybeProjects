// Liste todas as parcerias da coleção air_alliances,
// que voam rotas com um Boing 747 ou um Airbus A380 ,
// para descobrir qual delas tem o maior número de rotas
// com esses aviões.
// No campo airplane, na coleção air_routes:

db.air_alliances.aggregate([
  {
    $unwind: "$airlines",
  },
  {
    $lookup: {
      from: "air_routes",
      let: { airline_name: "$airlines" },
      pipeline: [
        {
          $match: {
            $and: [
              { $expr: { $eq: ["$airline.name", "$$airline_name"] } },
              { airplane: { $in: ["747", "380"] } },
            ],
          },
        },
      ],
      as: "dados_rota",
    },
  },
  {
    $addFields: {
      total: { $size: "$dados_rota" },
    },
  },
  {
    $group: {
      _id: "$name",
      totalRotas: { $sum: "$total" },
    },
  },
  {
    $project: { _id: 1, totalRotas: 1 },
  },
  {
    $sort: { totalRotas: -1 },
  },
  {
    $limit: 1,
  },
]);
