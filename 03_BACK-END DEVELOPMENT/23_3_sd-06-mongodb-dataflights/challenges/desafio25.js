db.voos.deleteMany({ "empresa.nome": "AZUL", litrosCombustivel: { $lte: 400 } }).count();
