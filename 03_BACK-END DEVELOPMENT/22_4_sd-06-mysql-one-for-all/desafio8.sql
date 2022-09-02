-- aqui criamos uma trigger que deve ser disparada sempre que uma pessoa usuária for excluída do banco de dados, refletindo essa exclusão em todas as tabelas que ela estiver
DELIMITER $$
CREATE TRIGGER trigger_usuario_delete
BEFORE DELETE ON SpotifyClone.usuario
FOR EACH ROW
BEGIN
  DELETE FROM SpotifyClone.seguindo_artistas WHERE id_usuario = OLD.id;
  DELETE FROM SpotifyClone.historico_de_reproducoes WHERE id_usuario = OLD.id;
END; $$
DELIMITER ;
