-- aqui criamos uma procedures que recebe como parâmetro o nome de uma pessoa artista e em retorno deve exibir as seguintes colunas artista e album
DELIMITER $$
CREATE PROCEDURE albuns_do_artista(
  IN artist_name VARCHAR(50))
BEGIN 
  SELECT art.nome AS 'artista', alb.nome AS 'album'
  FROM SpotifyClone.artista AS art
  INNER JOIN SpotifyClone.album AS alb ON alb.id_artista = art.id
  WHERE art.nome = artist_name
  ORDER BY album;
END $$
DELIMITER ;
