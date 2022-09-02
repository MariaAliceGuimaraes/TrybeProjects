// colocar query do MongoDB
// 6 - Permissões do usuário admin
// Será validado que o projeto tem um arquivo de seed,
// com um comando para inserir um usuário root e verifico que é possivel fazer login

db.users.insertOne({ name: 'admin', email: 'root@email.com', password: 'admin', role: 'admin' });
