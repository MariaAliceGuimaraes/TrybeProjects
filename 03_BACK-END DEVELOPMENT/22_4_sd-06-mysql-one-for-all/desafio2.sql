-- aqui criamos uma view que exibe as colunas: cancoes, artistas e albuns (com a quantidade de cada)
CREATE VIEW estatisticas_musicais AS
SELECT
COUNT(DISTINCT(can.nome)) AS 'cancoes',
COUNT(DISTINCT(art.nome)) AS 'artistas',
COUNT(DISTINCT(alb.nome)) AS 'albuns'
FROM SpotifyClone.cancoes AS can, SpotifyClone.artista AS art, SpotifyClone.album AS alb;
