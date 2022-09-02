-- aqui criamos uma view com todos os álbuns produzidos por cada pessoa artista e com as colunas artista, album e seguidores
CREATE VIEW perfil_artistas AS
SELECT art.nome AS 'artista', alb.nome AS 'album', COUNT(sa.id_usuario) AS 'seguidores'
FROM SpotifyClone.seguindo_artistas AS sa
INNER JOIN SpotifyClone.artista AS art ON sa.id_artista = art.id
INNER JOIN SpotifyClone.album AS alb ON alb.id_artista = art.id
GROUP BY artista, album
ORDER BY seguidores DESC, artista, album;
