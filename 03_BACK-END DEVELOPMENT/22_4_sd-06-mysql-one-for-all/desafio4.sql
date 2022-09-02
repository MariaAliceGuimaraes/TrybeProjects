-- aqui criamos uma view uma view com as três pessoas artistas mais populares no banco com as colunas: artista e seguidores(com a quantidade de pessoas que estão seguind)
CREATE VIEW top_3_artistas AS
SELECT a.nome AS 'artista', COUNT(sa.id_usuario) AS 'seguidores'
FROM SpotifyClone.seguindo_artistas AS sa
INNER JOIN SpotifyClone.artista AS a ON sa.id_artista = a.id
GROUP BY artista
ORDER BY seguidores DESC, artista
LIMIT 3;
