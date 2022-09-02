db.voos.find({ "aeroportoDestino.pais": { $nin: ["EUROPA", "ÁSIA", "OCEANIA"] } }).count();
