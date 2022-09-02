-- aqui criamos a funcao que retornara a qtdade de musicas no historico
DELIMITER $$
CREATE FUNCTION quantidade_musicas_no_historico(id INT)
RETURNS INT READS SQL DATA
BEGIN 
DECLARE quantidade_musicas_no_historico INT;
SELECT COUNT(hr.id_usuario)
FROM SpotifyClone.historico_de_reproducoes AS hr
WHERE hr.id_usuario = id
INTO quantidade_musicas_no_historico;
RETURN quantidade_musicas_no_historico;
END $$
DELIMITER ;
